import React, {Component} from 'react';
import Profile from '../';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class ProfileContainer extends Component {

	constructor(props) {

		super(props);

		this.updateProfileIntroduction = this.updateProfileIntroduction.bind(this);
		this.deleteSkill = this.deleteSkill.bind(this);
		this.addSkill = this.addSkill.bind(this);
		this.addSchool = this.addSchool.bind(this);
		this.deleteSchool = this.deleteSchool.bind(this);
	}

	updateProfileIntroduction(formProps) {
		console.log(formProps);
	}

	deleteSkill(formProps) {
		console.log(formProps);
	}

	addSkill(formProps) {
		console.log(formProps);
	}

	addSchool(formProps) {
		console.log(formProps);
	}

	deleteSchool(formProps) {
		console.log(formProps);
	}

	render() {

		return (<Profile {...this.props} {...this}/>)
	} 
}

const bindActionCreatorsToProps = (dispatch) => {

	return bindActionCreators({}, dispatch);
}

const mapStateToProps = (state) => {

	return {

	}
}


export default connect(null, null)(ProfileContainer);