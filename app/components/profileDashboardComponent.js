import React, {Component} from 'react';
import {Form,reduxForm, Field, FieldArray} from 'redux-form';
import ProfileIntroductionForm from './profileIntroductionFormDashboardComponent';
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
