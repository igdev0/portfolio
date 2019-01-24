import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPosts} from '../../actions';
import Blog from '../../components/blog';

class BlogContainer extends Component {
	constructor(props) {
		super(props);
	}	

	componentDidMount() {

		this.props.fetchPosts();
	}

	render() {
		
		if(!this.props.posts.length) {
			return (
				<h1>Loading posts ...</h1>
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