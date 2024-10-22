import React from 'react'
import Home from './pages/Home';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Blogs from './pages/Blogs';
import Error from './pages/Error';
import Language from './pages/Language'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Navbar from './navbarFolder/Navbar';
import './App.css'

const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Navbar />
   
        <Routes>
            <Route path="/home" element= { <Home /> }></Route>
            <Route path="/contact" element= { <Contact /> }></Route>
            <Route path="/services" element= { <Services /> }></Route>
            <Route path="/blogs" element= { <Blogs /> }></Route>
            <Route path="/blogs/:title" element= { <Language /> }></Route>
            <Route path="*" element= { <Error /> }></Route>
        </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App;

