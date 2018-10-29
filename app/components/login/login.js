import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import './login.less';

 
class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(user) {
		this.props.login(user.username, user.password);
	}

	isAuthenticated() {
		const user = window.localStorage.getItem('token');
		if(this.props.loginStatus.token) {

			this.props.history.push('/dashboard');
		} 

		else if (user) {
			this.props.history.push('/dashboard');
		}
	}

	componentDidMount() {

		this.isAuthenticated();
	}

	componentDidUpdate() {
		console.log(this.props.loginStatus)
		
		this.isAuthenticated();
	}		

	render() {
		const loginStatusStyle = {
			'display': this.props.loginStatus.message ? 'block' : 'none'
		}
		return (
		 <main className="login-main">
		  <div className="background"></div>
		  <div className="login-container">
		   <div className="title">
		   	<h1>I beilive in dreams.</h1>
		   	<p>With hard work i'll achieve my dreams, no matter what it takes. <span>I will be there</span>.</p>
		   </div>
		   <form onSubmit={this.props.handleSubmit(this.handleSubmit)} className="login-form">
		    <label htmlFor="username">Username:</label>
		   	<Field type="text" name="username" component="input" autoComplete="false" placeholder="username"/>
		    <label htmlFor="password">Password:</label>
		   	<Field type="password" name="password" component="input" autoComplete="false" placeholder="password"/>
		    <div className="form-submit">
		     <button type="submit">Log in</button>
		    </div>
		    <p style={loginStatusStyle} className="login-status">{this.props.loginStatus.message ? this.props.loginStatus.message: null}</p>
		   </form>
		  </div>
		 </main>
		) 
	}
}

export default reduxForm({form: "login"})(Login);