import axios from 'axios';

export const FetchSchools = () => {
	const promise = axios.get(`/api/education`);

	return promise;
}

export const CreateSchool = (school) => {
	// school is an object;
	const promise = axios.post(`/api/education`, school);

	return promise;
}

export const UpdateSchool = (id, type, updates) => {
	const promise = axios.put(`/api/education`, {
		id: id,
		type: type,
		updates: updates
		
	})

	return promise;
}

export const DeleteSchool = (id) => {

	const promise = axios.delete(`/api/education`, {
		params: {
			id: id
		}
	})

	return promise;
}

export const CreateSkill = (skill) => {

	const promise = axios.post('/api/skills', skill)

	return promise;
}

export const DeleteSkill = (id, school_id) => {
	
	const promise = axios.delete('/api/skills', {
		params: {
			id: id,
			school_id: school_id 
		}
	})

	return promise;
}

export const UpdateSkill = (id, update) => {
	const promise = axios.put('/api/skills', {
		id: id,
		update: update
	})

	return promise;
}

export const FetchSkills = () => {

	const promise = axios.get('/api/skills');

	return promise;
}

export const FetchProfileIntroduction = () => {
	const promise = axios.get('/api/profile');

	return promise;
}

export const UpdateProfileIntroduction = (update) => {
	const promise = axios.put('/api/profile', {
		update: update
	})

	return promise;
}





