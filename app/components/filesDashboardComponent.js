import React, {Component} from 'react';
import './filesDashboardComponent.less';
import file from '../images/blog-p.svg';
import {Form, Field, Fields, reduxForm} from 'redux-form';
import images from '../images/images.svg';
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
		if(file) {
			reader.readAsDataURL(file);

			this.props.input.onChange(e);
		}
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

	bytesToSize(bytes) {
	   var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
	   if (bytes == 0) return '0 Byte';
	   var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
	   return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
	}

	render() {
			return (
			<main className="files-main">
			 {
				 this.props.children !== undefined ?
				 this.props.children :
				 <table className="files-table">
				  <thead className="files-table_head">
				   <tr className="files-table_head-row">
				    <th className="files-table_head-col">
				    File name
				    </th>
				    <th className="files-table_head-col">
				    File url
				    </th>
				    <th className="files-table_head-col">
				    File size
				    </th>
				    <th className="files-table_head-col">
				  	 Upload date
				    </th>
				   </tr>
				  </thead>
				  <tbody className="files-table_body">
				   {
				  	this.props.files.map((file, key) => {

				  		return (
				  			<tr key={key} className="files-table_body-row">
				  			  <td className="files-table_body-col">{file.name}</td>
				  			  <td className="files-table_body-col"><a className="btn btn-primary" href={file.url}>view</a></td>
				  			  <td className="files-table_body-col">{this.bytesToSize(file.size)}</td>
				  			  <td className="files-table_body-col">{new Date(file.updated_at).toLocaleString()}</td>
				  			  <td className="files-table_body-col"><button className="btn btn-danger" onClick={() => this.props.deleteFile(file._id)}>Delete</button></td>
				  			</tr>
				  		)
				  	})
				  }
				  </tbody>
				 </table>
			 }
			 <div className="files-upload">
			   <Form onSubmit={this.props.handleSubmit(this.handleFormSubmit)} className="files-upload__form">
			    <Field type="file" name="fileToUpload" submitSucceeded={this.props.submitSucceeded} component={SelectFile}/>
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

	return errors;
}

export default reduxForm({form: 'uploadFiles', validate})(Files);
