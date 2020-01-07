import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import {fetchProjects, createProject, deleteProject, updateProject,
		loadInitialData, resetInitialData, fetchSkills} from '../actions';

import Portfolio from '../components/portfolioDashboardComponent';
import NotFoundComponent from '../components/notFoundComponent';
import LoadingComponent from '../components/loadingComponent';

class PortfolioContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			searchTerm: '',
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
			searchTerm: e.currentTarget.value,
			displayedResults: this.props.projects.filter((item) => {
			// Check if the search term is in the name prop.
				return item.title.toLowerCase().includes(e.currentTarget.value.toLowerCase());
			})
		})
	}

	componentDidMount() {
		this.props.fetchProjects();

		this.props.fetchSkills();
	}

	render() {

		if(this.props.projects === null) {
			return (
				<NotFoundComponent name="projects">
					<Link className="btn btn-success" to="/dashboard/portfolio/add">Add projects</Link>
				</NotFoundComponent>
			)
		}
		else if(!this.props.projects.length) {
			return (
				<LoadingComponent/>
			)
		}
		else {
			return (
				<Portfolio {...this.props} displayedResults={this.state.displayedResults} onSearchSubmit={this.onSearchSubmit} onSearchInputChange={this.onSearchInputChange}/>
			)
		}
	}
}

const mapStateToProps = ({projects, skills, initialData}) => {
	console.log(initialData)
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
