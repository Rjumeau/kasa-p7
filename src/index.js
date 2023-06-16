import React from 'react'
import ReactDOM from 'react-dom'
import './assets/Styles/main.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Accomodation from './pages/Accomodation'
import About from './pages/About'

import Error from './components/Error'
import Navbar from './components/Navbar'

ReactDOM.render(
    <React.StrictMode>
        <Router>
          < Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/accomodation/:accomodationNumber" element={<Accomodation />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    </React.StrictMode>,
document.getElementById('root')
)
