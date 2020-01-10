import React from 'react';
import Aside from './asideComponent';
import {Route, Router} from 'react-router-dom';

const Client = (props) => {
	return (

		<main className="app_main">
			 <section className="app_main__section">
				{
					this.props.routes.map(({path, exact, component}, key) =>  {
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
