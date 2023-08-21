import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Accomodation from './pages/Accomodation';
import About from './pages/About';

import Error from './components/Error';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function AppRouter() {
  return (
    <Router>
      < div className="container">
        < Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/accomodations/:accomodationId" element={<Accomodation />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<Error />} />
          </Routes>
      </div>
      < Footer />
    </Router>
  )
}

export default AppRouter;
