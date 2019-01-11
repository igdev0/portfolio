import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchProject} from '../../actions';

class ProjectViewContainer extends Component {
	constructor(props) {
		super(props);

	}

	render() {

		return (
			<h1>Hello world</h1>
		)
	}
}

const mapStateToProps = ({project}) => {

	return {
		project
	}
}

const bindActionCreatorsToProps = (dispatch) => {

	bindActionCreators({
		fetchProject
	}, dispatch)
}

export default connect(mapStateToProps, bindActionCreatorsToProps)(ProjectViewContainer);