import React from 'react';
import './todo.less';
import {Tabs, Tab} from 'react-bootstrap';

const Todo = (props) => {

	return (
		<Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
		  <Tab eventKey={1} title="Todos">
		    Tab 1 content
		  </Tab>
		  <Tab eventKey={2} title="Add todo">
		    Tab 2 content
		  </Tab>
		  <Tab eventKey={3} title="Analytics">
		    Tab 3 content
		  </Tab>
		</Tabs>
	)
}

export default Todo;