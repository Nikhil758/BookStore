import express from 'express';
import * as wishlistController from '../controllers/wishlist.controller'
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

router.get('', userAuth, wishlistController.getWishlist);

router.put('/:_id', userAuth, wishlistController.toggleWish);

export default router;