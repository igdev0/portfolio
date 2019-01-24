import React, {Component} from 'react';
import ViewPosts from '../viewPosts';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {fetchPosts, deletePost} from '../actions';

class ViewPostsContainer extends Component {

	constructor(props) {

		super(props);
	}

	componentDidMount() {
		// const {match: {params: {category}}} = this.props;

		this.props.fetchPosts();
	}

	render() {
		if(this.props.posts) {
			return (
				<ViewPosts {...this.props}/>
			)
		}
		else {
			return (
				<h1>No posts found.</h1>
			)
		}
	}
}

const mapStateToProps = ({posts}) => {
	return {
		posts: posts
	}
}
 
const bindActionCreatorsToProps = (dispatch) => {

	return bindActionCreators({
		fetchPosts,
		deletePost
	}, dispatch)
}

export default connect(mapStateToProps, bindActionCreatorsToProps)(ViewPostsContainer);