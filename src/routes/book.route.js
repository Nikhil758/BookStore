import express from 'express';
import { newBookValidator } from '../validators/book.validator';
import { adminVerify } from '../middlewares/auth.middleware';
import * as booksController from '../controllers/book.controller'

const router = express.Router();

router.get('', booksController.getAllBooks);

router.post('', adminVerify, newBookValidator, booksController.newBookCreate);

router.get('/:_id', booksController.getBookById);

router.put('/:_id', adminVerify, booksController.updateBook);

router.delete('/:_id', adminVerify, booksController.deleteBook);

export default router;
