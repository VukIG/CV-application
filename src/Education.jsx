import React from 'react'
import { useState } from 'react'

function Education( { education, setEducation } ) {

  const [city, setCity] = useState(education.city);
  const [degree, setDegree] = useState(education.degree);
  const [subject, setSubject] = useState(education.subject);
  const [university, setUniversity] = useState(education.university);
  const [from, setFrom] = useState(education.to);
  const [to, setTo] = useState(education.to);

  function removeAll() {
    setEducation({});
  }

  function newEducation() {
    if ( city && degree && subject && university && from && to) {
      setEducation([...education, { city: "",degree: "", subject: "", university: "", from: "", to: "",} ]);
    }
    else{
      return ( <div className=""> Please fill out all the fields </div> )
    }
  }

  return (
    <div>
      <h1 className='flex justify-center py-8 font-bold  '> Education : </h1>
      <div className="flex align-center justify-center">
        <div className="flex flex-col justify-center align-middle bg-slate-800 p-10 rounded">
          <input className='w-[30vw] p-2 m-1' 
            value={university}
            onChange = { (e) => { 
              setUniversity(e.target.value);
              setEducation({...education, university: e.target.value}); 
            }}
            placeholder='University name' type="text" 
          />
          <input className='p-2 m-1'
            value={city}
            onChange = { (e) => { 
              setCity(e.target.value);
              setEducation({...education, city: e.target.value}); 
            }}
            placeholder='City' type="text" 
          />
          <input className='p-2 m-1'
            value={degree}
            onChange = { (e) => { 
              setDegree(e.target.value);
              setEducation({...education, degree: e.target.value}); 
            }}
            placeholder='Degree' type="text" 
          />
          <input className='p-2 m-1'
            value={subject}
            onChange = { (e) => { 
              setSubject(e.target.value);
              setEducation({...education, subject: e.target.value}); 
            }}
            placeholder='Subject' type="text" 
          />
          <input className='p-2 m-1'
            value={from}
            onChange = { (e) => { 
              setFrom(e.target.value);
              setEducation({...education, from: e.target.value}); 
            }}
            placeholder='From' type="text" 
          />
          <input className='p-2 m-1'
            value={to}
            onChange = { (e) => { 
              setTo(e.target.value);
              setEducation({...education, to: e.target.value}); 
            }}
            placeholder='To' type="text" 
          />
          <button className=' p-2 m-1 bg-red-800 text-white hover:bg-red-700' onClick={removeAll}>Delete</button>
          <button className=' p-2 m-1 bg-green-800 text-white hover:bg-green-700'>Add</button>
        </div>
      </div>
    </div>
  )
}

export default Education