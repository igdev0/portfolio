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
	description: {
		type: String,
		required: true
	},
	icon: {
		type: Schema.Types.ObjectId,
		ref: 'Files',
		required: true,
		autopopulate: true
	},

	level: {
		type: Number,
		required: true
	},
	color: {
		type: String,
		required: true
	},
	
	experience: ExperienceSchema,

	projects: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Projects'
		}
	],

	school: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Education',
			default: []
		}
	]
};

const SkillsSchema = new Schema(Skills);


export default mongoose.model('Skills', SkillsSchema);