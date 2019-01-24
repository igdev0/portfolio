import React, {Component} from 'react';
import Contact from '../../components/contact';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class ContactContainer extends Component {

	constructor(props) {

		super(props);

		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}

	componentDidMount() {

	}

	handleFormSubmit(props) {
		console.log(props);
	}

	render() {

		return (
			<Contact {...this.props} handleFormSubmit={this.handleFormSubmit}/>
		)
	}
}

const mapStateToProps = (state) => {

	return {

	}	
}

const bindActionCreatorsToProps = (dispatch) => {

	return bindActionCreators({

	}, dispatch);
}

export default connect(null, null)(ContactContainer);
