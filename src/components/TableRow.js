import React from 'react'
import { IoMdDoneAll } from 'react-icons/io'

export default function TableRow() {
  return (
    <tr className="border-b border-green-500 bg-green-300">
                                <td className="py-3 px-6 text-left">
                                    <div className="flex items-center">
                                        <span className="font-medium">PHP ProjectPHP ProjectPHP Project</span>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center justify-center">
                                    <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full">02/03/2020</span>
                                    </div>
                                </td>
                                
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center justify-center">
                                        <span>03:00</span>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <span className="text-xs">Completed</span>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex item-center justify-center">
                                        <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <IoMdDoneAll />
                                        </div>
                                        <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                            </svg>
                                        </div>
                                        <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </div>
                                    </div>
                                </td>
                            </tr>
  )
}
