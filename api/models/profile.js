import mongoose from '../../config/mongodb';

const Schema = mongoose.Schema;

const Profile = {
	name: {
		type: String,
		default: 'defaultProfile'
	},
	introduction: {
		type: String
	},

	skills: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Skills'
		}
	],

	education: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Education'
		}
	]
}

const ProfileModel = new Schema(Profile);



export default mongoose.model('Profile', ProfileModel);