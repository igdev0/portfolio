import React, {Component} from 'react';
import './addTagsFieldDashboardComponent.less';

class AddTagsField extends Component {
	constructor(props) {
		super(props);
		this.addTag = this.addTag.bind(this);
		this.removeTag = this.removeTag.bind(this);
		this.state = {
			tags: [],
			inpValue: ''
		}

		this.handleInputChange = this.handleInputChange.bind(this);
	}

	componentDidMount() {

		this.setState({
			tags: this.props.fields.getAll() || []
		})
	}

	addTag(e) {
		if(e.charCode === 13 && e.target.value !== '') {
			e.preventDefault();
			e.persist()
			this.props.fields.push(e.target.value);
			this.setState(prevState => ({
				tags:  prevState.tags.length ? [...prevState.tags, e.target.value] : [e.target.value],
				inpValue: ''
			}))
		}
	}

	removeTag(e) {
		if(e.keyCode === 8) {
			if(e.target.value === '') {
				e.persist();
				const removedItem = this.props.fields.pop();
				this.setState(prevState => ({
					tags: prevState.tags.filter(item => item !== removedItem)
				}))
			}
		}
	}

	handleInputChange(e) {
		this.setState({
			inpValue: e.target.value
		})
	}

	render() {
		return (
			<div className="input-w">
			 <div className="tags">
			  {
			  	this.state.tags ? this.state.tags.map((tag, key) => {

			  		return (
			  			<span key={key} className="tag">{tag}</span>
			  		)
			  	})
			  	: null
			  }
			 </div>
			 <input type="text" placeholder={this.props.label} onKeyDown={this.removeTag} value={this.state.inpValue} onChange={this.handleInputChange} onKeyPress={this.addTag}/>
			 {this.props.error && <span>{this.props.error}</span>}
			</div>
		)
	}
}

export default AddTagsField;
