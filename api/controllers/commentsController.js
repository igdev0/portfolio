import Comments from '../models/comments';
import Posts from '../models/posts';

const commentsController = {

	// When i want to create a comment, i want as well to save a ref
	// the id of this comment on the post that i want to create it.
	// the post id is found in the body

	// then send back the updated post not the comment itself.

	// @Expectations: 
	// body.post_id must be the post id.
	// body.body -> is the body of the comment
	// body.user_name  -> is the user that comments
	get: (req, res) => {

		Comments
		.find()

		.exec((err, data) => {

			if(err) {
				return res.status(400).json(err);
			}

			else {
				res.status(200).json(data);
			}
		})
	},

	create: (req, res) => {
		const body = req.body;

		Comments

		.create({
			post_id: body.post_id,
			body: body.body,
			user_name: body.user_name,
			user_image: body.user_image
		})

		.then((data) => {
			
			Posts
			.findByIdAndUpdate(body.post_id, {$push: {comments: data._id}})

			.exec((err, _data) => {

				if(err) {

					return res.status(400).json({"error": err});
				}

				res.status(200).json(data);
			})
		})

		.catch((err) => {
			
			if(err) {

				return res.status(400).json({"error": err});
			}
		})
	},

	// I want just to delete the comment from the comment api,
	// then to update the post wich contains this comment.
	// Will do this by using the comment_id and post_id in the body
	// 
	// EXPECTATIONS: 
	// 
	// req.body.post_id -> to be the actual post id where the comment is populated
	// req.body.commen_id -> to be the comment id that i want to delete it.
	// 

	delete: (req, res) => {
		const comment = req.body.comment_id;
		const post = req.body.post_id;

		Comments
		.findByIdAndDelete(comment)

		.exec((err, data) => {

			if(err) {

				return res.status(400).json({error: err});
			}

			Posts
			.findByIdAndUpdate(post, {$pull: {comments: comment}})
			.exec((err, _data) => {

				if(err) {
					return res.status(400).json({error: err});
				}

				res.status(200).json(data);
			})
		})
	},

	// Each time i get an update on a comment, there is no need to
	// worry about what's gonna be updated, there is cleary that 
	// only the body of the comment can be updated.
	// 
	// EXPECATIONS: 
	// req.body.body -> To be the actual body of the comment
	// req.body.post_id -> the post id containing the comment
	// req.body.comment_id -> the comment id 

	// RESPONSE: 
	// I'll send a response containing the updated post with the comment.
	// Since is no reason to send the comment itself

	update: (req, res) => {
		const post_id = req.body.post_id;
		const comment_id = req.body.comment_id;

		Comments

		.findByIdAndDelete(comment_id)

		.exec((err, data) => {

			if(err) {
				return res.status(400).json({"error": err});
			}

			Posts.findByIdAndUpdate(post_id, {$pull: {comments: comment_id}}, {safe: true})

			.exec((err, success) => {

				if(err) {
					return res.status(400).json({error: err});
				}

				res.status(200).json(success);
			})
		})
	}
}

export default commentsController;