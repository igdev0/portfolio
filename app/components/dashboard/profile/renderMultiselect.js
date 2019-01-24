import React, {Component} from 'react';
import './renderMultiselect.less'

class RenderMultiselect extends Component {

	constructor(props) {
		super(props);

		this.state = {
			inputVal: '',
			skills: null
		}
		this.handleInputChange = this.handleInputChange.bind(this);
		this.addSkill = this.addSkill.bind(this);
		this.removeSkill = this.removeSkill.bind(this);
	}

	addSkill(skill) {
		const _skill = this.props.fields.push({_id: skill._id, name: skill.name});
		const index = this.state.skills.indexOf(skill);
		this.setState((prevState) => ({
			inputVal: '',
			skills: null
		}))
	}

	removeSkill(index) {
		this.props.fields.remove(index);
	}

	handleInputChange(e) {
		const {target: {value}} = e;
		const all_skills = this.props.fields.getAll() || [];

		this.setState({
			skills: value !== '' ? this.props.all_skills.filter((skill, key) => skill.name.includes(value) && ( all_skills.findIndex((_skill) => {return _skill._id === skill._id;}) === -1 ) && this.props.school_skills.findIndex(_skill => _skill._id === skill._id) === -1) : [],
			inputVal: value
		})
	}

	render() {
		return (
			<fieldset className="fieldset">
			 <div className="fieldset__skills__added">
			  <ul className="fieldset__skills__added-list">
			  	{
			  		this.props.fields.map((keyString, key, fields) => {
			  			const skill = fields.get(key);
			  			return (
			  				<li className="fieldset__skills__added__list-item" key={key}>{skill.name} <i className="fas fa-times" onClick={() => this.removeSkill(key)}></i></li>
			  			)
			  		})
			  	}
			  </ul>
			 </div>
			 <div className="fieldset__find__skill__and__actions">
			  <div>
			   <input type="text" placeholder={this.props.label} value={this.state.inputVal} onChange={this.handleInputChange}/>
			   {(this.props.meta.submitFailed && this.props.meta.invalid) && this.props.meta.error && (<span>{this.props.meta.error}</span>)}
			  </div>
			  <div className="find__skill__form-buttons">
			     {this.props.displaySubmitButton && <button type="submit" className="btn btn btn-success btn-sm"><i className="fas fa-plus-circle"></i></button>}
				 <button type="button" className="btn btn-danger btn-sm" onClick={() => this.props.toggleFindSchoolForm()}><i className="fas fa-ban"></i></button>
			  </div>
			 </div>
			 
			 <ul className="fieldset__skills__results-list">
			  {
			  	this.state.skills ? this.state.skills.map((skill, key) => {
			  		return (
			  			<li className="fieldset__skills__results__list-item" key={key} onClick={() => this.addSkill(skill)}>{skill.name}</li>
			  		)
			  	}) : null
			  }
			 </ul>
		</fieldset>
			
		)
	}
}

export default RenderMultiselect;