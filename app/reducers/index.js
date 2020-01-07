import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import loginStatus from './loginStatus';
import categories from './categories';
import posts from './posts';
import comments from './comments';
import files from './files';
import post from './post';
import schools from './schools';
import skills from './skills';
import projects from './projects';
import overview from './overview';
import initialData from './initialData';
import profileIntroduction from './profileIntroduction';
import profile from './profile';
import project from './project';
import user from './user';

const rootReducer = combineReducers({
	form: formReducer,
	comments,
	posts,
	categories,
	loginStatus,
	files,
	post,
	schools,
	skills,
	profileIntroduction,
	initialData,
	projects,
	overview,
	profile,
	project,
	user
})

export default rootReducer;
