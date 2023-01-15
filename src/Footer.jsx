import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa"
function Footer() {
  return (
    <div className='w-full bg-slate-900 text-white
      flex justify-center items-center py-8 bold mt-10'> 
      <h1 className='px-3'>Copyright</h1> 
      <FaCopyright/> <h1 className='px-3'>2023 Vuk Ignjatovic</h1> <FaGithub />  
    </div>
  )
}

export default Footer