import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/Home/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/util/NavBar';
import About from './pages/About/About'
import Footer from './components/util/Footer';
const App = () => {
  return (
    <div>
    <NavBar/>
      <BrowserRouter> 
          <Routes>
            <Route index element={<HomePage/>}/>
            <Route path="/about" element={<About/>}/>
          </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  )
}

export default App