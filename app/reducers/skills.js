import {FETCH_SKILLS, CREATE_SKILL, DELETE_SKILL, UPDATE_SKILL} from '../actions/types';


const skills = (state = null, action) => {

	switch(action.type) {

		case FETCH_SKILLS:

			return action.payload.data === undefined ? state : action.payload.data;

		case CREATE_SKILL:

			return [...state, action.payload.data];

		case DELETE_SKILL:
			const {payload: {data: {_id}}} = action;
			return state.filter(item => item._id !== _id);

		case UPDATE_SKILL:

			return [...state];
		default:

			return state;
	}
}

export default skills;
