import Busboy from 'busboy';
import aws from '../../config/aws';
import Files from '../models/files';

const filesController = {

	get: (req, res) => {
		
		Files
		.find((err, data) => {

			if(err) {

				return res.status(404).json(err);
			}

			res.status(200).json(data);
		})
	},

	create: (req, res) => {
		
		var busboy = new Busboy({ headers: req.headers });
	    busboy.on('finish', function() {
	      const file = req.files.file;
	      aws.upload(req.body.folder, file)

	      .then(data => {
	      	const file_to_save = {
	      		name: file.name,
	      		size: file.size,
	      		url: data.Location,
	      		folder: req.body.folder,
	      		alt: req.body.alt,
	      		key: `${req.body.folder}/${file.name}`
	      	}

	      	const save_file = new Files(file_to_save)

	      	save_file.save((err, data) => {

	      		if(err) {

	      			return res.status(400).json(err);
	      		}

	      		res.status(200).json(data);
	      	});
	      })

	      .catch(err => {
	      	res.status(400).json(err.stack);
	      })
	    });

	    return req.pipe(busboy);
	},

	delete: (req, res) => {
		const id = req.query.id;
		if(id) {
			Files
			.findByIdAndDelete(id)
			.exec((err, data) => {
				if(err) {return res.status(400).json(err)}

				aws.delete(data.key)

				.then((d) => {
					res.status(200).json(data);
				})

				.catch(err => {

					if(err) {
						return res.status(403).json({err: err});
					}
				})
			})
		}

		else {

			res.status(400).json({message: "The id of the file is required."});
		}
	}
}

export default filesController;