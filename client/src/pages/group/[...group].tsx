import { Button, Typography } from '@material-tailwind/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import instance from '@/lib/api';
import { AllLessons } from '@/types';

const Group = () => {
    const router = useRouter();
    const group = router.query.group?.[0];

    const [data, setData] = useState<AllLessons>();

    useEffect(() => {
        const fetchData = async () => {
            const groupResponse = await instance('/api/lessons/get-all-lessons');
            setData(groupResponse.data);
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
                    <div>
                        <Typography variant="h6" className="mb-2">
                            1 этаж:
                        </Typography>
                        <div className="grid grid-cols-3 gap-4">{/* {data && data[0].days.} */}</div>
                    </div>
                    <div>
                        <Typography variant="h6" className="mb-2">
                            2 этаж:
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="h6" className="mb-2">
                            3 этаж:
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="h6" className="mb-2">
                            4 этаж:
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="h6" className="mb-2">
                            5 этаж:
                        </Typography>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Group;
