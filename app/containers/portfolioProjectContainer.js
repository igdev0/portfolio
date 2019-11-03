import React, {Component} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {reset} from 'redux-form';
import {fetchSkills, createProject, deleteProject, updateProject,
		loadInitialData, resetInitialData, fetchFiles} from '../actions';
import ProjectForm from '../components/projectFormDashboardComponent';

class PortfolioProjectContainer extends Component {
  constructor(props) {
    super(props);
	}

  componentDidMount() {
    this.props.fetchSkills()
    if(this.props.match.params.id) {
      this.props.loadInitialData(this.props.match.params.id)
    }
  }


  render() {
    return (
      <ProjectForm {...this.props}  />
    )
  }
}

const mapStateToProps = ({skills, initialData, form, files}) => {
	const project_form = form.project_form;
  return {
    skills,
    initialData,
		project_form,
		files
  }
}

const bindActionCreatorsToProps = (dispatch) => {
  return bindActionCreators({
    loadInitialData,
    fetchSkills,
    createProject,
    deleteProject,
    updateProject,
    resetInitialData,
		fetchFiles
  }, dispatch)
}

export default connect(mapStateToProps, bindActionCreatorsToProps)(PortfolioProjectContainer);
