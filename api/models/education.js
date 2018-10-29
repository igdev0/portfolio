import mongoose from '../../config/mongodb';


const Schema = mongoose.Schema;

const Experience = {
	from: {
		type: Date,
		required: true
	},

	to: {
		type: Date,
		required: true
	}
};

const ExperienceSchema = new Schema(Experience);

const Education = {
	// Education
	// e.g. pluralsight, udemy, codecademy.
	name: {
		type: String,
		required: true
	},

	logo: {
		type: String,
		required: true
	},

	experience: ExperienceSchema,

	skills: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'Skills'
	}
};
const EducationModel = new Schema(Education);

export default mongoose.model('Education', EducationModel);