import React from 'react'
import App from './App'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './pages/contactUs/contact'

function RouteApp() {
  return (
    <Router>
        <Routes>
            <Route path='' element={<App />} />
            <Route path='/contact' element={<Contact />}></Route>
        </Routes>
    </Router>
  )
}

export default RouteApp