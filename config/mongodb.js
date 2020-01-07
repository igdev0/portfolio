import mongoose from 'mongoose';
// import mongooseGridfs from 'mongoose-gridfs';

// const config = {
// 	DB_PASSWORD: 'programer16', // db password,
// 	DB_USERNAME: 'dorultan'// db username
// }

const connection = mongoose.connect(`mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`, {autoIndex: false})

.then((mongo, options) => {

})

.catch(err => {

	console.log('An error occured when connecting to mongodb');
})

export default mongoose;
