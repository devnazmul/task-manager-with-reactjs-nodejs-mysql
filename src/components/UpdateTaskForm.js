import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoIosClose } from 'react-icons/io';
import { NavLink, useNavigate, useParams } from 'react-router-dom';

export default function UpdateTaskForm() {

    const { id } = useParams();
    const [task, setTask] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios
            .get(`http://localhost:8080/tasks/${id}`)
            .then((res) => {
                console.log('update', res);
                setTask(res.data[0]);

            });
    }, [id])
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        axios
            .put(`http://localhost:8080/tasks/update/${id}`, data)
            .then((res) => {
                console.log(res.data);
                reset();
                navigate('/')
            });
    };

    return (
        <div className={`formPopup transition-all duration-200  py-7 px-7 lg:px-28 h-screen w-full absolute top-0 left-0 z-10`}>
            <form className='w-full bg-white h-full py-14 flex justify-center items-center flex-col relative' onSubmit={handleSubmit(onSubmit)}>
                <NavLink to={`/`} onClick={() => console.log('close')} className='hover:scale-110 transition-all duration-200 absolute top-0 right-0 translate-x-1/3 w-10 flex justify-center items-center text-2xl hover:rotate-180 text-white shadow-md h-10 rounded-full bg-primary -translate-y-1/3'>
                    <IoIosClose />
                </NavLink>
                <h1 className='text-2xl font-semibold text-center text-primary mb-3'>Update Task</h1>
                <div className='flex flex-col h-full w-5/6 lg:w-1/2'>


                    <label className='text-xs text-gray-400 ' htmlFor="title">Title</label>
                    <input
                        id='title'
                        className='rounded-lg bg-silver h-10 w-full my-2 text-black placeholder:text-gray-600 px-5'
                        type="text" placeholder="title" defaultValue={task.title} {...register("title", { required: true })}
                    />




                    <label className='text-xs mt-1 lg:mt-3 text-gray-400 ' htmlFor="due_date">Due Date</label>
                    <input
                        id='due_date'
                        className='rounded-lg bg-silver h-10 w-full my-2 text-black placeholder:text-gray-600 px-5'
                        type="datetime-local" placeholder="due_date" defaultValue={task.due_date} {...register("due_date", { required: true })}
                    />



                    <label className='text-xs mt-1 lg:mt-3 text-gray-400 ' htmlFor="duration">Duration in minuite</label>
                    <input
                        id='duration'
                        className='rounded-lg bg-silver h-10 w-full my-2 text-black placeholder:text-gray-600 px-5'
                        type="number" placeholder="duration" defaultValue={task.duration} {...register("duration", { required: true })}
                    />


                    <label className='text-xs mt-1 lg:mt-3 text-gray-400 ' htmlFor="type">Type</label>
                    <select
                        id='type'
                        className='rounded-lg bg-silver h-10 w-full my-2 text-black placeholder:text-gray-600 px-5'
                        defaultValue={task.type} {...register("type", { required: true })}
                    >
                        <option value="call">call</option>
                        <option value="deadline">deadline</option>
                        <option value="email">email</option>
                        <option value="meeting">meeting</option>
                    </select>

                    <input
                        className='cursor-pointer rounded-lg bg-primary h-10 w-full my-2 text-white placeholder:text-gray-600 px-5'
                        type="submit" />
                </div>

            </form>
        </div>
    )
}
