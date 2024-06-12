import express from 'express';
import * as userController from '../controllers/user.controller';
import { loginValidator, newUserValidator } from '../validators/user.validator';
import { adminVerify, userAuth } from '../middlewares/auth.middleware';
import * as roleAssigner from '../utils/user.util'

const router = express.Router();

router.get('/user', userAuth, userController.registerUser);

router.post('/', newUserValidator, roleAssigner.userRole, userController.newUser);

router.post('/admin', newUserValidator, roleAssigner.adminRole, userController.newUser);

router.post('/login', loginValidator, userController.userLogin);

export default router;
