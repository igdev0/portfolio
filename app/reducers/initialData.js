import {LOAD_INITIAL_DATA__FOR__SCHOOL, LOAD_INITIAL_DATA__FOR__SKILL} from '../components/dashboard/profile/actions/types';
import {LOAD_INITIAL_DATA, RESET_INITIAL_DATA} from '../components/dashboard/portfolio/actions/types';

const initialData = (state = {}, action) => {
        
	switch(action.type) {

		case LOAD_INITIAL_DATA__FOR__SKILL:
			return action.payload;

		case LOAD_INITIAL_DATA__FOR__SCHOOL:

			return action.payload;

		case LOAD_INITIAL_DATA:
			return action.payload ? action.payload : state;

		case RESET_INITIAL_DATA:

			return action.payload || {};

		default: 

			return state;
	}
} 

export default initialData;