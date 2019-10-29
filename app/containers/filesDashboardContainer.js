import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {createFile, deleteFile, fetchFiles} from '../actions';
import Files from '../components/filesDashboardComponent';

class FilesContainer extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {

		this.props.fetchFiles();
	}

	render() {

		return (
			<Files {...this.props}/>
		)
	}
}

const bindActionCreatorsToProps = (dispatch) => {

	return bindActionCreators({
		createFile,
		deleteFile,
		fetchFiles
	}, dispatch);
}

const mapStatetoProps = ({files}) => {

	return {
		files
	}
}

export default connect(mapStatetoProps, bindActionCreatorsToProps)(FilesContainer);
