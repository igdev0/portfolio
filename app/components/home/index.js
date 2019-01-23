import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import banner from './images/banner.png';
import responsiveDesign from './images/responsive-design.png';
import mobileApp from './images/mobile-website.png';
import tabletApp from './images/tablet-website.png';

import projectsIcon from './images/projects-icon.svg';
import blogPostsIcon from './images/blog-posts-icon.svg';
import profileIcon from './images/profile-icon.svg';
import headerImg from './images/header-img.png';

import './home.less';


class Home extends Component {
	constructor(props) {
		super(props);
	}

	render() {

		return (
			<main className="home__main">
			 <header className="app_main__section-header">
			   <div className="app_main__section__header-intro">
			   	<div className="app_main__section__header__intro-title">
			     <h1>I'm a junior front end developer based in london.</h1>
			    </div>
			    <div className="app_main__section__header__intro-bio">
			   	 <p>Nunc massa eros, vestibulum nec magna quis, ultricies pulvinar ante. Nunc massa eros, vestibulum nec magna quis, ultricies pulvinar ante. <Link to="/">read more</Link> </p>
			    </div>
			    <div className="app_main__section__header__intro-image">
			     <img src={headerImg}/>
			    </div>
			   </div>
			  </header>
			  <section className="app_main__section-links">
			  	<div className="app_main__section__links-link view-projects">
			  	 <div className="app_main__section__links__link-img">
			  	  <img src={projectsIcon}/>
			      <Link to="/portfolio" className="img-wrapper">
				   <i className="fas fa-search-plus fa-2x"></i>
			      </Link>
			  	 </div>
			  	 <div className="app_main__section__links__link-button">
			  	  <Link to="/projects">View projects</Link>
			  	 </div>
			  	</div>
			  	<div className="app_main__section__links-link view-posts">
			  	 <div className="app_main__section__links__link-img">
			  	  <img src={blogPostsIcon}/>
			      <Link to="/blog" className="img-wrapper">
				   <i className="fas fa-search-plus fa-2x"></i>
			      </Link>
			  	 </div>
			  	 <div className="app_main__section__links__link-button">
			  	  <Link to="/blog">View posts</Link>
			  	 </div>
			  	</div>
			  	<div className="app_main__section__links-link view-profile">
			  	 <div className="app_main__section__links__link-img">
			  	  <img src={profileIcon}/>
			      <Link to="/profile" className="img-wrapper">
				   <i className="fas fa-search-plus fa-2x"></i>
			      </Link>
			  	 </div>
			  	 <div className="app_main__section__links__link-button">
			  	  <Link to="/profile">View profile</Link>
			  	 </div>
			  	</div>
			  </section>	
			</main>
		)
	}
}

export default Home; 

			   