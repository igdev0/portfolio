import React, {Component} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchSkills, createProject, deleteProject, updateProject,
		loadInitialData, resetInitialData} from '../actions';
import ProjectForm from '../components/projectFormDashboardComponent';

class PortfolioProjectContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSkills()
    console.log(this.props.match.params);
    if(this.props.match.params.id) {
      this.props.loadInitialData(this.props.match.params.id)
    }
  }

  render() {
    return (
      <ProjectForm {...this.props}/>
    )
  }
}

const mapStateToProps = ({skills, initialData}) => {

  return {
    skills,
    initialData
  }
}

const bindActionCreatorsToProps = (dispatch) => {
  return bindActionCreators({
    loadInitialData,
    fetchSkills,
    createProject,
    deleteProject,
    updateProject,
    resetInitialData
  }, dispatch)
}

export default connect(mapStateToProps, bindActionCreatorsToProps)(PortfolioProjectContainer);
