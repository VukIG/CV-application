import React from 'react'

function Experience() {
  return (
    <div>
      <h1 className='flex justify-center py-8 font-bold '> Experience : </h1>
      <div className="flex align-center justify-center">
        <div className="flex flex-col justify-center max-w-4xl align-middle bg-slate-800 p-10 rounded">
          <input className='w-[30vw] p-2 m-1' placeholder='Position' type="text" />
          <input className='p-2 m-1'placeholder='Company' type="text" />
          <input className='p-2 m-1'placeholder='City' type="text" />
          <input className='p-2 m-1'placeholder='From' type="text" />
          <input className='p-2 m-1'placeholder='To' type="text" />
          <button className=' p-2 m-1 bg-red-800 text-white'>Delete</button>
          <button className=' p-2 m-1 bg-green-800 text-white'>Add</button>
        </div>
      </div>
    </div>
  )
}

export default Experience