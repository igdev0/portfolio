import React from 'react';
import {NavLink} from 'react-router-dom';
import {DropdownButton, MenuItem} from 'react-bootstrap';
import user from './images/user.png';
import Breadcrumbs from '../../breadcrumbs';
import './header.less';

const Header = (props) => {
	return (
		<header className="dashboard__header">
		 <nav className="dashboard__header-nav">
		   <Breadcrumbs {...props}/>
		   <div className="dashboard__header__nav-user">
		  	<div className="dashboard__header__nav__user-image">
		  	 <img className="user__image" src={user} alt="profile image"/>
		  	</div>
		  	<div className="dashboard__header__nav-user__settings">
		  	 <DropdownButton title="" bsStyle="primary" bsSize="xsmall" pullRight id={0}>

		  	  <MenuItem>Profile</MenuItem>
		  	  <MenuItem href="/user/settings">Settings</MenuItem>
		  	  <MenuItem></MenuItem>
		  	  <MenuItem onClick={() => props.logout()}>Log out</MenuItem>
		  	 </DropdownButton>
		  	</div>
		   </div>
		 </nav>
		</header>
	)
}

export default Header;