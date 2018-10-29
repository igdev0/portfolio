import mongoose from '../../config/mongodb';
import images from './images';

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
		unique: true
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

Posts.pre('update', function() {
	this.update({}, {$set: {updatedAt: new Date()}})
})

export default mongoose.model('Posts', Posts);