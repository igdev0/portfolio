
import diff from 'object-diff';
import {
	LOGIN_REQUEST, LOGIN_ERROR, LOG_OUT, FETCH_PROFILE,
	FETCH_POST_BY_ID,	FETCH_PROJECTS, FETCH_SKILLS, FETCH_PROJECT,
	FETCH_NEXT_PROJECT, FETCH_PREVIOUS_PROJECT,CREATE_CATEGORY, DELETE_CATEGORY,
	UPDATE_CATEGORY, FETCH_CATEGORIES, CREATE_POST, DELETE_POST, UPDATE_POST,
	FETCH_POSTS, FETCH_POSTS_BY_CATEGORY, FETCH_CATEGORY,
	CREATE_COMMENT, UPDATE_COMMENT, DELETE_COMMENT, LOGIN_SUCCESS, CREATE_FILE,
	DELETE_FILE, FETCH_FILES, FETCH_OVERVIEW, CREATE_PROJECT,
	DELETE_PROJECT, UPDATE_PROJECT, LOAD_INITIAL_DATA, RESET_INITIAL_DATA,
	FETCH_SCHOOLS, UPDATE_SCHOOL, DELETE_SCHOOL, CREATE_SCHOOL,
	CREATE_SKILL, UPDATE_SKILL, DELETE_SKILL, UPDATE_SCHOOL_SKILLS,
	LOAD_INITIAL_DATA__FOR__SKILL, LOAD_INITIAL_DATA__FOR__SCHOOL,
	FETCH_PROFILE_INTRODUCTION, UPDATE_PROFILE_INTRODUCTION

} from './types';

import {
	Login, FetchProfile, FetchPost, FetchProjects, FetchProject,
	FetchSkills, FetchNextProject, FetchPreviousProject, FetchPosts, FetchPostById,
	CreatePost, UpdatePost, DeletePost, CreateComment,UpdateComment, DeleteComment,
	CreateFile, DeleteFile, FetchFiles, FetchOverview, UpdateProject,
	DeleteProject, CreateProject, FetchSchools, CreateSchool, UpdateSchool,
	DeleteSchool, CreateSkill, UpdateSkill, DeleteSkill,
	UpdateProfileIntroduction, FetchProfileIntroduction
} from '../api';

export const fetchProjects = () => {
	const payload = FetchProjects();

	return {
		type: FETCH_PROJECTS,
		payload: payload
	}
}

export const fetchSchools = (school) => {
	const payload = FetchSchools(school);

	return {
		type: FETCH_SCHOOLS,
		payload: payload
	}
}

export const createSchool = (school) => {
	const payload = CreateSchool(school);

	return {
		type: CREATE_SCHOOL,
		payload: payload
	}
}

export const updateSchool = (id, type, update) => {

	return (dispatch) => {

		UpdateSchool(id, type, update)

		.then((data) => {
			dispatch({
				type: UPDATE_SCHOOL,
				payload: data
			})

			FetchSkills()

			.then((skills) => {
				dispatch({
					type: FETCH_SKILLS,
					payload: skills
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

export const deleteSchool = (id) => {
	const payload = DeleteSchool(id);

	return {
		type: DELETE_SCHOOL,
		payload: payload
	}
}

export const createSkill = (skill) => {
	const payload = CreateSkill(skill);

	return {
		type: CREATE_SKILL,
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

export const updateSkill = (id, updates) => {

	return (dispatch) => {

		UpdateSkill(id, updates)

		.then((data) => {

			dispatch({
				type: UPDATE_SKILL,
				payload: data
			})

			FetchSkills()

			.then(data => {

				dispatch({
					type: FETCH_SKILLS,
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

export const deleteSkill = (id, school_id) => {
	return (dispatch) => {

		DeleteSkill(id, school_id)

		.then((data) => {
			dispatch({
				type: DELETE_SKILL,
				payload: data
			})

			FetchSchools()

			.then(data => {
				dispatch({
					type: FETCH_SCHOOLS,
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

export const loadInitialDataForSkill = (data) => {
	let {experience: {from}} = data;
	let {experience: {to}} = data;

	from = new Date(from);
	to = new Date(to);


	from = `${from.getFullYear()}-${padNumbers(from.getMonth() + 1)}-${padNumbers(from.getDate())}`
	to = `${to.getFullYear()}-${padNumbers(to.getMonth() + 1)}-${padNumbers(to.getDate())}`
	data.experience.from = from;
	data.experience.to = to;
	data.for = LOAD_INITIAL_DATA__FOR__SKILL;

	return {
		type: LOAD_INITIAL_DATA__FOR__SKILL,
		payload: data
	}
}

export const loadInitialDataForSchool = (data) => {
	let {experience: {from}} = data;
	let {experience: {to}} = data;
	from = new Date(from);
	to = new Date(to);

	from = `${from.getFullYear()}-${padNumbers(from.getMonth() + 1)}-${padNumbers(from.getDate())}`
	to = `${to.getFullYear()}-${padNumbers(to.getMonth() + 1)}-${padNumbers(to.getDate())}`
	data.experience.from = from;
	data.experience.to = to;
	data.for = LOAD_INITIAL_DATA__FOR__SCHOOL;

	return {
		type: LOAD_INITIAL_DATA__FOR__SCHOOL,
		payload: data
	}
}

export const fetchProfileIntroduction = () => {
	const payload = FetchProfileIntroduction();

	return {
		type: FETCH_PROFILE_INTRODUCTION,
		payload: payload
	}
}

export const updateProfileIntroduction = (update) => {
	const payload = UpdateProfileIntroduction(update);

	return {
		type: UPDATE_PROFILE_INTRODUCTION,
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

export const loadInitialData = (id) => {

 return (dispatch) => {
	FetchProject(id)

	.then((res) => {
		const {data} = res;
		let {started_at} = data;
		let {finished_at} = data;
		started_at = new Date(started_at);
		finished_at = new Date(finished_at);

		data.for = "PROJECT_FORM";
		started_at = `${started_at.getFullYear()}-${padNumbers(started_at.getMonth() + 1)}-${padNumbers(started_at.getDate())}`;
		finished_at = `${finished_at.getFullYear()}-${padNumbers(finished_at.getMonth() + 1)}-${padNumbers(finished_at.getDate())}`;

		data.started_at = started_at;
		data.finished_at = finished_at;
		data.images = {
			card: data.images.card._id,
			hero: data.images.hero._id
		}
			dispatch({
				type: LOAD_INITIAL_DATA,
				payload: data
			})
	})

	.catch(err => {
		console.log(err)
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

// overview actions
// =======================
export const fetchOverview = () => {

	const payload = FetchOverview();

	return {
		type: FETCH_OVERVIEW,
		payload: payload
	}

}

// =======================================
// Client ACTIONS

// const reader = new FileReader();
// const file = reader.readAsText(action.payload.body.data)
export const fetchPostById = (id) => {

	if(id) {
		const payload = FetchPostById(id);
		return {
			type: FETCH_POST_BY_ID,
			payload: payload
		}
	}
}

export const createPost = (category_id, post) => {
	const payload = CreatePost(category_id, post);

	return {
		type: CREATE_POST,
		payload: payload
	}
}

export const updatePost = (post_id, post_title, update) => {

	const payload = UpdatePost(post_id, post_title, update);

	return {
		type: UPDATE_POST,
		payload: payload
	}
}

export const deletePost = (post_id) => {
	const payload = DeletePost(post_id);

	return {
		type: DELETE_POST,
		payload: payload
	}
}

// ------------------ Comments ----------------

export const createComment = (post, comment) => {
	const payload = CreateComment(post, comment);

	return {
		type: CREATE_COMMENT,
		payload: payload
	}
}

export const updateComment = (post_id, comment_id, update) => {
	const payload = UpdateComment(post_id, comment_id, update);

	return {
		type: UPDATE_COMMENT,
		payload: payload
	}
}

export const deleteComment = (post_id, comment_id) => {
	const payload = DeleteComment(post_id, comment_id);

	return {
		type: DELETE_COMMENT,
		payload: payload
	}
}

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

export const createFile = (file, data) => {
	const payload = CreateFile(file, data);

	return {
		type: CREATE_FILE,
		payload: payload
	}
}

export const deleteFile = (id) => {
	const payload = DeleteFile(id);
	console.log(id)

	return {
		type: DELETE_FILE,
		payload: payload
	}
}

export const fetchFiles = (params) => {

	const payload = FetchFiles(params);

	return {
		type: FETCH_FILES,
		payload: payload
	}
}
