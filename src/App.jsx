import Preview from './Preview'
import Education from './Personal'
import Personal from './Education'
import Experience from './Experience'
import Banner from './Banner'
import Footer from './Footer'

import { useState } from 'react'

function App() {

  const [education, setEducation] = useState({ city: "", degree: "", subject: "", from: "", to: "" });
  const [personal, setPersonal] = useState({ city: "", company: "", position: "", from: "", to: "" });
  const [experience, setExperience] = useState({ firstName: "", lastName: "", title: "", phoneNumber: "" });

  return (
    <div className="font-normal">
      <Banner/>
      <div className="flex flex-row justify-around align-center">
        <div className="flex flex-col">
          
          <Education education={education} setEducation={setEducation}/>
          <Personal personal={personal} setPersonal={setPersonal}/>
          <Experience experience={experience} setExperience={setExperience}/>
      
        </div>
        <Preview/>
      </div>
      <Footer />
    </div>
  )
}

export default App
