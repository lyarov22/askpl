import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import TeacherModel from '../models/teacher.model';

export const registerTeacher = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ msg: 'Username and password are required.' });
        }

        const existingUser = await TeacherModel.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ msg: 'User with this username already exists.' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const teacher = new TeacherModel({
            username,
            password: hashedPassword,
        });

        await teacher.save();

        return res.status(201).json({ msg: 'User registred successfully.' });
    } catch (error) {
        console.error('Error registering user:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

export const getAdmins = async (req: Request, res: Response) => {
    try {
        const users = await TeacherModel.find();

        return res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

export const getAdmin = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id;

        const user = await TeacherModel.findById(userId);

        return res.status(200).json(user);
    } catch (error) {
        console.error('Error fetching users:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};
