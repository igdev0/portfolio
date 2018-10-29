import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import loginStatus from './loginStatus';
import categories from './categories';
import posts from './posts';
import comments from './comments';
import files from './files';
import post from './post';

const rootReducer = combineReducers({
	form: formReducer,
	comments,
	posts,
	categories,
	loginStatus,
	files,
	post
})

export default rootReducer;