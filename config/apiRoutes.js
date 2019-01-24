import postsController from '../api/controllers/postsController';
import commentsController from '../api/controllers/commentsController';
import filesController from '../api/controllers/filesController';
import authenticationController from '../api/controllers/authenticationController';
import skillsController from '../api/controllers/skillsController';
import projectsController from '../api/controllers/projectsController';
import profileController from '../api/controllers/profileController';
import educationController from '../api/controllers/educationController';
import overviewController from '../api/controllers/overviewController';
import articleController from '../api/controllers/articleController';
import expressSession from 'express-session';
import expressJwt from 'express-jwt';
import passport from './passport';
import config from './';
import connectFlash from 'connect-flash';

const initApiRoutes = (app) => {
	// app.use('/api/', expressJwt({secret: config.secret}));

	// ==========================================================

	// Routes for posts
	// =================

	app.get('/api/posts', postsController.get);
	// app.get('/api/posts/:post_title', postsController.getOne);
	app.get('/api/posts/:post_id', postsController.getById);
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
	app.get('/api/uploads/:file', filesController.getOne);
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
	// app.use(connectFlash());
	app.post('/user/auth/login', passport.authenticate('local', {session: false}), authenticationController.login);
	app.post('/user/auth/singup', authenticationController.singup);
	// ============================================================

	app.post('/api/article', articleController.create);
	app.get('/api/article', articleController.get);
};

export default initApiRoutes;