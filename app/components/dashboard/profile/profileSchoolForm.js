import React from 'react';
import SelectImageContainer from '../files/containers/SelectImage';
import {reduxForm, Form, Field} from 'redux-form';


const ProfileSchoolForm = (props) => {

	return (
		<Form className="profile__form-school" onSubmit={props.handleSubmit(props.addSkill)}>
		  <div className="flex-row">
		   <div className="flex-col">
		    <div className="col-1">
		     <Field type="text" name="name" label="Skill name" component={InputComponent}/>
		     <Field type="select" name="icon" label="Skill icon" component={SelectImageContainer}/>
		    </div>
		    <div className="col-1">
		     <Field type="number" name="level" label="Skill level" component={InputComponent}/>
		    </div>
		   </div>
		   <div className="flex-col">
		    <Field type="date" name="from" label="Skill name" component={InputComponent}/>
		    <Field type="date" name="to" label="Skill name" component={InputComponent}/>
		   </div>
		  </div>
		  <div className="form-submit">
		   <button type="submit">Add School</button>
		  </div>
		</Form>
	)
};

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

export default reduxForm({form: 'profileSchool', validate})(ProfileSchoolForm);