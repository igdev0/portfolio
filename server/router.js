import React from 'react';
import ReactDOMServer from 'react-dom/server'
import {createStore} from 'redux';

import rootReducer from '../app/reducers';
import routes from '../app/routes';

import {Provider} from 'react-redux';
import {StaticRouter, Route} from 'react-router-dom';
import {matchPath} from 'react-router-dom';

import App from '../app/components/appComponent';

const renderHtml = (html, content, INIT_DATA) => {

	return `
	 <!DOCTYPE html>
	 <html>
		<head>
			<title>${content}</title>
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<link rel="shortcut icon" href="data:image/x-icon;," type="image/x-icon">
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.5.6/cropper.css"/>
			<link href="https://fonts.googleapis.com/css?family=Montserrat|Open+Sans|PT+Sans" rel="stylesheet">
			<link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
				<link
	  rel="stylesheet"
	  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
	  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
	  crossorigin="anonymous"
	/>
			<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
  			<link type="text/css" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.11.0/styles/atom-one-dark.min.css">
			<link type="text/css" rel="stylesheet" href="/main.css"/>
		</head>
		<body>
		<div id="root">${html}</div>
		<script src="/bundle.js"></script>
		<script>const INIT_DATA = ${JSON.stringify(INIT_DATA)};</script>
		</body>
	 </html>
	`
};

const serverRenderer = () => {
	return (req, res, next) => {
		const ActiveRoute = routes.find((route) => matchPath(req.url, route));
		const store = createStore(rootReducer, {});
		const content = `Dorultan Ianos - Portfolio`;
		const INIT_DATA = {name: "dorultan Ianos"};
		const html = ReactDOMServer.renderToString(
			<Provider store={store}>
				<StaticRouter location={req.url} context={INIT_DATA}>
					<App>
						{ActiveRoute ? ActiveRoute.component : routes[0].component}
					</App>
				</StaticRouter>
			</Provider>
		);

		res.status(200).send(renderHtml(html, content, INIT_DATA));
	}
}

export default serverRenderer;
