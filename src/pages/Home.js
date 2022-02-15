import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import AddTaskForm from '../components/AddTaskForm';
import DateP from '../components/DateP';
import Table from '../components/Table';


export default function Home() {

  const [error, setError] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [isPopupActive, setIsPopupActive] = useState(false);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/tasks`)
      .then((res) => {
        setTasks(res.data);
      });
  }, [update]);
  // console.log(tasks);
  return (
    <div className='w-full h-screen relative pb-14 pt-5 px-10 flex justify-center items-center flex-col'>
      <AddTaskForm isPopupActive={isPopupActive} setIsPopupActive={setIsPopupActive} update={update} setUpdate={setUpdate} />
      <h1 className='mb-3 text-4xl font-bold'>Task Manager</h1>

      {/* {console.log(<DateP />)} */}
      <DateP setError={setError} update={update} setUpdate={setUpdate} tasks={tasks} setTasks={setTasks} />

      <div className="tableContain w-full h-5/6 pt-5 pb-12 rounded-xl shadow-xl bg-gradient-to-tr from-grad2 to-grad1 relative">


        <div className='overflow-y-scroll scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-grad2  scrollbar-thumb-rounded-full scrollbar-track-green-200 scrollbar-track-rounded px-10 pt-10 h-full w-full'>
          {error.length === 0 ?
            <Table setTasks={setTasks} tasks={tasks} />
            :
            <div className='w-full h-full flex justify-center items-center text-5xl text-white text-bold flex-col'>
              {error[0].message}
              <button className='mt-5 text-xl bg-primary px-10 py-3 rounded-xl hover:scale-110 transition-all delay-200' onClick={() => { window.location.reload() }} >Go Back</button>
            </div>}
        </div>


        <button onClick={() => setIsPopupActive(true)} title='add task' className=" addTask hover:scale-125 transition-all duration-200 absolute bottom-0 right-1/2 translate-x-1/2 w-16 flex justify-center items-center text-2xl hover:rotate-180 text-primary shadow-md h-16 rounded-full bg-white translate-y-1/2">
          <BsPlusLg />
        </button>
      </div>
    </div>
  )
}
