import { Router } from 'express';
import * as UserController from '../controllers/user.controller';

const userRouter = Router();

userRouter.post('/register', UserController.registerUser);
userRouter.get('/get-users', UserController.getUsers);
userRouter.get('/get-user/:id', UserController.getUser);

export default userRouter;
