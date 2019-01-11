import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchProfile} from '../../actions';
import About from '../../components/about';

class AboutContainer extends Component {

	constructor(props) {

		super(props);
	}

	componentDidMount() {

		this.props.fetchProfile()
	}

	render() {

		if(!this.props.profile) {
			return (
				<h1>Loading ...</h1>
			)
		}

		else {
			return (
				<About {...this.props}/>
			)
		}
	}
}

const bindActionCreatorsToProps = (dispatch) => {

	return bindActionCreators({
		fetchProfile
	}, dispatch);
}

const mapStateToProps = ({profile}) => {

	return {
		profile
	}
}

export default connect(mapStateToProps, bindActionCreatorsToProps)(AboutContainer);