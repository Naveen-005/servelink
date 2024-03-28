import React from 'react';
import Index from './pages/index';
import About from './pages/about';
import Events from './pages/events';
import Contact from './pages/contact';
import Login from './pages/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Orglog from './pages/orglog';
import Register from './pages/register';
import Orgreg from './pages/orgreg';
import Admin from './pages/admin'
import MapTest from './components/map'
import Profile from './pages/profile'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login-organization" element={<Orglog />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register-organization" element={<Orgreg />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/test" element={<MapTest />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/*" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
