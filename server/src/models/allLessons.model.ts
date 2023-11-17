import mongoose, { Document, Schema } from 'mongoose';

const allLessonsSchema = new Schema({
    lessons: [
        {
            name: { type: String },
            floor: { type: Number },
        },
    ],
});

const AllLessonsModel = mongoose.model('allLessons', allLessonsSchema, 'allLessons');

export default AllLessonsModel;
