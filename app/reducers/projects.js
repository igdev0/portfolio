import {FETCH_PROJECTS, CREATE_PROJECT, DELETE_PROJECT, UPDATE_PROJECT} from '../actions/types';

const projects = (state = [], action) => {

	switch(action.type) {

		case FETCH_PROJECTS:
			return !action.payload.data.length ? null : action.payload.data;

		case CREATE_PROJECT:

			return state ? [...state, action.payload.data] : [action.payload.data];

		case UPDATE_PROJECT:

			return state;

		case DELETE_PROJECT:
			const filtered = state !== null ? state.filter((item) => item._id !== action.payload.data._id) : state;

			return !filtered.length ? null : filtered;

		default:

			return state;
	}
}

export default projects;
