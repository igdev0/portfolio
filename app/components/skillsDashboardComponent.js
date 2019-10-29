import React from 'react';
import './skillsDashboardComponent.less';
import {Tabs, Tab} from 'react-bootstrap';

const Skills = (props) => {

	return (
		<Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
		  <Tab eventKey={1} title="Skills">
		    Tab 1 content
		  </Tab>
		  <Tab eventKey={2} title="Add Skills">
		    Tab 2 content
		  </Tab>
		  <Tab eventKey={3} title="Analytics">
		    Tab 3 content
		  </Tab>
		</Tabs>
	)
}

export default Skills;
