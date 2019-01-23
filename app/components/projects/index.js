import React, {Component} from 'react';
import {reduxForm, Form, Field} from 'redux-form';
import {Link} from 'react-router-dom';

import './styles.less';

class Projects extends Component {

	constructor(props) {
		super(props);
		
		this.state = {
			searchVal: '',
			filteredResults: [],
			filtered_by: ''
		}

		this.sortByDate = this.sortByDate.bind(this);
		this.filterBySkills = this.filterBySkills.bind(this);
		this.filterByName = this.filterByName.bind(this);
	}

	componentDidMount() {
		this.setState({
			filteredResults: this.props.projects
		})
	}

	sortByDate(e) {

		const items = this.state.filteredResults.sort((f, s) => {

			// first project
			const first_project_started_at = new Date(f.started_at);
			const first_project_finished_at = new Date(f.finished_at);

			// Second project
			const second_project_started_at = new Date(s.started_at);
			const second_project_finished_at = new Date(s.finished_at);

			switch(e.target.value) {

				case "Newest":
					return first_project_finished_at < second_project_finished_at ? 1 : -1;
				case "Oldest":
					return first_project_finished_at > second_project_finished_at ? 1 : -1;
				case "Longest":
					return (first_project_finished_at - first_project_started_at) < (second_project_finished_at - second_project_started_at) ? 1 : -1;
				case "Shortest":
					return (first_project_finished_at - first_project_started_at) > (second_project_finished_at - second_project_started_at) ? 1 : -1;
				default:

					return 0;
			}
		})

		this.setState({
			filteredResults: items
		})
	}

	filterBySkills(name) {
		const items = this.props.projects.filter((project) => {
			console.log(project.skills.find(s => s.name === name))
			return project.skills.find(s => s.name === name);
		})

		this.setState({
			filteredResults: items
		})
	}

	filterByName({search}) {

	}

	render() {

		return (
			<main className="main__projects">
			 <div className="main__projects-container">
			  <header className="main__projects-header">
              <Form className="main__projects__header-search" onSubmit={this.props.handleSubmit(this.filterByName)}>
               <Field type="text" name="search" label="search ..." component={FieldTypeText}/>
              </Form>
              <div className="main__projects__header-sort">
               <span><i className="fas fa-sort"></i></span>
               <select onChange={e => this.sortByDate(e)}>
               	<option defaultValue="Sort">Sort</option>
               	<option value="Newest">Newest</option>
               	<option value="Oldest">Oldest</option>
               	<option value="Longest">Longest</option>
               	<option value="Shortest">Shortest</option>
               </select>	
              </div>
              <div className="main__projects__header-filter">
               <span><i className="fas fa-filter"></i></span>
               <div className="main__projects__header__filter-skills">
               	{
               		this.props.skills.map(({name, color}, key) => {

               			return (
               				<span className="skill-tag" onClick={() => {this.filterBySkills(name)}} style={{background: color}} key={key}>{name}</span>
               			)
               		})
               	}
               </div>
              </div>
			 </header>
			 <section className="main__projects-info">
			 	<h3><span>{this.props.projects.length}</span> projects found.</h3>
			 </section>
			 <section className="main__projects-grid">
			  {
			  	this.state.filteredResults ? this.state.filteredResults.map(({_id, description, images, skills},key) => {

			  		return (
			  			<div key={key} className="main__projects__grid-column">
						  <div className="project-image">
						   <img src={`${window.location.origin}/${images.card.path}`}/>
						  </div>
						  <div className="project-details">
						    <div className="project-description">
						     <p>{description}</p>
						    </div>
						    <div className="project-skills">
						    {skills.map(({name, color}, key) => {
 
						   		return (<span onClick={() => {this.filterBySkills(name)}} key={key} style={{background: color}} className="skill-tag">{name}</span>)

						    })}
						   </div>
						   <div className="project-action">
						    <Link to={`/portfolio/${_id}?key=${key}`}>Learn more</Link>
						   </div>
						  </div>
						</div>
			  		)
			  	})

			  	: null
			  }
			 </section>
			 </div>
			</main>
		)
	}
}

const FieldTypeText = ({
	input,
	type,
	label,
	meta: {
		error,
		touched,
		warn
	}
}) => {

	return (
		<div className="field-wrapper">
		 <input type={type} placeholder={label} {...input}/>
		 <button type="submit"><i className="fas fa-search"></i></button>
		</div>
	)
}


export default reduxForm({form: 'projectsFilter'})(Projects);
