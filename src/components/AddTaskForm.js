import React from 'react';
import { useForm } from 'react-hook-form';
import { IoIosClose } from 'react-icons/io';


export default function AddTaskForm({isPopupActive,setIsPopupActive}) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);


    return (
        <div className={`formPopup transition-all duration-200 ${isPopupActive ? 'block w-full' : 'hidden w-0'}  py-5 px-28 h-screen bg-tra absolute top-0 left-0 z-10`}>
            <form className='w-full bg-white h-full py-5 flex justify-center items-center flex-col relative' onSubmit={handleSubmit(onSubmit)}>
                <button  onClick={()=>setIsPopupActive(false)} className='hover:scale-110 transition-all duration-200 absolute top-0 right-0 translate-x-1/3 w-10 flex justify-center items-center text-2xl hover:rotate-180 text-white shadow-md h-10 rounded-full bg-primary -translate-y-1/3'>
                    <IoIosClose />
                </button>
                <h1 className='text-3xl font-semibold text-center text-primary mb-5'>Add Task</h1>
                <div className='flex flex-col h-full w-1/2'>
                    <label className='text-xs text-gray-400 ' htmlFor="title">Title</label>
                    <input
                        id='title'
                        className='rounded-lg bg-silver h-10 w-full my-2 text-black placeholder:text-gray-600 px-5'
                        type="text" placeholder="title" {...register("title", { required: true })}
                    />
                    <label className='text-xs mt-3 text-gray-400 ' htmlFor="description">Description</label>
                    <textarea
                        id='description'
                        placeholder='description'
                        className='rounded-lg bg-silver h-24 w-full py-2 my-2 text-black placeholder:text-gray-600 px-5'
                        {...register("description", { required: true })}
                    />
                    <label className='text-xs mt-3 text-gray-400 ' htmlFor="due_date">Due Date</label>

                    <input
                        id='due_date'
                        className='rounded-lg bg-silver h-10 w-full my-2 text-black placeholder:text-gray-600 px-5'
                        type="datetime-local" placeholder="due_date" {...register("due_date", { required: true })}
                    />
                    <span>

                    </span>
                    <label className='text-xs mt-3 text-gray-400 ' htmlFor="duration">Duration</label>
                    <input
                        id='duration'
                        className='rounded-lg bg-silver h-10 w-full my-2 text-black placeholder:text-gray-600 px-5'
                        type="time" placeholder="duration" {...register("duration", { required: true })}
                    />
                    <label className='text-xs mt-3 text-gray-400 ' htmlFor="type">Type</label>

                    <select
                        id='type'
                        className='rounded-lg bg-silver h-10 w-full my-2 text-black placeholder:text-gray-600 px-5'
                        {...register("type", { required: true })}
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
