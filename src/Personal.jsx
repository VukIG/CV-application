import React from 'react'
import { useState } from 'react'
function Personal({ personal, setPersonal }) {
  
  const [firstname, setFirstName] = useState(personal.firstName);
  const [lastname, setLastName] = useState(personal.lastName);
  const [title, setTitle] = useState(personal.title);
  const [phonenumber, setPhoneNumber] = useState(personal.phoneNumber);

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
    setPersonal({...personal, phoneNumber: e.target.value});
  }

  return (
    <div>
      <h1 className='flex justify-center py-8 font-bold  '> Personal information : </h1>
      <div className="flex align-center justify-center">
        <div className="flex flex-col justify-center max-w-4xl align-middle bg-slate-800 p-10 rounded">
          <input className='w-[30vw] p-2 m-1' 
            defaultValue={firstname}
            onBlur = { (e) => { 
              setFirstName(e.target.value);
              setPersonal({...personal, firstName: e.target.value}); 
            }}
            placeholder='First name' type="text" 
          />
          <input className='p-2 m-1'
            defaultValue={lastname}
            onBlur = { (e) => { 
              setLastName(e.target.value);
              setPersonal({...personal, lastName: e.target.value}); 
            }} 
            placeholder='Last name' type="text" 
          />
          <input className='p-2 m-1'  
            defaultValue={title}
            onBlur = { (e) => { 
              setTitle(e.target.value);
              setPersonal({...personal, title: e.target.value}); 
            }} 
            placeholder='Title' type="text" 
          />
          <input className='p-2 m-1'  
            defaultValue={phonenumber}
            onBlur = { (e) => handlePhoneNumberChange(e)} 
            placeholder='Phone number' type="text"
          />
        </div>
      </div>
    </div>
  )
}

export default Personal