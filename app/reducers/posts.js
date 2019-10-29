import {CREATE_POST, DELETE_POST, UPDATE_POST, FETCH_POSTS} from '../actions/types';

const posts = (state = [], action) => {

	switch(action.type) {

		case CREATE_POST:

			return [...state, action.payload.data];

		case FETCH_POSTS:
			return action.payload.data;


		case DELETE_POST:
			const post_id = action.payload.data._id;
			return state.filter( (c) => c._id !== post_id);

		default:

			return state;
	}
}

export default posts;
