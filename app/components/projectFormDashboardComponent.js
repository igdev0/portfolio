import React, {Component} from 'react';
import {Form, reduxForm, Field, FieldArray} from 'redux-form';
import {connect} from 'react-redux';
import SelectImageContainer from '../containers/selectImageDashboardContainer';
import RenderMultiselect from './renderMultiselectDashboardComponent';
import diff from 'object-diff';
import {LOAD_INITIAL_DATA, RESET_INITIAL_DATA} from '../actions/types';

import './projectFormDashboardComponent.less';


const ProjectForm = (props) => {
	return (
		<Form className="project__form" onSubmit={props.handleSubmit((data) => {
			if(props.initialized) {
				const updates = diff(props.initialValues, data);
				props.updateProject(props.initialValues._id, updates);
			}
			else {
				props.createProject(data);
			}
		})}>
	   <div className="project-images">
	    <Field type="select" name="images.card" img-type="card" label="select image card" component={SelectImageContainer}/>
	    <Field type="select" name="images.hero" img-type="hero" label="select image hero" component={SelectImageContainer}/>
	   </div>
	   <div className="project-skills">
	    <FieldArray name="skills" all_skills={props.skills} school_skills={[]} displaySubmitButton={false} label="Find skill ..." component={RenderMultiselect}/>
	    <Field type="text" name="link" component={InputTextComponent} label="The link to the project"/>
	    <Field type="text" name="color" component={InputTextComponent} label="Representational color for this project"/>
	   </div>
		   <Field type="text" name="title" label="Project title" component={InputTextComponent}/>
		   <Field type="text" name="description" label="Description ..." component={TextareaComponent}/>
		   <div className="input-group">
		    <Field type="date" name="started_at" component={InputTextComponent}/>
		    <Field type="date" name="finished_at" component={InputTextComponent}/>
		   </div>
		   <div className="project__form-actions">
		    <button type="submit" className="btn btn-success">{props.initialized ? "Save" : "Create"}</button>
		    <button type="button" className="btn btn-primary">Reset</button>
		   </div>
		</Form>
	)
}

const InputTextComponent = ({
	input,
	type,
	label,
	meta: {
		error,
		touched,
		warn
	}
}) => {

	return (
		<div className="input-wrapper">
		 <input type={type} placeholder={label} {...input}/>
		 <div className="input-error__message">
		  {touched && (error && <span>{error}</span>)}
		 </div>
		</div>
	)
}

const TextareaComponent = ({
	input,
	type,
	label,
	meta: {
		error,
		touched,
		warn
	}
}) => {

	return (
		<fieldset className="input-wrapper">
		 <textarea placeholder={label} {...input}></textarea>
		 <div className="input-error__message">
		  {touched && (error && <span>{error}</span>)}
		 </div>
		</fieldset>
	)
}


const validate = (values) => {
	const errors = {};
	const messages = {
		required: 'This field is required'
	}

	if(!values.title) {

		errors.title = messages.required;
	}

	if(!values.description) {
		errors.description = messages.required;
	}

	if(!values.link) {
		errors.link = messages.required;
	}

	if(!values.images) {
		errors.images = {
			card: messages.required,
			hero: messages.required
		}
	}

	if(values.images) {
		errors.images = {};

		if(!values.images.card) {

			errors.images.card = messages.required;
		}

		if(!values.images.hero) {

			errors.images.hero = messages.required;
		}
	}

	if(!values.skills || !values.skills.length) {
		errors.skills = {_error: messages.required}
	}

	if(!values.color) {
		errors.color = messages.required;
	}

	if(!values.started_at) {
		errors.started_at = messages.required;
	}

	if(!values.finished_at) {
		errors.finished_at = messages.required;
	}

	return errors;
}

const mapStatetoProps = ({initialData}) => {
	return {
		initialValues: initialData.for === "PROJECT_FORM" ? initialData : null
	}
}

const onSubmitSuccess = (results, dispatch, props) => {

	if(props.initialized) {

		// reset initialValues here

		dispatch({
			type: RESET_INITIAL_DATA,
			payload: null
		})
	}

	else {
		// reset form if the form succeded.
		props.reset();
	}
}

const projectForm = reduxForm({form: 'project_form', validate, onSubmitSuccess, enableReinitialize: true})(ProjectForm);

export default connect(mapStatetoProps, null)(projectForm);
