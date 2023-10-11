import mongoose, { Document, Schema } from 'mongoose';

export interface TeacherDocument extends Document {
    username: string;
    password: string;
}

const teacherSchema = new Schema<TeacherDocument>({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const TeacherModel = mongoose.model<TeacherDocument>('Teacher', teacherSchema);

export default TeacherModel;
