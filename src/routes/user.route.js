import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator } from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//route to register a new admin
router.post('', newUserValidator, userController.newUser);

//route to register a new admin
router.post('', newUserValidator, userController.newUser);

export default router;
