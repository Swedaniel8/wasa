import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Navbar, Footer } from './components/index'
import { Header, About, Contact, Products,Partners } from './containers/index'
import './App.css';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="" element={<Header />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path='/projects' element={<Partners />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App