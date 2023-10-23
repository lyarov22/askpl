import { Router } from 'express';
import * as UserController from '../controllers/user.controller';

const userRouter = Router();

userRouter.post('/register', UserController.registerUser);
userRouter.get('/get-users', UserController.getUsers);

export default userRouter;
