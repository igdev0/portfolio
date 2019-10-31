import React from 'react';
import {NavLink} from 'react-router-dom';
import user from '../images/user.png';
import Breadcrumbs from './breadCrumbsComponent';
import './headerDashboardComponent.less';

const Header = (props) => {
	return (
		<header className="dashboard__header">
		 <nav className="dashboard__header-nav">
		   <Breadcrumbs {...props}/>
		   <div className="dashboard__header__nav-user">
				 <button type="button" onClick={() => props.logout()}></button>
		   </div>
		 </nav>
		</header>
	)
}

export default Header;
