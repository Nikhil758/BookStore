import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator } from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';
import * as roleAssigner from '../utils/user.util'

const router = express.Router();

//route to register a new admin
router.post('/', newUserValidator, roleAssigner.userRole, userController.newUser);

//route to register a new admin
router.post('/admin', newUserValidator, roleAssigner.adminRole, userController.newUser);

router.get('/user', userAuth, userController.registerUser);

export default router;
