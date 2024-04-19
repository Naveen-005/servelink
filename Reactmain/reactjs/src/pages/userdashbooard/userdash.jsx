// import React from 'react';
import React, { useState } from 'react';
import './userdash.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons/css/boxicons.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// import 'boxicons/dist/css/boxicons.min.css';

function Userdash() {

  const [isCardVisible, setIsCardVisible] = useState(false);

  const [state, setState] = useState({
    isNavbarOpen: false,
    isCardVisible: false,
    activeLink: 'Dashboard',
    isMessagesVisible: false,
    setIsCardExpanded: false
  });

  const toggleNavbar = () => {
    setState(prevState => ({
      ...prevState,
      isNavbarOpen: !prevState.isNavbarOpen
    }));
  };

  const toggleCardVisibility = () => {
    setState(prevState => ({
      ...prevState,
      isCardVisible: !prevState.isCardVisible
    }));
  };
  const handleLinkClick = (link) => {
    setState(prevState => ({
      ...prevState,
      activeLink: link
    }));
  };
  const handleMessagesClick = () => {
    setIsCardVisible(prevState => !prevState);
    setState(prevState => ({
      ...prevState,
      isMessagesVisible: !prevState.isMessagesVisible
    }));
  };
  

 

  


  return (
    <div id="body-pd" className={state.isNavbarOpen ? 'body-pd-expanded' : ''}>
            <header className={`header117 ${state.isNavbarOpen ? 'active' : ''}`} id="header117">
        <div className="header117_toggle" onClick={toggleNavbar}>
          <i className={`bx ${state.isNavbarOpen ? 'bx-x' : 'bx-menu'}`} id="header117-toggle"></i>
        </div>
        <div className="header117_img">
          {/* Wrap the image inside a button element */}
          <button onClick={toggleCardVisibility} className="profile-photo-button" style={{ width: '150px' }}>
  <img src="https://i.imgur.com/hczKIze.jpg" alt="" style={{ width: '100%', height: 'auto' }} />
</button>


          {state.isCardVisible && (
        <div className="floating-card117" id="floatingCard117">
          {/* Profile Picture */}
          {/* <img src="https://i.imgur.com/hczKIze.jpg" alt="Profile Photo" className="profile-photo" /> */}
          {/* User Information */}
          <div className="user-info">
          <img src="https://i.imgur.com/hczKIze.jpg" alt="Profile Image" className="profile-image" />
            <h3 className="user-name" style={{ fontSize: '28px' }}>John Doe</h3>
            <p className="user-email">john.doe@example.com</p>
            {/* Account Actions */}
            <div className="account-actions">
              <button className="btn btn-primary account-settings-button" style={{ fontSize: '15px' }}>Account Settings</button>
              <button className="btn btn-danger logout-button" style={{ fontSize: '15px' }}>
                <i className="fas fa-sign-out-alt" ></i>Logout
              </button>
            </div>
          </div>
        </div>
      )}
        </div>
      </header>
      <div className="cover-photo-container">
    <img src="https://tse2.mm.bing.net/th?id=OIP.UlD2FcXKY-DhU2DobkwIVgHaCv&pid=Api&P=0&h=180" alt="Cover Photo" className="cover-photo" />
    <img src="https://i.imgur.com/hczKIze.jpg" alt="Profile Photo" className="profile-photo-overlay" style={{ borderWidth: '8px',borderColor: 'rgb(106, 106, 106)' }}/>
  </div>
  <div className="components117">
  <h1 className="nev117">Welcome, Nevin</h1>
  </div>
      <div className={`l-nav117bar ${state.isNavbarOpen ? 'show' : ''}`} id="nav117-bar">
        <nav117 className="nav117">
          <div> 
            <a href="index" className="nav117_logo"> 
              <i className='fas fa-concierge-bell nav117_logo-icon'></i> 
              <span className="nav117_logo-name">Servelink</span> 
            </a>
 <div className="nav117_list"> 
      <a href="#" style={{ textDecoration: 'none' }} className={`nav117_link ${state.activeLink === 'Dashboard' ? 'active' : ''}`} onClick={() => handleLinkClick('Dashboard')}> 
        <i className='bx bx-grid-alt nav117_icon'></i> 
        <span className="nav117_name">Dashboard</span> 
      </a> 
      <a href="#" style={{ textDecoration: 'none' }}className={`nav117_link ${state.activeLink === 'Account' ? 'active' : ''}`} onClick={() => handleLinkClick('Account')}> 
        <i className='bx bx-user nav117_icon'></i> 
        <span className="nav117_name">Account</span> 
      </a> 
      <a href="#" style={{ textDecoration: 'none' }}className={`nav117_link ${state.activeLink === 'Past History' ? 'active' : ''}`} onClick={() => handleLinkClick('Past History')}> 
        <i className='bx bx-message-square-detail nav117_icon'></i> 
        <span className="nav117_name">Past History</span> 
      </a> 
      <a href="#" style={{ textDecoration: 'none' }}className={`nav117_link ${state.activeLink === 'Upcoming Events' ? 'active' : ''}`} onClick={() => handleLinkClick('Upcoming Events')}> 
        <i className='bx bx-bookmark nav117_icon'></i> 
        <span className="nav117_name">Upcoming Events </span> 
      </a> 
              {/* <a href="#" className="nav117_link"> 
                <i className='bx bx-folder nav117_icon'></i> 
                <span className="nav117_name">Files</span> 
              </a> 
              <a href="#" className="nav117_link"> 
                <i className='bx bx-bar-chart-alt-2 nav117_icon'></i> 
                <span className="nav117_name">Stats</span> 
              </a>  */}
            </div>
          </div> 
          <a href="#" style={{ textDecoration: 'none' }}className="nav117_link"> 
            <i className='bx bx-log-out nav117_icon'></i> 
            <span className="nav117_name">SignOut</span> 
          </a>
        </nav117>
      </div>
      {/* Container Main start */}
      <div className="height-100 bg-light">
        <h4>Main Components</h4>
      </div>
   
      {/* <div className="messages-floating-option" onClick={handleMessagesClick}>
          <i className="bx bx-message-square-detail"></i>
        </div> */}

<div className="messages-floating-option" onClick={handleMessagesClick} style={{ boxShadow: '0 4px 10px rgba(0, 0, 0, 0.99)' }}>
        <i className="bx bx-message-square-detail"></i>
      </div>

      {isCardVisible && (
        <div className="floating-card">
        {/* Content of the floating card */}
        <a href="/message1">
          <p style={{ color: 'white',fontSize:'16px'}}>You have Message</p>
        </a>
        <a href="/message2">
          <p style={{ color: 'red',fontSize:'16px' }}>Please be alert</p>
        </a>
      </div>
      
      )}




    </div>
    
  );
}

export default Userdash;
