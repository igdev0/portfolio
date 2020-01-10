import React from 'react';
import './blogPostDashboardComponent.less';
import SelectImageContainer from '../containers/selectImageDashboardContainer';
import {reduxForm, Form, Field, FieldArray} from 'redux-form';
import {connect} from 'react-redux';
import Markdown from 'react-markdown';
import CodeBlock from './codeblockComponent';
import AddTagsField from './addTagsFieldDashboardComponent';
import PreviewPostCardComponent from './previewPostCardComponent';
import {Tabs, Tab} from 'react-bootstrap';
import diff from 'object-diff';
import {RESET_INITIAL_DATA} from '../actions/types';

const PreviewBlogContent = ({blog_post}) => {

	return (
		<article className="markdown-body">
			{
				blog_post && blog_post.values && blog_post.values.body ?
				<Markdown source={blog_post.values.body} escapeHtml={false} renderers={{code: CodeBlock}}/>
				:
				null
			}
		</article>
	)
}

const BlogPostDashboardComponent = (props) => {
	return (
		<section className="dashboard-blog-post">
		 <div className="dashboard-blog-post-meta">
			 <Form id="blog-post" onSubmit={props.handleSubmit((data) => {

						 if(props.initialized) {
							 const updates = diff(props.initialValues, data);
							 props.updatePost(props.initialData.slug, updates);
						 }
						 else {
							 props.createPost(data);
						 }
				 })} className="dashboard-blog-post__meta-form">
			  <label htmlFor="images.card">Card image:</label>
			  <Field name="images.card" img-type="card" component={SelectImageContainer}/>
			  <Field name="title" label="A good title is a short title." component={InputFieldComponent}/>
			  <Field name="description" label="Describe the purpose of this public post." component={TextareaFieldComponent}/>
			  <FieldArray name="tags" label="Add tags and press enter." component={AddTagsField}/>
			 </Form>
			 <div className="dashboard-blog-post__meta-preview">
			 	<PreviewPostCardComponent {...props}/>
			 </div>
		 </div>
		 <div className="dashboard-blog-post-content">
			 <h3>Here you write content using github markdown syntax</h3>
				 <Tabs defaultActiveKey="code" id="uncontrolled-tab-example">
				  <Tab eventKey="code" title="</>">
				 		<Field name="body" component={ComposeArticleField} label="This field is using gihub markdown."/>
				  </Tab>
				  <Tab eventKey="preview" title="Preview">
						<PreviewBlogContent {...props}/>
				  </Tab>
				</Tabs>
		 </div>
		 <div className="dashboard-blog-post__actions">
			<button type="submit" form="blog-post" className="btn btn-success">{props.initialized ? "update post" : "Create post"}</button>
			<button type="button" className="btn btn-danger" onClick={() => {props.history.goBack()}}>Cancel</button>
		 </div>
		</section>
	)
}

const InputFieldComponent = (props) => {
	const {input, label, type, meta: {touched, error}} = props;

	return (
		<div className="field-w">
		 <input type={type} placeholder={label} {...input}/>
		 {touched && (error && <span><i className="fas fa-exclamation-circle"></i>{error}</span>)}
		</div>
	)
}

const TextareaFieldComponent = (props) => {
	const {input, label, type, meta: {touched, error}} = props;

	return (
		<div className="field-w">
		 <textarea type={type} placeholder={label} {...input}/>
		 {touched && (error && <span><i className="fas fa-exclamation-circle"></i>{error}</span>)}
		</div>
	)
}

const ComposeArticleField = (props) => {
	const {input, label, type, meta: {touched, error}} = props;

	return (
		 <div className="compose-article-input-w">
		  <textarea type={type} placeholder={label} {...input}/>
		  {touched && (error && <span><i className="fas fa-exclamation-circle"></i>{error}</span>)}
		 </div>
	)
}

const validate = (values) => {
	const errors = {
		images: {},
		description: '',
		title: '',
		bory: ''
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
	}

	if(!values.tags) {
		errors.tags = {
			_error: "this field is required"
		}
	}

	return errors;
}

const onSubmitSuccess = (results, dispatch, props) => {

	if(props.initialized) {

		// reset initialValues here

		dispatch({
			type: RESET_INITIAL_DATA,
			payload: {}
		})
	}
	else {
		// reset form if the form succeded.
		props.reset();
	}
	props.history.goBack();
}

const mapStatetoProps = ({initialData}) => {
	return {
		initialValues: initialData !== null && initialData.for === "BLOG_POST" ? initialData : null
	}
}

const blogPost = reduxForm({form: 'blog_post', validate, onSubmitSuccess, enableReinitialize: true})(BlogPostDashboardComponent);

export default connect(mapStatetoProps, null)(blogPost);
