import mongoose from '../../config/mongodb';
import images from './images';

const Schema = mongoose.Schema;

const Projects = {

	title: {
		type: String,
		required: true
	},

	description: {
		type: String,
		required: true
	},
	
	link: {
		type: String,
		required: true
	},
	color: {
		type: String,
		required: true
	},

	skills: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Skills'
		}
	],

	images: images,
	
	started_at: {
		type: Date,
		default: Date.now
	},

	finished_at: {
		type: Date,
		default: null
	},

	created_at: {
		type: Date,
		default: Date.now
	},

	updated_at: {
		type: Date,
		default: Date.now
	}
};

const ProjectsSchema = new Schema(Projects);

export default mongoose.model('Projects', ProjectsSchema);