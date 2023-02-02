import React, { useState, useEffect } from 'react'

export default function Todolist({data, handleSubmit, handleChange, handleDelete}) {
  
  return (
    <div className="flex flex-col gap-4 p-4 bg-slate-300">
      <div className="">
        <h1 className="text-center uppercase tracking-widest font-bold">
          My todo list
        </h1>
      </div>
      <div className="space-x-4">
        <input type='text' placeholder='Enter Here...' className="rounded-lg pl-4 p-3 border-2 border-black w-96"
        name="task" onChange={handleChange}/>
        <button 
        onClick={handleSubmit}
        className="bg-white text-black rounded-lg border-2 border-black pl-4 p-3 hover:scale-105 transition-transform ease-out duration-200">ADD</button>
      </div>
      <div className="">
        <ul className="flex flex-col items-start justify-start max-w-[800px]">
        {data.map(result => {
          const { id, text} = result;
          return (
              <li key={id} className=" pl-4 p-4 w-full mb-2 bg-gray-200 flex flex-row justify-between items-center">
                <p>{text}</p>
                <button
                onClick={() => handleDelete(id)}
                className="w-10 h-8  rounded-lg bg-red-600 text-gray-100 font-semibold uppercase hover:scale-105 transition-transform ease-out duration-200">del</button>
              </li>
              )
        })}
        </ul> 
      </div>
    </div>
  )
}
