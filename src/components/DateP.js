import moment from 'moment';
import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm } from 'react-hook-form';

export default function DateP({ setUpdate, tasks, setError }) {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const time = moment(data.due_date).format('L')
        tasks.filter((task) => {
            moment(task.due_date).format('L') === time ? setUpdate(task) : setError([{ message: 'No data found' }])
        })
    };


    return (
        <form className='w-full mb-1' onSubmit={handleSubmit(onSubmit)}>
            <span className='float-right'>
                <input className='bg-silver px-5 py-1 rounded-l-full' type="date" name="filterDate" id="" {...register("due_date", { required: true })} />
                <input className='bg-grad1 px-7 py-1 my-1 rounded-r-full' value='Filter' type="submit" name="submit" id="" />
            </span>

        </form>
    );
};


