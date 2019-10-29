import {FETCH_POST_BY_ID, UPDATE_POST} from '../actions/types';

const post = (state = null, action) => {

	switch(action.type) {

		case FETCH_POST_BY_ID:
			return action.payload.data;


		case UPDATE_POST:

			return action.payload.data;

		default:

			return state;

	}
}

export default post;
