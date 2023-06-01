import React, { useState } from 'react'

const [ position,setPosition ] = useState(personal.position);
const [ city,setCity ] = useState(personal.city);
const [ from,setFrom ] = useState(personal.from);
const [ to,setTo ] = useState(personal.to);

function Experience({ experience, setExperience }) {
  return (
    <div>
      <h1 className='flex justify-center py-8 font-bold '> Experience : </h1>
      <div className="flex align-center justify-center">
        <div className="flex flex-col justify-center max-w-4xl align-middle bg-slate-800 p-10 rounded">
          
          <input className='w-[30vw] p-2 m-1' 
            placeholder='Position' type="text" 
            defaultValue={position}
            onBlur = { (e) => { 
              setPosition(e.target.value);
              setExperience({...experience, position: e.target.value}); 
            }}
          />    
          <input className='p-2 m-1'
            placeholder='Company' type="text" 
            defaultValue={company}
            onBlur = { (e) => { 
              setCompany(e.target.value);
              setExperience({...experience, company: e.target.value}); 
            }}
          />

          <input className='p-2 m-1'
            placeholder='City' type="text" 
            defaultValue={city}
            onBlur = { (e) => { 
              setCity(e.target.value);
              setExperience({...experience, city: e.target.value}); 
            }}
          />
          
          <input className='p-2 m-1'
            placeholder='From' type="text" 
            defaultValue={from}
            onBlur = { (e) => { 
              setFrom(e.target.value);
              setExperience({...experience, from: e.target.value}); 
            }}
          />
          
          <input className='p-2 m-1'
            placeholder='To' type="text" 
            defaultValue={to}
            onBlur = { (e) => { 
              setTo(e.target.value);
              setExperience({...experience, to: e.target.value}); 
            }}
          />

          <button className=' p-2 m-1 bg-red-800 text-white hover:bg-red-700'>Delete</button>
          <button className=' p-2 m-1 bg-green-800 text-white hover:bg-green-700'>Add</button>
        </div>
      </div>
    </div>
  )
}

export default Experience