import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import LessonModel from '../models/lesson.model';
import AllLessonsModel from '../models/allLessons.model';

export const getLessons = async (req: Request, res: Response) => {
    try {
        const lessons = await LessonModel.find();
        return res.status(200).json(lessons);
    } catch (error) {
        console.error('Error fetching users:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

export const getLesson = async (req: Request, res: Response) => {
    try {
        const { lessonId } = req.body;
        const lessons = await LessonModel.findById(lessonId);
        return res.status(200).json(lessons);
    } catch (error) {
        console.error('Error fetching users:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

export const getAllLessons = async (req: Request, res: Response) => {
    try {
        const lessons = await AllLessonsModel.find();
        return res.status(200).json(lessons);
    } catch (error) {
        console.error('Error fetching users:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};
