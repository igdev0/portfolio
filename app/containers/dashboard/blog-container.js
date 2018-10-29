import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Blog from '../../components/dashboard/blog/blog.js';

class BlogContainer extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {

		// this.props.fetchCategories()
	}

	render() {
		
		return <Blog {...this.props}/>
	}
}

const bindActionCreatorsToProps = (dispatch) => {

	return bindActionCreators({
	}, dispatch)
}

export default connect(null, null)(BlogContainer);