import postsController from '../api/controllers/postsController';
import commentsController from '../api/controllers/commentsController';
import filesController from '../api/controllers/filesController';
import authenticationController from '../api/controllers/authenticationController';
import skillsController from '../api/controllers/skillsController';
import projectsController from '../api/controllers/projectsController';
import profileController from '../api/controllers/profileController';
import educationController from '../api/controllers/educationController';
import overviewController from '../api/controllers/overviewController';
import userController from '../api/controllers/userController';
import expressSession from 'express-session';
import expressJwt from 'express-jwt';
import jsonwebtoken from 'jsonwebtoken';
import passport from './passport';
import config from './';

const initApiRoutes = (app) => {
	// app.use('/api/', expressJwt({secret: config.secret}));

	// ==========================================================

	// Routes for posts
	// =================

	app.get('/api/posts', postsController.get);
	app.get('/api/posts/:slug', postsController.getOne);
	app.post('/api/posts', postsController.create);
	app.put('/api/posts', postsController.update);
	app.delete('/api/posts', postsController.delete);
	// ==============================================

	// Routes for comments
	// ====================

	app.post('/api/comments', commentsController.create);
	app.put('/api/comments', commentsController.update);
	app.delete('/api/comments', commentsController.delete);
	app.get('/api/comments', commentsController.get);

	// Files routes
	// ==============
	app.post('/api/files', filesController.create);
	app.delete('/api/files', filesController.delete);
	app.get('/api/files', filesController.get);
	// ========================================

	// Skills routes
	// =============

	app.get('/api/skills', skillsController.get);
	app.post('/api/skills', skillsController.create);
	app.put('/api/skills', skillsController.update);
	app.delete('/api/skills', skillsController.delete);
	// ================================================

	app.get('/api/education', educationController.get);
	app.post('/api/education', educationController.create);
	app.put('/api/education', educationController.update);
	app.delete('/api/education', educationController.delete);
	// ================================================

	// Projects routes
	// =====================

	app.get('/api/projects', projectsController.get);
	app.get('/api/projects/:project_id', projectsController.getOneById, projectsController.getSiblings);
	app.post('/api/projects', projectsController.create);
	app.put('/api/projects', projectsController.update);
	app.delete('/api/projects', projectsController.delete);
	// ===============================================


	// Profile routes
	// =====================

	app.get('/api/profile', profileController.get);
	app.post('/api/profile', profileController.create);
	app.put('/api/profile', profileController.update);
	// ===============================================

	app.get('/api/overview', overviewController);
	// Authentication routes
	// // =====================
	const checkForToken = (req, res, next) => {
		const token = req.headers['authorization'];
		if(token) {
			req.token = token;

			return next();
		}

		res.status(403).json({message: "You must have a token in order to make requests to this endpoint."})
	}

	const verifyToken = (req, res, next) => {
		let token = req.token;

		if(token) {
			token = token.replace('bearer ', '');
			jsonwebtoken.verify(token, config.secret, (err, decoded) => {
				if(err) {

					return res.status(403).json({message: "Invalid token."})
				}
				req.user = decoded.user;
				return next();
			})

		}
	}

	app.get('/user', userController.getUser)
	app.post('/user/auth/login', passport.authenticate('local', {session: false}), authenticationController.login);
	app.post('/user/auth/singup', authenticationController.singup);
	// ============================================================


	app.post('/user/avatar', userController.updateUserAvatar)
	app.put('/user/password', userController.updateUserPassword)
	app.put('/user/username', userController.updateUsername)
	app.put('/user/social', userController.updateUserSocial)
	app.put('/user/email', userController.updateUserEmail)
};

export default initApiRoutes;
