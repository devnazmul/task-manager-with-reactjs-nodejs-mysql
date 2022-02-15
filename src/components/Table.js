import React from 'react';
import TableRow from './TableRow';
export default function Table({ tasks, setTasks }) {
    return (
        <>

            <div className="overflow-x-auto w-full">
                <div className="">
                    <div className="w-full">
                        <div className="bg-transparent shadow-md rounded
                scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-grad2  scrollbar-thumb-rounded-full scrollbar-track-green-200 scrollbar-track-rounded
                ">
                            <table className=" min-w-max w-full table-auto  rounded-t-lg overflow-hidden">
                                <thead className=''>
                                    <tr className="bg-white text-gray-600 uppercase text-sm leading-normal">
                                        <th className="py-3 px-6 text-left">Title</th>
                                        <th className="py-3 px-6 text-center">Due date</th>
                                        <th className="py-3 px-6 text-center">duration</th>
                                        <th className="py-3 px-6 text-center">type</th>
                                        <th className="py-3 px-6 text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-600 text-sm font-light">
                                    {tasks.map((task) => <TableRow key={task} task={task} tasks={tasks} setTasks={setTasks} />)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
