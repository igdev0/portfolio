import {FETCH_PROJECT} from '../actions/types';

const project = (state = null, action) => {

	switch(action.type) {

		case FETCH_PROJECT:

			return action.payload.data;

		default:

			return state;
	}
}

export default project;