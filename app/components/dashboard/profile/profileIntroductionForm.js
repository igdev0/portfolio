import React from 'react';
import {reduxForm, Form, Field} from 'redux-form';


const ProfileIntroductionForm = (props) => {

	return (
		 <Form className="profile__form-introduction" onSubmit={props.handleSubmit(props.updateProfileIntroduction)}>
		  <Field type="text" name="introduction" label="Introduction to yourself." component={TextareaComponent}/>
		  <button type="submit" className="btn btn-success">Save</button>
		 </Form>
	)
};

const TextareaComponent = (props) => {

	return (
		<div className="field-textarea-w">
		 <textarea type={props.type} onChange={props.onChange} {...props.input} placeholder={props.label}></textarea>
		</div>
	)
}

const validate = (values) => {
	const errors = {};

	if(!values.introduction) {

		errors.introduction = "This Field is required";
	}

	return errors;
}


export default reduxForm({form: 'profileIntroduction', validate})(ProfileIntroductionForm);