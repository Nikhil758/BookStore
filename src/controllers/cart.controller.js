import HttpStatus from 'http-status-codes';
import * as CartService from '../services/cart.service';

/**
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getCart = async (req, res) => {
    try {
      const data = await CartService.getCart(res.locals.user._id);
      res.status(HttpStatus.CREATED).json({
        success: true,
        message: 'Cart found successfully',
        data: data
      });
    } catch (error) {
      next(error);
    }
  };

  /**
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const addBook = async (req, res, next) => {
    try {
      const data = await CartService.addBook(res.locals.user._id,req.params._id);
      res.status(HttpStatus.CREATED).json({
        success: true,
        message: 'Added book to cart successfully',
        data: data
      });
    } catch (error) {
      next(error);
    }
  };

/**
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const removeBook = async (req, res, next) => {
    try {
      const data = await CartService.removeBook(res.locals.user._id,req.params._id);
      res.status(HttpStatus.CREATED).json({
        success: true,
        message: 'Removed book from cart successfully',
        data: data
      });
    } catch (error) {
      next(error);
    }
  };