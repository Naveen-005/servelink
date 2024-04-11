import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import { useEffect } from 'react';
import Cookies from 'js-cookie';



function Navbar() {
  const [volunteerDropdownOpen, setVolunteerDropdownOpen] = useState(false);
  const [organizationDropdownOpen, setOrganizationDropdownOpen] = useState(false);
  const [guestDropdownOpen, setGuestnDropdownOpen] = useState(false);
  

  const [user_name,setUserName]=useState('Guest')
  const [isLoggedIn,setLoginStatus] = useState(false)

 

  const toggleVolunteerDropdown = () => {
    setVolunteerDropdownOpen(!volunteerDropdownOpen);
    setOrganizationDropdownOpen(false); // Close organization dropdown when opening volunteer dropdown
    setGuestnDropdownOpen(false);
  };

  const toggleOrganizationDropdown = () => {
    setOrganizationDropdownOpen(!organizationDropdownOpen);
    setVolunteerDropdownOpen(false); // Close volunteer dropdown when opening organization dropdown
    setGuestnDropdownOpen(false);
  };
  const toggleGuestDropdown = () => {
    setGuestnDropdownOpen(!guestDropdownOpen);
    setVolunteerDropdownOpen(false);
    setOrganizationDropdownOpen(false); // Close volunteer dropdown when opening organization dropdown
  };

  const handleLogout = () => {
    setLoginStatus(false)
    setUserName('Guest')
    Cookies.remove('name');
    Cookies.remove('uid');
    Cookies.remove('token');
    Cookies.remove('org_id');

  };

  useEffect(() => {
    
    if (Cookies.get('name')) {
      setUserName(Cookies.get('name'))
      setLoginStatus(true)
    }

  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Link className="navbar-brand logo m-0 float-start text-black-50" to="/">Servelink</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto ">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" onClick={toggleVolunteerDropdown}>
                Volunteer
              </a>
              <ul className={`dropdown-menu ${volunteerDropdownOpen ? 'show' : ''}`}>
                <li><Link className="dropdown-item" to="/login">Login</Link></li>
                <li className="dropdown-divider"></li>
                <li><Link className="dropdown-item" to="/register">Register</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" onClick={toggleOrganizationDropdown}>
                Organization
              </a>
              <ul className={`dropdown-menu ${organizationDropdownOpen ? 'show' : ''}`}>
                <li><Link className="dropdown-item" to="/login-organization">Login</Link></li>
                <li className="dropdown-divider"></li>
                <li><Link className="dropdown-item" to="/register-organization">Register</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">

              <Link className="nav-link " to="/events">Events</Link>

            </li>
           
            <li className="nav-item" >
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            
            <li className="nav-item dropdown"  style={{ marginLeft:'48%',cursor:'pointer'}}>
            <li className="nav-item" >
             <a className="nav-link dropdown-toggle" onClick={toggleGuestDropdown}>{user_name}
             </a>
             <ul className={`dropdown-menu  ${guestDropdownOpen ? 'show' : '' }` } style={{ position: 'absolute', right: 0, top: '100%', zIndex: 1000}} >
                <li><Link className="dropdown-item"  to="">Profile</Link></li>
                <li className="dropdown-divider"></li>
                {isLoggedIn && (
                  <li><Link className="dropdown-item" onClick={handleLogout}>Logout</Link></li>
                )}
              </ul>
             

            </li>
            </li>
            
            </ul>
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
