import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import './profileOverview.less';

const calcExperience = (milliseconds) => {
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
 
const chart_options = {
	responsive: false,
	maintainAspectRatio: false,
	options: {
		animation: {
			animateScale: true,
			animateRotate: true
		}
	}
}

const ProfileOverview = (props) => {
	const experience = calcExperience(props.overview[2].skills_overview[0].total_experience_ms)
	return (
		<main className="dashboard__overview">
		 <div className="flex-row">
		  <div className="flex-col count">
		    <h2>Total posts: <span>{props.overview[0].blog_posts_overview[0].count}</span></h2>
		  </div>
		  <div className="flex-col count">
		    <h2>Total projects: <span>{props.overview[1].projects_overview[0].count}</span></h2>
		  </div>
		  <div className="flex-col count">
		    <h2>Total skills: <span>{props.overview[2].skills_overview[0].count}</span></h2>
		  </div>
		  <div className="flex-col count">
		    <h2>Total courses: <span>{props.overview[3].education_overview[0].count}</span></h2>
		  </div>
		 </div>
		 <div className="total_experience">
		  <h1>Total experience: <span>{calcExperience(props.overview[2].skills_overview[0].total_experience_in_ms).year} Years, {calcExperience(props.overview[2].skills_overview[0].total_experience_in_ms).month} months</span></h1>
		 </div>
		 <div className="flex-row">
		  <div className="flex-col chart">
		   <Doughnut data={props.overview[2].skills_overview[0].chart_config} height={450} options={chart_options}/>
		  </div>
		  <div className="flex-col chart">
		   <Doughnut data={props.overview[1].projects_overview[0].chart_config} height={450} options={chart_options}/>
		  </div>
		 </div>
		</main>
	)
}

export default ProfileOverview;