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

export const FetchProfile = () => {

	const promise = axios.get('/api/profile');

	return promise;
}

export const FetchPosts = () => {
	const promise = axios.get('/api/posts');

	return promise;
}

export const FetchPost = (_id) => {
	const promise = axios.get(`/api/posts/${_id}`);

	return promise;
}

export const FetchProjects = () => {
	const promise = axios.get('/api/projects');

	return promise;
}

export const FetchProject = (_id) => {
	const promise = axios.get(`/api/projects/${_id}`);

	return promise;
}

export const FetchSkills = () => {

	const promise = axios.get('/api/skills');

	return promise;
}