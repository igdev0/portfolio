import {FETCH_SCHOOLS, UPDATE_SCHOOL, DELETE_SCHOOL, CREATE_SCHOOL,
		CREATE_SKILL, UPDATE_SKILL, DELETE_SKILL, FETCH_SKILLS, UPDATE_SCHOOL_SKILLS,
		LOAD_INITIAL_DATA__FOR__SKILL, LOAD_INITIAL_DATA__FOR__SCHOOL,
		FETCH_PROFILE_INTRODUCTION, UPDATE_PROFILE_INTRODUCTION} from './types';

import {FetchSchools, CreateSchool, UpdateSchool, DeleteSchool,
		CreateSkill, UpdateSkill, DeleteSkill, FetchSkills,
		UpdateProfileIntroduction, FetchProfileIntroduction} from '../api';
import diff from 'object-diff';

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

const padNumbers = (number) => { 
	return (number < 10 ? '0' : '') + number;
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