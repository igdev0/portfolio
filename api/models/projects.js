import mongoose from '../../config/mongodb';

const Schema = mongoose.Schema;

const ImagesSchema = new Schema({
	hero: [
		{
			url: {
				type: String,
				required: true
			},

			alt: {
				type: String,
				required: true
			}
		}
	],
	card: [
		{
			url: {
				type: String,
				required: true
			}
		},

		{
			alt: {
				type: String,
				required: true
			}
		}
	]
})


const Projects = {

	title: {
		type: String,
		required: true
	},

	description: {
		type: String,
		required: true
	},

	skills: {
		type: Array,
		required: true
	},

	images: ImagesSchema,
	
	created_on: {
		type: Date,
		default: Date.now
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