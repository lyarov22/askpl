import mongoose, { Document, Schema } from 'mongoose';

export interface LessonDocument extends Document {
    name: string
    teacher: string
    cabinet: string
    time_start: string
    time_stop: string
}

const lessonSchema = new Schema<LessonDocument>({
    name: { type: String },
    teacher: { type: String },
    cabinet: { type: String },
    time_start: { type: String },
    time_stop: { type: String }
});

const LessonModel = mongoose.model<LessonDocument>('data', lessonSchema);

export default LessonModel;
