import {FETCH_OVERVIEW} from './types';
import {FetchOverview} from '../api';

export const fetchOverview = () => {

	const payload = FetchOverview();

	return {
		type: FETCH_OVERVIEW,
		payload: payload
	}

}