import Files from '../models/files';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'api/uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({storage: storage}).single('file');

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

	getOne: (req,res) => {
		const param = req.params.file;
		
		res.sendFile(process.cwd() + '/api/uploads/' + param);
	},

	create: (req, res) => {
		upload(req, res, function(err) {
			const file = req.file;
			if(err instanceof multer.MulterError) {
				return res.status(500).json(err);
			}
		
			Files.create({
				path: file.path,
				size: file.size,
				name: file.filename,
				alt: req.body.alt
			}, (err, data)=> {

				if(err) {
					return res.status(400).json({error: err});
				}

				res.status(200).json(data);
			})
		})
	},

	delete: (req, res) => {
		const id = req.query.id;
		if(id) {
			Files
			.findByIdAndDelete(id)
			.exec((err, data) => {

				if(err) {
					return	res.status(500).json(err);
				}
				fs.unlink(data.path, function(err) {

					if(err) {
						return res.status(400).json(err);
					}
					
					res.status(200).json(data);
				})
			})
		}

		else {

			res.status(400).json({message: "The id of the file is required."});
		}
	}
}

export default filesController;