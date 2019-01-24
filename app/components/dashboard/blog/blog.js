import React from 'react';
import routes from './routes';

import {Route, Switch} from 'react-router-dom';
import "./blog.less";

const BlogDashboard = (props) => {

	return (
		<main className="blog-main">
		 <Switch>
			  {
			 	routes.map(({path, Component, exact}, key) => {
			 		return (
			 			<Route path={path} key={key} exact={exact} component={Component}/>
			 		)
			 	})
			 }
		 </Switch>
		</main>
	)
}

export default BlogDashboard;