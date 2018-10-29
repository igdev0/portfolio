import mongodb from '../../config/mongodb';

const Schema = mongodb.Schema;

const Files = {
	url: {
		type: String,
		required: true
	},
	alt: {
		type: String,
		required: false
	},
	name: {
		type: String,
		required: true
	},
	size: {
		type: Number,
		required: true
	},
	key: {
		type: String,
		required: true
	},
	created_at: {
		type: Date,
		default: new Date().getTime(),
		required: true
	},

	updated_at: {
		type: Date,
		default: new Date().getTime(),
		required: true
	}
}

const FilesSchema = new Schema(Files);

FilesSchema.pre('save', function(save) {
	this.updated_at = new Date().getTime();

	save();
})

export default mongodb.model('Files', FilesSchema);