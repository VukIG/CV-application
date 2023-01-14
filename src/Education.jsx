import React from 'react'

function Education() {
  return (
    <div>
      <h1 className='flex justify-center'> Education </h1>
      <div className="flex align-center justify-center">
        <div className="flex flex-col justify-center max-w-2xl align-middle">
          <input className='p-2 m-1' placeholder='First name' type="text" />
          <input className='p-2 m-1'placeholder='Last name' type="text" />
          <input className='p-2 m-1'placeholder='Title' type="text" />
          <input className='p-2 m-1'placeholder='' type="text" />
          <input className='p-2 m-1'placeholder='Phone number' type="text" />
          <button>Delete</button>
          <button>Add</button>
        </div>
      </div>
    </div>
  )
}

export default Education