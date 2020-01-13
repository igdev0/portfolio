import React from 'react';
import {NavLink} from 'react-router-dom';
import Breadcrumbs from './breadCrumbsComponent';
import {Dropdown} from 'react-bootstrap';
import user from '../images/user.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSortDown} from '@fortawesome/free-solid-svg-icons';
import './headerDashboardComponent.less';
//
// class Customtoggle extends React.Component {
//
// 	constructor(props) {
// 		super(props);
//
// 		this.handleClick = this.handleClick.bind(this);
//
// 	}
//
// 	handleClick(e) {
//
// 		this.props.onClick(e);
// 	}
//
// 	render() {
// 		return (
// 				<FontAwesomeIcon icon={faSortDown} size="lg" onClick={this.handleClick}/>
// 		)
// 	}
// }

const Customtoggle = React.forwardRef((props, ref) => {

	return (
				<FontAwesomeIcon icon={faSortDown} size="lg" onClick={props.onClick}/>
	)
})

const Header = (props) => {
	console.log(props.user)
	if(props.user) {
		return (
			<header className="dashboard__header">
			 <nav className="dashboard__header-nav">
				 <Breadcrumbs {...props}/>
				 <div className="dashboard__header__nav-user">
						 <div className="dashboard__header__nav__user-image">
							 <img src={`${props.user.avatar_url}`} alt="user image."/>
						 </div>
						<Dropdown >
							<Dropdown.Toggle as={Customtoggle}></Dropdown.Toggle>

							<Dropdown.Menu>
									<NavLink className="dropdown-item" to="/dashboard/settings">Settings</NavLink>
									<Dropdown.Item href="#" onClick={() => {props.logout()}}>Log out</Dropdown.Item>
							</Dropdown.Menu>
					</Dropdown>
				 </div>
			 </nav>
			</header>
		)
	}
	else {
		return null;
	}
}

export default Header;
