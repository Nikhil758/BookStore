import express from 'express';
import * as customerDetailsController from '../controllers/customerDetails.controller'
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

router.post('', userAuth, customerDetailsController.customerDetails);

export default router;