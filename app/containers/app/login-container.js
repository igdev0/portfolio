import React, {Component} from 'react';
import Login from '../../components/login/login.js';
import {login} from '../../actions';
import {connect} from 'react-redux';

import {bindActionCreators} from 'redux';

class LoginContainer extends Component {
	constructor(props) {
		super(props);
	}

	render() {

		return (
			<Login {...this.props}/>
		)
	}
}

const bindActionCreatorsToProps = (dispatch) => {

	return bindActionCreators({
		login: login
	}, dispatch)
}

const mapStateToProps = ({loginStatus}) => {

	return {
		loginStatus
	}
}

export default connect(mapStateToProps,bindActionCreatorsToProps)(LoginContainer);