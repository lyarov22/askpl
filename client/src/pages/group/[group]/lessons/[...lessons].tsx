import { Typography } from '@material-tailwind/react';
import React, { useState } from 'react';
import studentsData from '@/../data/students.json';
import Head from 'next/head';

interface Student {
    name: string;
    attendance: { date: string; present: boolean }[];
}

interface AttendanceTableProps {
    students: Student[];
}

const LessonPage = () => {
    const [editableCell, setEditableCell] = useState<{ studentIndex: number; dateIndex: number } | null>(null);
    const [students, setStudents] = useState(studentsData);

    const handleCellDoubleClick = (studentIndex: number, dateIndex: number) => {
        setEditableCell({ studentIndex, dateIndex });
    };

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        if (editableCell) {
            const { studentIndex, dateIndex } = editableCell;
            const updatedStudents = [...students];
            updatedStudents[studentIndex].attendance[dateIndex].present = event.target.value === 'Был';
            setStudents(updatedStudents);
            setEditableCell(null);
        }
    };

    const countStudentsByDate = (dateIndex: number, present: boolean) => {
        return students.reduce(
            (count, student) => (student.attendance[dateIndex].present === present ? count + 1 : count),
            0
        );
    };

    return (
        <>
            <Head>
                <title>ASKPL | Посещаемость</title>
            </Head>
            <div className="flex flex-col justify-center items-center h-screen">
                <div className="text-center">
                    {/* <Typography variant="h2">Группа</Typography> */}
                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500 shadow-2xl border">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3 rounded-s-lg">
                                        Студент
                                    </th>
                                    {students.length > 0 &&
                                        students[0].attendance.map(({ date }, dateIndex) => (
                                            <th key={dateIndex} scope="col" className="px-6 py-3">
                                                {date}
                                            </th>
                                        ))}
                                </tr>
                            </thead>
                            <tbody>
                                {students.map((student, studentIndex) => (
                                    <tr key={student.name} className="bg-white dark:bg-gray-800">
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            {student.name}
                                        </th>
                                        {student.attendance.map(({ present }, dateIndex) => (
                                            <td
                                                key={dateIndex}
                                                onDoubleClick={() => handleCellDoubleClick(studentIndex, dateIndex)}
                                                className="px-6 py-4"
                                            >
                                                {editableCell &&
                                                editableCell.studentIndex === studentIndex &&
                                                editableCell.dateIndex === dateIndex ? (
                                                    <select
                                                        onChange={handleSelectChange}
                                                        value={present ? 'Был' : 'Не был'}
                                                    >
                                                        <option value="Был">Был</option>
                                                        <option value="Не был">Не был</option>
                                                    </select>
                                                ) : present ? (
                                                    'Был'
                                                ) : (
                                                    'Не был'
                                                )}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr className="font-semibold text-gray-900 dark:text-white">
                                    <th scope="row" className="px-6 py-3 text-base">
                                        Всего
                                    </th>
                                    {students.length > 0 &&
                                        students[0].attendance.map((_, dateIndex) => (
                                            <td key={dateIndex} className="px-6 py-3">
                                                Было: {countStudentsByDate(dateIndex, true)}, Не было:{' '}
                                                {countStudentsByDate(dateIndex, false)}
                                            </td>
                                        ))}
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LessonPage;
