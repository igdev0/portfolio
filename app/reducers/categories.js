import {CREATE_CATEGORY, 
		DELETE_CATEGORY, 
		UPDATE_CATEGORY, 
		FETCH_CATEGORIES,
		FETCH_CATEGORY,
		DELETE_POST} from '../components/dashboard/blog/actions/types';

const categories = (state = [], action) => {

	switch(action.type) {

		case CREATE_CATEGORY:

			return [...state, action.payload.data];

		case UPDATE_CATEGORY:
			return [action.payload.data];

		case DELETE_CATEGORY: 
			const id = action.payload.data._id;
			return state.filter((c) => c._id !== id);

		case FETCH_CATEGORIES: 

			return action.payload.data;

		case FETCH_CATEGORY:

			return action.payload.data;
		default:

			return state;
	}
}

export default categories;