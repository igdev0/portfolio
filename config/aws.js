import AWS from 'aws-sdk';


const config = {
	Bucket: {
		url: 'https://s3.us-east-1.amazonaws.com',
		name: 'dorultanianos'
	},

	Credentials: new AWS.Credentials({
		accessKeyId: 'AKIAIRGN5NG2B5SCJIBA',
		secretAccessKey: '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',
		sessionToken: null
	})

};

const s3bucket = new AWS.S3({
	endpoint: config.Bucket.url,
	Bucket: config.Bucket.name,
	credentials: config.Credentials
});

const aws = {

	upload:(folder, file) => {
		const params = {
			Body: file.data,
			Bucket: 'dorultanianos',
			Key: file.name,
			ACL: "public-read", 
			Key: `${folder}/${file.name}`
		};

		const options = {
			partSize: 10 * 1024 * 1024, 
			queueSize: 1
		};

		const promise = new Promise((resolve, reject) => {
			s3bucket.upload(params, options, (err, data) => {
				if(err) {
					reject(err);
				}

				else {
					resolve(data);
				}
			})
		});

		return promise;
	},

	delete: (key) => {
		const params = {
			Bucket: config.Bucket.name,
			Key: key
		};


			const promise = new Promise((resolve, reject) => {
				s3bucket.deleteObject(params, (err, data) => {
				
				if(err) {

					reject(err);
				}

				resolve(data);

				})
			});

			return promise;
	}	
};

export default aws;