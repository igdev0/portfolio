import {FETCH_PROFILE_INTRODUCTION, UPDATE_PROFILE_INTRODUCTION} from '../components/dashboard/profile/actions/types';

const profileIntroduction = (state = null, action) => {
	let introduction;
	switch(action.type) {

		case FETCH_PROFILE_INTRODUCTION:
			introduction = action.payload.data;
			return introduction;

		case UPDATE_PROFILE_INTRODUCTION:
			introduction = action.payload.data.introduction;
			return {introduction};

		default: 

			return state;
	}
}

export default profileIntroduction;