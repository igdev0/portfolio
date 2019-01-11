import React,{Component} from 'react';
import Header from './header/header';
import routes from './routes/routes';
import {Route, Router, Link} from 'react-router-dom';
import PrivateRoute from '../privateRoute/privateRoute';

import './dashboard.less';

class Dashboard extends Component {

	constructor(props) {

		super(props)
	}

	render() {
 
		return (
			<main className="dashboard">
			 
			 <section className="dashboard__content">
			  <aside className="dashboard__content-left">
			  	<nav className="dashboard__content-left-aside__nav">
			  	 <ul className="dashboard__content-left-aside__nav-ul">
			  	  {
			  	  	routes.map(({path, component, name, exact}, key) => {
			  	  		if(name) {
			  	  			return (
				  	  			<li key={key} className="dashboard__content-left-aside__nav-ul-li">
				  	  				<Link className={path === this.props.location.pathname ? "active" : ""} to={path}>{name}</Link>
				  	  			</li>
				  	  		)
			  	  		}
			  	  	})
			  	  }
			  	 </ul>
			  	</nav>
			  </aside>
			  <section className="dashboard__content-right">
			    <Header {...this.props}></Header>

			  	 {
			  	 	routes.map(({path, component, exact}, key) => {
			  	 		return (
			  	 			<Route key={key} exact={exact} path={path} component={component}/>
			  	 		)
			  	 	})
			  	 }
			  </section>
			 </section>
			</main>
		)
	}
}

export default PrivateRoute(Dashboard);