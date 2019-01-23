import React from 'react';
import SelectImageContainer from '../files/containers/selectImage';
import {reduxForm, Form, Field} from 'redux-form';
import {LOAD_INITIAL_DATA__FOR__SCHOOL} from './actions/types';
import {connect} from 'react-redux';
import diff from 'object-diff';

const ProfileSchoolForm = (props) => {
	return (
		<Form className="profile__form__school" onSubmit={props.handleSubmit(data => {

			if(props.initialized) {
				const updates = diff(props.initialValues, data);
				props.updateSchool(props.initialValues._id, "OTHER", updates);
			}

			else {
				props.createSchool(data);
			}
		})}>
		  <div className="widget-title">
		    <h3>Add a new school</h3>
		  </div>
		  <div className="flex-cell">
		    <Field type="text" name="name" label="School name" component={InputComponent}/>
		    <Field type="select" name="logo" label="School logo" component={SelectImageContainer}/>
		  </div>
		  <div className="flex-cell">
		   <Field type="text" name="description" label="Description ..." component={TextareaComponent}/>
		  </div>
		  <div className="flex-cell">
		    <Field type="date" name="experience.from" label="Start at" component={InputComponent}/>
		    <Field type="date" name="experience.to" label="End at" component={InputComponent}/>
		  </div>
		  <div className="flex-cell">
		    <button type="submit" className="btn btn-success">{props.initialized ? "Save" : "Add school"}</button>
		    <button type="button" className="btn btn-primary" onClick={() => props.reset()}>Clear</button>
		  </div>
		</Form>
	)
};

const InputComponent = ({
	type,
	label,
	input,
	meta: {
		touched,
		warning,
		error
	}
}) => {
	return (
		<div className="field-w">
		 <input type={type} placeholder={label} {...input} />
		 {touched && error && <span><i className="fas fa-exclamation-circle"></i>{error}</span>}
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
	const errors = {
		experience: {
			from: null
		}
	};

	if(!values.name) {
		errors.name = "School name is required.";
	}

	if(!values.logo) {
		errors.logo = "This field is required";
	}

	if(!values.experience) {
		errors.experience = {
			from: "Looks like you didn't say when you started this school"
		}; 
	}

	return errors;
}

const onSubmitSuccess = (result, dispatch, props) => {

	if(props.initialized) {
		dispatch({
			type: LOAD_INITIAL_DATA__FOR__SCHOOL,
			payload: {}
		})
	}

	else {
		props.reset();
	}
}

const mapStateToProps = ({initialData}) => {

	return {
		initialValues: initialData.for === LOAD_INITIAL_DATA__FOR__SCHOOL ? initialData : null
	}
}

const profileSchoolForm = reduxForm({form: 'profileSchool', validate, enableReinitialize: true, onSubmitSuccess: onSubmitSuccess})(ProfileSchoolForm);

export default connect(mapStateToProps)(profileSchoolForm);