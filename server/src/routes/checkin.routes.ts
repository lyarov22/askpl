import { Router } from 'express';
import * as CheckInController from '../controllers/checkin.controller';

const checkInRouter = Router();

checkInRouter.post('/check-in', CheckInController.checkIn);

export default checkInRouter;
