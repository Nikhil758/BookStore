import express from 'express';
import * as cartController from '../controllers/cart.controller'
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

router.get('', userAuth, cartController.getCart);

router.put('/:_id', userAuth, cartController.addBook);

router.delete('/:_id', userAuth, cartController.removeBook);

export default router;