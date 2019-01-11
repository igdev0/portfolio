import {LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_REQUEST, LOG_OUT} from '../actions/types';

const loginStatus = (state = {}, action) => {

	switch(action.type) {

		case LOGIN_SUCCESS: 

			return action.payload;

		case LOGIN_ERROR:

			return action.payload;
		
		case LOGIN_REQUEST:
			return action.payload;

		case LOG_OUT:
			return action.payload;

		default: 

			return state;
	}
}

export default loginStatus;