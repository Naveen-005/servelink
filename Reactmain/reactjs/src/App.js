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
import OrgPost from './pages/org_dash/org_post/OrgPost';
import Sidebar from './pages/org_dash/components/sidebar';
import Event_details from './components/event_details';
import Odas from './pages/org_dash/Odas';
import UserDropdown from './pages/org_dash/components/userdropdown';
import Terms from './pages/index/terms';
import Privacy from './pages/index/privacy';
import Orgprofile from './pages/org_dash/orgprofile';
import Userdash from './pages/userdashbooard/userdash'
import ProfileView from './pages/org_dash/profileview';
import Sidebarprofile from './pages/org_dash/components/sidebarprofile';
import Settings from './pages/org_dash/Settings';
import Orgauth from './pages/org_dash/components/Orgauth';
import Changepass from './pages/org_dash/components/Changepass';
import Notification from './pages/org_dash/components/notification';
import OrgForm from './pages/org_dash/org_redirect/OrgForm';
import Error from './components/error';
import Chatbot from './components/chatbot';
import Messages from './pages/org_dash/Review';
import Ongoingevent from './pages/org_dash/components/ongoingevent';
import CompletedEvents from './pages/org_dash/components/completedevents';
import Analytics from './pages/org_dash/components/Analytics';
import AdminDash from './pages/AdminDashboard/AdminDash';
import AdminOrg from './pages/AdminDashboard/AdminOrg';
import AdminVol from './pages/AdminDashboard/AdminVol';
import AdminReport from './pages/AdminDashboard/AdminReport';
import AdminFeedback from './pages/AdminDashboard/AdminFeedback';
import Review from './pages/org_dash/Review';
import Search from './components/search';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* INDEX PAGES ROUTE*/}
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login-organization" element={<Orglog />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register-organization" element={<Orgreg />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/*" element={<Error />} />


         {/* TESTING PAGES*/}
        <Route path="/test" element={<MapTest />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/chatbot" element={<Chatbot />} />


        {/*ORGANIZATION PAGES*/}
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/event_details/:id" element={<Event_details />} />
        <Route path="/odas" element={<Odas />} />
        <Route path="/post" element={<OrgPost />} />
        <Route path="/p" element={<UserDropdown />} />
        <Route path="/orgprofile" element={<Orgprofile />} />
        <Route path="/profileview/:id?" element={<ProfileView />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/authentication" element={<Orgauth />} />
        <Route path="/changepassword" element={<Changepass />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/org_verification" element={<OrgForm />} />
        <Route path="/org_review" element={<Review />} />
        <Route path="/ongoing_event" element={<Ongoingevent />} />
        <Route path="/complete_event" element={<CompletedEvents />} />
        <Route path="/sample" element={<Analytics />} />
        

        {/*VOLUNTEER PAGES*/}          
        <Route path="/userdash" element={<Userdash />} />
        

        {/*ADMIN PAGES*/} 
        <Route path="/admindash" element={<AdminDash />} />
        <Route path="/adminorg" element={<AdminOrg/>} />
        <Route path="/adminvol" element={<AdminVol/>} />
        <Route path="/adminrep" element={<AdminReport/>} />
        <Route path="/adminfeed" element={<AdminFeedback/>} />





      </Routes>
    </BrowserRouter>
  );
}

export default App;
