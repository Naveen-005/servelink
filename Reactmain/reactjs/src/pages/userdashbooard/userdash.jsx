// import React from 'react';
import React, { useState, useEffect } from 'react';
import './userdash.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

//import 'bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

import 'boxicons/css/boxicons.min.css';
//import '@fortawesome/fontawesome-free/css/all.min.css';

//import 'boxicons/dist/css/boxicons.min.css';

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


  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    // Function to check scroll position and toggle button visibility
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsButtonVisible(true);
      } else {
        setIsButtonVisible(false);
      }
    };

    // Add scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove scroll event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to handle scrolling to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };




  

 

  


  return (
    <div className='by1'>
    <div className='by'>
    <div id="body-pd" className={state.isNavbarOpen ? 'body-pd-expanded' : ''}>
            <header className={`header117 ${state.isNavbarOpen ? 'active' : ''}`} id="header117">
        <div className="header117_toggle" onClick={toggleNavbar}>
          <i className={`bx ${state.isNavbarOpen ? 'bx-x' : 'bx-menu'}`} id="header117-toggle"></i>
        </div>
        <div className="header117_img">
          {/* Wrap the image inside a button element */}
          <button onClick={toggleCardVisibility} className="profile-photo-button" style={{ width: '150px' }}>
  <img src={"assets/images/th.jpeg"} alt="" style={{ width: '100%', height: 'auto' }} />
</button>


          {state.isCardVisible && (
        <div className="floating-card117" id="floatingCard117">
          {/* Profile Picture */}
          {/* <img src="https://i.imgur.com/hczKIze.jpg" alt="Profile Photo" className="profile-photo" /> */}
          {/* User Information */}
          <div className="user-info">
          <img src={"assets/images/th.jpeg"} alt="Profile Image" className="profile-image" />
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
      <div className="cover-photo-container175">
    <img src={"assets/images/567.jpg"} alt="Cover Photo" className="cover-photo" />
    <img src={"assets/images/th.jpeg"} alt="Profile Photo" className="profile-photo-overlay" style={{ borderWidth: '8px',borderColor: 'rgb(106, 106, 106)' }}/>
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
      <a href="profile" style={{ textDecoration: 'none' }}className={`nav117_link ${state.activeLink === 'Account' ? 'active' : ''}`} onClick={() => handleLinkClick('Account')}> 
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
      <div className="components117">
  <h1 className="nev117">Welcome, Nevin</h1>
  </div>
      <div id='button121'>
<button class="button-64" role="button"><span class="text">&nbsp;&nbsp;Active Events&nbsp;&nbsp;</span></button>
<a href="events" class="button-64" role="button"><span class="text">Explore Events</span></a>
<button class="button-64" role="button"><span class="text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;read news&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></button>
<button class="button-64" role="button"><span class="text">&nbsp;&nbsp;Event History&nbsp;&nbsp;</span></button>
</div> 
      {/* Container Main start */}
      <div className="container172">
      <div className="section-container175">
  <div className="left-section1">
    {/* Content for the left section */}
    <div className="post12">
  <div className="post-header12">
    <img src={"assets/images/th1.jpeg"} alt="Profile Picture" className="profile-picture12" />
    <div className="post-header-info12">
      <h3 className="post-author12">John Doe</h3>
      <p className="post-time12">Posted on January 1, 2024</p>
    </div>
  </div>
  <div className="post-content12">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et magna vel justo
      ultricies vestibulum. Nullam non interdum mauris, at cursus libero.
    </p>
    <img src={"assets/images/vol27.jpg"} alt="Post Photo" className="post-photo12  " />
    {/* You can add more content here, like images, videos, etc. */}
  </div>
  <div className="post-actions12">
  <button className="post-like-button">Like</button>
  <button className="post-comment-button">Comment</button>
  <button className="post-share-button">Share</button>
  </div>
</div>
</div>
  </div>
  <div className="section-container175">
  <div className="right-section1">
  {/* Content for the right section */}
  <div className="post121">
    <div className="post-header12">
      <img src={"assets/images/im.jpeg"} alt="Profile Picture" className="profile-picture12" />
      <div className="post-header-info12">
        <h3 className="post-author12">John Doe</h3>
        <p className="post-time12">Posted on January 1, 2024</p>
      </div>
    </div>
    <div className="post-content12">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et magna vel justo
        ultricies vestibulum. Nullam non interdum mauris, at cursus libero.
      </p>
      <div id='post-container175'>
      <img src={"assets/images/vol6.jpg"} alt="Post Photo" className="post-photo12" />
      </div>
      {/* You can add more content here, like images, videos, etc. */}
    </div>
    <div className="post-actions12">
      <button className="post-like-button">Like</button>
      <button className="post-comment-button">Comment</button>
      <button className="post-share-button">Share</button>
      <div id="heart-container175"></div>
    </div>
    </div>
  </div>
</div>



{/* guygug */}

<div className="section-container175">
  <div className="left-section1">
    {/* Content for the left section */}
    <div className="post12">
  <div className="post-header12">
    <img src={"assets/images/th1.jpeg"} alt="Profile Picture" className="profile-picture12" />
    <div className="post-header-info12">
      <h3 className="post-author12">John Doe</h3>
      <p className="post-time12">Posted on January 1, 2024</p>
    </div>
  </div>
  <div className="post-content12">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et magna vel justo
      ultricies vestibulum. Nullam non interdum mauris, at cursus libero.
    </p>
    <img src={"assets/images/vol22.jpg"} alt="Post Photo" className="post-photo12  " />
    {/* You can add more content here, like images, videos, etc. */}
  </div>
  <div className="post-actions12">
    <button className="post-like-button">Like</button>
    <button className="post-comment-button">Comment</button>
    <button className="post-share-button">Share</button>
  </div>
</div>
</div>
  </div>
  <div className="section-container175">
  <div className="right-section1">
    {/* Content for the right section */}
    <div className="post121">
    <div className="post-header12">
    <img src={"assets/images/im.jpeg"} alt="Profile Picture" className="profile-picture12" />
    <div className="post-header-info12">
      <h3 className="post-author12">John Doe</h3>
      <p className="post-time12">Posted on January 1, 2024</p>
    </div>
  </div>
    <div className="post-content12">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et magna vel justo
      ultricies vestibulum. Nullam non interdum mauris, at cursus libero.
    </p>
    <img src={"assets/images/vol25.jpg"} alt="Post Photo" className="post-photo12  " />
    {/* You can add more content here, like images, videos, etc. */}
  </div>
    <div className="post-actions12">
    <button className="post-like-button">Like</button>
    <button className="post-comment-button">Comment</button>
    <button className="post-share-button">Share</button>
  </div>
  </div>
  </div>
</div>
</div>
{/* uzuuvhbk */}
<div id='mov121'>
<div className="container1721">
<div className="section-container175">
  <div className="left-section">
    {/* Content for the left section */}
    <div className="post12">
  <div className="post-header12">
    <img src={"assets/images/th1.jpeg"} alt="Profile Picture" className="profile-picture12" />
    <div className="post-header-info12">
      <h3 className="post-author12">John Doe</h3>
      <p className="post-time12">Posted on January 1, 2024</p>
    </div>
  </div>
  <div className="post-content12">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et magna vel justo
      ultricies vestibulum. Nullam non interdum mauris, at cursus libero.
    </p>
    <img src={"assets/images/vol24.jpg"} alt="Post Photo" className="post-photo12  " />
    {/* You can add more content here, like images, videos, etc. */}
  </div>
  <div className="post-actions12">
    <button className="post-like-button">Like</button>
    <button className="post-comment-button">Comment</button>
    <button className="post-share-button">Share</button>
  </div>
</div>
</div>
  </div>
  <div className="section-container175">
  <div className="left-section">
    {/* Content for the right section */}
    <div className="post121">
    <div className="post-header12">
    <img src={"assets/images/im.jpeg"} alt="Profile Picture" className="profile-picture12" />
    <div className="post-header-info12">
      <h3 className="post-author12">John Doe</h3>
      <p className="post-time12">Posted on January 1, 2024</p>
    </div>
  </div>
    <div className="post-content12">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et magna vel justo
      ultricies vestibulum. Nullam non interdum mauris, at cursus libero.
    </p>
    <img src={"assets/images/vol23.jpg"} alt="Post Photo" className="post-photo12  " />
    {/* You can add more content here, like images, videos, etc. */}
  </div>
    <div className="post-actions12">
    <button className="post-like-button">Like</button>
    <button className="post-comment-button">Comment</button>
    <button className="post-share-button">Share</button>
  </div>
  </div>
  </div>
  </div>
</div>
</div>

      <div className="height-100 bg-light">
        <h4>Main Components</h4>
      </div>
      {isButtonVisible && (
        <button id="scrollToTopBtn" className="scroll-to-top-button" onClick={scrollToTop}>
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
      )}



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
    </div>
    </div>
  );
}

export default Userdash;
