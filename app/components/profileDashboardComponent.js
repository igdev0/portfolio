import React, {Component} from 'react';
import {Form,reduxForm, Field, FieldArray} from 'redux-form';
import ProfileIntroductionForm from './profileIntroductionFormDashboardComponent';
import ProfileSchoolForm from './profileSchoolFormDashboardComponent';
import ProfileSkillForm from './profileSkillFormDashboardComponent';
import FindSkillsForm from './findSkillsFormDashboardComponent';

import './profileDashboardComponent.less';
// import './displaySchoolSkillsGrid.less';

class Profile extends Component {
	constructor(props) {
		super(props);

		this.state = {
			school__id: null,
			find_skills_for: null,
			edit_skill_id: null
		}

		this.toggleFindSchoolForm = this.toggleFindSchoolForm.bind(this);
		this.editSkill = this.editSkill.bind(this);
	}

	toggleFindSchoolForm(id) {

		this.setState((prevState) => ({
			find_skills_for: id || null
		}))
	}

	editSkill(skill) {
		this.setState({
			skill: skill._id
		})
	}

	addSkillToSchool(id) {

		this.setState({
			school__id: id
		})
	}

	hideSkillForm() {
		this.setState({
			school__id: null
		})
	}

	render() {
		return (
			<main className="main-profile">
			 <ProfileIntroductionForm {...this.props}/>
			 <ProfileSkillForm {...this.props}/>
		     <section className="profile__school__grid">
		      <div className="flex-row">
		       {
		       	this.props.schools ? this.props.schools.map((school, key) => {
		       		return (
		       		  <div key={key} className="flex-col">
				        <div className="display__school">
				          <div className="display__school-details">
				          <div className="display__school__details-logo">
				           {school.logo && <img src={`${window.location.origin}/${school.logo.path}`}/>}
				          </div>
				          <div className="display__school__details-experience">
				           <span><i className="fas fa-hourglass-start"></i>{new Date(school.experience.from).toDateString()}</span>
				           <span><i className="fas fa-hourglass-end"></i>{new Date(school.experience.to).toDateString()}</span>
				          </div>
				          <div className="display__school-actions">
				           <button type="button" className="btn btn-primary" onClick={() => this.props.loadInitialDataForSchool(school)}>Edit</button>
				           <button type="button" className="btn btn-danger" onClick={() => {this.props.deleteSchool(school._id)}}>delete</button>
				          </div>
				         </div>
				         <div className="display__school-skills">
				          <SkillsGrid {...this.props} school={school} addSkillToSchool={this.addSkillToSchool}/>
				          <div className="school__skills-actions">
				           {
				           	this.state.find_skills_for === school._id ?
				           	<FindSkillsForm {...this.props} toggleFindSchoolForm={this.toggleFindSchoolForm} school={school}/>
				           	: <div className="school__skills__action-buttons">
					            <button type="button"
					            		onClick={() => this.toggleFindSchoolForm(school._id)}
					            		className="btn btn-primary"
					            >Add new skill

					            </button>
					           </div>
				           }
				          </div>
				         </div>
				        </div>
				      </div>
		       		)
		       	}) : null
		       }
		       <div className="flex-col">
			    <ProfileSchoolForm {...this.props}/>
		       </div>
		      </div>
		     </section>
			</main>
		)
	}
}


const SkillsGrid = (props) => {

	return (

		<ul className="skills__grid">
			{
				props.school.skills ? props.school.skills.map((skill, key) => {
				    return (
						<li key={key} className="skills__grid-cell">
							<div className="skills__grid__cell-item">
							 <div className="skill-name">
							   <span>{skill.name}</span>
							 </div>
							 <div className="actions">
							   <i className="fas fa-times-circle" onClick={() => props.updateSchool(props.school._id, "REMOVE_SKILLS", skill._id)}></i><i className="far fa-edit"></i>
							 </div>
							</div>
						</li>
				    )
				}) : null
		    }
		</ul>
	)
}

export default Profile;
