import mongoose from 'mongoose';

const config = {
	DB_PASSWORD: // db password,
	DB_USERNAME: // db username
}

mongoose.connect(`mongodb://${config.DB_USERNAME}:${config.DB_PASSWORD}@ds263137.mlab.com:63137/dorultanblog`);

export default mongoose;
