import mongoose from '../../config/mongodb';
const Schema = mongoose.Schema;

const Images = new Schema({
	card: {
		type: Schema.Types.ObjectId,
		ref: 'Files',
		required: true
	},

	hero: {
		type: Schema.Types.ObjectId,
		ref: 'Files',
		required: false
	}
})

export default Images;
