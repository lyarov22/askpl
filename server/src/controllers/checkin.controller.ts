import { Request, Response } from 'express';
import CheckInModel from '../models/checkIn.model';
import { CheckInEntry } from '../models/checkIn.model';

export const checkIn = async (req: Request, res: Response) => {
    try {
        const { uid, timeStamp, class: checkInClass } = req.body;

        if (!uid || !timeStamp || !checkInClass) {
            return res.status(400).json({ msg: 'UID, timeStamp, and class are required.' });
        }

        const checkInEntry: CheckInEntry = new CheckInModel({
            uid,
            timeStamp,
            class: checkInClass,
        });

        await checkInEntry.save();

        return res
            .status(201)
            .json({ msg: 'Check-in entry recorded successfully.', uid, timeStamp, class: checkInClass });
    } catch (error) {
        console.error('Error recording check-in entry:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};
