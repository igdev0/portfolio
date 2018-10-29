import {CREATE_CATEGORY, DELETE_CATEGORY, UPDATE_CATEGORY, FETCH_CATEGORIES, 
		CREATE_POST, DELETE_POST, UPDATE_POST, FETCH_POSTS, FETCH_POST_BY_ID, FETCH_POSTS_BY_CATEGORY, 
		FETCH_CATEGORY, CREATE_COMMENT, UPDATE_COMMENT, DELETE_COMMENT} 
from './types';

import {FetchCategories, CreateCategory, UpdateCategory, DeleteCategory,
		FetchPosts, FetchPostById, CreatePost, UpdatePost, DeletePost, FetchPostsByCategory,
		CreateComment, UpdateComment, DeleteComment} from '../api';

export const fetchCategories = (id) => {
	const criteria = {
		_id: id
	};
	const payload = FetchCategories(criteria);

	return {
		type: FETCH_CATEGORIES,
		payload: payload
	};
}

export const createCategory = (category) => {

	const payload = CreateCategory(category);

	return {
		type: CREATE_CATEGORY,
		payload: payload
	};
}

export const updateCategory = (category_id, update) => {
	const payload = UpdateCategory(category_id, update);

	return {
		type: UPDATE_CATEGORY,
		payload: payload
	};
}

export const deleteCategory = (category_id) => {

	const payload = DeleteCategory(category_id);

	return {
		type: DELETE_CATEGORY,
		payload: payload
	}
}

//  POSTS CRUD
// =======================================

export const fetchPostsByCategory = (category_id) => {
	const payload = FetchPostsByCategory(category_id);

	return {
		type: FETCH_POSTS_BY_CATEGORY,
		payload: payload
	}
}

export const fetchPosts = (category_name) => {
	const payload = FetchPosts(category_name);

	return {
		type: FETCH_POSTS,
		payload: payload
	}
}

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

export const updatePost = (post_id, update) => {
	const payload = UpdatePost(post_id, update);

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
