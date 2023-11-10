import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import userRouter from './routes/user.routes';
import checkInRouter from './routes/checkin.routes';
import teacherRouter from './routes/teacher.routes';
import lessonRouter from './routes/lesson.routes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const mongodbUri = process.env.MONGODB_URI_2 || '';
mongoose.connect(mongodbUri);

app.use(cors());
app.use(express.json());

app.use('/api/users', userRouter);
app.use('/api/marks', checkInRouter);
app.use('/api/teachers', teacherRouter);
app.use('/api/lessons', lessonRouter);

app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal server error' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
