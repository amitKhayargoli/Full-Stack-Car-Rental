import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config();

const generateToken = (payload) => {

    const options = {
      expiresIn: process.env.expiresIn, // Token expiration time
    };
    return jwt.sign(payload, process.env.secretkey, options);
  };
  
  export {
    generateToken,
  }