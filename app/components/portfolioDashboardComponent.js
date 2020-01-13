import React from 'react';
import ProjectForm from './projectFormDashboardComponent';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './portfolioDashboardComponent.less';

const Portfolio = (props) => {
	const projects = !props.displayedResults.length ? props.projects : props.displayedResults;
	return (
		<main className="portfolio-main">
		 <div className="projects-header">
			 <h3>Projects.</h3>
			 <div className="actions">
				<Link to="/dashboard/portfolio/add" className="btn btn-success">Add new project</Link>
			 </div>
			 <form className="projects__header-search" onSubmit={(e) => {props.onSearchSubmit(e)}}>
				 <input type="text" name="search_project_filter" onChange={(e) => {props.onSearchInputChange(e)}} placeholder="Search projects ..."/>
		 </form>
		 </div>
		 <table className="projects-view">
			 <thead className="projects__view-head">
				 <tr >
					 <th>
	  				 name
	  			 </th>
	  			 <th>
	  				 Description
	  			 </th>
					 <th>
						 URL
					 </th>
	  			 <th>
	  				 Date
	  			 </th>
	  			 <th>
	  				 Actions
	  			 </th>
				 </tr>
			 </thead>
			 <tbody className="projects__view-body">
				 {
					 projects.map((project, key) => {
						 return (
							 <tr key={key}>
								 <td className="title"><div>{project.title}</div></td>
								 <td><div>{project.description}</div></td>
								 <td><div><a href={project.link} target="_blank">{project.link}</a></div></td>
								 <td><div>{project.start_at}</div></td>
								 <td>
									 <button type="button" className="btn btn-danger" onClick={() => {props.deleteProject(project._id)}}>Delete</button>
									 <Link className="btn btn-primary" to={'/dashboard/portfolio/edit/' + project._id}>Edit</Link>
								 </td>
							 </tr>
						 )
					 })
				 }
			 </tbody>
		 </table>
		</main>
	)
}

export default Portfolio;
