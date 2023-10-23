<<<<<<< HEAD
import { Router } from 'express';
import * as LessonController from '../controllers/lesson.controller';

const lessonRouter = Router();

lessonRouter.get('/get-lessons', LessonController.getLessons);

export default lessonRouter;
=======
import { Router } from 'express';
import * as LessonController from '../controllers/lesson.controller';

const lessonRouter = Router();

lessonRouter.get('/get-lessons', LessonController.getLessons);

export default lessonRouter;
>>>>>>> 371cf54bedeb27775e4f2771ea1059ca51292e94
