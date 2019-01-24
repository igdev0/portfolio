import React from 'react';
import {reduxForm, Form, Field} from 'redux-form';
import {connect} from 'react-redux';
import './styles.less';

const Contact = (props) => {

	return (
		<main className="main__contact">
		 <Form className="main__contact-form" onSubmit={props.handleSubmit(props.handleFormSubmit)}>
		  <Field type="text" name="name" label="Your name" component={InputFieldComponent}/>
		  <Field type="text" name="subject" label="Subject" component={InputFieldComponent}/>
		  <Field type="email" name="email" label="email" component={InputFieldComponent}/>
		  <Field type="text" name="body" label="Write ..." component={TextareaFieldComponent}/>
		  <button type="submit" className="btn btn-primary">Send</button>
		 </Form>
		</main>
	)
}

const InputFieldComponent = ({
	type,
	input,
	label,
	meta: {
		touched,
		error,
		warn
	}
}) => {

	return (
		<div className="field-w">
	     <input type={type} placeholder={label} {...input}/>
		</div>
	)
}

const TextareaFieldComponent = ({
	type,
	input,
	label,
	meta: {
		touched,
		error,
		warn
	}
}) => {

	return (
		<div className="field-w">
	     <textarea placeholder={label} {...input}></textarea>
	     {touched && (error && <span>{error}</span>)}
		</div>
	)
}

const validate = (values) => {
	const errors = {};

	if(!values.name) {
		errors.name = "This field is required";
	}

	if(!values.email) {
		errors.name = "This field is required";
	}

	if(!values.subject) {
		errors.name = "This field is required";
	}

	if(!values.body) {
		errors.name = "This field is required";
	}


	return errors;
} 

export default reduxForm({form: 'contact', validate: validate})(Contact);
