import mongodb from '../../config/mongodb';
import bcrypt from 'bcryptjs';
import jsonwebtoken from 'jwt-simple';
import config from '../../config';
const Schema = mongodb.Schema;
const User = {
	username: {
		type: String,
		required: true,
		unique: true
	},
	github_url: {
		type: String,
		required: false
	},
	facebook_url: {
		type: String,
		required: false
	},
	linkedin_url: {
		type: String,
		required: false
	},
	avatar_url: {
		type: String,
		required: false,
		default: "api/uploads/avatar.jpg"
	},

	email: {
		type: String,
		required: false,
		unique: true
	},

	roles: {
		type: Array,
		required: true
	},

	password: {
		type: String,
		required: true
	},

	createdAt: {
		type: Date,
		default: new Date()
	},

	updatedAt: {
		type: Date,
		default: new Date()
	}
}
const UserSchema = new Schema(User);
// Before saving the user
UserSchema.pre('save', function(save) {
	// this points to the UserSchema
	let user = this;
	//genSalt(times, cb);
	// - bcrypt's genSalt method, generates a String containing random characters.
	//   When is done it invokes the callback with two params, error and the random characters (salt).
	bcrypt.genSalt(10, (error, salt) => {
		// - second level is the hash, witch combines the salt with the readable String.
		if(error) {
			return save(error);
		}

		bcrypt.hash(user.password, salt, (err, hash) => {

			if(err) {
				return save(err);
			}

			user.password = hash;
			// now we got the password encrypted
			// is time to save the user.
			save();
		})
	})
})

UserSchema.pre('update', function() {
	this.update({}, {$set: {updatedAt: new Date()}});

})

// Compare password

UserSchema.methods.comparePassword = function(attendantPassword, callback) {
	// Using bcrypt compare the attendant's password
	// with the queried user password.
	const user = this;
	bcrypt.compare(attendantPassword, this.password, (error, isMatch) => {
		if(error) {
			// if any error occurs, return the callback with the error;
			return callback(error);
		}

		callback(null, isMatch);
	})
}

export default mongodb.model('User', UserSchema);
