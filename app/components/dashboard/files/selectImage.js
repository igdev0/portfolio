import React, {Component} from 'react';

import card from './images/image-deleted-card.svg';
import hero from './images/image-deleted-hero.svg';
import {Modal} from 'react-bootstrap';
import './selectImage.less';

class SelectImage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modalDisplay: false,
			selectedImage: this.props.input.value._id,
			selectedImageUrl: this.props.input.value.path,
			selectUrl: this.props.selectUrl || false
		}

		this.onChange = this.onChange.bind(this);
		this.hideModal = this.hideModal.bind(this);
	}

	componentDidMount() {

		if(this.state.selectUrl) {
			this.setState({
				selectedImage: !this.props.input.value.path ? this.props.files[0].path : this.props.input.value.path,
			})
		}

		if(!this.state.selectUrl) {

			this.setState({
				selectedImage: !this.props.input.value._id ? this.props.files[0]._id : this.props.input.value._id,
			})
		}
	}

	onChange(e, file) {
		this.setState({selectedImage: e.target.value, selectedImageUrl: file.path});
		const _id = e.target.value;
		this.props.input.onChange(e);
	}

	hideModal() {
		this.setState({modalDisplay: !this.state.modalDisplay});
	}

 	render() {
		return (
			<div className="select__image__container">
			    <button type="button" onClick={this.hideModal} className="btn btn-primary">{this.props.label || "select image"}</button>
				<div className="error-messages">
					{this.props.meta.touched && (this.props.meta.error && <span><i className="fas fa-exclamation-circle"></i>{this.props.meta.error}</span>)}
				</div>
				<Modal bsSize="large" onHide={this.hideModal} show={this.state.modalDisplay}>
				 <Modal.Header closeButton>
				  <Modal.Title>Select image.</Modal.Title>
				 </Modal.Header>
				 <Modal.Body>
				  <div className="select-image">
					 <div className="flex-row">
					  {
						this.props.files.map((file, key) => {
							return (
								<div key={key} className="flex-col">
								  <label>
					  		 	   <input 
					  		 	   defaultChecked={file._id === this.state.selectedImage} 
					  		 	   name={`${file.name}_${key}`} 
					  		 	   type="radio" {...this.props.input} 
					  		 	   value={this.state.selectUrl ? `${window.location.origin + '/' + file.path}` : file._id}
					  		 	   onChange={(e) => {this.onChange(e, file)}} 
					  		 	   />
								   <img className={this.props["img-type"] === 'card' ? 'card' : 'hero'} src={`${window.location.origin + '/' + file.path}`}/>
								  </label>
								</div>
							)
						})
					  }
					 </div>
					</div>
				 </Modal.Body>
				 <Modal.Footer>
				 	<button className="btn" className="btn btn-primary">Upload</button>
				 	<button type="button" className="btn btn-success" onClick={this.hideModal}>Select</button>
				 </Modal.Footer>
				</Modal>
			</div>
		)
	}
}

export default SelectImage;