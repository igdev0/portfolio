import React, {Component} from 'react';
import './home.less';
import axios from 'axios';

class Home extends Component {
	constructor(props) {
		super(props);
	

	}

	componentDidMount() {
		
	}

	render() {

		return (
			<header className="temporary-header">
			 <h1>Problems are nothing more than <span>subconscious patterns</span> that needs to be <span>adjusted</span>.</h1>
			</header>
		)
	}
}

export default Home;