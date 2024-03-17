import React from 'react';
import Index from './pages/index';
import About from './pages/about';
import News from './pages/news';
import Contact from './pages/contact';
import Login from './pages/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Orglog from './pages/orglog';
import Register from './pages/register';
import Orgreg from './pages/orgreg';
import Admin from './pages/admin'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Orglog" element={<Orglog />} />
        <Route path="/register" element={<Register />} />
        <Route path="/orgreg" element={<Orgreg />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
