import Preview from './Preview'
import Education from './Education'
import Personal from './Personal'
import Experience from './Experience'
import Banner from './Banner'
import Footer from './Footer'

import { useState } from 'react'


function App() {

  const [education, setEducation] = useState({ city: "", degree: "", subject: "", university: "", from: "", to: "" });
  const [experience, setExperience] = useState({ city: "", company: "", position: "", from: "", to: "" });
  const [personal,setPersonal] = useState({ firstName: "", lastName: "", title: "", phoneNumber: "" });
  const [data, setData] = useState ();
  function generatePreview() {
    setData( {education: education, personal: personal, experience: experience} );
  }
  return (
    <div className="font-normal">
      <Banner/>
      <div className="flex flex-row justify-around align-center">
        <div className="flex flex-col">

          <Personal personal={personal} setPersonal={setPersonal}/>
          <Education education={education} setEducation={setEducation}/>
          <Experience experience={experience} setExperience={setExperience}/>
          <button className='m-10 p-4 bg-green-700 rounded bold text-white
          hover:bg-green-900 ease duration-300' onClick={generatePreview}> Create a CV </button>
        </div>
        <div className="flex flex-col">
          <h1 className='text-[30px] m-5'>CV example: </h1>
          <Preview data={data} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
