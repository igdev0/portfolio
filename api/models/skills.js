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

const Skills = {
	// Skills
	// e.g. 
	name: {
		type: String,
		required: true
	},
	icon: {
		type: String,
		required: true
	},

	level: {
		type: Number,
		required: true
	},

	experience: ExperienceSchema,

	school: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Education'
		}
	]
};

const SkillsSchema = new Schema(Skills);


export default mongoose.model('Skills', SkillsSchema);