import React, {Component} from 'react';

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {

		return (
			this.props.children
		)
	}
}

export default App;
