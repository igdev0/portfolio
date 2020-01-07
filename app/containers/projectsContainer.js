import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchProjects, fetchSkills} from '../actions';
import Projects from '../components/projectsComponent';

class ProjectsContainer extends Component {
	constructor(props) {
		super(props);

	}

	componentDidMount() {
		this.props.fetchSkills();
		this.props.fetchProjects();
	}

	render() {
		if(this.props.projects && this.props.projects.length && this.props.skills && this.props.skills.length) {
			return (
				<Projects {...this.props}/>
			)
		}

		else {
			return (
				<h1>Hello world, the projects are loading ...</h1>
			)
		}
	}
}

const mapStateToProps = ({projects, skills}) => {

	return {
		projects,
		skills
	}
}

const bindActionCreatorsToProps = (dispatch) => {

	return bindActionCreators({
		fetchProjects,
		fetchSkills
	}, dispatch)
}

export default connect(mapStateToProps, bindActionCreatorsToProps)(ProjectsContainer);
