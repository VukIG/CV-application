import React from 'react'

function Preview() {
  return (
    <div className='w-[100vh]'>
        <div className='text-white bg-teal-500 p-10 '>
            <h1 className='text-4xl font-[700]'> John Doe </h1>
            <h1 className='text-2xl'> Senior web developer </h1>
        </div>
        <div className="flex flex-row align-middle justify-around ">
            <div className='h-full w-[100vh]'>
                <div className="p-10">
                    <h1> Description </h1>
                    <div className="flex flex-col justify-items-start">
                        <h1 className=''>2018-2020</h1>
                    </div>
                </div>
                <div className="p-10">
                    <h1> Experience </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quaerat saepe consectetur cupiditate, natus sed illo dolorem beatae ipsum iure, dolorum aut aliquid est alias commodi! Vitae error eligendi laborum.</p>
                </div>
                <div className="p-10">
                    <h1> Education </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quaerat saepe consectetur cupiditate, natus sed illo dolorem beatae ipsum iure, dolorum aut aliquid est alias commodi! Vitae error eligendi laborum.</p>
                </div>
            </div>
            
            <div className='h-full w-[40vh] p-10'>
                <div className="mt-2 font-[500]">
                    <h1 className="mt-2 font-[800] text-xl"> Personal Details </h1>
                </div>
                <div className="mt-2">
                    <h1 className='text-xl'> Adress </h1>
                    <h1> 410th 7th st Apt B </h1>
                </div>
                <div className="mt-2">
                    <h1 className='text-xl'> Phone number </h1>
                    <h1> 123456789 </h1>
                </div>
                <div className="mt-2">
                    <h1 className='text-xl'> Email </h1>
                    <h1> john.doe@gmail.com </h1>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Preview