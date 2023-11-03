import { Router } from 'express';
import * as LessonController from '../controllers/lesson.controller';

const lessonRouter = Router();

lessonRouter.get('/get-lessons', LessonController.getLessons);
lessonRouter.post('/get-lesson', LessonController.getLesson)

export default lessonRouter;