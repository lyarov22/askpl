import { Request, Response } from 'express';
import UserModel from '../models/user.model';
import bcrypt from 'bcrypt';

export const registerUser = async (req: Request, res: Response) => {
    try {
        const { uid, name, surname, group } = req.body;

        if (!uid) {
            return res.status(400).json({ msg: 'UID are required.' });
        }

        const existingUser = await UserModel.findOne({ uid });
        if (existingUser) {
            return res.status(400).json({ msg: 'User with this UID already exists.' });
        }

        const user = new UserModel({
            uid,
            name: name || '',
            surname: surname || '',
            group: group || '',
        });

        await user.save();

        return res.status(201).json({ msg: 'User registred successfully.' });
    } catch (error) {
        console.error('Error registering user:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await UserModel.find();
        return res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};
