import React,{Component} from 'react';
import {connect} from 'react-redux';
import Dashboard from '../components/dashboardComponent';
import {logout, getUserData} from '../actions';
import {bindActionCreators} from 'redux';

class DashboardContainer extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.props.getUserData();
	}
	render() {

		return (

			<Dashboard {...this.props}/>
		)
	}
}
const mapStatetoProps = ({user}) => {

	return {
		user
	}
}
const bindActionCreatorsToProps = (dispatch) => {

	return bindActionCreators({
		logout,
		getUserData
	}, dispatch)
}

export default connect(mapStatetoProps, bindActionCreatorsToProps)(DashboardContainer);
