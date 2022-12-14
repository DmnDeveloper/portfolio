import React  from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from '../pages/Home'
import Portafolio from '../pages/Portafolio' 
import Contact from '../pages/Contact'
import { AnimatePresence } from 'framer-motion'

const AnimatedRoutes = () => {
const location = useLocation()
  return (
    <AnimatePresence>  
        <Routes location={location} key={location}>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/Portafolio' element={<Portafolio />} />
            <Route exact path='/Contact' element={<Contact />} />
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes