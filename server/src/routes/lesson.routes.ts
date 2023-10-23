import { Router } from 'express';
import * as LessonController from '../controllers/lesson.controller';

const lessonRouter = Router();

lessonRouter.get('/get-lessons', LessonController.getLessons);

export default lessonRouter;