import path from 'path';
import serializeJavascript from 'serialize-javascript';
import passport from '../config/passport';

import bodyParser from 'body-parser';
import busboy from 'connect-busboy';
import busboyBodyParser from 'busboy-body-parser';
import express from 'express';
import initApiRoutes from '../config/apiRoutes';
import initDb from '../config/mongodb';
import serverRenderer from './router';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import config from '../config';
let app = express();

app.set("PORT", process.env.PORT || 8080);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}))

// app.use(session({
// 	secret: config.sessionSecret,
// 	saveUninitialized: true,
// 	resave: true
// }))

app.use(passport.initialize());

// app.use(passport.session());

app.use(express.static(path.resolve(process.cwd(), 'dist')));

initApiRoutes(app);

app.use(serverRenderer());

export default app;
