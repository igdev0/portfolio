import React from 'react';
import ProjectsGrid from './projectsGrid';
import ProjectForm from './projectForm';

import './portfolio.less';

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