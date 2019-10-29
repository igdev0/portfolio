import {CREATE_COMMENT, UPDATE_COMMENT, DELETE_COMMENT} from '../actions/types';


const comments = (state = null, action) => {

	switch(action.type) {

		case CREATE_COMMENT:

			return [...state, action.payload.data];

		case UPDATE_COMMENT:

			return action.payload.data;

		case DELETE_COMMENT:
			const id = action.payload.data._id;

			return state.filter((c) => c._id !== id);

		default:

			return state;
	}
}

export default comments;
