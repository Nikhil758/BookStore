import HttpStatus from 'http-status-codes';
import * as UserService from '../services/user.service';
import { verifyEmail } from '../utils/verifyEmail';

/**
 * Controller to create a new user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const newUser = async (req, res, next) => {
  try {
    await UserService.newUser(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      message: 'User Created Sucessfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to create a new user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const registerUser = async (req, res, next) => {
  try {
    const data = await verifyEmail();
    let text;
    if(data.role === 'user'){
      text = 'User created successfuly';
    }
    else{
      text = 'Admin created successfuly';
    }
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: text
    });
  } catch (error) {
    next(error);
  }
};