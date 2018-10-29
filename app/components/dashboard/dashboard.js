import React,{Component} from 'react';
import Header from './header/header';
import routes from './routes/routes';
import {Route, Router, Link} from 'react-router-dom';
import PrivateRoute from '../privateRoute/privateRoute';
import {DropdownButton, MenuItem} from 'react-bootstrap';
import user from './images/user.png';
import Breadcrumbs from '../breadcrumbs';

import './dashboard.less';

class Dashboard extends Component {

	constructor(props) {

		super(props)
	}

	render() {
 
		return (
			<main className="dashboard">
			 <Header></Header>
			 <section className="dashboard__content">
			  <aside className="dashboard__content-left">
			   <div className="dashboard__content-nav-user">
			  	<div className="dashboard__content-nav-user__image">
			  	 <img src={user} alt="profile image"/>
			  	</div>
			  	<div className="dashboard__content-nav-user_settings">
			  	 <DropdownButton title="Change" id={0}>

			  	  <MenuItem>Profile</MenuItem>
			  	  <MenuItem href="/user/settings">Settings</MenuItem>
			  	  <MenuItem></MenuItem>
			  	  <MenuItem>Log out</MenuItem>
			  	 </DropdownButton>
			  	</div>
			   </div>
			  	<nav className="dashboard__content-left-aside__nav">
			  	 <ul className="dashboard__content-left-aside__nav-ul">
			  	  {
			  	  	routes.map(({path, component, name, exact}, key) => {

			  	  		return (
			  	  			<li key={key} className="dashboard__content-left-aside__nav-ul-li"><Link to={path}>{name}</Link></li>
			  	  		)
			  	  	})
			  	  }
			  	 </ul>
			  	</nav>
			  </aside>
			  <section className="dashboard__content-right">
			  	<Breadcrumbs {...this.props}/>

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