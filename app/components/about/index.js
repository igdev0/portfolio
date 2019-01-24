import React, {Component} from 'react';
import user from './images/user.png';
import {Panel, PanelGroup} from 'react-bootstrap';
import './style.less';

function hexToRgbA(hex, opacity){
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+', ' + opacity + ')';
    }
    throw new Error('Bad Hex');
}

class About extends Component {
	
	constructor(props) {
		super(props);

		this.state = {
			selected_skill: 0,
			selected_school: 0,
			active_key: "0"
		}

		this.calcExperience = this.calcExperience.bind(this);
		this.togglePanel = this.togglePanel.bind(this);
		this.LightenDarkenColor = this.LightenDarkenColor.bind(this);
	}

	togglePanel(key) {
		this.setState({
			active_key: key
		})
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

	    return `${year} year(s), ${month} month(s), ${day} day(s)`;
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
			   
			   <div className="about__main__skills-all">
			    {
			    	this.props.profile.skills.map((skill, key) => {
			    		return (
			    			<div className="skill" key={key} onClick={() => {this.setState({selected_skill: key})}}>
			    			 <div className="skill-level" style={{width: skill.level + '%', background: key === this.state.selected_skill ? skill.color : hexToRgbA(skill.color, 0.5)}}>
			    			  <div className="skill-icon">
			    			   <img src={`${window.location.origin}/${skill.icon.path}`}/>
			    			  </div>
			    			 </div>
			    			</div>
			    		)
			    	})
			    }		    
			   </div>
			   <div className="about__main__skills-skill">
			   	<div className="about__main__skills__skill-header">
			   	  <div className="img-wrapper">
			   	   <img src={`${window.location.origin}/${this.props.profile.skills[this.state.selected_skill].icon.path}`}/>
			   	  </div>
			   	  <div className="about__main__skills__skill__header-details">
			   	   <p>Experience:
			   	   <span>{this.calcExperience(this.props.profile.skills[this.state.selected_skill].experience)}</span>
			   	  </p>
			   	  <p><span>{this.props.profile.skills[this.state.selected_skill].name} </span></p>
			   	  </div>
			   	</div>
			   	<div className="about__main__skills__skill-description">
			   	 <p>{this.props.profile.skills[this.state.selected_skill].description}</p>
			   	</div>
			   </div>
			  </div>
			 </section>
			 <section className="about__main-education">
			  <h1>Education</h1>
			  
			  <PanelGroup id="accordion-controlled-example" accordion defaultActiveKey="2"  onSelect={this.togglePanel}>
			   {
			   	this.props.profile.education.map((s, key) => {

			   		return (
			   			<Panel eventKey={key} key={key}>
			   			 <Panel.Heading>
			   			 	<Panel.Title toggle><img src={`${window.location.origin}/${s.logo.path}`} style={{height: '100%', width: '100px'}}/><h4 style={{marginLeft:"20px", display: "inline"}}>{this.calcExperience(s.experience)}</h4></Panel.Title>
			   			 </Panel.Heading>
			   			 <Panel.Body collapsible>{s.description}</Panel.Body>
			   			</Panel>
			   		)
			   	})
			   }
			  </PanelGroup>
			 </section>
			</main>
		)
	}
}

export default About;