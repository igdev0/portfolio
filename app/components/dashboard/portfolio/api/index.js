import axios from 'axios';

const API_ROOT = '/api/projects';

export const FetchProjects = () => {
	const payload = axios.get(API_ROOT);

	return payload;
}

export const UpdateProject = (id, updates, type) => {
	const payload = axios.put(API_ROOT, {
		id: id,
		updates: updates,
		type: type
	})

	return payload;
}

export const DeleteProject = (id) => {
	const payload = axios.delete(API_ROOT, {
		params: {
			id: id
		}
	})

	return payload;
}

export const CreateProject = (project) => {
	const payload = axios.post(API_ROOT, project);

	return payload;
}