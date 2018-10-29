import Projects from '../models/projects';

const projectsController = {

	get: (req, res) => {

		Projects

		.find(req.params.query)

		.exec((err, data) => {

			if(err) {

				return res.status(400).json(err);
			}

			res.status(200).json(data);
		})
	},

	create: (req, res) => {
		const body = req.body;
		Projects

		.create({
			images: body.images,
			title: body.title,
			description: body.description,
			skills: body.skills,
			created_on: body.created_on
		},(err, data) => {

			if(err) {
				return res.status(400).json(err);
			}

			res.status(200).json(data);
		})

		
	},

	update: (req, res) => {
		const body = req.body;
		const project_id = body.id;

		Projects

		.findByIdAndUpdate(project_id, body, {new: true})

		.exec((err, data) => {

			if(err) {

				res.status(400).json(err);
			}

			res.status(200).json(data);
		})
	},

	delete: (req, res) => {
		const body = req.body;
		const project_id = body.id;

		Projects

		.findByIdAndDelete(project_id)

		.exec((err, data) => {

			if(err) {

				res.status(400).json(err);
			}

			res.status(200).json(data);
		})
	}
}

export default projectsController;