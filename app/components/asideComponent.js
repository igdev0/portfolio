import React, {Component} from 'react';
import { CSSTransition } from 'react-transition-group';
import {Link} from 'react-router-dom';
import user from '../images/user.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import {connect} from 'react-redux';
import {getUser} from '../actions';
import LoadingComponent from './loadingComponent';
import {bindActionCreators} from 'redux';
import './asideComponent.less';

class Aside extends Component {

	constructor(props) {
		super(props);

		this.state = {
			sidebar: false
		}

		this.toggleSidebar = this.toggleSidebar.bind(this);

	}

	toggleSidebar() {

		this.setState(prevState => ({
			sidebar: !prevState.sidebar
		}))
	}

	componentDidMount() {
		this.props.getUser();
	}

	render() {
		if(this.props.user) {
			return (

				<aside className={`app_main__sidebar`}>
					<div className="app_main__sidebar-social">
					 <ul>
							<li><a target="_blank" href="https://www.facebook.com/ianosdorultan"><FontAwesomeIcon icon={faFacebook}/></a></li>
							<li><a target="_blank" href="https://www.linkedin.com/in/ianos-dorultan-364235143/"><FontAwesomeIcon icon={faLinkedin}/></a></li>
							<li><a target="_blank" href="https://github.com/dorultan"><FontAwesomeIcon icon={faGithub}/></a></li>
					 </ul>
					</div>
				  <div className="app_main__sidebar-header">
				   <div className="app_main__sidebar__header-img">
				   	<img src={this.props.user.avatar_url}/>
				   </div>
					 <div className="app_main__sidebar__header-content">
						 <h2>Dorultan Ianos</h2>
						 <p>I'm a passionated front end developer, javascript entuziast.</p>
						 <p><FontAwesomeIcon size="lg" icon={faMapMarkerAlt}/>London</p>
		 			  <div className="app_main__sidebar__header__content-social">
		 				 <ul>
								<li><a target="_blank" href="https://www.facebook.com/ianosdorultan"><FontAwesomeIcon size="lg" icon={faFacebook}/></a></li>
								<li><a target="_blank" href="https://www.linkedin.com/in/ianos-dorultan-364235143/"><FontAwesomeIcon size="lg" icon={faLinkedin}/></a></li>
								<li><a target="_blank" href="https://github.com/dorultan"><FontAwesomeIcon size="lg" icon={faGithub}/></a></li>
		  			 </ul>
		 			  </div>
					 </div>
				  </div>
				  <div className={`app_main__sidebar-nav `}>
					 <div className="mobile-toggle-button">
						 <FontAwesomeIcon size="lg" icon={!this.state.sidebar ? faBars : faTimes} onClick={() => {this.setState({sidebar: !this.state.sidebar})}}/>
					 </div>
				   <ul className={`app_main__sidebar__nav ${this.state.sidebar ? 'mobile-active' : ''}`}>
						 <li><Link to="/about">About</Link></li>
						 <li><Link to="/posts">Posts</Link></li>
						 <li><Link to="/projects">Projects</Link></li>
				   </ul>
				  </div>
				</aside>
			)
		}
		else {
			return <LoadingComponent/>
		}
	}
}

const mapStateToProps = ({user}) => {
	return {
		user
	}
}

const bindActionCreatorsToProps = (dispatch) => {

	return bindActionCreators({
		getUser
	}, dispatch)
}

export default connect(mapStateToProps, bindActionCreatorsToProps)(Aside);
