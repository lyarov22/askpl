import { Typography } from '@material-tailwind/react';
import React from 'react';

const LessonPage = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="text-center">
                <Typography variant="h2">Группа</Typography>
                <Typography variant="h4" className="font-normal">
                    Выберите дисциплину для просмотра
                </Typography>
            </div>
        </div>
    );
};

export default LessonPage;
