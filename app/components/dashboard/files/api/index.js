import axios from 'axios';
// Files 
// ==========

export const FetchFiles = (params) => {

	const promise = axios.get('/api/files', {header: {params: {params}}});
	return promise;
}

export const CreateFile = (file, data) => {
	const formData = new FormData();
	formData.append('file', file);
	formData.append('folder', data.folder);
	formData.append('alt', data.alt);

	const config = {
		headers: {
			'Content-Type': 'multipart/form-data'
		}
	};

	const promise = axios.post('/api/files', formData, config);

	return promise;
}

export const DeleteFile = (id) => {
	const promise = axios.delete('/api/files', {
		params: {
			id: id
		}
	})

	return promise;
}

// ===========================================