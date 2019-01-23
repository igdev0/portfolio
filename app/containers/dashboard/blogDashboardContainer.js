import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import BlogDashboard from '../../components/dashboard/blog/blog.js';

class BlogDashboardContainer extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {

		// this.props.fetchCategories()
	}

	render() {
		
		return <BlogDashboard {...this.props}/>
	}
}

const bindActionCreatorsToProps = (dispatch) => {

	return bindActionCreators({
	}, dispatch)
}

export default connect(null, null)(BlogDashboardContainer);