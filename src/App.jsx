import { useState } from 'react'
import Education from './Education'
import Personal from './Personal'
import Experience from './Experience'
import Banner from './Banner'
import Footer from './Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="font-normal">
      <Banner/>
      <Education/>
      <Personal/>
      <Experience/>
      <Footer />
    </div>
  )
}

export default App
