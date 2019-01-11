import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CreatePost from '../CreatePost';

import {createPost, deletePost} from '../actions';

class CreatePostContainer extends Component {

	constructor(props) {
		super(props);

		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}

	componentDidMount() {
		const {match: {params: {category}}} = this.props;
	}

	handleFormSubmit(formProps) {
		const {match: {params: {category}}} = this.props;
		this.props.createPost(category, formProps)
	}

	render() {

		return (
				<CreatePost {...this.props} handleFormSubmit={this.handleFormSubmit}/>
		)
	}
}

const mapStateToProps = () => {

	return {
		
	}
}

const bindActionCreatorsToProps = (dispatch) => {

	return bindActionCreators({
		createPost,
		deletePost
	}, dispatch)
}

export default connect(mapStateToProps, bindActionCreatorsToProps)(CreatePostContainer);