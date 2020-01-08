import {LOAD_INITIAL_DATA__FOR__SCHOOL, LOAD_INITIAL_DATA__FOR__SKILL} from '../actions/types';
import {LOAD_INITIAL_DATA, RESET_INITIAL_DATA, LOAD_INITIAL_DATA_FOR_POST} from '../actions/types';

const initialData = (state = null, action) => {

	switch(action.type) {

		case LOAD_INITIAL_DATA__FOR__SKILL:
			return action.payload;

		case LOAD_INITIAL_DATA__FOR__SCHOOL:

			return action.payload;

		case LOAD_INITIAL_DATA_FOR_POST:

			return action.payload ? action.payload : state;

		case LOAD_INITIAL_DATA:
			return action.payload ? action.payload : state;

		case RESET_INITIAL_DATA:

			return action.payload;

		default:

			return state;
	}
	return state;
}

export default initialData;
