import mongoose from 'mongoose';
import mongooseGridfs from 'mongoose-gridfs';

let Article = {};

mongoose.connection.once('open', () => {
	global.Article = {model: {Article}} = mongooseGridfs({
	collection: 'articles',
		model: 'Article',
		mongooseConnection: mongoose.connection
	})
})

const ArticleSchema = mongooseGridfs.schema;

export default Article;