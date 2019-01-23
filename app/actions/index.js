import {LOGIN_REQUEST, LOGIN_ERROR, LOG_OUT,
		FETCH_PROFILE, FETCH_POSTS, FETCH_POST_BY_ID,
		FETCH_PROJECTS, FETCH_SKILLS, FETCH_PROJECT,
		FETCH_NEXT_PROJECT, FETCH_PREVIOUS_PROJECT} from './types';

import {Login, FetchProfile, FetchPosts, FetchPost, FetchProjects, FetchProject, FetchSkills,
		FetchNextProject, FetchPreviousProject} from '../api';


// Log in actions

export const login = (username, password) => {

	return (dispatch) => {

		dispatch({type: LOGIN_REQUEST, payload: {}});
		Login(username, password)

		.then(({data}) => {
			window.localStorage.setItem('token', data.token);
			dispatch({type: LOGIN_SUCCESS, payload: data})
		})

		.catch((err) => {

			if(err) {
				dispatch({type: LOGIN_ERROR, payload: {message: "The username or password is incorect."}})
			}
		})
	}
}

export const logout = (username, password) => {

	window.localStorage.removeItem('token');

	return {
		type: LOG_OUT,
		payload: {}
	}
}

export const fetchProfile = () => {
	const payload = FetchProfile();

	return {
		type: FETCH_PROFILE,
		payload: payload
	}
}

export const fetchPosts = (category_name) => {
	const payload = FetchPosts(category_name);

	return {
		type: FETCH_POSTS,
		payload: payload
	}
}

export const fetchPost = (_id) => {

	const payload = FetchPost(_id);

	return {
		type: FETCH_POST_BY_ID,
		payload: payload
	}
}

export const fetchProjects = () => {
	const payload = FetchProjects();

	return {
		type: FETCH_PROJECTS,
		payload: payload
	}
}

export const fetchProject = (_id) => {
	const payload = FetchProject(_id);

	return {
		type: FETCH_PROJECT,
		payload: payload
	}
}

export const fetchNextProject = (_id) => {
	const payload = FetchNextProject(_id);

	return {
		type: FETCH_NEXT_PROJECT,
		payload: payload
	}
}

export const fetchPreviousProject = (_id) => {
	const payload = FetchPreviousProject(_id);

	return {
		type: FETCH_PREVIOUS_PROJECT,
		payload: payload
	}
}


export const fetchSkills = () => {

	const payload = FetchSkills();

	return {
		type: FETCH_SKILLS,
		payload: payload
	}
}