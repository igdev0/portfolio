import axios from 'axios';

export const FetchOverview = () => {

	const promise = axios.get('/api/overview')

	return promise;
}