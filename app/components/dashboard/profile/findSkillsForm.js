import React, {Component} from 'react';
import {FieldArray, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import RenderMultiselect from './renderMultiselect';

class FindSkillsForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			show_form: false
		};
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}

	handleFormSubmit(formProps) {
		// @param: new skills array
		const type = "ADD_SKILLS";
		this.props.updateSchool(this.props.school._id, type, formProps)
		this.props.reset();
	}

	render() {

		return (
			<form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}
				  className="find__skill__form">
				<FieldArray name="skills"
							toggleFindSchoolForm={this.props.toggleFindSchoolForm}
							label="Find a skill ..."
							all_skills={this.props.skills}
							school_skills={this.props.school.skills}
							displaySubmitButton={true}
							component={RenderMultiselect}/>
			</form>
		)
	}
}

const validate = (values) => {
	const errors = {};
	if(!values.skills || !values.skills.length) {
		errors.skills = {_error: 'This field is required'}
	}

	return errors;
}

const warn = (values) => {
	const errors = {};

	if(!values.skills || !values.skills.length) {
		errors.skills = "this field is required";
	}

	return errors;
}

export default reduxForm({form: 'findSkillForm', validate})(FindSkillsForm);
