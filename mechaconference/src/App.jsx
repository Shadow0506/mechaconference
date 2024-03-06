import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import {Suspense,lazy} from 'react'
import { Header } from './Components/Header'
import { Impdates } from './Components/Impdates'
import { Home } from './Components/Home'
import { Authors } from './Components/Authors'
import { AboutUs } from './Components/AboutUs'
import { Callforpapers } from './Components/Callforpapers'
import { Committees } from './Components/Committees'
import { ContactUs } from './Components/ContactUs'
import { Registration } from './Components/Registration'
import { Sponsorship } from './Components/Sponsorship'
import { Venue } from './Components/Venue'
import { Footer } from './Components/Footer'
import {Headertailwind} from './Components/Headertailwind'
const  impdates = lazy(()=>import('./Components/Impdates'))
const  home = lazy(()=>import('./Components/Home'))
const  authors = lazy(()=>import('./Components/Authors'))
const  aboutus = lazy(()=>import('./Components/AboutUs'))
const  callforpapers = lazy(()=>import('./Components/Callforpapers'))
const  committees = lazy(()=>import('./Components/Committees'))
const  contactus = lazy(()=>import('./Components/ContactUs'))
const  registration = lazy(()=>import('./Components/Registration'))
const  sponsorship = lazy(()=>import('./Components/Sponsorship'))
const  venue = lazy(()=>import('./Components/Venue'))
const  footer = lazy(()=>import('./Components/Footer'))
function App() {
  
  return (
    <>
    <div>
    <BrowserRouter>
    
    <Headertailwind />
    <Routes>
        <Route path='/Impdates' element={<Suspense fallback={"loading.."}><Impdates /></Suspense>}></Route>
        <Route path='/' element = {<Suspense fallback={"loading.."}><Home/></Suspense>} />
        <Route path='/authors' element = {<Suspense fallback={"loading.."}><Authors/></Suspense>} />
        <Route path='/aboutus' element = {<Suspense fallback={"loading.."}><AboutUs/></Suspense>} />
        <Route path='/callforpapers' element = {<Suspense fallback={"loading.."}><Callforpapers/></Suspense>} />
        <Route path='/committees' element = {<Suspense fallback={"loading.."}><Committees/></Suspense>} />
        <Route path='/contactus' element = {<Suspense fallback={"loading.."}><ContactUs/></Suspense>}/>
        <Route path='/registration' element = {<Suspense fallback={"loading.."}><Registration/></Suspense>} />
        <Route path='/sponsorship' element = {<Suspense fallback={"loading.."}><Sponsorship/></Suspense>} />
        <Route path='/venue' element = {<Suspense fallback={"loading.."}><Venue/></Suspense>} />
      </Routes>
    <Footer />
    </BrowserRouter>
    </div>
      
    </>
  )
}

export default App
