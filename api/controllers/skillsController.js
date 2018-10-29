import Skills from '../models/skills';
import Profile from '../models/profile';

const skillsController = {

	get: (req, res) => {
		const {params: {query}} = req;

		Skills.find(query)

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
		Skills.create({
			name: body.name,
			level: body.level,
			icon: body.icon,
			experience: body.experience,
			school: body.school

		}, function(err, data) {

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
		.findByIdAndUpdate(skill_id, req.body, {new: true})

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

		.exec(function(err, data) {

			if(err) {
				return res.status(400).json(err);
			}

			Profile.findOneAndUpdate({
				name: 'defaultProfile'
			}, 
			{
				$pull: {skills: {$in: id}}
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
	}
}

export default skillsController;