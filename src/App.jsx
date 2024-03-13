import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Impdates } from './Components/Impdates'
import { Home } from './Components/Home'
import { Speakers } from './Components/Speakers'
import { AboutUs } from './Components/AboutUs'
import { Callforpapers } from './Components/Callforpapers'
import { Committees } from './Components/Committees'
import { ContactUs } from './Components/ContactUs'
import { Registration } from './Components/Registration'
import { Sponsorship } from './Components/Sponsorship'
import { Venue } from './Components/Venue'
import { Footer } from './Components/Footer'
import {Headertailwind} from './Components/Headertailwind'
function App() {
  
  return (
    <>
    <div>
    <BrowserRouter>
    
    <Headertailwind />
    <Routes>
        <Route path='/Impdates' element={<Impdates />}></Route>
        <Route path='/' element = {<Home/>} />
        <Route path='/speakers' element = {<Speakers/>} />
        <Route path='/aboutus' element = {<AboutUs/>} />
        <Route path='/callforpapers' element = {<Callforpapers/>} />
        <Route path='/committees' element = {<Committees/>} />
        <Route path='/contactus' element = {<ContactUs/>}/>
        <Route path='/registration' element = {<Registration/>} />
        {/* <Route path='/sponsorship' element = {<Sponsorship/>} /> */}
        <Route path='/venue' element = {<Venue/>} />
      </Routes>
    <Footer />
    </BrowserRouter>
    </div>
      
    </>
  )
}

export default App
