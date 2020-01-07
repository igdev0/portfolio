import React, {Component} from 'react';
import {fetchPost, fetchPosts} from '../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import BlogPostView from '../components/blogPostComponent';

class BlogPostContainer extends Component {
	constructor(props) {
		super(props);
	}

	componentDidUpdate(prevProps, prevState) {

		if(this.props.post && this.props.post.slug !== this.props.match.params.slug) {
			this.props.fetchPost(this.props.match.params.slug);
			
		}
	}

	componentDidMount() {
		const {match: {params: {slug}}} = this.props;
		this.props.fetchPost(slug);
		// Fetch all the posts in case the post is accessed directly.
		// So i can show next/previous buttons.

		if(!this.props.posts.length) {
			this.props.fetchPosts();
		}
	}

	render() {
		if(!(this.props.post && this.props.posts.length)) {
			return (<h1>Loading Post ...</h1>)
		}

		else if(this.props.post && this.props.post.slug === this.props.match.params.slug && this.props.posts.length > 0) {

			return (<BlogPostView {...this.props}/>)
		}
		else {
			return (<h1>Loading ...</h1>)
		}
	}
}

const mapStateToProps = ({post, posts}) => {

	return {
		post,
		posts
	}
}

const bindActionCreatorsToProps = (dispatch) => {

	return bindActionCreators({
		fetchPost,
		fetchPosts
	}, dispatch)
}

export default connect(mapStateToProps, bindActionCreatorsToProps)(BlogPostContainer);
