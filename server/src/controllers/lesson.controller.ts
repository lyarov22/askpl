import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import LessonModel from '../models/lesson.model';

export const getLessons = async (req: Request, res: Response) => {
    try {
        const lessons = await LessonModel.find();
        return res.status(200).json(lessons);
    } catch (error) {
        console.error('Error fetching users:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};