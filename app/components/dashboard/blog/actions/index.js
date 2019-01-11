import {CREATE_CATEGORY, DELETE_CATEGORY, UPDATE_CATEGORY, FETCH_CATEGORIES, 
		CREATE_POST, DELETE_POST, UPDATE_POST, FETCH_POSTS, FETCH_POST_BY_ID, FETCH_POSTS_BY_CATEGORY, 
		FETCH_CATEGORY, CREATE_COMMENT, UPDATE_COMMENT, DELETE_COMMENT} 
from './types';

import {FetchPosts, FetchPostById, CreatePost, UpdatePost, DeletePost,
		CreateComment, UpdateComment, DeleteComment} from '../api';
//  POSTS CRUD
// =======================================

export const fetchPosts = (category_name) => {
	const payload = FetchPosts(category_name);

	return {
		type: FETCH_POSTS,
		payload: payload
	}
}
// const reader = new FileReader();
// const file = reader.readAsText(action.payload.body.data)
export const fetchPostById = (id) => {

	if(id) {
		const payload = FetchPostById(id);
		return {
			type: FETCH_POST_BY_ID,
			payload: payload
		}
	}
}

export const createPost = (category_id, post) => {
	const payload = CreatePost(category_id, post);

	return {
		type: CREATE_POST,
		payload: payload
	}
}

export const updatePost = (post_id, post_title, update) => {
	
	const payload = UpdatePost(post_id, post_title, update);

	return {
		type: UPDATE_POST,
		payload: payload
	}
}

export const deletePost = (post_id) => {
	const payload = DeletePost(post_id);

	return {
		type: DELETE_POST,
		payload: payload
	}
}

// ------------------ Comments ----------------

export const createComment = (post, comment) => {
	const payload = CreateComment(post, comment);

	return {
		type: CREATE_COMMENT,
		payload: payload
	}
}

export const updateComment = (post_id, comment_id, update) => {
	const payload = UpdateComment(post_id, comment_id, update);

	return {
		type: UPDATE_COMMENT,
		payload: payload
	}
}

export const deleteComment = (post_id, comment_id) => {
	const payload = DeleteComment(post_id, comment_id);

	return {
		type: DELETE_COMMENT,
		payload: payload
	}
}
