import {FETCH_SCHOOLS, CREATE_SCHOOL, UPDATE_SCHOOL, DELETE_SCHOOL,
		CREATE_SKILL, UPDATE_SKILL, DELETE_SKILL, UPDATE_SCHOOL_SKILLS} from '../components/dashboard/profile/actions/types';

const schools = (state = null, action) => {

	switch(action.type) {

		case FETCH_SCHOOLS:

			return action.payload.data;

		case CREATE_SCHOOL:
			const _state = state !== null ? [...state,action.payload.data] : [action.payload.data]
			return _state;

		case UPDATE_SCHOOL:
			state.forEach((item, idx) => {
				if(item._id === action.payload.data._id) {
					state.splice(idx, 1, action.payload.data);
				}
			})

			return [...state];

		case UPDATE_SCHOOL_SKILLS: 
			state.forEach((item, idx) => {
				if(item._id === action.payload.data._id) {
					state.splice(idx, 1, action.payload.data);
				}
			})

			return [...state];

		case DELETE_SCHOOL:
			state = state !== null ? state.filter(item => {return item._id !== action.payload.data._id}) : null;
	
			return [...state];

		case CREATE_SKILL:
			state.forEach((item, idx)=> {

				if(item._id === action.payload.data._id) {
					state.splice(idx, 1, action.payload.data);
				}
			})

			return [...state];

		case DELETE_SKILL: 
			const __state = state;
			state.forEach((item, idx)=> {

				if(item._id === action.payload.data._id) {
					state.splice(idx, 1, action.payload.data);
				}
			})
			return [...state];
		default: 

			return state;
	}
}

export default schools;