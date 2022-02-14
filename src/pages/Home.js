import React from 'react'
import { BsPlusLg } from 'react-icons/bs'
import Table from '../components/Table'

export default function Home() {
  return (
    <div className='w-full h-screen  pb-14 pt-5 px-10 flex justify-center items-center flex-col'>
      <h1 className='mb-5 text-2xl font-bold'>Task Manager</h1>
      <div className="tableContain  w-full h-full pb-16 rounded-xl shadow-xl bg-gradient-to-tr from-grad2 to-grad1 relative">
        <span>Filter</span>

        <div className='overflow-y-scroll px-10 h-full w-full'>
        <Table />
        </div>
  
        <button title='add task' className=" addTask hover:scale-125 transition-all duration-200 absolute bottom-0 right-1/2 translate-x-1/2 w-16 flex justify-center items-center text-2xl hover:rotate-180 text-primary shadow-md h-16 rounded-full bg-white translate-y-1/2">
          <BsPlusLg />
        </button>
      </div>
    </div>
  )
}
