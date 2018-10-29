import React,{Component} from 'react';
import {connect} from 'react-redux';
import Dashboard from '../../components/dashboard/dashboard';

class DashboardContainer extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {

		return (
			
			<Dashboard {...this.props}/>
		)
	}
}

export default connect(null, null)(DashboardContainer);