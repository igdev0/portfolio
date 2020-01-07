import Posts from '../models/posts';
import Comments from '../models/comments';
import jwt from 'jwt-simple';
import config from '../../config';
import {PassThrough} from 'stream';
import slug from 'slug';
//
// import fs from 'fs';
import aws, {S3} from 'aws-sdk';

aws.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'eu-west-2'
})

const s3 = new S3();

const postsController = {

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
      console.log(data);
			res.status(200).json(data);
		})
	},


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
		const post = req.body.post;
		const postName = slug(post.title) + '.md';

		// const article = Buffer.from(post.body);

		// const wstream = fs.createWriteStream(`${process.cwd()}/api/articles/${post.title}.md`);
		//
		// wstream.write(post.body);
		//
		// wstream.end(function() {
		// 	createPost()
		// })
		s3.putObject({
			Body: post.body,
			Bucket: "dorultan-portfolio-articles",
			Key: slug(post.title) + '.md',
			ACL: 'public-read'
		}, function(err, data) {

			if(err) {
				return res.status(403).json(err);
			}


			Posts
			.create({
				title: post.title,
				description: post.description,
				tags: post.tags,
				body: postName,
				comments: [],
				images: post.images,
				slug: slug(post.title)

			}, function(err, post_data) {

				if(err) {
					return res.status(400).json({"error": err});
				}


				res.status(200).json(post_data);

			})
		})
		// return res.status(200).json({message: 'In testing'})
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
		const slug = req.params.slug;
		Posts

		.findOne({slug: slug})

		.populate({
			path: "comments"
		})

		.populate({
			path: 'images.card'
		})

		.exec((err, post_data) => {
			let post = {};
			if(err) {
				return res.status(400).json({"error": err});
			}

			s3.getObject({
				Key: post_data.body,
				Bucket: 'dorultan-portfolio-articles'
			}, function(err, data) {

				if(err) {
					return res.status(404).json(err);
				}

				post = post_data;
				post.body = data.Body;

				return res.status(200).json(post);
			})
		})
	},

	update: (req, res) => {
		const slug = req.body.slug;
		let updates = req.body.update;

		if(updates.body) {

      s3.putObject({
        Key: slug + '.md',
        Bucket: 'dorultan-portfolio-articles',
        Body: updates.body
      }, (err, data) => {
        if(err) {
          res.status(400).json(err);
        }

        res.status(200).json({message: 'success'});
      })
		}

		else {
			Posts

			.findOneAndUpdate({slug: slug}, updates, {new: true})

			.exec((err, post_data) => {
				let post = {};

				if(err) {
					return res.status(400).json(err);
				}

				s3.getObject({
					Key: post_data.body,
					Bucket: 'dorultan-portfolio-articles'
				}, function(err, data) {
					if(err) {
						return res.status(404).json(err);
					}
					post = post_data;
					post.body = data.Body;
					return res.status(200).json(post);
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

			  s3.deleteObject({
          Key: data.body,
          Bucket: 'dorultan-portfolio-articles'
        }, (err, _data) => {
          if(err) {
            res.status(404).json(err);
          }

          return res.status(200).json(data);
        })
			})
		}
	}
}

export default postsController;
