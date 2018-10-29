import axios from 'axios';

// ------------------- Categories -------------

export const Login = (username, password) => {
	const user = {
		username: username,
		password: password
	};

	const promise = axios.post('/user/auth/login', {
		username: user.username,
		password: user.password
	});

	return promise;
}
