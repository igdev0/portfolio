import React, {Component} from 'react';
import {reduxForm, Form, Field} from 'redux-form';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGlobe, faFilter, faTimes} from '@fortawesome/free-solid-svg-icons';
import {faGithub } from '@fortawesome/free-brands-svg-icons';

import './projectsComponent.less';

class Projects extends Component {

	constructor(props) {
		super(props);

		this.state = {
			searchVal: '',
			filteredResults: [],
			filtered_by: '',
			selected_skills: [],
			grid: [
			 		[],
					[],
				 	[]
			]
		}

		this.addToGrid = this.addToGrid.bind(this);
		this.filterProjects = this.filterProjects.bind(this);
		this.selectSkill = this.selectSkill.bind(this);

	}

	isSelected(skill) {
		return this.state.selected_skills.includes(skill);
	}

	componentDidUpdate(nextProps, prevState) {
		let items;

			// Let's update in this case the grid;
		items = this.props.projects.filter((item) => {
			for(let i = 0; i < this.state.selected_skills.length; i++) {

				if(item.skills.findIndex(itm => itm.name === this.state.selected_skills[i]) === -1) {
					return false;
				}
			}
			return true;

		})

		if(this.state.selected_skills !== prevState.selected_skills) {

			this.setState({
				grid: this.addToGrid(items)
			})
		}
	}

	filterProjects(skillname) {
		this.props.project.filter((item) => {

				// if(item.skills) {
				// 	item.skills.findIndex((i) => {
				//
				// 	})
				// }
		})
	}

	selectSkill(name) {

		if(!this.state.selected_skills.includes(name)) {
			this.setState({
				selected_skills: [...this.state.selected_skills, name]
			})
		}
		else {
			let idx = this.state.selected_skills.indexOf(name);
			let selected_skills = this.state.selected_skills.filter((item) => item !== name);
			this.setState({
				selected_skills
			})
		}
	}

	addToGrid(projects) {
		const grid = [[], [], []];

		projects.forEach((item, idx) => {
			if(grid[idx]) {
				grid[idx].push(item);
			}

			else {
				grid[idx % 3].push(item);
			}

		})
		return grid;
	}

	componentDidMount() {
		this.setState({
			grid: this.addToGrid(this.props.projects)
		})
	}

	render() {

		return (
			<main className="main__projects">
			  <header className="main__projects-header">
					 <h5><FontAwesomeIcon icon={faFilter}/> Filter by skills used.</h5>
					 <div className="project-skills">
						 {
							 this.props.skills.map(({name, color}, key) => {

								 return (
									 <span className="skill-tag" onClick={() => {this.selectSkill(name)}} style={{background: color}} key={key}>
										 <span className="skill-name">{name}</span>
										 {
											 this.state.selected_skills.includes(name) && <span className="x-button"><FontAwesomeIcon icon={faTimes}/></span>
										 }
									 </span>
								 )

							 })
						 }
					 </div>
			 </header>
			 <section className="main__projects-grid">


  			  {
  			  	this.state.grid ? this.state.grid.map((items, key)=> {

							return (
								<div key={key} className="main__projects__grid-column">
									{
										items.map(({_id, description, images, skills, github_url, link, }, key) => {

				  			  		return (
				 								<div key={key} className="project">
				 		 						  <div className="project-image">
				 		 						   <img src={images.card.url}/>
				 		 						  </div>
				 		 						  <div className="project-details">
				 		 						    <div className="project-description">
				 		 						     <p>{description}</p>
				 		 						    </div>
				 		 						    <div className="project-skills">
				 		 						    {skills.map(({name, color}, key) => {

				 		 						   		return (<span onClick={() => {this.filterBySkills(name)}} key={key} style={{background: color}} className={`skill-tag ${this.isSelected(name) && 'skill-selected'}`}>{name}</span>)

				 		 						    })}
				 		 						   </div>
				 		 						   <div className="project-action">
														<a target="_blank" className="github" href={github_url}><FontAwesomeIcon icon={faGithub}/></a>
														<a target="_blank" className="web" href={link}><FontAwesomeIcon icon={faGlobe}/></a>
				 		 						   </div>
				 		 						  </div>
				 								</div>
				  			  		)
				  			  	})
									}
								</div>
							)
						})

  			  	: null
  			  }
			 </section>
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
