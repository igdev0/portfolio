import React from 'react';
import {NavLink} from 'react-router-dom';
import './header.less';

const Header = (props) => {

	return (
		<header className="dashboard__header">
		 <nav className="dashboard__header-header-nav">
		  <ul className="dashboard__header-header-nav-links">
		  	<li><NavLink to="/home">Home</NavLink></li>
		  	<li><NavLink to="#">Portfolio</NavLink></li>
		  	<li><NavLink to="#">About me</NavLink></li>
		  </ul>
		 </nav>
		</header>
	)
}

export default Header;