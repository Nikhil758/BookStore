import HttpStatus from 'http-status-codes';
import * as BoookService from '../services/book.service'

/**
 * Controller to create a new note
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const newBookCreate = async (req, res, next) => {
  try {
    const data = await BoookService.newBookCreate(req.body);
    res.status(HttpStatus.CREATED).json({
      success: true,
      message: 'Book created successfully',
      data: data
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to create a new note
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getAllBooks = async (req, res) => {
  const data = await BoookService.getAllBooks();
  res.status(HttpStatus.OK).json({
    success: true,
    message: 'Books found in database',
    data: data
  });
};

/**
 * Controller to create a new note
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getBookById = async (req, res) => {
  try {
    const data = await BoookService.getBookById(req.params._id);
    res.status(HttpStatus.CREATED).json({
      success: true,
      message: 'Book fetched successfully',
      data: data
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to update a note
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const updateBook = async (req, res, next) => {
  try {
    const data = await BoookService.updateBook(
      req.params._id,
      req.body
    );
    res.status(HttpStatus.ACCEPTED).json({
      success: true,
      message: 'Book updated successfully',
      data: data
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to delete a note
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const deleteBook = async (req, res, next) => {
  try {
    await BoookService.deleteBook(req.params._id);
    res.status(HttpStatus.OK).json({
      success: true,
      message: 'Book deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};
