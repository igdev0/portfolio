import React, {Component} from 'react';
import {reduxForm, Form, Field, FieldArray} from 'redux-form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import diff from 'object-diff';
import {LOAD_INITIAL_DATA__FOR__SKILL} from '../actions/types';
import './profileSkillFormDashboardComponent.less';

const ProfileSkillForm  = (props) => {

	return (
		<section className="profile__skills">
			<div className="profile__skill__form">
				<form className="profile__skill__form" onSubmit={props.handleSubmit((data) => {

					if(props.initialized) {
						const updates = diff(props.initialValues, data);
						props.updateSkill(props.initialValues._id, updates);
					}
					else {
						props.createSkill(data);
					}
				})}>
				    <div className="flex-cell title">
				     <h3>Add a new skill</h3>
				    </div>
				    <div className="flex-cell">
					 <Field type="text" name="name" component={InputFieldComponent} label="enter skill name"/>
				    </div>
				    <div className="flex-cell">
					 <Field type="text" name="description" component={TextareaComponent} label="Description ..."/>
				    </div>
				    <div className="flex-cell">
					 <Field type="slider" name="level" component={InputFieldComponent} min="0" max="100" label="Skill level"/>
					 <Field type="text" name="color" component={InputFieldComponent} label="A representational color"/>
				     </div>
				    <div className="flex-cell">
					 <Field type="date" name="experience.from" component={InputFieldComponent} label="enter skill name"/>
					 <Field type="date" name="experience.to" component={InputFieldComponent} label="enter skill name"/>
				    </div>
				    <div className="flex-cell">
		    			<button type="button" className="btn btn-primary" onClick={() => props.reset()}>Clear</button>
				     	<button type="submit" className="btn btn-success">{props.initialized ? 'Save' : 'Add'}</button>
				    </div>
				</form>
			</div>
		  <div className="flex-col">
			<table className="profile__skills__table">
			 <thead className="profile__skills__table-head">
			  <tr className="profile__skills__table__head-row">
			   <th className="profile__skills__table__head__row-th">Skill name</th>
			   <th className="profile__skills__table__head__row-th">Experience</th>
			   <th className="profile__skills__table__head__row-th">Level</th>
			  </tr>
			 </thead>
			 <tbody className="profile__skills__table-body">
			  {
			  	props.skills ?
			  	props.skills.map((skill, key) => {

			  		return (
			  			<tr className="profile__skills__table__body-row" key={key}>
			  			 <td className="profile__skills__table__body__row-data">
			  			  <span>{skill.name}</span>
			  			 </td>
			  			 <td className="profile__skills__table__body__row-data">
			  			  {new Date(skill.experience.from).toDateString()} / {new Date(skill.experience.to).toDateString()}
			  			 </td>
			  			 <td className="profile__skills__table__body__row-data">
			  			  {skill.level}
			  			 </td>
			  			 <td className="profile__skills__table__body__row-data">
			  			  <button className="btn btn-primary" onClick={() => props.loadInitialDataForSkill(skill)}>Edit</button>
			  			  <button className="btn btn-danger" onClick={() => props.deleteSkill(skill._id)}>Delete</button>
			  			 </td>
			  			</tr>
			  		)
			  	})
			  	: null
			  }
			 </tbody>
			</table>
		  </div>
		</section>
	)
}

const InputFieldComponent = ({
	input,
	type,
	label,
	meta: {
		error,
		warn,
		touched
	}
}) => {
	return (
		<div className="field-w">
			<input type={type} placeholder={label}{...input}/>
			{touched && (error && <span>{error}</span>)}
		</div>
	)
}

const TextareaComponent = ({
	input,
	type,
	label,
	meta: {
		error,
		warn,
		touched
	}
}) => {
	return (
		<div className="field-w">
		 <textarea placeholder={label} {...input}></textarea>
		 {touched && (error && <span>error</span>)}
		</div>
	)
}

const validate = (values) => {
	const errors = {};
	const error_messages = {
		required: "This field is required",
		numberBig: "The number can't be bigger than 100",
		numberSmall: "The number can't be smaller than 1"
	};

	if(!values.name) {
		errors.name = error_messages.required;
	}

	if(!values.description) {
		errors.name = error_messages.required;
	}

	if(!values.color) {
		errors.color = error_messages.required;
	}

	if(!values.level) {
		errors.level = "This field is required";
	}

	if(values.level) {

		if(values.level > 100) {
			errors.level = error_messages.numberBig;

		}

		if(values.level < 1) {
			errors.level = error_messages.numberSmall;
		}
	}

	if(!values.experience) {

		errors.experience = {from: error_messages.required, to: error_messages.required}
	}

	if(values.experience) {
		if(!values.experience.from) {
			errors.experience = {from: error_messages.required}
		}

		if(!values.experience.to) {
			errors.experience = {to: error_messages.required}
		}
	}

	return errors;
}

const mapStateToProps = ({initialData}) => {

	return {
		initialValues: initialData && initialData.for === LOAD_INITIAL_DATA__FOR__SKILL ? initialData : null
	}
}

const onSubmitSuccess = (result, dispatch, props) => {

	if(props.initialized) {
		dispatch({
			type: LOAD_INITIAL_DATA__FOR__SKILL,
			payload: null
		});
	}
	else {
		props.reset();
	}
}

const profileSkillForm = reduxForm({form: 'profileSkillForm', validate, enableReinitialize: true, onSubmitSuccess: onSubmitSuccess})(ProfileSkillForm);

export default connect(mapStateToProps)(profileSkillForm);
