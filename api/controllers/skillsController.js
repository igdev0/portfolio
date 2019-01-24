import Skills from '../models/skills';
import Profile from '../models/profile';
import Education from '../models/education';
import Projects from '../models/projects';
import mongoose from 'mongoose';

const skillsController = {

	get: (req, res) => {
		// const {params: {query}} = req;

		Skills.find()
		.populate('icon')
		.populate('school')
		.exec(function(err, data) {
			if(err) {
				return res.status(400).json(err);
			}
			else {
				res.status(200).json(data);
			}
		})
	},

	create: (req, res) => {
		const {body} = req;
		Skills
		.findOneAndUpdate({_id:mongoose.Types.ObjectId()}, {
			name: body.name,
			description: body.description,
			level: body.level,
			icon: body.icon,
			experience: body.experience,
			color: body.color

		}, {
		    new: true,
		    upsert: true,
		    runValidators: true,
		    setDefaultsOnInsert: true
		})
		.populate('icon')
		.populate({
			path: 'school',
			select: 'name'
		})
		.exec(function(err, data) {

			if(err) {
				return res.status(400).json(err);
			}

			Profile.findOneAndUpdate({
				name: 'defaultProfile'
			}, 
			{
				$push: {skills: data._id}
			},
			{
				new: true,
				upsert: true,
				safe: true
			})

			.exec((profile_error, profile_data) => {

				if(profile_error) {

					return res.status(400).json({message: 'Profile update error', error: profile_error})
				}

				res.status(200).json(data);
			})
		})
	},

	update: (req, res) => {
		const skill_id = req.body.id;
		Skills
		.findByIdAndUpdate(skill_id, req.body.update, {new: true})
		.populate('icon')
		.populate({
			path: 'school',
			select: 'name'
		})
		.exec(function(err, data) {

			if(err) {
				return res.status(400).json(err);
			}

			res.status(200).json(data);
		})

 	},

	delete: (req, res) => {
		const {query: {id}} = req;

		Skills
		.findByIdAndDelete(id)

		.populate('icon')
		.populate('school')

		.exec(function(err, data) {

			if(err) {
				return res.status(400).json(err);
			}

			Profile.findOneAndUpdate({
				name: 'defaultProfile'
			}, 
			{
				$pull: {skills: id}
			},
			{
				new: true
			})

			.exec((profile_error, profile_data) => {

				if(profile_error) {

					return res.status(400).json({message: 'Profile update error', error: profile_error})
				}

				if(data.school.length > 0) {
					Education
					.updateMany({_id: {$in: data.school}}, 
					{
						$pull: {skills: id}
					},
					{
						new: true
					})
					.exec((education_error, education_data) => {

						if(education_error) {

							return res.status(400).json(education_error);
						}
				
						if(data.projects.length > 0) {

							Projects

							.updateMany({_id: {$in: data.projects}}, 
							{
								$pull: {skills: id}
							},
							{
								new: true
							})

							.exec((projects_error, projects_data) => {

								if(projects_error) {

									return res.status(400).json({message: "The projects couldn't be updated."})
								}

								return res.status(200).json(data);

							})
						}
						else {
							return res.status(200).json(data);
						}
						
					})
				}

				else {

					return res.status(200).json(data);
				}
			})
		
		})
	}
}

export default skillsController;