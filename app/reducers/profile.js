import {FETCH_PROFILE} from '../actions/types';

const profile = (state = null, action) => {

	switch(action.type) {

		case FETCH_PROFILE:

			return action.payload.data;

		default:

			return state;
	}
}

export default profile;