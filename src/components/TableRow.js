import React, { useState } from 'react'
import moment from 'moment';
import { IoMdDoneAll } from 'react-icons/io'
import { NavLink } from 'react-router-dom';
import axios from 'axios';

export default function TableRow({ task, tasks, setTasks, setUpdate, update }) {

    const deleteTask = (id) => {
        axios.delete(`http://localhost:8080/tasks/delete/${id}`).then((res) => {
            console.log(res);
            if (res.data.message === "delete success!") {
                const remainingTasks = tasks.filter(task => task.id !== id)
                setTasks(remainingTasks)
            }
        })
    }
    const handleComplete = (id) => {
        const data = {}
        data.is_completed = 1;
        axios
            .put(`http://localhost:8080/tasks/updateone/${id}`, data)
            .then((res) => {
                update ? setUpdate(false) : setUpdate(true)
            });
    }

    return (
        <tr className="border-b border-green-500 bg-green-300">
            <td className="py-3 px-6 text-left">
                <div className="flex items-center">
                    <span className={`font-medium ${task.is_completed && 'line-through'}`}>{task.title}</span>
                </div>
            </td>
            <td className="py-3 px-6 text-center">
                <div className="flex items-center justify-center">
                    <span className={`bg-red-200 text-red-600 py-1 px-3 rounded-full font-medium  ${task.is_completed && 'line-through'}`}>{moment(task.due_date).format('L')} at {moment(task.due_date).format('LT').toLowerCase()}</span>
                </div>
            </td>

            <td className="py-3 px-6 text-center">
                <div className="flex items-center justify-center">
                    <span className={`text-md  ${task.is_completed && 'line-through'}`}>{(task.duration * 0.0166667).toFixed(2)}</span>
                </div>
            </td>
            <td className="py-3 px-6 text-center">
                <span className={`text-md  ${task.is_completed && 'line-through'}`}>{task.type}</span>
            </td>
            <td className="py-3 px-6 text-center">
                <div className="flex item-center justify-center">
                    <button onClick={() => { handleComplete(task.id) }} className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <IoMdDoneAll />
                    </button>
                    <NavLink to={`/update/${task.id}`} className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                    </NavLink>
                    <button onClick={() => deleteTask(task.id)} className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </div>
            </td>
        </tr>
    )
}
