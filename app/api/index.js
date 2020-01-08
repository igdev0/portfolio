import axios from 'axios';

const privateRequest = () => {
	let token = window.localStorage.getItem('token');
	if(token) {
		const instance = axios.create({
			headers: {
				'Authorization': `bearer ${token}`
			}
		})

		return instance;
	}
	
	else {
		throw 'it looks like you`re trying to access a method that is not available.';
	}
}

export const UpdateUsername = (id, username) => {
	const axios = privateRequest();
	const promise = axios.put('/user/username', {id, username});
	return promise;
}

export const UpdateUserAvatar = (id, avatar) => {
	const formData = new FormData();
	formData.append('file', avatar);
	formData.append('user_id', id);

	const config = {
		headers: {
			'Content-Type': 'multipart/form-data'
		}
	};

	const promise = axios.post('/user/avatar', formData, config);

	return promise;
}

export const GetUser = async () => {

	try {
		return await	axios.get('/user');
	}
	catch(e) {
		throw e;
	}
}

export const UpdateUserSocial = (id, update) => {
	const promise = axios.put('/user/social', {id, update});
	return promise;
}

export const UpdateUserPassword = (id, {current_password, new_password}) => {
	const promise = axios.put('/user/password', {id, current_password, new_password});
	return promise;
}

export const UpdateUserEmail = (id, email) => {
	const promise = axios.put('/user/email', {id, email});
	return promise;
}

export const FetchSchools = () => {
	const promise = axios.get(`/api/education`);

	return promise;
}

export const CreateSchool = (school) => {
	// school is an object;
	const promise = axios.post(`/api/education`, school);

	return promise;
}

export const UpdateSchool = (id, type, updates) => {
	const promise = axios.put(`/api/education`, {
		id: id,
		type: type,
		updates: updates

	})

	return promise;
}

export const DeleteSchool = (id) => {

	const promise = axios.delete(`/api/education`, {
		params: {
			id: id
		}
	})

	return promise;
}

export const CreateSkill = (skill) => {

	const promise = axios.post('/api/skills', skill)

	return promise;
}

export const DeleteSkill = (id, school_id) => {

	const promise = axios.delete('/api/skills', {
		params: {
			id: id,
			school_id: school_id
		}
	})

	return promise;
}

export const UpdateSkill = (id, update) => {
	const promise = axios.put('/api/skills', {
		id: id,
		update: update
	})

	return promise;
}

export const FetchSkills = () => {

	const promise = axios.get('/api/skills');

	return promise;
}

export const FetchProfileIntroduction = () => {
	const promise = axios.get('/api/profile');

	return promise;
}

export const UpdateProfileIntroduction = (update) => {
	const promise = axios.put('/api/profile', {
		update: update
	})

	return promise;
}

export const FetchProjects = () => {
	const payload = axios.get('/api/projects');

	return payload;
}

export const UpdateProject = (id, updates, type) => {
	const payload = axios.put('/api/projects', {
		id: id,
		updates: updates,
		type: type
	})

	return payload;
}

export const DeleteProject = (id) => {
	const payload = axios.delete('/api/projects', {
		params: {
			id: id
		}
	})

	return payload;
}

export const CreateProject = (project) => {
	const payload = axios.post('/api/projects', project);

	return payload;
}
// ------------------- Categories -------------
export const FetchPosts = (category_name) => {
	const promise = axios.get('/api/posts', {
		params: {
			category_name: category_name
		}
	})

	return promise;
}

export const FetchPostById = (id) => {
	const promise = axios.get(`/api/posts/${id}`)
	return promise;
}

export const CreatePost = (post) => {
	const promise = axios.post('/api/posts', {
		post
	})

	return promise;
}

export const UpdatePost = (slug, update) => {
	const promise = axios.put(`/api/posts`, {
		slug: slug,
		update
	})

	return promise;
}

export const DeletePost = (post_id) => {
	const promise = axios.delete(`/api/posts`, {
		params: {
			post_id: post_id
		}
	});

	return promise;
}

// ------------------ Comments ----------------

export const FetchFiles = (params) => {

	const promise = axios.get('/api/files', {header: {params: {params}}});
	return promise;
}

export const CreateFile = (file, data) => {
	const formData = new FormData();

	formData.append('file', file);
	formData.append('folder', data.folder);
	formData.append('alt', data.alt);

	const config = {
		headers: {
			'Content-Type': 'multipart/form-data'
		}
	};

	const promise = axios.post('/api/files', formData, config);

	return promise;
}

export const FetchOverview = () => {

	const promise = axios.get('/api/overview')

	return promise;
}

export const DeleteFile = (id) => {
	const promise = axios.delete('/api/files', {
		params: {
			id: id
		}
	})

	return promise;
}

// ================================

export const CreateComment = (post, comment) => {
	const promise = axios.post(`/api/posts/${post._id}/comment`, {
		post_id: post._id,
		// ...post
	})

	return promise;
}

export const UpdateComment = (post_id, comment_id, update) => {
	const promise = axios.put(`/api/posts/${post._id}/comment/${comment_id}`, {
		// ...update
	})

	return promise;
}

export const DeleteComment = (post_id, comment_id) => {
	const promise = axios.delete(`/api/posts/${post_id}/${comment_id}`);

	return promise;
}

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

export const FetchPost = (slug) => {
	const promise = axios.get(`/api/posts/${slug}`);

	return promise;
}

export const FetchProject = (_id) => {
	const promise = axios.get(`/api/projects/${_id}`);

	return promise;
}

export const FetchNextProject = (_id) => {
	console.log(_id)
	const promise = axios.get(`/api/projects/${_id}`, {
		params: {
			next_project: true,
			previous_project: false
		}
	})

	return promise;
}

export const FetchPreviousProject = (_id) => {
	const promise = axios.get(`/api/projects/${_id}`, {
		params: {
			next_project: false,
			previous_project: true
		}
	})

	return promise;
}
