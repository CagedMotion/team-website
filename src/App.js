// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import PageContent from './components/PageContent';
import Home from './pages/Home';
import Team from './pages/Team';
import Sponsors from './pages/Sponsors';
import PastCars from './pages/PastCars';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/past-cars" element={<PastCars />} />
      </Routes>
    </Router>
  );
}

export default App;
