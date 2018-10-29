import {LOGIN_SUCCESS, CREATE_FILE, DELETE_FILE, FETCH_FILES} from './types';
import {CreateFile, DeleteFile, FetchFiles} from '../api';


export const createFile = (file, data) => {
	const payload = CreateFile(file, data);

	return {
		type: CREATE_FILE,
		payload: payload
	}
}

export const deleteFile = (id) => {
	const payload = DeleteFile(id);

	return {
		type: DELETE_FILE,
		payload: payload
	}
}

export const fetchFiles = (params) => {

	const payload = FetchFiles(params);

	return {
		type: FETCH_FILES,
		payload: payload
	}
}
