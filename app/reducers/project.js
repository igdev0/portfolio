import {FETCH_PROJECT, FETCH_NEXT_PROJECT, FETCH_PREVIOUS_PROJECT} from '../actions/types';

const project = (state = null, action) => {

	switch(action.type) {

		case FETCH_PROJECT:

			return action.payload.data;

		case FETCH_NEXT_PROJECT:
			return action.payload.data === null ? state : action.payload.data;

		case FETCH_PREVIOUS_PROJECT:
			return action.payload.data === null ? state : action.payload.data;

		default:

			return state;
	}
}

export default project;
