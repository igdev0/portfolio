import Education from '../models/education';
import Profile from '../models/profile';
import Skills from '../models/skills';
import mongoose from 'mongoose';

const educationController = {

	get: (req, res) => {
		const {query} = req;
		Education
		.find(query)
		.populate('logo')
		.populate({
			path: 'skills',
			populate: {
				path: 'icon'
			}
		})
		.exec((err, data) => {
			if(err) {
				return res.status(400).json(err);
			}

			res.status(200).json(data);
		})
	},

	create: (req, res) => {
		const body = req.body;
	
		Education
		.findOneAndUpdate({_id:mongoose.Types.ObjectId()}, {
			name: body.name,
			description: body.description,
			logo: body.logo,
			skills: body.skills || [],
			experience: body.experience
		}, {
		    new: true,
		    upsert: true,
		    runValidators: true,
		    setDefaultsOnInsert: true
		})
		.populate('logo')
		.exec((err, data) => {
			if(err) {

				return res.status(400).json(err);
			}

			Profile.findOneAndUpdate({
				name: 'defaultProfile'
			}, 
			{
				$push: {education: data._id}
			},
			{
				safe: true, 
				upsert: true, 
				new: true
			})
			.exec((profile_error, profile_data) => {

				if(profile_error) {

					return res.status(400).json({message: 'Is a profile update error', error: profile_error});
				}

				res.status(200).json(data);
			})
			
		})
	},

	update: (req, res) => {
		const body = req.body;
		const types = {
			ADD_SKILLS: 'ADD_SKILLS',
			REMOVE_SKILLS: 'REMOVE_SKILLS'
		}
		switch(body.type) {

			case types.ADD_SKILLS: 

				Education
				.findByIdAndUpdate(body.id, {
					$push: {skills: body.updates.skills}
				}, 
				{new: true})
				.populate('logo')
				.populate({
					path: 'skills',
					populate: {
						path: 'icon'
					}
				})

				.exec((err, data) => {

					if(err) {
						console.log('The school is not updated')
						return res.status(400).json(err);
					}

					Skills
					.updateMany({_id: {$in: body.updates.skills}}, {
						$push: {school: body.id}
					})

					.exec((update_error, update_data) => {
						if(update_error) {
							console.log('The Skills are not updated')
							return res.status(400).json(update_error);
						}
						console.log('The Skills are updated.')
						return res.status(200).json(data);
					})
				})
				break;

			case types.REMOVE_SKILLS:
				Education
				.findByIdAndUpdate(body.id, {
					$pull: {skills: {$in: body.updates}}
				}, {new: true})
				.populate('logo')
				.populate({
					path: 'skills',
					populate: {
						path: 'icon'
					}
				})
				.exec((err, data) => {

					if(err) {
						return res.status(400).json(err);
					}

					Skills
					.findByIdAndUpdate({_id: body.updates}, {
						$pull: {school: body.id}
					}, {new: true})

					.exec((update_error, update_data) => {
						if(update_error) {
							return res.status(400).json(update_error);
						}

						return res.status(200).json(data);
					})
				})
				break;

			default:

				Education
				.findByIdAndUpdate(body.id, body.updates, {new: true})
				.populate('logo')
				.populate({
					path: 'skills',
					populate: {
						path: 'icon'
					}
				})
				.exec((err, data) => {

					if(err) {
						return res.status(400).json(err);
					}

					res.status(200).json(data);
				})
		}
	},

	delete: (req, res) => {
		const {query: {id}} = req;

		Education

		.findByIdAndDelete(id)

		.exec((err, data) => {

			if(err) {

				return res.status(400).json(err);
			}

			Profile
			.findOneAndUpdate({
				name: 'defaultProfile'
			}, 
			{
				$pull: {education: {$in: [id]}}
			},
			{
				new: true,
				upsert: true,
				safe: true
			})

			.exec((profile_error, profile_data) => {

				if(profile_error) {

					res.status(400).json(profile_error);
				}

				res.status(200).json(data);
			})
		})
	}
}

export default educationController;