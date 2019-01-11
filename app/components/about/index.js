import React, {Component} from 'react';
import user from './images/user.png';
import './style.less';

class About extends Component {
	
	constructor(props) {
		super(props);

		this.state = {
			selected_skill: 0,
			selected_school: 0
		}

		this.calcExperience = this.calcExperience.bind(this);
	
		this.LightenDarkenColor = this.LightenDarkenColor.bind(this);
	}

	transformMs(milliseconds) {
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

	    return {
	    	day,
	    	month,
	    	year
	    };
	}

	LightenDarkenColor(col, amt) {
  
	    var usePound = false;
	  
	    if (col[0] == "#") {
	        col = col.slice(1);
	        usePound = true;
	    }
	 
	    var num = parseInt(col,16);
	 
	    var r = (num >> 16) + amt;
	 
	    if (r > 255) r = 255;
	    else if  (r < 0) r = 0;
	 
	    var b = ((num >> 8) & 0x00FF) + amt;
	 
	    if (b > 255) b = 255;
	    else if  (b < 0) b = 0;
	 
	    var g = (num & 0x0000FF) + amt;
	 
	    if (g > 255) g = 255;
	    else if (g < 0) g = 0;
	 
	    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
	  
	}

	calcExperience(experience) {
		const experience_from = new Date(experience.from).getTime(); //returns date in ms
		const experience_to = new Date(experience.to); // returns date in ms
	
		return this.transformMs(experience_to - experience_from);
	}

	render() {

		return (
			<main className="about__main">
			 <section className="about__main-bio">
			  <h1>Bio</h1>
			  <div className="about__main__bio">
			    <p>{this.props.profile.introduction}</p>
			  </div>
			 </section>
			 <section className="about__main-skills">
			  <h1>Skills</h1>
			  <div className="about__main__skills">
			   <div className="about__main__skills-skill">
			   	<div className="about__main__skills__skill-header">
			   	  <div className="img-wrapper">
			   	   <img src={`${window.location.origin}/${this.props.profile.skills[this.state.selected_skill].icon.path}`}/>
			   	  </div>
			   	  <div className="about__main__skills__skill__header-details">
			   	   <p>Experience:
			   	   <span>{this.calcExperience(this.props.profile.skills[this.state.selected_skill].experience).year} years,
			   	   {this.calcExperience(this.props.profile.skills[this.state.selected_skill].experience).month} months,
			   	   {this.calcExperience(this.props.profile.skills[this.state.selected_skill].experience).day} days</span>
			   	  </p>
			   	  <p>Name: <span>{this.props.profile.skills[this.state.selected_skill].name} </span></p>
			   	  </div>
			   	</div>
			   	<div className="about__main__skills__skill-description">
			   	 <p>{this.props.profile.skills[this.state.selected_skill].description}</p>
			   	</div>
			   </div>
			   <div className="about__main__skills-all">
			    {
			    	this.props.profile.skills.map((skill, key) => {
			    		return (
			    			<div className="skill" key={key} onClick={() => {this.setState({selected_skill: key})}}>
			    			 <div className="skill-level" style={{width: skill.level + '%', background: skill.color}}>
			    			  <div className="skill-icon">
			    			   <img src={`${window.location.origin}/${skill.icon.path}`}/>
			    			  </div>
			    			 </div>
			    			</div>
			    		)
			    	})
			    }		    
			   </div>
			  </div>
			 </section>
			 <section className="about__main-education">
			  <h1>Education</h1>
			  
			  <div className="about__main__education">
			   {
			  	this.props.profile.education.map(({name, logo, description, experience, color}, key) => {

			  		return (
			  			<div key={key} className="about__main__education-card">
			  			  <div className="about__main__education__card-details">
			  			   <span>Name: {name}</span>
			  			   <span><i className="fas fa-hourglass-start"></i> Started on: {new Date(experience.from).toLocaleDateString()}</span>
			  			   <span><i className="fas fa-hourglass-end"></i> Ended on: {new Date(experience.to).toLocaleDateString()}</span>
			  			   <span><i className="far fa-clock"></i> Total time: {this.calcExperience(experience).year} year(s) {this.calcExperience(experience).month} month(s)</span>
			  			  </div>
			  			  <div className="about__main__education__card-img">
			  			   <img src={`${window.location.origin}/${logo.path}`}/>
			  			  </div>
			  			  <div className="about__main__education__card-description">
			  			   <p>{description}</p>
			  			  </div>
			  			</div>
			  		)
			  	})
			   }
			  </div>
			 </section>
			</main>
		)
	}
}

export default About;