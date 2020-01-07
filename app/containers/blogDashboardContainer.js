import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import {fetchPosts, createPost, deletePost, updatePost, fetchFiles} from '../actions';
import BlogDashboard from '../components/blogDashboardComponent';
import LoadingComponent from '../components/loadingComponent';
import NotFoundComponent from '../components/notFoundComponent';

class BlogDashboardContainer extends Component {
	constructor(props) {
		super(props);
		this.onSearchInputChange = this.onSearchInputChange.bind(this);
		this.state = {
			displayedResults: null
		}
	}

	componentDidMount() {
		this.props.fetchPosts();
		// this.props.fetchFiles();
	}
	onSearchSubmit(e) {
		e.preventDefault();

	}

	onSearchInputChange(e) {
		const {currentTarget: {value}} = e;
		this.setState({
			displayedResults: this.props.posts.filter((item) => {return item.title.toLowerCase().includes(value.toLowerCase())})
		})
	}
	render() {
		if(this.props.posts === null) {
			return (
				<NotFoundComponent name="posts">
					<Link className="btn btn-success" to="/dashboard/blog/create">Create post.</Link>
				</NotFoundComponent>
			)
		}
		else if(!this.props.posts.length) {
			return (<LoadingComponent/>)
		}
		else {
			return (
				<BlogDashboard {...this.props} onSearchInputChange={this.onSearchInputChange} displayedResults={this.state.displayedResults}/>
			)
		}
	}
}

const bindActionCreatorsToProps = (dispatch) => {

	return bindActionCreators({
		fetchPosts,
		deletePost
	}, dispatch)
}

const mapStateToProps = ({posts}) => {

	return {
		posts
	}
}

export default connect(mapStateToProps, bindActionCreatorsToProps)(BlogDashboardContainer);
