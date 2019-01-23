import Projects from '../models/projects';
import Skills from '../models/skills';
import mongoose from 'mongoose';

const projectsController = {

	get: (req, res) => {

		Projects

		.find()
		.populate('images.card')
		.populate('images.hero')
		.populate('skills')
		.exec((err, data) => {

			if(err) {

				return res.status(400).json(err);
			}

			res.status(200).json(data);
		})
	},
	getOneById: (req, res) => {
		const {params: {project_id}} = req;
		
		Projects

		.findById(project_id)

		.populate('images.card')
		.populate('images.hero')
		.populate('skills')
		.exec((err, data) => {

			if(err) {

				return res.status(400).json({error: err});
			}

			res.status(200).json(data);
		})
	},
	create: (req, res) => {
		const body = req.body;
		Projects
		.findOneAndUpdate({_id:mongoose.Types.ObjectId()}, {
			images: body.images,
			title: body.title,
			description: body.description,
			skills: body.skills,
			started_at: body.started_at,
			finished_at: body.finished_at,
			link: body.link
		}, {
		    new: true,
		    upsert: true,
		    runValidators: true,
		    setDefaultsOnInsert: true
		})
		.populate('images.card')
		.populate('images.hero')
		.populate('skills')
		.exec((err, data) => {

			if(err) {
				return res.status(400).json(err);
			}

			return res.status(200).json(data);
		})

		
	},

	update: (req, res) => {
		const {id, updates, type} = req.body;
		const types = {
			DELETE_SKILL: "DELETE_SKILL",
			ADD_SKILL: "ADD_SKILL"
		};

		switch(type) {

			case types.ADD_SKILL:

				Projects

				.findByIdAndUpdate(id, {
					$push: {skills: {$in: updates}}
				}, 
				{
					new: true
				})

				.exec((err, data) => {

					if(err) {

						res.status(400).json(err);
					}

					return res.status(200).json(data);
			});

			break;

			case types.DELETE_SKILL:

				Projects

				.findByIdAndUpdate(id, {
					$pull: {skills: updates}
				}, 
				{
					new: true,
					safe: true
				})

				.exec((err, data) => {

					if(err) {

						res.status(400).json(err);
					}

					return res.status(200).json(data);
				})
			break;

			default:

				Projects

				.findByIdAndUpdate(id, updates, {new: true})

				.exec((err, data) => {

					if(err) {

						res.status(400).json(err);
					}

					return res.status(200).json(data);
				})
		}
	},

	delete: (req, res) => {
		const {query: {id}} = req;

		Projects

		.findByIdAndDelete(id)

		.exec((err, data) => {

			if(err) {

				return res.status(400).json(err);
			}

			if(data.skills.length > 0) {

				Skills

				.updateMany({_id: {$in: data.skills}}, 
					{
						$pull: {projects: id}
					},
					{
						new: true,
						safe: true
					}
				)

				.exec((skills_error, skills_data) => {

					if(skills_error) {

						return res.status(400).json({error: skills_error, message: "The skills couldn't be updated"})
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
	}
}

export default projectsController;