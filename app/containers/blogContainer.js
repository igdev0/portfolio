import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPosts} from '../actions';
import Blog from '../components/blogComponent';
import LoadingRoller from '../components/loadingRoller';
import PostsNotFound from '../components/postsNotFound';

class BlogContainer extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {

		this.props.fetchPosts();
	}

	render() {

		if(!this.props.posts) {
			return (
				<LoadingRoller/>
			)
		}
		else if(!this.props.posts.length) {
			return (
				<PostsNotFound {...this.props}/>
			)
		}

		else {
			return (
				<Blog {...this.props}/>
			)
		}
	}
}

const mapStateToProps = ({posts}) => {

	return {
		posts
	}
}

const bindActionCreatorsToProps = (dispatch) => {

	return bindActionCreators({
		fetchPosts
	}, dispatch);
}

export default connect(mapStateToProps, bindActionCreatorsToProps)(BlogContainer);
