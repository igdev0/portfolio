import Education from '../models/education';
import Profile from '../models/profile';

const educationController = {

	get: (req, res) => {
		const {query} = req;

		Education.find(query)

		.exec((err, data) => {

			if(err) {
				return res.status(400).json(err);
			}

			res.status(200).json(data);
		})
	},

	create: (req, res) => {
		const body = req.body;

		Education.create({
			name: body.name,
			logo: body.logo,
			skills: body.skills,
			experience: body.experience
		}, (err, data) => {

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

		Education
		.findByIdAndUpdate(body.id, body.update, {new: true})
		.exect((err, data) => {

			if(err) {
				return res.status(400).json(err);
			}

			res.status(200).json(data);
		})
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
				education: [id]
			}, {
				$pull: {education: {$in: id}} 
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