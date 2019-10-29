import {FETCH_OVERVIEW} from '../actions/types';

const overview = (state = null, action) => {

	switch(action.type) {

		case FETCH_OVERVIEW:

			return action.payload.data;

		default:

			return state;
	}
}

export default overview;
