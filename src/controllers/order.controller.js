import HttpStatus from 'http-status-codes';
import * as OrderService from '../services/order.service';

  /**
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const placeOrder = async (req, res, next) => {
    try {
      const data = await OrderService.placeOrder(res.locals.user._id);
      res.status(HttpStatus.CREATED).json({
        success: true,
        message: 'Placed order successfully',
        data: data
      });
    } catch (error) {
      next(error);
    }
  };