import User from '../models/user';
import passport from '../../config/passport';
import jsonwebtoken from 'jwt-simple';
import config from '../../config';

console.log('something')
const generateToken = (user) => {
	const timestamp = new Date().getTime();
	delete user.password;
	const token = jsonwebtoken.encode({
		sub: user.id,
		user,
		iat: timestamp,
	}, config.secret);

	return token;
}

const authenticationController = {

	login: (req, res) => {
		if(req.user) {
			let user = {
				_id: req.user._id,
				username: req.user.username,
				avatar_url: req.user.avatar_url,
				github_url: req.user.github_url,
				facebook_url: req.user.facebook_url,
				linkedin_url: req.user.linkedin_url,
				email: req.user.email,
				updatedAt: req.user.updatedAt,
				createdAt: req.user.createdAt
			}

	    return res.status(200).json({token: generateToken(user)});
		}
		res.status(403).json({message: 'The password is incorect'});
	},
	resetPassword: (req, res) => {

	},

	singup: (req, res) => {

		User.findOne({
			username: req.body.username
		})

		.exec((err, user) => {

			if(err) {
				return res.status(400).json(err);
			}

			if(user) {
				return res.status(403).json({message: 'The username is in use.'});
			}

			if(!user) {

				new User({
					username: req.body.username,
					password: req.body.password,
					avatar_url: req.body.avatar_url,
					facebook_url: req.body.facebook_url,
					linkedin_url: req.body.linkedin_url,
					github_url: req.body.github_url,
					email: req.body.email
				})
				.save((err, data) => {
					let user = {
						_id: data._id,
						username: data.username,
						avatar_url: data.avatar_url,
						github_url: data.github_url,
						facebook_url: data.facebook_url,
						linkedin_url: data.linkedin_url,
						email: data.email,
						updatedAt: data.updatedAt,
						createdAt: data.createdAt
					}
					if(err) {return res.status(403).json(err)}
		      res.status(200).json({token: generateToken(user)});
				})
			}
		})
	},

	logout: (req, res, next) => {

	}
};

export default authenticationController;
