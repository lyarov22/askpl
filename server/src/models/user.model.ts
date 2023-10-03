import mongoose, { Document, Schema } from 'mongoose';

export interface UserDocument extends Document {
    uid: string;
    name: string;
    surname: string;
    group: string;
}

const userSchema = new Schema<UserDocument>({
    uid: { type: String, required: true, unique: true },
    name: { type: String },
    surname: { type: String },
    group: { type: String },
});

const UserModel = mongoose.model<UserDocument>('User', userSchema);

export default UserModel;
