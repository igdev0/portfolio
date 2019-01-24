import mongoose from '../../config/mongodb';
import images from './images';
import md5 from 'md5'
import crypto from 'crypto';

const Types = mongoose.Types;

const Schema = mongoose.Schema;

// This is the images schema. It is required because every post
// will have a card image wich will be displayed when:
// - shared
// - displayed in the UI

// This is the likes schema, is just optionaly for the moment,
// ===========================================================

const LikesSchema = new Schema({
	user_name: {
		type: String
	},
	user_image: {
		type: String
	},
	count: {
		type: Number,
		default: 0
	}
})

const Posts = new Schema({
	title: {
		type: String,
		required: true,
		unique: true
	},
	
	description: {
		type: String,
		required: true,
		unique: true,
		index: false
	},

	body: {
		type: String,
		required: true,
		unique: true
	},
	images: images,

	category: {
		type: String,
		required: true,
		default: 'general'
	},

	tags: {
		type: Array,
		required: true
	},

	comments: [{
		type: Schema.Types.ObjectId,
		ref: 'Comments'
	}],

	likes: LikesSchema,

	updatedAt: {
		type: Date,
		default: new Date()
	},

	createdAt: {
		type: Date,
		default: new Date()
	}
})

Posts.pre('save', function(next) {
	console.log('Mongodb is creating a document ... ')
	next();
})

Posts.pre('update', function(next) {
	this.update({}, {$set: {updatedAt: new Date()}})
	next();
})

export default mongoose.model('Posts', Posts);