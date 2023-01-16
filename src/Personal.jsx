import React from 'react'
import { useState } from 'react'
function Personal({ personal, setPersonal }) {
  
  const [firstname, setFirstName] = useState(personal.firstname);
  const [lastname, setLastName] = useState(personal.lastname);
  const [title, setTitle] = useState(personal.title);
  const [phonenumber, setPhoneNumber] = useState(personal.phonenumber);

  return (
    <div>
      <h1 className='flex justify-center py-8 font-bold  '> Personal information : </h1>
      <div className="flex align-center justify-center">
        <div className="flex flex-col justify-center max-w-4xl align-middle bg-slate-800 p-10 rounded">
          <input className='w-[30vw] p-2 m-1' 
            value={firstname}
            onChange = { (e) => { 
              setFirstName(e.target.value);
              setPersonal({...personal, firstname: e.target.value}); 
            }}
            placeholder='First name' type="text" 
          />
          <input className='p-2 m-1'
            value={lastname}
            onChange = { (e) => { 
              setLastName(e.target.value);
              setPersonal({...personal, lastname: e.target.value}); 
            }} 
            placeholder='Last name' type="text" 
          />
          <input className='p-2 m-1'  
            value={title}
            onChange = { (e) => { 
              setTitle(e.target.value);
              setPersonal({...personal, title: e.target.value}); 
            }} 
            placeholder='Title' type="text" 
          />
          <input className='p-2 m-1'  
            value={phonenumber}
            onChange = { (e) => { 
              setTitle(e.target.value);
              setPhoneNumber({...personal, phonenumber: e.target.value}); 
            }} 
            placeholder='Phone number' type="text"
          />
        </div>
      </div>
    </div>
  )
}

export default Personal