import React from 'react';
import routes from './routes';

import {Route, Switch} from 'react-router-dom';
import "./blog.less";

const Blog = (props) => {

	return (
		<main className="blog-main">
		 <Switch>
			  {
			 	routes.map(({path, component, exact}, key) => {
			 		return (
			 			<Route path={path} key={key} exact={exact} component={component}/>
			 		)
			 	})
			 }
		 </Switch>
		</main>
	)
}

export default Blog;