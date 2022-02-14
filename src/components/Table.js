import React from 'react';
import { IoMdDoneAll } from 'react-icons/io';
export default function Table() {
  return (
    <>
        
<div class="overflow-x-auto w-full">
        <div class="">
            <div class="w-full">
                <div class="bg-transparent shadow-md rounded my-6">
                    <table class="min-w-max w-full table-auto  rounded-t-lg overflow-hidden">
                        <thead>
                            <tr class="bg-white text-gray-600 uppercase text-sm leading-normal">
                                <th class="py-3 px-6 text-left">Title</th>
                                <th class="py-3 px-6 text-center">Due date</th>
                                <th class="py-3 px-6 text-center">duration</th>
                                <th class="py-3 px-6 text-center">type</th>
                                <th class="py-3 px-6 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody class="text-gray-600 text-sm font-light">
                            
                            <tr class="border-b border-green-500 bg-green-300">
                                <td class="py-3 px-6 text-left">
                                    <div class="flex items-center">
                                        <span class="font-medium">PHP ProjectPHP ProjectPHP Project</span>
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <div class="flex items-center justify-center">
                                    <span class="bg-green-200 text-green-600 py-1 px-3 rounded-full">02/03/2020</span>
                                    </div>
                                </td>
                                
                                <td class="py-3 px-6 text-center">
                                    <div class="flex items-center justify-center">
                                        <span>03:00</span>
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <span class="text-xs">Completed</span>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <div class="flex item-center justify-center">
                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <IoMdDoneAll />
                                        </div>
                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                            </svg>
                                        </div>
                                        <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
