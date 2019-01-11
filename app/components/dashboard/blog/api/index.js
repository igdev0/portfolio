import axios from 'axios';

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

export const UpdatePost = (post_id, post_title, update) => {
	const promise = axios.put(`/api/posts`, {
		post_id: post_id,
		post_title: post_title,
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
