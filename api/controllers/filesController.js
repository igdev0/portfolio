import Files from '../models/files';
import multer from 'multer';
import path from 'path';
import multerS3 from 'multer-s3';
import aws, {S3} from 'aws-sdk';

const s3 = new S3();
aws.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'eu-west-2'
})

const storage = multerS3({
  s3: s3,
  bucket: process.env.AWS_BUCKET,
  acl: 'public-read',
  contentDisposition: 'inline',
  key: function(req, file, cb) {
    cb(null, file.originalname);
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

	create: (req, res) => {
		upload(req, res, function(err) {
			const file = req.file;

			if(err instanceof multer.MulterError) {
				return res.status(500).json(err);
			}
      console.log(file)
			Files.create({
				url: file.location,
				size: file.size,
				name: file.originalname
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
        s3.deleteObject({
          Key: data.name,
          Bucket: process.env.AWS_BUCKET
        }, (err, success) => {

          if(err) {
            return res.status(500).json(err);
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
