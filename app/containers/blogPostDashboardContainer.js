import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import BlogPostDashboardComponent from '../components/blogPostDashboardComponent';

import {RESET_INITIAL_DATA} from '../actions/types';
import {createPost, deletePost, fetchFiles, updatePost, loadInitialDataForPost, resetInitialData} from '../actions';

class BlogPostDashboardContainer extends Component {

	constructor(props) {
		super(props);

		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}
	componentWillUnmount() {
		if(this.props.initialData) {
			this.props.resetInitialData();
		}
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
		if(this.props.match.params.slug && !this.props.initialData) {
			return (
				<h1>Loading initial data ...</h1>
			)
		}
		else {
			return (
					<BlogPostDashboardComponent {...this.props} handleFormSubmit={this.handleFormSubmit}/>
			)
		}
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
		resetInitialData,
		loadInitialDataForPost
	}, dispatch)
}

export default connect(mapStateToProps, bindActionCreatorsToProps)(BlogPostDashboardContainer);
