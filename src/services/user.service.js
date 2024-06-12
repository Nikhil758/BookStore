import User from '../models/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import sendEmail from '../utils/email';
import { setUser } from '../utils/redis.util';

//create new user
export const newUser = async (body) => {
  body.email = await body.email.toLowerCase();
  let res = await User.findOne({ email: body.email });
  if (res !== null) {
    throw new Error('Email already exist');
  }
  body.password = await bcrypt.hash(body.password, 10);
  const token = jwt.sign({ email: body.email },process.env.SECRETKEY);
  sendEmail({
    subject: "Email Verification",
    text: token,
    to: body.email,
    from: process.env.EMAIL
  });
  setUser(body);
  return token;
};

export const userLogin = async (body) => {
  let userObj = await User.findOne({ email: body.email });
  if (userObj === null) {
    throw new Error('Incorrect Email');
  }
  const isMatch = await bcrypt.compare(body.password, userObj.password);
  if (isMatch) {
    const token = jwt.sign(
      { _id: userObj._id, role: userObj.role },
      process.env.SECRETKEY,
      { expiresIn: '2h' }
    );
    return token;
  } else {
    throw new Error('Incorrect Password');
  }
};