import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ProfileOverview from '../';
import {fetchOverview} from '../actions';

class ProfileOverviewContainer extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {

		this.props.fetchOverview();
	}

	render() {
		if(this.props.overview) {
			return (<ProfileOverview {...this.props}/>)
		}
		else {
			return (<h1>Loading ...</h1>)
		}
	}
}

const mapStateToProps = ({overview}) => {

	return {
		overview: overview
	}
}

const bindActionCreatorsToProps = (dispatch) => {

	return bindActionCreators({
		fetchOverview
	}, dispatch)
}

export default connect(mapStateToProps, bindActionCreatorsToProps)(ProfileOverviewContainer);