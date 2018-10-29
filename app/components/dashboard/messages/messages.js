import React from 'react';
import './messages.less';
import {Tabs, Tab} from 'react-bootstrap';

const Messages = (props) => {

	return (
		<Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
		  <Tab eventKey={1} title="Messages">
		    Tab 1 content
		  </Tab>
		  <Tab eventKey={2} title="Send message">
		    Tab 2 content
		  </Tab>
		</Tabs>
	)
}

export default Messages;