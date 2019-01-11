import User from '../models/user';
import passport from '../../config/passport';
import jsonwebtoken from 'jwt-simple';
import config from '../../config';

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
			return res.status(200).json({token: generateToken(req.user)});
		}
		res.status(403).json({message: 'The password is incorect'});
	},

	singup: (req, res) => {

		User.findOne({
			username: req.body.username
		})

		.exec((err, user) => {

			if(err) {
				console.log(err);
				return res.status(400).json(err);
			}

			if(user) {
				return res.status(403).json({message: 'The username is in use.'});
			}

			if(!user) {

				new User({
					username: req.body.username,
					password: req.body.password,
					githubId: req.body.githubId,
					avatar_url: req.body.avatar_url,
					email: req.body.email
				})

				.save((err, data) => {
					if(err) {return res.status(403).json(err)}
					delete data.password;
					res.status(200).json({token: generateToken(data), message: 'Authentication successfull'});
				})
			}
		})
	},

	logout: (req, res, next) => {

	}
};

export default authenticationController;