import React from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

export default function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  return (
    <div className='w-full bg-black h-screen flex justify-center items-center px-56 '>
      <div className='h-96 bg-white w-full rounded-lg overflow-hidden flex-row-reverse flex py-5 px-5'>
        <div className='h-full w-1/2 bg-white flex justify-center items-center flex-col mb-5'>
          <h1 className='text-5xl font-semibold text-primary mb-5'>Sign Up</h1>
          <form onSubmit={handleSubmit(onSubmit)} className='w-full flex justify-center items-center flex-col'>
          <input
              className='rounded-full bg-silver h-10 w-2/3 my-2 text-black placeholder:text-gray-600 px-5' 
              type="text" 
              placeholder="Full name" 
              {...register("name", {required: true})} 
            />
            <input
              className='rounded-full bg-silver h-10 w-2/3 my-2 text-black placeholder:text-gray-600 px-5' 
              type="email" 
              placeholder="Email" 
              {...register("email", {required: true})} 
            />
            <input
              className='rounded-full bg-silver h-10 w-2/3 my-2 text-black placeholder:text-gray-600 px-5' 
              type="password" 
              placeholder="Password" 
              {...register("password", {required: true, min: 8})} 
            />
            <input 
              className='cursor-pointer rounded-full bg-primary h-10 w-2/3 my-2 text-white placeholder:text-gray-600 px-5'  
              value='Login' 
              type="submit" 
            />
        </form>
        <span className='text-sm text-gray-500 font-semibold mt-5'>
           Already have an account? <NavLink className='text-primary' to='/login'>Log in</NavLink>
        </span>
       
        </div>
        <div className='h-full w-1/2 bg-white'>
          <img className='h-full float-left' src='https://i.postimg.cc/cH56x6yZ/Sign-up.gif' alt='' />
        </div>
      </div>
    </div>
  )
}
