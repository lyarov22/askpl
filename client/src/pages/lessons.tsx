import { Typography } from '@material-tailwind/react';
import { Button } from 'flowbite-react';
import { useRouter } from 'next/navigation';

import { useState } from 'react';

const lessons = () => {
    const router = useRouter();

    const handleGroupClick = (lessons: string) => {
        router.push(`/lessons/${lessons}`);
    };
    return (
        <div className="flex flex-col justify-center items-center h-screen space-y-4">
            <Typography variant="h2">Группа П3А</Typography>
            <Typography variant="h4" className="font-normal">Выберите дисциплину для просмотра</Typography>
            <div className="grid grid-cols-9 gap-4">
                <div className='block'>
                    <Typography variant='h6' className='mb-4'>1 этаж:</Typography>
                    <Button color="blue" className="shadow-2xl" onClick={() => handleGroupClick('P3A')}>
                        П3А
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default lessons;