import mongoose from 'mongoose';
import mongooseGridfs from 'mongoose-gridfs';
const articleController = {

	get: (req, res) => {
		const readStream = gridFs.model.readByFileName('how-to-write-long pages.md');

		readStream.on('error', (error) => {

			return res.status(400).json(error);
		})

		readStream.on('data', (data) => {
			const article = data.toString();

			res.status(200).json(article);
		})

		readStream.on('close', (data) => {
			res.end();
		})
	},

	create: (req, res) => {
		const _article = {
			name: req.body.name,
			content: new PassThrough()
		};
			_article.content.write(req.body.content);
			_article.content.end()

			gridFs.model.write({
			filename: `${_article.name}.md`,
			contentType: 'text/plain'
		}, _article.content, function(error, data) {

			if(error) {

				return res.status(400).json(error);
			}

			else {
				res.status(200).json(data);
			}
		})


	}
}

export default articleController;
