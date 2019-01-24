import React from 'react';
import './style.less';
import queryString from 'query-string';
import {Link} from 'react-router-dom';

// This function takes as parameter ms and transforms in
// y/m/d 

const transformMs = (milliseconds) => {
	let seconds, days, hours, minutes, months;

	let sec = 0; let min = 0;
	let hour = 0; let day = 0;
	let year = 0; let month = 0;
	const one_year_in_ms = 1000 * 60 * 60 * 24 * 365;
	const one_month_in_ms = 1000 * 60 * 60 * 24 * 30;
	const one_day_in_ms = 1000 * 60 * 60 * 24;
	const one_hour_in_ms = 1000 * 60 * 60;

	if(milliseconds / one_year_in_ms >=1) {
		year = Math.floor(milliseconds / one_year_in_ms);
		milliseconds -= one_year_in_ms * year;
	}

	if(milliseconds / one_month_in_ms >=1) {
		month = Math.floor(milliseconds / one_month_in_ms);
		milliseconds -= one_month_in_ms * month;
	}

	if(milliseconds / one_day_in_ms >=1 ) {
		day = Math.floor(milliseconds / one_day_in_ms);
		milliseconds -= one_day_in_ms * day;
	}

    return `${year} year(s), ${month} month(s), ${day} day(s)`;
}

// This function takes two dates
// and calculates the experience in ms,
// then it transforms ms in y/m/d

const calcExperience = (started_at, finished_at) => {
	const _finished_at = new Date(finished_at).getTime();
	const _started_at = new Date(started_at).getTime();

	return transformMs(_finished_at - _started_at);
}

const ProjectView = ({
	project: {_id, title, description, link, finished_at, started_at, images: {hero: {path, alt}}, skills},
	location,
	projects,
	fetchNextProject,
	fetchPreviousProject
	
	}) => {
	return (
		<main className="main__project_view">
		 <header className="main__project_view-header">
		  <div className="main__project_view__header-hero">
		   <img src={`${window.location.origin}/${path}`} alt={alt}/>
		  </div>
		  <div className="main__project_view__header-details">
		   <div className="main__project_view__header__details-title">
		    <a href={link}><i className="fas fa-link"></i><h3>{title}</h3></a>
		   </div>
		   <div className="main__project_view__header__details-description">
		    <p>{description}</p>
		   </div>
		   <div className="main__project_view__header__details-time">
		    <div className="title"><i className="far fa-clock"></i>Time spent.</div>
		    <span>{calcExperience(started_at, finished_at)}</span>
		   </div>
		   <div className="main__project_view__header__details-skills">
		    <div className="title">
		     <i className="fas fa-memory"></i><h4>Technologies used.</h4>
		    </div>
		     <div className="main__project_view__header__details__skills">
		     {
		    	skills.map(({name, color}, key) => {

		    		return (
		    			<span key={key} style={{backgroundColor: color}} className="skill-tag">{name}</span>
		    		)
		    	})
		     }
		    </div>
		   </div>
		  </div>
		 </header>
		 <section className="main__project_view-buttons">
		  <Link to={`/portfolio/${_id}`} onClick={() => {fetchPreviousProject(_id)}}><i className="fas fa-arrow-left"></i></Link>
		  <Link to={`/portfolio/${_id}`} onClick={() => {fetchNextProject(_id)}}><i className="fas fa-arrow-right"></i></Link>
		 </section>
		</main>
	)
}

export default ProjectView;