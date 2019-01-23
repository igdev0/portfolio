import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ProjectView from '../../components/projectView';
import {fetchProject} from '../../actions';

class ProjectViewContainer extends Component {
	constructor(props) {
		super(props);

	}

	componentDidMount() {
		const {match: {params: {project_id}}} = this.props;
		this.props.fetchProject(project_id);

	}

	render() {

		if(!this.props.project) {
			return (<h1>Loading ...</h1>)
		}

		else {
			return (
				<ProjectView {...this.props}/>
			)
		}
	}
}

const mapStateToProps = ({project}) => {

	return {
		project
	}
}

const bindActionCreatorsToProps = (dispatch) => {

	return bindActionCreators({
		fetchProject
	}, dispatch)
}

export default connect(mapStateToProps, bindActionCreatorsToProps)(ProjectViewContainer);