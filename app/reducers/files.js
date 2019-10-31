import {CREATE_FILE, DELETE_FILE, FETCH_FILES} from '../actions/types';

const files = (state = null, action) => {

	switch(action.type) {

		case CREATE_FILE:
			return [...state, action.payload.data];

		case DELETE_FILE:
			const id = action.payload.data._id;

			return state.filter((f) => f._id !== id);

		case FETCH_FILES:
		
			return action.payload.data;

		default:
			return state;
	}
}

export default files;
