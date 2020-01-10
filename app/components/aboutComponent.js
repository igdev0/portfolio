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
             <h5>Developed an open-source project and deployed on npm.</h5>
             <p>Technologies used:</p>
             <ul>
               <li>Javascript (es2015+)</li>
               <li>Npm</li>
               <li>webpack</li>
             </ul>
             <p>Process:</p>
             <p>built a prototype containing most of the features after that i've used webpack to bundle everything in umd.</p>
             <p>Challanges:</p>
             <p>Creating a umd namespace, making responsive slides and integrating auto sliding and adding swipe/drag feature.</p>
             <p>Solutions:</p>
             <p>in order to create responsive slides, i've replaced the unit measurement px with percentage and i manipulated the transform property through animate web api.</p>
           </div>

           <div className="about__main-achievement">
             <h5>Designed and developed a full-stack web app.</h5>
             <p>I've created a full stack web app with a content management system (dashboard) for one of my clients. It was quiet challenging to fully complete project features and layout as the project was changing weekly. Most of the challenges were:</p>
						 <h6>Storing files.</h6>
						 <p>Not knowing that heroku's filesystem is ephemeral, i've used the node filesystem to create/delete files. So basicaly all files stored on heroku at the runtime it was deleted after a dyno restart. This caused chaos within my app as i've stored just the path of the file on my mongodb model.
						 The solution that i found was to use aws s3 to store files and then save the url to my mongodb model.</p>
					 <h6>Fixing heroku's r15 error (Memory vastly exceeded).</h6>
					 <p>This app is hosted on heroku on a hobby dyno which alocates only 500mb of ram and not knowing that the app is using more than 500mb at starting time the app could not start.
					 I investigated this issue for about one hour and found performance issues and those are: </p>
				 <ol>
					 <li>At each entry i used babel-polyfill to support ES2015 features.</li>
					 <li>Babel loader was transforming all js files including /node_modules.</li>
					 <li></li>
				 </ol>
				  </div>
           <div className="about__main-achievement">
             <h5>Learned TDD development.</h5>
             <p>Cras ut purus a lacus egestas imperdiet. Praesent sagittis suscipit faucibus. Duis ac eleifend ligula, sit amet aliquam urna. Praesent et tempor tellus, eget maximus dolor. Quisque ut ex vitae sem rutrum efficitur sit amet in turpis. Fusce id fringilla diam. Vivamus et condimentum velit.</p>
           </div>
           <div className="about__main-achievement">
             <h5>Wrote a blog post.</h5>
             <p>Cras ut purus a lacus egestas imperdiet. Praesent sagittis suscipit faucibus. Duis ac eleifend ligula, sit amet aliquam urna. Praesent et tempor tellus, eget maximus dolor. Quisque ut ex vitae sem rutrum efficitur sit amet in turpis. Fusce id fringilla diam. Vivamus et condimentum velit.</p>
           </div>
         </div>
       </section>
       <section className="about__main-interest">
         <div className="icon-left">
           <FontAwesomeIcon icon={faNetworkWired}/>
         </div>
         <div className="about__main__interest">
         	 <h3>Interest.</h3>
           <p>Currently i'm interested into getting hired as a front end developer, learning new technologies and improving my unit testing.</p>
         </div>
       </section>
			 <section className="about__main-education">

			 </section>
			</main>
		)
	}
}

export default About;
