import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchFiles} from '../actions';
import SelectImage from '../components/selectImageDashboardComponent';

class SelectImageContainer extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {

		this.props.fetchFiles();
	}

	render() {
		if (this.props.files === null) {

			 return (
				 <h2>Loading ...</h2>
			 )
		}
		else if(this.props.files.length === 0) {
			return (
				<h2>No files found.</h2>
			)
		}
		else {

			return (
			 <SelectImage {...this.props}/>
			)
		}
	}
}

const mapStateToProps = ({files}) => {

	return {
		files
	}
}

const bindActionCreatorsToProps = (dispatch) => {

	return bindActionCreators({
		fetchFiles
	}, dispatch);
}

export default connect(mapStateToProps, bindActionCreatorsToProps)(SelectImageContainer);
