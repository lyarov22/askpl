import { Typography } from '@material-tailwind/react';
import { Button } from 'flowbite-react';
import { useRouter } from 'next/navigation';

import { useState } from 'react';

const start = () => {
    const router = useRouter();

    const handleGroupClick = (group: string) => {
        router.push(`/group/${group}`);
    };
    return (
        <div className="flex flex-col justify-center items-center h-screen space-y-4">
            <Typography variant="h2">Добро пожаловать!</Typography>
            <Typography variant="h4" className="font-normal">
                Выберите группу которую хотите посмотреть
            </Typography>
            <div className="grid grid-cols-9 gap-4">
                <Button color="blue" className="shadow-2xl" onClick={() => handleGroupClick('P3A')}>
                    П3А
                </Button>
            </div>
        </div>
    );
};

export default start;
