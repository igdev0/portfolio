import axios from 'axios';


export const FetchCategories = (criteria) => {

	const promise = axios.get('/api/categories', {
		params: criteria
	});

	return promise;
}

export const CreateCategory = (category) => {

	const promise = axios.post('/api/categories', {
		title: category.title,
		description: category.description,
		images: category.images,
		posts: []
	})

	return promise;
}

export const UpdateCategory = (category_id, update) => {
	const promise = axios.put(`/api/categories`, {
		category_id: category_id,
		update
	}) 

	return promise;
}

export const DeleteCategory = (category_id) => {
	const promise = axios.delete(`/api/categories`, {
		params: {
			category_id: category_id
		}
	})

	return promise;
}

// ------------------ POSTS -------------

export const FetchPostsByCategory = (category_id) => {
	const promise = axios.get(`/api/categories`, {
		params: {
			_id: category_id
		}
	})

	return promise;
}

export const FetchPosts = (category_name) => {
	const promise = axios.get('/api/posts', {
		params: {
			category_name: category_name
		}
	})

	return promise;
}

export const FetchPostById = (id) => {
	const promise = axios.get(`/api/posts/${id}`)
	return promise;
}

export const CreatePost = (category_id, post) => {
	const promise = axios.post('/api/posts', {
		category: category_id,
		post
	})

	return promise;
}

export const UpdatePost = (post_id, update) => {
	const promise = axios.put(`/api/posts`, {
		post_id: post_id,
		update
	})

	return promise;
}

export const DeletePost = (post_id) => {
	const promise = axios.delete(`/api/posts`, {
		params: {
			post_id: post_id
		}
	});

	return promise;
}

// ------------------ Comments ----------------

export const CreateComment = (post, comment) => {
	const promise = axios.post(`/api/posts/${post._id}/comment`, {
		post_id: post._id,
		// ...post
	})

	return promise;
}

export const UpdateComment = (post_id, comment_id, update) => {
	const promise = axios.put(`/api/posts/${post._id}/comment/${comment_id}`, {
		// ...update
	})

	return promise;
}

export const DeleteComment = (post_id, comment_id) => {
	const promise = axios.delete(`/api/posts/${post_id}/${comment_id}`);

	return promise;
}
