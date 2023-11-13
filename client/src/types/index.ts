export type GroupData = [
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
                ];
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
                ];
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
                ];
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
                ];
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
                ];
            }
        ];
    }
];

export interface AllLessons {
    lessons: [
        {
            name: string;
            floor: number;
        }
    ];
}
