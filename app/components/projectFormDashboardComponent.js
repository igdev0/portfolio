import React, {Component} from 'react';
import {Form, reduxForm, Field, FieldArray} from 'redux-form';
import {connect} from 'react-redux';
import SelectImageContainer from '../containers/selectImageDashboardContainer';
import RenderMultiselect from './renderMultiselectDashboardComponent';
import diff from 'object-diff';
import {LOAD_INITIAL_DATA, RESET_INITIAL_DATA} from '../actions/types';

import './projectFormDashboardComponent.less';
import './previewProjectDashboardComponent.less';

class ProjectPreview extends Component {
	constructor(props) {
		super(props);
		this.state = {
			project_form: null,
			preview_image: null
		}
		this.extractImageSrcFromArray = this.extractImageSrcFromArray.bind(this);
		this.extractColorFromSkill = this.extractColorFromSkill.bind(this);
	}

	extractColorFromSkill(id) {
		let obj = this.props.skills.find((a) => {
			return a._id == id;
		})

		return obj.color;
	}

	extractImageSrcFromArray(id) {
		// This is a method which will extract
		// image source from array of files.
		let obj = this.props.files.find((a) => {

				return a._id === id;
		})

		return `${window.origin}/${obj.path}`;
	}
	componentWillUnmount(a) {
		this.props.resetInitialData();

	}
	shouldComponentUpdate(nextProps, prevState) {
		const {project_form} = nextProps;
		// Update state if the values is null;
		// This means that resetInitialData was called.
		// Check if the state is not empty
		// if so set it to null.
		if(project_form.values === null && prevState.project_form !== null) {
			this.setState({project_form: null});
			return true;
		}
		if(project_form.values) {
			// Lets initialize the state.
			if(prevState.project_form === null) {
				this.setState({project_form: project_form.values});
				return true;
			}
			// Here we update manualy the component
			else {
				for(let key in project_form.values) {
					// Check key is existent in state.
					// if not, update the state.
					if(prevState.project_form[key] === undefined) {
						this.setState({project_form: project_form.values});
						return true;
					}

					switch (typeof project_form.values[key]) {
						case "string":
							if(project_form.values[key] !== prevState.project_form[key]) {
									this.setState({project_form: project_form.values})
									return true;
							}
							break;
						case "object":

							if(project_form.values[key] === null) {
								console.error('project_form values error. Check projectForm preview component.')
							}
							// Check if is Array, if so compare values
							// If the values are not equal update the state.
							else if(Array.isArray(project_form.values[key])) {
								// First lets check if the length of those is not equal
								// if so, update the state.
								if(project_form.values[key].length !== prevState.project_form[key].length) {
									 this.setState({project_form: project_form.values})
									return true;
								}
								// Now lets compare each value of the array
								// if those are not equal, update the state
								for(let i in project_form.values[key]) {
									if(prevState.project_form[key][i] !== project_form.values[key][i]) {
										this.setState({project_form: project_form.values})
										return true;
									}
								}
							}
							// Otherwise is literal object,
							// So lets compare its keys deep.
							else {
								for(let k in project_form.values[key]) {

									if(prevState.project_form[key][k] !== project_form.values[key][k]) {
										this.setState({project_form: project_form.values});
										return true;
									}
								}
							}
						break;

						case 'number':
							if(prevState.project_form[key] !== project_form.values[key]) {
								this.setState({project_form: project_form.values[key]})
								return true;
							}
						break;
						default:
							return true;
					}
				}
			}
		}
		return true;
	}
	render() {
		return (
			<div className="project-preview">
				<div className="project__preview-header">
					{
						this.state.project_form && this.state.project_form.images ?
						<img src={this.extractImageSrcFromArray(this.state.project_form.images.card)}/>
						:
						<div className="project__preview__header-default">

						</div>
					}
				</div>
				<div className="project__preview-body">
					<div className="project__preview__body-tags">
						{
							this.state.project_form !== null && this.state.project_form.skills ?
							this.state.project_form.skills.map(({name, _id}, key) => {
								return (
									<span key={key} style={{background: this.extractColorFromSkill(_id)}}>{name}</span>
								)
							})
							:
							<div>
							<span className="project__preview__body__tags-default"></span>
							<span className="project__preview__body__tags-default"></span>
							<span className="project__preview__body__tags-default"></span>
							</div>
						}
					</div>
					<div className="project__preview__body-description">
						<p>
							{
								this.state.project_form !== null && this.state.project_form.description ?
								this.state.project_form.description
								:
								<span className="project__preview__body__description-default"></span>
							}
						</p>
					</div>
					<div className="project__preview__body-date">
						<span>
							{
								this.state.project_form !== null && this.state.project_form.started_at ?
								this.state.project_form.started_at
								:
								<span className="project__preview__body__date-default"></span>
							}
						</span>
					</div>
				</div>
			</div>
		)
	}
}

const ProjectForm = (props) => {

	return (
		<section className="section__form-section">
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
		    <Field type="select" name="images.card" img-type="card" label="Select image" component={SelectImageContainer}/>
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
			    <button type="button" className="btn btn-primary" onClick={props.resetInitialData}>Reset</button>
			   </div>
			</Form>
			<ProjectPreview {...props}/>
		</section>
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
