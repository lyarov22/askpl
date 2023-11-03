import { Typography } from '@material-tailwind/react';
import { Button } from 'flowbite-react';
import { useRouter } from 'next/navigation';

import { useState, useEffect } from 'react';

import axios from 'axios';
type GroupData = [
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
            }
        ]
    }
    ]

const start = () => {
    const router = useRouter();

    const [groups, setGroups] = useState<GroupData>()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('http://localhost:8080/api/lessons/get-lesson', { lessonId: '6544761e040e5763b11ca371'})
                setGroups(response.data.groups)
                console.log(response.data.groups);
            } 
            catch(error) {
                console.log(error)
            } 
        }
        fetchData()
    }, [])

    const handleGroupClick = (group: string) => {
        router.push(`/group/${group}/lessons`);
    };
    return (
        <div className="flex flex-col justify-center items-center h-screen space-y-4">
            <Typography variant="h2">Добро пожаловать!</Typography>
            <Typography variant="h4" className="font-normal">
                Выберите группу которую хотите посмотреть
            </Typography>
            <div className="grid grid-cols-9 gap-4">
                { groups &&
                    groups.map((item, index) => (
                        <Button key={index} color="blue" className="shadow-2xl" onClick={() => handleGroupClick('P3A')}>
                            {item.group}
                        </Button>
                    ))
                }
            </div>
        </div>
    );
};

export default start;
