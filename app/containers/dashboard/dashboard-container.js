import React,{Component} from 'react';
import {connect} from 'react-redux';
import Dashboard from '../../components/dashboard/dashboard';
import {logout} from '../../actions';
import {bindActionCreators} from 'redux';

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

const bindActionCreatorsToProps = (dispatch) => {

	return bindActionCreators({
		logout
	}, dispatch)
}

export default connect(null, bindActionCreatorsToProps)(DashboardContainer);