import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hadtop from './Components/Hadtop'
import Navserch from './Components/Navserch'
import Navbar from './Components/Navbar'
import Slider from './Components/Slider'
import Fcategory from './Components/Fcategory'
import PopProduct from './Components/PopProduct'
import Bestshell from './Components/Bestshell'
import Content from './Components/Content'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <BrowserRouter>
              <Hadtop />
              <Navserch/>
              <Navbar/>
              <Slider/>
              <Fcategory/>
              <PopProduct/>
              <Bestshell/>
              <Content/>
              <Footer/>
              <Routes>
                <Route path='/' />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
