import User from '../models/user';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import bcrypt from 'bcryptjs';
import jsonwebtoken from 'jwt-simple';
import config from '../../config';

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
    cb(null, file.originalname + '.jpg');
  }
})


const generateToken = (user) => {
	const timestamp = new Date().getTime();
	delete user.password;
	const token = jsonwebtoken.encode({
		sub: user.id,
		user,
		iat: timestamp,
	}, config.secret);

	return token;
}


const upload = multer({storage: storage}).single('file');

const userController = {
  getUser(req, res) {
		const id = req.body.id;

		User.findOne({username: 'dorultanianos'})

		.exec((err, data) => {

			let user = {
				_id: data._id,
				username: data.username,
				avatar_url: data.avatar_url,
				github_url: data.github_url,
				facebook_url: data.facebook_url,
				linkedin_url: data.linkedin_url,
				email: data.email,
				updatedAt: data.updatedAt,
				createdAt: data.createdAt
			}

			if(err) {
				return res.status(400).json({message: err});
			}

			res.status(200).json({user: user});
		})
  },

  updateUsername(req, res) {
    const id = req.body.id;
    User
    .findByIdAndUpdate(id, {username: req.body.username}, {new: true})

    .exec((err, data) => {
      if(err) {
        return res.status(400).json({error: "Couldn't find the user."});
      }

			let user = {
				_id: data._id,
				username: data.username,
				avatar_url: data.avatar_url,
				github_url: data.github_url,
				facebook_url: data.facebook_url,
				linkedin_url: data.linkedin_url,
				email: data.email,
				updatedAt: data.updatedAt,
				createdAt: data.createdAt
			}

      res.status(200).json({token: generateToken(user)});
    })
  },

  updateUserAvatar(req, res) {

    upload(req, res, function(err) {
      if(err instanceof multer.MulterError) {
        return res.status(500).json(err);
      }
      const file = req.file;
      User

      .findOneAndUpdate({_id: req.body.user_id}, {
        avatar_url: file.location
      })

      .exec((err, data) => {
        if(err) {
          return res.status(400).json({error: 'An error occured while trying to update user avatar.'})
        }
        console.log(file)
        res.status(200).json({success: 'Avatar updated'})

      })

    })
  },

  updateUserPassword(req, res) {

    User

    .findById(req.body.id)

    .exec((err, data) => {

      if(err) {
        return res.status(400).json({error: 'An error occured while trying to change password.'})
      }

      data.comparePassword(req.body.current_password, (err, isMatch) => {
        if(err) {
          return res.status(400).json({error: "The password provided does not match the current password."});
        }

        if(!isMatch) {
          return res.status(400).json({error: "The password provided does not match the current password."});
        }
        if(isMatch) {

          bcrypt.genSalt(10, (error, salt) => {
        		// - second level is the hash, witch combines the salt with the readable String.
        		if(error) {
              return res.status(400).json({error: "There was an error trying to update password !!"});
        		}

        		bcrypt.hash(req.body.new_password, salt, (err, hash) => {

        			if(err) {
                console.log(err)
                return res.status(400).json({error: "There was an error trying to update password !!"});
        			}

              data
              .update({
                password: hash
              })

              .then(() => {

                res.status(200).json({success: "User password was updated successfull !"});

              })
        			// now we got the password encrypted
        			// is time to save the user.
        		})
        	})

        }
      })
    })
  },

  updateUserSocial(req, res) {
    const id = req.body.id;

    User
    .findByIdAndUpdate(id,
      {
        github_url: req.body.update.github,
        facebook_url: req.body.update.facebook,
        linkedin_url: req.body.update.linkedin
      }, {new: true})

    .exec((err, data) => {
      if(err) {
        return res.status(400).json({error: "Couldn't find the user."});
      }
      let user = {
        _id: data._id,
        username: data.username,
        avatar_url: data.avatar_url,
        github_url: data.github_url,
        facebook_url: data.facebook_url,
        linkedin_url: data.linkedin_url,
        email: data.email,
        updatedAt: data.updatedAt,
        createdAt: data.createdAt
      }

      res.status(200).json({token: generateToken(user)});
    })
  },
  updateUserEmail(req, res) {
    const id = req.body.id;

    User
    .findByIdAndUpdate(id, {email: req.body.email}, {new: true})

    .exec((err, data) => {
      if(err) {
        return res.status(400).json({error: "Couldn't find the user."});
      }
      let user = {
        _id: data._id,
        username: data.username,
        avatar_url: data.avatar_url,
        github_url: data.github_url,
        facebook_url: data.facebook_url,
        linkedin_url: data.linkedin_url,
        email: data.email,
        updatedAt: data.updatedAt,
        createdAt: data.createdAt
      }
      res.status(200).json({token: generateToken(user)});
    })
  }
}

export default userController;
