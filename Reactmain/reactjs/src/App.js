import React from 'react';
import Index from './pages/index/index';
import About from './pages/index/about';
import Events from './pages/index/events';
import Contact from './pages/index/contact';
import Login from './pages/vol_log/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Orglog from './pages/org_log/orglog';
import Register from './pages/vol_reg/register';
import Orgreg from './pages/org_reg/orgreg';
import Admin from './pages/admin/admin'
import MapTest from './components/map'
import Profile from './pages/profile/profile'
import Navbar from './components/navbar';
import OrgPost from './pages/org_dash/org_post/OrgPost';
import Footer from './components/footer';
import Sidebar from './pages/org_dash/components/sidebar';
import Event_details from './components/event_details';
import Odas from './pages/org_dash/Odas';
import UserDropdown from './pages/org_dash/components/userdropdown';
import Terms from './pages/index/terms';
import Privacy from './pages/index/privacy';
import Orgprofile from './pages/org_dash/orgprofile';

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
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/event_details" element={<Event_details />} />
        <Route path="/odas" element={<Odas />} />
        <Route path="/post" element={<OrgPost />} />
        <Route path="/p" element={<UserDropdown />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/orgprofile" element={<Orgprofile />} />
       


      </Routes>
    </BrowserRouter>
  );
}

export default App;
