import { Button, Typography } from '@material-tailwind/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import instance from '@/lib/api';
import { AllLessons } from '@/types';
import { redirect } from 'next/navigation';

const Group = () => {
    const router = useRouter();
    const group = router.query.group?.[0];
    const floors = 4;

    const [data, setData] = useState<AllLessons>();

    useEffect(() => {
        const fetchData = async () => {
            const groupResponse = await instance('/api/lessons/get-all-lessons');
            setData(groupResponse.data[0].lessons);
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="flex flex-col justify-center items-center h-screen">
                <div className="text-center">
                    <Typography variant="h2">Группа {group}</Typography>
                    <Typography variant="h4" className="font-normal">
                        Выберите дисциплину для просмотра
                    </Typography>
                </div>
                <div className=" w-1/3 mx-auto space-y-4">
                    {Array.from({ length: floors }, (_, floorIndex) => (
                        <div key={floorIndex}>
                            <Typography variant="h6" className="mb-2">
                                {`${floorIndex + 1} этаж:`}
                            </Typography>
                            <div className="grid grid-cols-3 gap-4">
                                {data &&
                                    data
                                        .filter((item) => item.floor === floorIndex + 1)
                                        .map((item, index) => (
                                            <Button
                                                key={index}
                                                color="blue"
                                                className="shadow-2xl"
                                                onClick={() => router.push(`/group/${group}/lessons/${item.route}`)}
                                            >
                                                {item.name}
                                            </Button>
                                        ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Group;
