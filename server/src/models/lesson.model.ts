import mongoose, { Document, Schema } from 'mongoose';

interface LessonsDocument {
    groups: [
        {
            group: string;
            days: [
                monday: {
                    lessons: [
                        {
                            name: string;
                            teacher: string;
                            cabinet: string;
                            time_start: string;
                            time_stop: string;
                        }
                    ]
                },
                tuesday: {
                    lessons: [
                        {
                            name: string;
                            teacher: string;
                            cabinet: string;
                            time_start: string;
                            time_stop: string;
                        }
                    ]
                },
                wednesday: {
                    lessons: [
                        {
                            name: string;
                            teacher: string;
                            cabinet: string;
                            time_start: string;
                            time_stop: string;
                        }
                    ]
                },
                thursday: {
                    lessons: [
                        {
                            name: string;
                            teacher: string;
                            cabinet: string;
                            time_start: string;
                            time_stop: string;
                        }
                    ]
                },
                friday: {
                    lessons: [
                        {
                            name: string;
                            teacher: string;
                            cabinet: string;
                            time_start: string;
                            time_stop: string;
                        }
                    ]
                },
                saturday: {
                    lessons: [
                        {
                            name: string;
                            teacher: string;
                            cabinet: string;
                            time_start: string;
                            time_stop: string;
                        }
                    ]
                },
                sunday: {
                    lessons: [
                        {
                            name: string;
                            teacher: string;
                            cabinet: string;
                            time_start: string;
                            time_stop: string;
                        }
                    ]
                }
            ]
        }
    ]
}

const lessonSchema = new Schema({
    groups: [
        {
            group: { type: String },
            days: {
                monday: {
                    lessons: [
                        {
                            name: { type: String },
                            teacher: { type: String },
                            cabinet: { type: String },
                            time_start: { type: String },
                            time_stop: { type: String }
                        }
                    ]
                },
                tuesday: {
                    lessons: [
                        {
                            name: { type: String },
                            teacher: { type: String },
                            cabinet: { type: String },
                            time_start: { type: String },
                            time_stop: { type: String }
                        }
                    ]
                },
                wednesday: {
                    lessons: [
                        {
                            name: { type: String },
                            teacher: { type: String },
                            cabinet: { type: String },
                            time_start: { type: String },
                            time_stop: { type: String }
                        }
                    ]
                },
                thursday: {
                    lessons: [
                        {
                            name: { type: String },
                            teacher: { type: String },
                            cabinet: { type: String },
                            time_start: { type: String },
                            time_stop: { type: String }
                        }
                    ]
                },
                friday: {
                    lessons: [
                        {
                            name: { type: String },
                            teacher: { type: String },
                            cabinet: { type: String },
                            time_start: { type: String },
                            time_stop: { type: String }
                        }
                    ]
                },
                saturday: {
                    lessons: [
                        {
                            name: { type: String },
                            teacher: { type: String },
                            cabinet: { type: String },
                            time_start: { type: String },
                            time_stop: { type: String }
                        }
                    ]
                },
                sunday: {
                    lessons: [
                        {
                            name: { type: String },
                            teacher: { type: String },
                            cabinet: { type: String },
                            time_start: { type: String },
                            time_stop: { type: String }
                        }
                    ]
                }
            }
        }
    ]
});

const LessonModel = mongoose.model('Lessons', lessonSchema);

export default LessonModel;