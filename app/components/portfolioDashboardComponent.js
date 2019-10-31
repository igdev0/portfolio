import React from 'react';
import ProjectForm from './projectFormDashboardComponent';
import {Link} from 'react-router-dom';

import './portfolioDashboardComponent.less';

const Portfolio = (props) => {

	return (
		<main className="portfolio-main">
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
									 <button type="button" className="button button-danger">Delete</button>
									 <Link to={'/dashboard/portfolio/edit/' + project._id}>Edit</Link>
								 </td>
							 </tr>
						 )
					 })
					 : null
				 }
			 </tbody>
		 </table>
		</main>
	)
}

export default Portfolio;
