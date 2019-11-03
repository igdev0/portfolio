import React from 'react';
import ProjectForm from './projectFormDashboardComponent';
import {Link} from 'react-router-dom';

import './portfolioDashboardComponent.less';

const Portfolio = (props) => {
	return (
		<main className="portfolio-main">
		 <div className="projects-header">
			 <h3>Projects.</h3>
			 <form onSubmit={(e) => {props.onSearchSubmit(e)}}>
				 <input type="text" name="search_project_filter" onChange={(e) => {props.onSearchInputChange(e)}} placeholder="Search projects ..."/>
				 <button type="submit">Search</button>
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
					 props.projects ? props.projects.map((project, key) => {
						 return (
							 <tr key={key}>
								 <td className="title">{project.title}</td>
								 <td>{project.description}</td>
								 <td><a href={project.link}>{project.link}</a></td>
								 <td>{project.start_at}</td>
								 <td>
									 <button type="button" className="btn btn-danger">Delete</button>
									 <Link className="btn btn-primary" to={'/dashboard/portfolio/edit/' + project._id}>Edit</Link>
								 </td>
							 </tr>
						 )
					 })
					 : null
				 }
			 </tbody>
		 </table>
		 <div className="actions">
			 <Link to="/dashboard/portfolio/add" className="btn btn-success">Add new project</Link>
		 </div>
		</main>
	)
}

export default Portfolio;
