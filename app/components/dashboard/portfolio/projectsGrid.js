import React from 'react';
import './projectsGrid.less';

const ProjectsGrid = (props) => {
	return (
		<section className="projects__grid">
		 <div className="flex-row">
		  {
		  	props.projects ? 

		  	props.projects.map((project, key) => {
		  		return (
		  			<div className="flex-col" key={key}>
				     <div className="project">
				      <div className="project-title">
				       <h2>{project.title}</h2>
				      </div>
				      <div className="project-image">
				       <img src={`${window.location.origin}/${project.images.card.path}`}/>
				      </div>
				      <div className="project-description">
				       <span className="date">Started at: <span className="date-display">{new Date(project.started_at).toLocaleDateString()}</span></span>
				       <span className="date">Finished at: <span className="date-display">{new Date(project.finished_at).toLocaleDateString()}</span></span>
				       <p>{project.description}</p>
				      </div>
				      <div className="project-actions">
				       <button type="button" className="btn btn-primary" onClick={() => props.loadInitialData(project)}>Edit</button>
				       <button type="button" className="btn btn-danger" onClick={() => props.deleteProject(project._id)}>Delete</button>
				      </div>
				   </div>
				  </div>
		  		)
		  	})

		  	: null
		  }
		 </div>
		</section>
	)
}

export default ProjectsGrid;