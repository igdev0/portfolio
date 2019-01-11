import React from 'react';
import Aside from './aside';
import routes from './routes';
import {Route, Router} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import './client.less';

const Client = () => {

	return (

		<main className="app_main">
		 <Aside/>
		   <section className="app_main__section">
			  {
			   	routes.map(({path, exact, component}, key) =>  {
			   		return (
			   			<Route key={key} exact={exact} path={path} component={component}/>
			   		)
			   	})
			   }
			</section>
		</main>
	)
}

export default Client;