import React from 'react';
import './updatePost.less';
import SelectImageContainer from '../files/containers/SelectImage';
import {reduxForm, Form, Field} from 'redux-form';
import ReactMarkdown from 'react-markdown';
import parseHtml from 'react-markdown/plugins/html-parser';
import CodeBlock from './codeblock';
import {connect} from 'react-redux';

const UpdatePost = (props) => {

	if(!props.initialValues) {
		return (
			<h1>Loading</h1>
		)
	}

	else {

		if(props.formSucceeded) {
			props.history.goBack();
		}
		return (
			<section className="blog-update__post">
			 <Form onSubmit={props.handleSubmit(props.handleFormSubmit)} className="blog-update__post-form">
			  <label htmlFor="images.card">Card image:</label>
			  <Field name="images.card" img-type="card" component={SelectImageContainer}/>
			  <label htmlFor="images.hero">Hero image:</label>
			  <Field name="images.hero" img-type="hero" component={SelectImageContainer}/>
			  <Field name="title" label="A good title is a short title." component={InputFieldComponent}/>
			  <Field name="description" label="Describe the purpose of this public post." component={TextareaFieldComponent}/>
			  <label htmlFor="body">The body of this post.</label>
			  <Field name="body" component={ComposeArticleField} label="This field is using gihub markdown."/>
			  <div className="update-post__actions">
			   <button type="submit" className="btn btn-success">Update post</button>
			   <button type="button" className="btn btn-danger" onClick={() => {props.history.goBack()}}>Cancel</button>
			  </div>
			 </Form>
			</section>
		)
	}
}


const InputFieldComponent = (props) => {
	const {input, label, type, meta: {touched, error}} = props;

	return (
		<div className="input-field-w">
		 <input type={type} placeholder={label} {...input}/>
		 {touched && (error && <span><i className="fas fa-exclamation-circle"></i>{error}</span>)}
		</div>
	)
}

const TextareaFieldComponent = (props) => {
	const {input, label, type, meta: {touched, error}} = props;

	return (
		<div className="input-field-w">
		 <textarea type={type} placeholder={label} {...input}/>
		 {touched && (error && <span><i className="fas fa-exclamation-circle"></i>{error}</span>)}
		</div>
	)
}

const ComposeArticleField = (props) => {
	const {input, label, type, meta: {touched, error}} = props;

	return (
		<div className="compose-article-field">
		 <div className="field-w">
		  <textarea type={type} placeholder={label} {...input}/>
		  {touched && (error && <span><i className="fas fa-exclamation-circle"></i>{error}</span>)}
		 </div>
		 <div className="preview-post">
		  {input.value.length ? <ReactMarkdown 
		  className="result-pane"
		  source={input.value} 
		  escapeHtml={false}
		  renderers={{code: CodeBlock}}
		  /> : <div className="no-display"><h1>Nothing yet here.</h1></div>}
		 </div>
		</div>
	)
}

const validate = (values) => {
	const errors = {
		images: {},
		description: '',
		title: '',
		content: ''
	};
	if(!values.title) {
		errors.title = "Title field is required."
	}

	if(!values.description) {

		errors.description = "Description field is required."
	}

	if(!values.body) {

		errors.body = "You must create some content in order to make a post."
	}

	if(!values.images) {

		errors.images.hero = "The hero image is required";
		errors.images.card = "The card image is required";
	}

	if(values.images) {
		if(!values.images.hero) {
			errors.images.hero = "The hero image is required";
		}

		if(!values.images.card) {
			errors.images.card = "The card image is required";
		}
	}

	return errors;
} 

const mapStateToProps = ({post}) => {
	return {
		initialValues: post
	}
}

const updatePost = reduxForm({form: 'updatePost', validate})(UpdatePost)

export default connect(mapStateToProps)(updatePost);