import React from 'react'

function Preview({data}) {
    console.log(data)
    return (
        <div className='w-[100vh] border'>
            <div className='text-white bg-teal-500 p-10 '>
                <h1 className='text-4xl font-[700]'> { data.personal.firstName && data.personal.lastName ? data.personal.firstName + ' ' + data.personal.lastName : 'Jovan kurcic' } </h1>
                <h1 className='text-2xl'>{ data.personal.title ? data.personal.title : 'Senior web developer' } </h1>
            </div>
            <div className="flex flex-row items-center justify-around">
                <div className="h-full w-[100vh] border">
                    <div className="p-10">
                        <h1 className="font-bold text-xl pb-5">Description</h1>
                        <div className="flex flex-col items-start">
                            <p className="text-gray-700">{data.personal.shortbio ? data.personal.shortbio : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam porro sit officiis! Ab, id soluta eveniet reiciendis, modi facere odio eaque error dolorum odit optio beatae impedit illo labore itaque.'}</p>
                        </div>
                    </div>
                    <div className="p-10 border-t">
                        <h1 className="font-bold text-xl pb-5">Education</h1>
                        <p className="pb-2">City: {data.education.city ? data.education.city : 'Abu Dhabi'}</p>
                        <p className="pb-2">Degree: {data.education.degree ? data.education.degree : 'CS'}</p>
                        <p className="pb-2">University: {data.education.university ? data.education.university : 'NYU Abu Dhabi'}</p>
                        <p className="pb-2">Subject: {data.education.subject ? data.education.subject : 'Undecided'}</p>
                        <p>From - To: {data.education.from && data.education.to ? data.education.from + ' - ' + data.education.to : '2022-2026'}</p>
                    </div>
                    <div className="p-10 border-t">
                        <h1 className="font-bold text-xl pb-5">Experience</h1>
                        <p className="pb-2">City: {data.experience.city ? data.experience.city : 'Moscow'}</p>
                        <p className="pb-2">Company: {data.experience.company ? data.experience.company : 'Yandex'}</p>
                        <p className="pb-2">Position: {data.experience.position ? data.experience.position : 'Front-end'}</p>
                        <p>From - To: {data.experience.from && data.experience.to ? data.experience.from + ' - ' + data.experience.to : '2022-2026'}</p>
                    </div>
                </div>

                <div className="h-full w-[40vh] p-10 ">
                    <div className="mt-2 font-semibold">
                        <h1 className="mt-2 font-bold text-xl">Personal Details</h1>
                    </div>
                    <div className="mt-2">
                        <h1 className="text-xl pb-2">Address</h1>
                        <h1 className="pb-2">{data.personal.address ? data.personal.address : '410th 7th St Apt B'}</h1>
                    </div>
                    <div className="mt-2">
                        <h1 className="text-xl pb-2">Phone number</h1>
                        <h1 className="pb-2">{data.personal.phoneNumber ? data.personal.phoneNumber : '123456789'}</h1>
                    </div>
                    <div className="mt-2">
                        <h1 className="text-xl pb-2">Email</h1>
                        <h1  className="pb-2">{data.personal.email ? data.personal.email : 'john.doe@gmail.com'}</h1>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Preview