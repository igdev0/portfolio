import React, {Component} from 'react';
import SelectImageContainer from '../files/containers/SelectImage';
import {reduxForm, Form, Field, FieldArray} from 'redux-form';
import Multiselect from 'react-widgets/lib/Multiselect'

const ProfileSkillForm = (props) => {

	return (
		<Form className="profile__form-skills" onSubmit={props.handleSubmit(props.addSkill)}>
		  <div className="flex-row">
		   <div className="flex-col">
		    <div className="col-1">
		     <Field type="text" name="name" label="Skill name" component={InputComponent}/>
		     <Field type="number" name="level" label="Skill level" component={InputComponent}/>
		    </div>
		    <div className="col-1">
		     <Field type="select" name="icon" label="Skill icon" selectUrl={true} component={SelectImageContainer}/>
		     <FieldArray type="select" name="school" label="School" items={['pluralsight', 'Udemy', 'codecademy']} component={renderMultiselect}/>
		    </div>
		   </div>
		   <div className="flex-col">
		    <Field type="date" name="from" label="Skill name" component={InputComponent}/>
		    <Field type="date" name="to" label="Skill name" component={InputComponent}/>
		   </div>
		  </div>
		  <div className="form-submit">
		   <button type="submit">Add Skill</button>
		  </div>
		</Form>
	)
};

class renderMultiselect extends Component {
	constructor(props) {
		super(props);
		this.state = {
			itemsFiltered: [],
			itemsAdded: []
		};
		this.inputValue = React.createRef();

		this.addItem = this.addItem.bind(this);
		this.removeItem = this.removeItem.bind(this);
		this.filterSearch = this.filterSearch.bind(this);

	}

	addItem(item) {
		const {fields} = this.props;
		if(this.state.itemsAdded.indexOf(item) === -1) {
			this.setState({
				itemsAdded: [...this.state.itemsAdded, item],
				itemsFiltered: []
			})

			this.inputValue.current.value = "";

			fields.push(item);
		}
	}

	removeItem(e) {
		var key = e.keyCode || e.charCode;

		if(key === 8 && this.state.itemsAdded.length && this.inputValue.current.value === '') {
			this.state.itemsAdded.pop();

			this.setState({
				itemsAdded: this.state.itemsAdded
			})
		}
	}

	filterSearch(e) {
		const {target: {value}} = e;
		const filtered = value.length > 0 ? this.props.items.filter(item => item.toLowerCase().includes(value.toLowerCase()) && this.state.itemsAdded.indexOf(item) === -1 ) : [];
		this.setState({
			itemsFiltered: filtered,
			searchValue: value
		})
	}

	render() {

		return (
			<div className="field-multiselect-w">
			 <div className="filter-search">
			  {this.state.itemsAdded.map((item, key )=> {return <span key={key}>{item}</span>})}<input onKeyDown={this.removeItem} ref={this.inputValue} onChange={this.filterSearch} type="text" placeholder="Find School"/>
			 </div>
			 <div className="popup-multiselect">
			  <ul>
			   {
			   	this.state.itemsFiltered.map((item, key )=> {

			   		return (
			   			<li key={key} onClick={() => this.addItem(item)}>{item}</li>
			   		)
			   	})
			   }
			  </ul>
			 </div>
			</div>
		)
	}
}

const InputComponent = (props) => {

	return (
		<div className="field-input-w">
		 <input type={props.type} onChange={props.onChange} placeholder={props.label} {...props.input} />
		</div>
	)
}

const TextareaComponent = (props) => {

	return (
		<div className="field-textarea-w">
		 <textarea type={props.type} onChange={props.onChange} {...props.input} placeholder={props.label}></textarea>
		</div>
	)
}

const SelectComponent = (props) => {

	return (
		<select className="btn btn-primary">
		 <option defaultselected="true">Select school</option>
		</select>
	)
}

const validate = (values) => {
	const errors = {};

	return errors;
}

export default reduxForm({form: 'profileSkill', validate})(ProfileSkillForm);