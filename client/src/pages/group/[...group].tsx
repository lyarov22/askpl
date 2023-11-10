import { Button, Typography } from '@material-tailwind/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Group = () => {
    const router = useRouter();
    const group = router.query.group?.[0];

    const [data, setData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const groupResponse = await axios('http://localhost:8080/api/lessons/get-lessons');
            setData(groupResponse.data);
        };

        fetchData();

        // const groupData = data.find((group) => group)
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
                        <div className="grid grid-cols-3 gap-4">
                            <Button color="blue" className="shadow-2xl">
                                Программирование МК
                            </Button>
                        </div>
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
