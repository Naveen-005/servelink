import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import config from '../../config.json'
import './dashboard.css'


function Dashboard() {
    return (
      <div id="body-pd">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src="logo (1).png" alt="Logo" width="55" height="55" className="d-inline-block align-text-top"/>
              ServeLink</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">New Events</a>
                </li>
          
                <li className="nav-item">
                  <a className="nav-link disabled" aria-disabled="true">Delete Account</a>
                </li>
              </ul>
   
              <div id="sidemo">
              <button className="btn btn-link nav-link" id="inboxButton">
                <i className="fas fa-envelope"></i>
                  Inbox
              </button>
            </div>
    
  
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
  
        <div className="container mt-4">
          <div className="custom-card1" id="messageCollapse">
     
              <button className="btn btn-primary" onclick="window.location.href='page1.html';">
                  <i className="fas fa-envelope"></i>
                  Message 1: Go to Page 1
              </button>
          
              <button className="btn btn-primary mt-2" onclick="window.location.href='page2.html';">
                  <i className="fas fa-bell"></i>
                  Message 2: Go to Page 2
              </button>
          </div>
      </div>
      
  
        <header className="header" id="header">
          <div className="header_toggle">
              <i className="bx bx-menu" id="header-toggle"></i>
          </div>
  
          <button className="header_img_button" id="expandCardButton">
              <img src="do.jpeg" alt="Profile Photo"/>
          </button>
      </header>
      
  
      <div className="floating-card" id="floatingCard" style="text-align: center;">
  
        <button className="btn btn-danger" onclick="logout()">
          <i className="fas fa-sign-out-alt"></i>Logout</button>
    </div>
  
  
  
          <div className="l-navbar" id="nav-bar">
              <nav className="nav">
                  <div> <a href="#" className="nav_logo"> <i className='fas fa-search'></i> 
                      <span className="nav_logo-name">ServeLink</span> </a>
  
                      <div className="nav_list"> <a href="#" className="nav_link active"> <i className='bx bx-grid-alt nav_icon'></i> 
                          <span className="nav_name">Dashboard</span> </a> 
                              <a href="#" className="nav_link"> <i className='bx bx-user nav_icon'></i> 
                                  <span className="nav_name">Account</span> </a>
                              <a href="#" className="nav_link"> <i className='bx bx-message-square-detail nav_icon'></i> 
                                   <span  className="nav_name">Past History</span> </a> 
                              <a href="#" className="nav_link"> <i className='bx bx-bookmark nav_icon'></i> 
                                  <span className="nav_name">Upcomig Events</span> </a> 
                          </div>
                  </div> <a href="#" className="nav_link"> <i className='bx bx-log-out nav_icon'></i> <span className="nav_name">SignOut</span>
                  </a>
              </nav>
          </div>
  
  
  
  
    <div style="position: relative;">
      <div>
      <img src="ab.jpg" alt="Description of the image" style="width: 100%; height: 300px;"/>
      </div>
      <div style="width: 100%; height: 100px; position: absolute; bottom: 0; background-color: #ffffff; border-top: 1px solid #fafafa; box-shadow: 0px -5px 15px 0px rgba(0, 0, 0, 0.1);">
      <div style="padding: 15px;">
          <h4 style="margin: 0;">Welcome,User</h4>
          <p style="margin: 0;">Additional Description</p>
      </div>
  </div>
      <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
          <img src="do.jpeg" alt="Profile Photo" style="width: 150px; height: 150px; border-radius: 50%;"/>
      </div>
  </div>
  
  
  
          <div className="height-100 bg-light">
              <h4>Main Components</h4>
          </div>
  
      
  
      
  
        
  
  </div>
    );
  }
  
  export default Dashboard;
  