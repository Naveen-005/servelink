import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js'



function Navbar() {
  const [volunteerDropdownOpen, setVolunteerDropdownOpen] = useState(false);
  const [organizationDropdownOpen, setOrganizationDropdownOpen] = useState(false);

  const toggleVolunteerDropdown = () => {
    setVolunteerDropdownOpen(!volunteerDropdownOpen);
    setOrganizationDropdownOpen(false); // Close organization dropdown when opening volunteer dropdown
  };

  const toggleOrganizationDropdown = () => {
    setOrganizationDropdownOpen(!organizationDropdownOpen);
    setVolunteerDropdownOpen(false); // Close volunteer dropdown when opening organization dropdown
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Link className="navbar-brand logo m-0 float-start text-black-50" to="/">Servelink</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
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
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
