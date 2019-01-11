import Posts from '../models/posts';
import Comments from '../models/comments';
import jwt from 'jwt-simple';
import config from '../../config';
import {PassThrough} from 'stream';
import fs from 'fs';

const postsController = {

	// This method handles the endpoint (GET)/api/posts

	// EXPECTATIONS:
	// i don't expect nothing from params yet.
	// 
	// RESPONSE:
	// 
	// it will send all the posts into an array.
	// The create function handles the endpoint (POST)/api/posts
	// When a post is created, i must update the category containing
	// this post.

	// EXPECTATIONS:
	// 
	// req.body.category_id -> the _id of the category containing this post.
	// req.body.title -> the title of the post
	// req.body.body -> the body of the post
	// req.body.comments -> empty array since this is a new post.

	// RESPONSE:
	// 
	// The response will contain the actual post created.

	create: (req, res) => {
		const body = req.body;
		const post = req.body.post;

		const article = Buffer.from(post.body);

		const wstream = fs.createWriteStream(`${process.cwd()}/api/articles/${post.title}.md`);

		wstream.write(post.body);

		wstream.end(function() {
			console.log('The file is written successfully');
			createPost()
		})

		const createPost = () => {
			Posts
			.create({
				category: body.category,
				title: post.title,
				description: post.description,
				tags: post.tags,
				body: `/api/articles/${post.title}.md`,
				comments: [],
				images: post.images

			}, function(err, post_data) {

				if(err) {
					return res.status(400).json({"error": err});
				}


				res.status(200).json(post_data);
						
			})
		}
	},

	get: (req, res) => {
		const user = req.user;
		const criteria = req.body.criteria;
		Posts
		.find()
		.populate({
			path: 'comments',
			select: ['user_name', "body"]
		})
		.populate({
			path: 'images.card',
			select: 'path alt'
		})

		.exec(function(err, data) {
			if(err ) {
				return res.send(err);
			}

			else {

				res.send(data);
			}
		})
	},

	// The getOnePost function will handle the endpoint (GET)/api/posts/:post_title
	// The query will populate the comments of the post.
	// 
	// EXPECTATIONS: 
	// 
	// The GET request must have a param called post_title.
	// 
	// RESPONSE:
	// The response of this req, will contain the post and the populated comments
	// it will also contain informations about the category e.g: name, description
	// 
	// 

	getOne: (req, res) => {
		const post_title = req.params.post_title;
		Posts

		.findOne({title: post_title})

		.populate({
			path: "comments"
		})
		.populate({
			path: 'images.hero',
			select: 'path alt'
		})
		.exec((err, data) => {
			if(err) {
				return res.status(400).json({"error": err});
			}

			res.status(200).json(data);
		
		})
	},

	getById: (req, res) => {
		const id = req.params.post_id;
		
		Posts.findById(id)

		.populate('commnets')

		.populate({
			path: 'images.card'
		})

		.populate({
			path: 'images.hero'
		})

		.exec((err, data) => {

			if(err) {
				return res.status(400).json(err);
			}
			const readStream = fs.createReadStream(`${process.cwd()}${data.body}`);

			 
			readStream.on('error', (error) => {
				if(error) {
				 	return res.status(400).json(error)
				}
			})

			readStream.on('data', (file) => {

				const article = file.toString();
				data.body = article;
				
				return res.status(200).json(data);
			})
		}) 
	},

	update: (req, res) => {
		const post_id = req.body.post_id;
		const post_title = req.body.post_title;
		let updates = req.body.update;

		if(updates.body) {
			const dir = `/api/articles/${post_title}.md`;
			
			fs.unlink(`${process.cwd()}${dir}`, (err) => {

				if(err) throw err;

				else {
					const readStream = fs.createWriteStream(`${process.cwd()}${dir}`);

					readStream.write(updates.body);
					readStream.end();

					Posts

					.findByIdAndUpdate(post_id, {body: dir}, {new: true})
				
					.exec((err, data) => {

						if(err) {
							return res.status(400).json(err);
						}

						const readStream = fs.createReadStream(`${process.cwd()}${data.body}`);

						readStream.on('error', (error) => {

							if(error) throw error;
						})

						readStream.on('data', (file) => {
							const article = file.toString();

							data.body = article;


							return res.status(200).json(data);
						})
					})
				}
			})
		}

		else {
			Posts

			.findByIdAndUpdate(post_id, updates, {new: true})

			.exec((err, data) => {
				if(err) {
					return res.status(400).json(err);
				}
				const readStream = fs.createReadStream(`${process.cwd()}${data.body}`);

				readStream.on('error', (error) => {

					if(error) throw error;
				})

				readStream.on('data', (file) => {
					const article = file.toString();

					data.body = article;


					return res.status(200).json(data);
				})
			})
		}

 	},

	// When 

	delete: (req, res) => {
		const post = req.query.post_id;

		if(post) {
			Posts
			.findByIdAndDelete(post)

			.exec((err, data) => {

				if(err) {
					return res.status(400).json({error: err});
				}

				fs.unlink(`${process.cwd()}${data.body}`, (err) => {

					if(err) throw err;

					res.status(200).json(data);
				})
			})
		}
	}
}

export default postsController;