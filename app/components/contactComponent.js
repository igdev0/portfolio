import React from 'react';
import {reduxForm, Form, Field} from 'redux-form';
import {connect} from 'react-redux';
import './contactComponent.less';
import header from '../images/header.png';

const Contact = (props) => {

	return (
		<main className="main__contact">
		 <section className="main__contact-section">
		  <div className="content">
		  <h1>I'm glad you stop by, how can i help ? <i className="fas fa-smile-beam"></i></h1>
		  <div className="main__contact-note">
		   <p><i className="fas fa-info-circle"></i> I can only answer to phone calls friday. For any emergency please message me and i'll try my best to call you back later.</p>
		  </div>
		  <p className="contact-info"><i className="fas fa-envelope"></i> dorultanianos@gmail.com</p>
		  <p className="contact-info"><i className="fas fa-mobile"></i> 07481290009</p>
		  </div>
		  <Form className="main__contact-form" onSubmit={props.handleSubmit(props.handleFormSubmit)}>
		   <Field type="text" name="name" label="Your name" component={InputFieldComponent}/>
		   <Field type="text" name="subject" label="Subject" component={InputFieldComponent}/>
		   <Field type="email" name="email" label="email" component={InputFieldComponent}/>
		   <Field type="text" name="body" label="Write ..." component={TextareaFieldComponent}/>
		   <button type="submit" className="btn btn-primary">Send</button>
		  </Form>
		 </section>
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
