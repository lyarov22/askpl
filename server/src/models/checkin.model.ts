import mongoose, { Document, Schema } from 'mongoose';

export interface CheckInEntry extends Document {
    uid: mongoose.Types.ObjectId;
    timeStamp: number;
    class: string;
}

const checkInSchema = new Schema<CheckInEntry>({
    uid: { type: Schema.Types.ObjectId, required: true },
    timeStamp: { type: Number, required: true },
    class: { type: String, required: true },
});

const CheckInModel = mongoose.model<CheckInEntry>('CheckIn', checkInSchema);

export default CheckInModel;
