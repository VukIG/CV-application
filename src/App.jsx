import { useState } from 'react'
import Education from './Education'
import Personal from './Personal'
import Experience from './Experience'
import Banner from './Banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Banner/>
      <Education/>
      <Personal/>
      <Experience/>
    </div>
  )
}

export default App
