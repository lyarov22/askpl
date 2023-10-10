import mongoose, { Document, Schema } from 'mongoose';

export interface TeacaherDocument extends Document {
    username: string;
    password: string;
}

const teacherSchema = new Schema<TeacaherDocument>({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const TeacherModel = mongoose.model<TeacaherDocument>('User', teacherSchema);

export default TeacherModel;
