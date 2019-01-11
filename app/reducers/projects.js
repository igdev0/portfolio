import {FETCH_PROJECTS, CREATE_PROJECT, DELETE_PROJECT, UPDATE_PROJECT} from '../components/dashboard/portfolio/actions/types';

const projects = (state = null, action) => {

	switch(action.type) {

		case FETCH_PROJECTS:
			return action.payload.data;

		case CREATE_PROJECT:

			return state ? [...state, action.payload.data] : [action.payload.data];

		case UPDATE_PROJECT:
			
			return state;

		case DELETE_PROJECT:

			return state;

		default:

			return state;
	}
}

export default projects;