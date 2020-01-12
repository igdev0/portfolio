import React, {Component} from 'react';
import './aboutComponent.less';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLaptopCode, faUserCircle, faTrophy, faNetworkWired} from '@fortawesome/free-solid-svg-icons';

class About extends Component {

	constructor(props) {
		super(props);

		this.state = {
			selected_skill: 0,
			selected_school: 0,
			active_key: "0"
		}
	}

	render() {

		return (
			<main className="about__main">
			 <section className="about__main-bio">
        <div className="icon-left"><FontAwesomeIcon icon={faUserCircle}/></div>
			  <div className="about__main__bio">
          <h3>About me.</h3>
			    <p>{this.props.profile.introduction}</p>
			  </div>
			 </section>
			 <section className="about__main-skills">
        <div className="icon-left"><FontAwesomeIcon icon={faLaptopCode}/></div>
			  <div className="about__main__skills">
			    <h3>Skills.</h3>
          <div className="skills">
						{
	            this.props.profile.skills.map((skill, key) => {
	              return <span className="skill" key={key} style={{background: skill.color}}>{skill.name}</span>
	            })
	          }
					</div>
			  </div>
			 </section>
       <section className="about__main-achievements">
         <div className="icon-left">
           <FontAwesomeIcon icon={faTrophy}/>
         </div>
         <div className="about__main__achievements">
           <div className="about__main-achievement">
             <h3>Accomplishments.</h3>
             <h5>Developed an open-source and free project and deployed on npm.</h5>
             <p>I developed a ui/ux widget (a carousel) using javascript (es2015+), and deployed on npm. This is one of my biggest accomplishments,
							 it took a lot of work to meet the features that i establish:
						 </p>
						 <ol>
							 <li>It should be responsive</li>
							 <li>It should be able to swipe/drag</li>
							 <li>It should have auto control</li>
							 <li>It should have left/right controls</li>
							 <li>It should have a clickable pager</li>
							 <li>It should be able to go in infine loop</li>
						 </ol>
						 <p>But it was all worthy, all those features are optional, so the widget is configurable. </p>
             <ul>
               <li>Javascript (es2015+)</li>
               <li>Npm</li>
               <li>webpack</li>
             </ul>
						 <p>Do you want to know the process, or what challenges i meet ? contact me <a href="tel:07305428777">phone</a>/<a href="mailto:dorultanianos@gmail.com">email</a></p>
           </div>

           <div className="about__main-achievement">
             <h5>Designed and developed a full-stack web app.</h5>
             <p>I've created a full stack web app with a content management system (dashboard) for a client. It was quiet challenging to fully complete project features and layout as the project was changing weekly. Most of the challenges were:</p>
						 <h6>Storing files.</h6>
						 <p>Not knowing that heroku's filesystem is ephemeral, i've used the node filesystem to create/delete files. So basicaly all files stored on heroku at the runtime it was deleted after a dyno restart. This caused chaos within my app as i've stored just the path of the file on my mongodb model.
						 The solution that i found was to use aws s3 to store files and then save the url to my mongodb model.</p>
						 <h6>Fixing heroku's r15 error (Memory vastly exceeded).</h6>
						 <p>This app is hosted on heroku on a hobby dyno which alocates only 500mb of ram and not knowing that the app is using more than 500mb at starting time the app could not start.
						 I investigated this issue for about one hour and found performance issues and those are: </p>
					 <ol>
						 <li>At each entry i used babel-polyfill to support ES2015 features.</li>
						 <li>Babel loader was transforming all js files including /node_modules/.</li>
						 <li>All my components was loaded sync.</li>
					 </ol>
					 <p>Soultions</p>
					 <ol>
						 <li>I've updated my babel to @babel 7.x.x.</li>
						 <li>I've added into my webpack config file at loader options exclude: /node_modules/.</li>
						 <li>i've integrated @loadable library to load asynchronous some parts of the app.</li>
					 </ol>
				  </div>
         </div>
       </section>
       <section className="about__main-interest">
         <div className="icon-left">
           <FontAwesomeIcon icon={faNetworkWired}/>
         </div>
         <div className="about__main__interest">
         	 <h3>Interest.</h3>
           <p>Currently i'm interested into getting hired as a front end developer, learning new technologies improving the current ones and improving my lifestyle.</p>
         </div>
       </section>
			 <section className="about__main-education">

			 </section>
			</main>
		)
	}
}

export default About;
