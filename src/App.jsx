import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/Home/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/util/NavBar';
import About from './pages/About/About'
import Footer from './components/util/Footer';

import CarModelsPage from './pages/CarModels/CarModelsPage';
import TestimoniasPage from './pages/Testimonias/TestimoniasPage';

import {AiOutlineArrowUp} from "react-icons/ai";
import OurTeamPage from './pages/OurTeam/OurTeamPage';
import ContactUsPage from './pages/Contact/ContactUsPage';



const App = () => {
  const handlescrollup =()=>{
    window.scrollTo({top :0 ,behavior :'smooth'});
  };

  return (
    <div>
    <NavBar/>
      <BrowserRouter> 
          <Routes>
            <Route index element={<HomePage/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/models" element={<CarModelsPage/>}/>
            <Route path="/testimonials" element={<TestimoniasPage/>}/>
            <Route path="/ourteam" element={<OurTeamPage/>}/>
            <Route path="/contact-us" element={<ContactUsPage/>}/>
          </Routes>
    </BrowserRouter>
    <Footer/>
    
    <button onClick={handlescrollup} className='scroll-up'>
      <AiOutlineArrowUp/>
    </button>

    </div>
  )
}

export default App