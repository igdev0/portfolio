import React, {Component} from 'react';
import './files.less';
import file from '../blog/blog_post.svg';
import {Form, Field, Fields, reduxForm} from 'redux-form';
import images from './images.svg';
import Moment from 'react-moment';

class SelectFile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			previewUrl: images,
			_selectFile: React.createRef()
		}
		this.selectFile = this.selectFile.bind(this);
		this.onChange = this.onChange.bind(this);

	}

	componentDidUpdate() {

		if(this.props.submitSucceeded) {

			this.setPreview(images);
		}
	}

	setPreview(url) {
		this.setState({
			previewUrl: url
		})
	}

	onChange(e) {
		let reader = new FileReader();
		let file = e.target.files[0];

		reader.onloadend = () => {
					
			this.setPreview(reader.result);
		}
		reader.readAsDataURL(file);

		this.props.input.onChange(e);
	}

	selectFile() {
		this.state._selectFile.current.click()
	}

	render() {
		return (

			<div className="select-file">
			    <div className="select-file__ref"><a href="#" onClick={this.selectFile}> <img src={this.state.previewUrl}/></a></div>
				<input
				type="file"
				accept=".jpg, .png, .jpeg"
				ref={this.state._selectFile}
				onChange={this.onChange}
				onFocus={this.props.input.onFocus}
				defaultValue={this.props.input.value}
				/>
				{this.props.meta.touched &&
		        ((this.props.meta.error && <span><i className="fas fa-exclamation-circle"></i>{this.props.meta.error}</span>) ||
		          (this.props.meta.warning && <span>{this.props.meta.warning}</span>))}
			</div>
		)
	}
	
}

const FileMetaInput = ({
	input,
	label,
	type,
	meta:{touched, error, warning}
}) => {
	return (
		<div>
		 <input {...input} type={type} placeholder={label} />
		      {touched &&
		        ((error && <span><i className="fas fa-exclamation-circle"></i>{error}</span>) ||
		        (warning && <span>{warning}</span>))}
		</div>
	)
}


class Files extends Component {
	
	constructor(props) {
		super(props);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}


	handleFormSubmit(formProps) {
		const data = {
			folder: formProps.folder,
			alt: formProps.alt
		};
		this.props.createFile(formProps.fileToUpload[0], data);
	}

	componentDidUpdate() {

		if(this.props.submitSucceeded) {

			this.props.reset();
		}
	}

	render() {
			return (
			<main className="files-main">
			 <div className="flex-row">
			  {
			  	this.props.files.map((file, key) => {
			  		return (
			  			<div key={key} className="flex-col">
			  			 <img src={file.url} alt={file.alt}/>
			  			 <div className="img-details">
			  			  <ul>
			  			  	<li><span><i className="fas fa-globe"></i></span><input type="text" readOnly defaultValue={file.url}/></li>
			  			  	<li><span><i className="far fa-calendar-alt"></i></span><Moment format="DD/MM/YYYY">{file.created_at}</Moment></li>
			  			  </ul>
			  			 </div>
			  			 <div className="actions">
			  			  <button type="button" className="button action__copy">Copy</button>
			  			  <button type="button" className="button action__delete" onClick={() => {this.props.deleteFile(file._id)}}>Delete</button>
			  			 </div>
			  			</div>
			  		)
			  	})
			  }
			 </div>
			 <div className="files-upload">
			   <Form onSubmit={this.props.handleSubmit(this.handleFormSubmit)} className="files-upload__form">
			    <Field type="file" name="fileToUpload" submitSucceeded={this.props.submitSucceeded} component={SelectFile}/>
			    <fieldset className="field__img__alt">
				    <label htmlFor="alt">Image alt:</label>
				    <Field type="text" name="alt" label="File alt." component={FileMetaInput} placeholder="Image alt ..."/>
			    	<label htmlFor="folder">Folder:</label>
			    	<Field type="text" name="folder" label="Bucket's folder ..." component={FileMetaInput}/>
			    </fieldset>
			    <div className="submit-button-w">
			     <button type="submit">Submit</button>
			    </div>
			   </Form>
			 </div>
			</main>
		)
	}
}

const validate = (values) => {
	const errors = {};

	if(!values.fileToUpload) {
		errors.fileToUpload = "Seems like you didn't upload any file.";
	}

	if(!values.alt) {
		errors.alt = 'Image alt is required.';
	}

	if(!values.folder) {
		errors.folder = "Aws's folder is required.";
	}
	return errors;
}

export default reduxForm({form: 'uploadFiles', validate})(Files);