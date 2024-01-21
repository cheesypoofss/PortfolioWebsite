import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Research from './pages/Research';
import UIUXWork from './pages/UI-UX-Work';
import ArtDesign from './pages/Art-Design';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/UI-UX-Work" element={<UIUXWork />} />
        <Route path="/Research" element={<Research />} />
        <Route path="/Art-Design" element={<ArtDesign />} />
        {/* Add more routes here */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
