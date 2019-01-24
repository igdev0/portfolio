import mongoose from 'mongoose';
import mongooseGridfs from 'mongoose-gridfs';

const config = {
	DB_PASSWORD: 'programer16', // db password,
	DB_USERNAME: 'dorultan'// db username
}

mongoose.connect(`mongodb://${config.DB_USERNAME}:${config.DB_PASSWORD}@ds263137.mlab.com:63137/dorultanblog`, {autoIndex: false})

.then((mongo, options) => {

	console.log('The mongodb is connected');
})

.catch(err => {

	console.log('An error occured when connecting to mongodb');
})

export default mongoose;
