import {FETCH_PROJECTS, CREATE_PROJECT, DELETE_PROJECT, UPDATE_PROJECT, 
		LOAD_INITIAL_DATA, RESET_INITIAL_DATA} from './types';

import {FetchProjects, UpdateProject, DeleteProject, CreateProject} from '../api';


export const fetchProjects = () => {
	const payload = FetchProjects();

	return {
		type: FETCH_PROJECTS,
		payload: payload
	}
}

export const updateProject = (id, updates, type) => {

	return (dispatch) => {

		UpdateProject(id, updates, type)

		.then((data) => {

			dispatch({
				type: UPDATE_PROJECT,
				payload: data
			})

			FetchProjects()

			.then((data) => {

				dispatch({
					type: FETCH_PROJECTS,
					payload: data
				})
			})

			.catch(err => {
				console.log(err);
			})
		})

		.catch(err => {
			console.log(err);
		})
	}
}

export const deleteProject = (id) => {
	const payload = DeleteProject(id);

	return {
		type: DELETE_PROJECT,
		payload: payload
	}
}

export const createProject = (project) => {
	const payload = CreateProject(project);

	return {
		type: CREATE_PROJECT,
		payload: payload
	}
}


const padNumbers = (number) => {
	return (number < 10 ? '0' : '') + number;
}

export const loadInitialData = (data) => {
	let {started_at} = data;
	let {finished_at} = data;
	started_at = new Date(started_at);
	finished_at = new Date(finished_at);

	data.for = "PROJECT_FORM";
	started_at = `${started_at.getFullYear()}-${padNumbers(started_at.getMonth() + 1)}-${padNumbers(started_at.getDate())}`;
	finished_at = `${finished_at.getFullYear()}-${padNumbers(finished_at.getMonth() + 1)}-${padNumbers(finished_at.getDate())}`;
	
	data.started_at = started_at;
	data.finished_at = finished_at;

	return (dispatch) => {

		dispatch({
			type: LOAD_INITIAL_DATA,
			payload: data
		})
	}
}

export const resetInitialData = () => {

	return (dispatch) => {
		dispatch({
			type: RESET_INITIAL_DATA,
			payload: null
		})
	}
}