import React, {Component} from 'react';
import {connect} from 'react-redux';
import bindActionCreators from 'redux';


const PrivateRoute = (ChildComponent) => {

	class _PrivateRoute extends Component {
		constructor(props) {
			super(props);
		}

		componentDidMount() {
			this.shouldNavigateAway();
		}

		componentDidUpdate() {
			this.shouldNavigateAway();
		}

		shouldNavigateAway() {
			const user = window.localStorage.getItem('token');
			
			if(!user) {
				this.props.history.push('/login');
			}
		}

		render() {

			return (
				<ChildComponent {...this.props}/>
			)
		}
	}

	const mapStateToProps = ({loginStatus}) => {

		return {
			loginStatus
		}
	}

	return connect(mapStateToProps)(_PrivateRoute)
}

export default PrivateRoute;