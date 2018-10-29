import React from 'react';
import {Form,reduxForm, Field} from 'redux-form';
import ProfileIntroductionForm from './profileIntroductionForm';
import ProfileSkillForm from './profileSkillForm';
import ProfileSchoolForm from './profileSchoolForm';
import './style.less';

const Profile = (props) => {

	return (
		<main className="main-profile">
		 <ProfileIntroductionForm {...props}/>
		 <ProfileSkillForm {...props}/>
		 <section className="skills-grid">
		  <div className="flex-row">
		   <div className="flex-col">
		    <div className="skill">
		     <h4>Html</h4>
		    </div>
		   </div>
		   <div className="flex-col">
		    <div className="skill">
		     <h4>Css</h4>
		    </div>
		   </div>
		   <div className="flex-col">
		    <div className="skill">
		     <h4>Javascript	</h4>
		    </div>
		   </div>
		   <div className="flex-col">
		    <div className="skill">
		     <h4>React</h4>
		    </div>
		   </div>
		   <div className="flex-col">
		    <div className="skill">
		     <h4>Jquery</h4>
		    </div>
		   </div>
		  </div>
		 </section>
		 <ProfileSchoolForm {...props}/>
		</main>
	)
}
export default Profile;