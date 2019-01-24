import React, {Component} from 'react';
import {fetchPost} from '../../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import BlogPostView from '../../components/blogPost';
class BlogPostContainer extends Component {
	constructor(props) {
		super(props);
	}
	
	componentDidMount() {
		const {match: {params: {post_id}}} = this.props;
		this.props.fetchPost(post_id);
	}

	render() {
		if(!this.props.post) {
			return (<h1>Loading Post ...</h1>)
		}

		else {
			return (<BlogPostView {...this.props}/>)
		}
	}
}

const mapStateToProps = ({post}) => {

	return {
		post
	}
}

const bindActionCreatorsToProps = (dispatch) => {

	return bindActionCreators({
		fetchPost
	}, dispatch)
}

export default connect(mapStateToProps, bindActionCreatorsToProps)(BlogPostContainer);