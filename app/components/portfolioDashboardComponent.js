import React from 'react';
import ProjectsGrid from './projectsGridDashboardComponent';
import ProjectForm from './projectFormDashboardComponent';

import './portfolioDashboardComponent.less';

const Portfolio = (props) => {
	return (
		<main className="portfolio-main">
		 <header className="portfolio__main-header">
		  <ProjectForm {...props}/>
		 </header>
		 <ProjectsGrid {...props}/>
		</main>
	)
}

export default Portfolio;
