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

const LessonSchema = new Schema({
    name: { type: String },
    teacher: { type: String },
    cabinet: { type: String },
    time_start: { type: String },
    time_stop: { type: String },
});

// Определение схемы для дней недели
const DaySchema = new Schema({
    lessons: [LessonSchema], // Массив уроков внутри дня
});

// Определение схемы для групп
const GroupSchema = new Schema({
    group: { type: String },
    days: {
        monday: DaySchema,
        tuesday: DaySchema,
        wednesday: DaySchema,
        thursday: DaySchema,
        friday: DaySchema,
        saturday: DaySchema,
        sunday: DaySchema,
    },
});

// Определение схемы для уроков
const LessonsDocumentSchema = new Schema({
    groups: [GroupSchema], // Массив групп
});

// Создание модели на основе схемы
const LessonsModel = mongoose.model<LessonsDocument>('Lesson', LessonsDocumentSchema);

export default LessonsModel;