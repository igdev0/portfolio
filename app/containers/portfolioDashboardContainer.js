import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {fetchProjects, createProject, deleteProject, updateProject,
		loadInitialData, resetInitialData, fetchSkills} from '../actions';

import Portfolio from '../components/portfolioDashboardComponent';

class PortfolioContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			searchTerm: null,
			displayedResults: this.props.projects || []
		}

		this.onSearchSubmit = this.onSearchSubmit.bind(this);
		this.onSearchInputChange = this.onSearchInputChange.bind(this);
	}

	onSearchSubmit(e) {
		e.preventDefault();
	}

	onSearchInputChange(e) {
		this.setState({
			searchTerm: e.currentTarget.value
		})
		this.searchFilter();
	}

	searchFilter() {
		let projects;
		if(this.state.searchTerm === '' || this.state.searchTerm === null) {
			this.setState({displayedResults: this.props.projects})
		}
		else {
			 projects = this.props.projects.filter((item) => {
				// Check if the search term is in the name prop.
				return item.title.toLowerCase().includes(this.state.searchTerm.toLowerCase());
			})
		}

		this.setState({displayedResults: projects})
	}

	componentDidMount() {
		this.props.fetchProjects();
		this.props.fetchSkills();
	}

	render() {

		return (
			<Portfolio {...this.props} displayedResults={this.state.displayedResults} onSearchSubmit={this.onSearchSubmit} onSearchInputChange={this.onSearchInputChange}/>
		)
	}
}

const mapStateToProps = ({projects, skills, initialData}) => {
	return {
		projects,
		skills,
		initialData
	}
}

const bindActionCreatorsToProps = (dispatch) => {

	return bindActionCreators({
		fetchSkills,
		fetchProjects,
		createProject,
		deleteProject,
		updateProject,
		loadInitialData,
		resetInitialData
	}, dispatch);
}
export default connect(mapStateToProps, bindActionCreatorsToProps)(PortfolioContainer);
