import { Router } from 'express';
import * as TeacherController from '../controllers/teacher.controller';

const teacherRouter = Router();

teacherRouter.post('/register', TeacherController.registerTeacher);
teacherRouter.get('/get-teachers', TeacherController.getAdmins);
teacherRouter.get('/get-teacher/:id', TeacherController.getAdmin);

export default teacherRouter;
