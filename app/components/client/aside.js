import React, {Component} from 'react';
import { CSSTransition } from 'react-transition-group';
import {Link} from 'react-router-dom';
import user from './images/user.png';
import './aside.less';

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

	render() {

		return (
		 
		 <CSSTransition in={this.state.sidebar} timeout={500} classNames={`sidebar-transition-on`}>
		 <aside className={`app_main__sidebar ${this.state.sidebar ? "on" : "off"}`}>
		  <div className="app_main__sidebar-header">
		   <div className="app_main__sidebar__header-logo">
		   	<span className="toggle-button" onClick={this.toggleSidebar}><i className={`fas ${this.state.sidebar ? 'fa-times' : 'fa-bars'} fa-2x`}></i></span>
		   </div>
		   <div className="app_main__sidebar__header-img">
		   	<img src={user}/>
		   </div>
		  </div>
		  <div className="app_main__sidebar-nav">
		   <ul className="app_main__sidebar__nav">
		    <li><Link to="/home"><i className="fas fa-home"></i><CSSTransition in={this.state.sidebar} timeout={100} classNames="linkName" unmountOnExit><span>Home</span></CSSTransition></Link></li>
		    <li><Link to="/profile"><i className="fas fa-user"></i><CSSTransition in={this.state.sidebar} timeout={100} classNames="linkName" unmountOnExit><span>About</span></CSSTransition></Link></li>
		    <li><Link to="/blog"><i className="fab fa-blogger-b"></i><CSSTransition in={this.state.sidebar} timeout={100} classNames="linkName" unmountOnExit><span>Blog</span></CSSTransition></Link></li>
		    <li><Link to="/portfolio"><i className="fas fa-project-diagram"></i><CSSTransition in={this.state.sidebar} timeout={100} classNames="linkName" unmountOnExit><span>Projects</span></CSSTransition></Link></li>
		    <li><Link to="/contact"><i className="fas fa-envelope-square"></i><CSSTransition in={this.state.sidebar} timeout={100} classNames="linkName" unmountOnExit><span>Contact</span></CSSTransition></Link></li>
		   </ul>
		  </div>
		  <div className="app_main__sidebar-social">
		   <ul>
		   	<li><Link to="/"><i className="fab fa-facebook-square"></i></Link></li>
		   	<li><Link to="/"><i className="fab fa-github-square"></i></Link></li>
		   </ul>
		  </div>
		 </aside>
		 </CSSTransition>
		)
	}
}

export default Aside;