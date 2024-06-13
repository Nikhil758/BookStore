import HttpStatus from 'http-status-codes';
import * as WishlistService from '../services/wishlist.service';

/**
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getWishlist = async (req, res) => {
    try {
      const data = await WishlistService.getWishlist(res.locals.user._id);
      res.status(HttpStatus.CREATED).json({
        success: true,
        message: 'Wishlist found successfully',
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
export const toggleWish = async (req, res, next) => {
    try {
      const data = await WishlistService.toggleWish(res.locals.user._id,req.params._id);
      res.status(HttpStatus.CREATED).json({
        success: true,
        message: 'Toggled book to wishlist successfully',
        data: data
      });
    } catch (error) {
      next(error);
    }
  };