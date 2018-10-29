import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Comments = new Schema({
	user_name: {
		type: String,
		required: true
	},
	user_image: {
		type: String,
		required: true
	},

	body: {
		type: String,
		required: true
	},

	post_id: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'Posts'
	},
	createdAt: {
		type: Date,
		default: Date.now
	},
	
	updatedAt: {
		type: Date,
		default: Date.now
	}
})

Comments.pre('update', function() {
	this.update({}, {$set: {updatedAt: new Date()}});
})
export default mongoose.model('Comments', Comments);