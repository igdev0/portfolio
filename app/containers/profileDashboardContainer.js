import React, {Component} from 'react';
import Profile from '../components/profileDashboardComponent';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchSchools, createSchool, updateSchool, deleteSchool,
		createSkill, updateSkill, deleteSkill, fetchSkills,
		loadInitialDataForSkill, loadInitialDataForSchool,
		updateProfileIntroduction, fetchProfileIntroduction} from '../actions';

class ProfileContainer extends Component {

	constructor(props) {

		super(props);
	}

	componentDidMount() {

		this.props.fetchSchools();
		this.props.fetchSkills();
		this.props.fetchProfileIntroduction();
	}

	render() {

		return (<Profile {...this.props}/>)
	}
}

const bindActionCreatorsToProps = (dispatch) => {

	return bindActionCreators({
		fetchSkills,
		fetchSchools,
		updateSchool,
		createSchool,
		deleteSchool,
		createSkill,
		updateSkill,
		deleteSkill,
		loadInitialDataForSkill,
		loadInitialDataForSchool,
		updateProfileIntroduction,
		fetchProfileIntroduction
	}, dispatch);
}

const mapStateToProps = ({schools, skills, profileIntroduction}) => {
	return {
		schools,
		skills,
		profileIntroduction
	}
}


export default connect(mapStateToProps, bindActionCreatorsToProps)(ProfileContainer);
