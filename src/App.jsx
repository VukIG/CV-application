import Preview from './Preview'
import Education from './Personal'
import Personal from './Education'
import Experience from './Experience'
import Banner from './Banner'
import Footer from './Footer'
function App() {

  return (
    <div className="font-normal">
      <Banner/>
      <div className="flex flex-row justify-around align-center">
        <div className="flex flex-col">
          
          <Education/>
          <Personal/>
          <Experience/>
      
        </div>
        <Preview/>
      </div>
      <Footer />
    </div>
  )
}

export default App
