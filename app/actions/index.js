import {LOGIN_REQUEST, LOGIN_ERROR} from './types';

import {Login} from '../api';


// Log in actions

export const login = (username, password) => {

	return (dispatch) => {

		dispatch({type: LOGIN_REQUEST, payload: {}});
		Login(username, password)

		.then(({data}) => {
			window.localStorage.setItem('token', data.token);
			dispatch({type: LOGIN_SUCCESS, payload: data})
		})

		.catch((err) => {

			if(err) {
				dispatch({type: LOGIN_ERROR, payload: {message: "The username or password is incorect."}})
			}
		})
	}
}

