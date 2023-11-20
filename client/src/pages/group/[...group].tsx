import { Button, Typography } from '@material-tailwind/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import instance from '@/lib/api';
import { AllLessons } from '@/types';
import Head from 'next/head';
import { Vortex } from 'react-loader-spinner';

const Group = () => {
    const router = useRouter();
    const group = router.query.group?.[0];
    const [isLoading, setIsLoading] = useState(true);
    const floors = 4;

    const [data, setData] = useState<AllLessons>();

    useEffect(() => {
        const fetchData = async () => {
            const groupResponse = await instance('/api/lessons/get-all-lessons');
            setData(groupResponse.data[0].lessons);
            setIsLoading(false);
        };

        fetchData();
    }, []);

    return (
        <>
            <Head>
                <title>ASKPL | Выбор дисциплины</title>
            </Head>
            <div className="flex flex-col justify-center items-center h-screen">
                {!isLoading ? (
                    <>
                        <div className="text-center">
                            <Typography variant="h2">Группа {group}</Typography>
                            <Typography variant="h4" className="font-normal">
                                Выберите дисциплину для просмотра
                            </Typography>
                        </div>
                        <div className="w-1/2 mx-auto space-y-4">
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
                                                        className={`text-md py-4 shadow-2xl ${
                                                            item.floor === 2 ? 'bg-blue-700' : ''
                                                        } ${item.floor === 3 ? 'bg-blue-800' : ''} ${
                                                            item.floor === 4 ? 'bg-blue-900' : ''
                                                        }`}
                                                        onClick={() =>
                                                            router.push(`/group/${group}/lessons/${item.route}`)
                                                        }
                                                    >
                                                        {item.name}
                                                    </Button>
                                                ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <Vortex
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="vortex-loading"
                        wrapperStyle={{}}
                        wrapperClass="vortex-wrapper"
                        colors={['#0047AB', '#0047AB', '#0047AB', '#0047AB', '#0047AB', '#0047AB']}
                    />
                )}
            </div>
        </>
    );
};

export default Group;
