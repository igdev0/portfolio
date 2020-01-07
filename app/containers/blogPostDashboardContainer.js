import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import BlogPostDashboardComponent from '../components/blogPostDashboardComponent';

import {createPost, deletePost, fetchFiles, updatePost, loadInitialDataForPost} from '../actions';

class BlogPostDashboardContainer extends Component {

	constructor(props) {
		super(props);

		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}

	componentDidMount() {
		if(this.props.match.params.slug) {
      this.props.loadInitialDataForPost(this.props.match.params.slug)
    }

		this.props.fetchFiles();
	}

	handleFormSubmit(formProps) {
		const {match: {params: {category}}} = this.props;
		this.props.createPost(category, formProps)
	}

	render() {

		return (
				<BlogPostDashboardComponent {...this.props} handleFormSubmit={this.handleFormSubmit}/>
		)
	}
}

const mapStateToProps = ({files, form, initialData}) => {
	const blog_post = form.blog_post;
	return {
		files,
		blog_post,
		initialData
	}
}

const bindActionCreatorsToProps = (dispatch) => {

	return bindActionCreators({
		createPost,
		deletePost,
		updatePost,
		fetchFiles,
		loadInitialDataForPost
	}, dispatch)
}

export default connect(mapStateToProps, bindActionCreatorsToProps)(BlogPostDashboardContainer);
