// import React from 'react';
import React, { useState, useEffect, useRef } from 'react';
// import { useLocationData } from '../../components/LocationContext';

import './userdash.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
// import L from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import L from 'leaflet';
import axios from 'axios';


//import 'bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

import 'boxicons/css/boxicons.min.css';
import { Helmet } from 'react-helmet';
import {Link} from 'react-router-dom';
//import '@fortawesome/fontawesome-free/css/all.min.css';

//import 'boxicons/dist/css/boxicons.min.css';

function Userdash() {

  const [isCardVisible, setIsCardVisible] = useState(false);

  const [state, setState] = useState({
    isNavbarOpen: false,
    isCardVisible: false,
    activeLink: 'Dashboard',
    isMessagesVisible: false,
    setIsCardExpanded: false,
    clicked: false  
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
  const [markerData, setMarkerData] = useState([]);
  const mapRef = useRef(null);
  const [events, setEvents] = useState([]);
  const [mapCenter, setMapCenter] = useState([51.505, -0.09]); // Default map center
  const [mapZoom, setMapZoom] = useState(13); // Default map zoom level
 // Fetch marker data from backend on component mount
 const [additionalCoordinates, setAdditionalCoordinates] = useState([
  [9.681830, 76.778503],
  [9.670300,76.556763],
  [9.748060, 76.644550],
  [9.655434, 76.722451],
  [9.628738,76.645533],
  [9.594995, 76.430260],
  [9.748328, 76.457228],
  [9.556297, 76.791736],
]);

// Fetch event data from backend API and update additionalCoordinates
useEffect(() => {
  axios.get('/api/events')
    .then(response => {
      setEvents(response.data);
      if (response.data.length > 0) {
        setMapCenter([parseFloat(response.data[0].loc_lat), parseFloat(response.data[0].loc_lng)]);
        const eventDataCoordinates = response.data.map(event => [parseFloat(event.loc_lat), parseFloat(event.loc_lng)]);
        setAdditionalCoordinates(prevCoordinates => [...prevCoordinates, ...eventDataCoordinates]);
      }
    })
    .catch(error => {
      console.error('Error fetching event data:', error);
    });
}, []);

// Render map and markers
useEffect(() => {
  if (mapRef.current && !mapRef.current._leaflet_id) {
    const map = L.map(mapRef.current);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Create custom icon
    const customIcon = L.icon({
      iconUrl: 'assets/images/mark12.png',
      iconSize: [40, 42],
      iconAnchor: [20, 42]
    });
    const customIcon1 = L.icon({
      iconUrl: 'assets/images/mark13.png',
      iconSize: [40, 42],
      iconAnchor: [20, 42]
    });

    function addMarkers(coordinatesArray, icon) {
      coordinatesArray.forEach(coords => {
        const [lat, lng] = coords;
        L.marker([lat, lng], { icon: icon }).addTo(map);
      });
    }

    // Watch the user's position
    const watchID = navigator.geolocation.watchPosition(
      (pos) => {
        const { latitude, longitude, accuracy } = pos.coords;
        L.marker([latitude, longitude], { icon: customIcon }).addTo(map);
        map.setView([latitude, longitude],2);
        const bounds = L.latLngBounds([[latitude - 0.05, longitude - 0.05], [latitude + 0.05, longitude + 0.05]]);
        map.fitBounds(bounds);
        // Add additional markers using additionalCoordinates state
        addMarkers(additionalCoordinates, customIcon1);
      },
      (err) => {
        if (err.code === 1) {
          alert("Allow location access");
        } else {
          alert("Can't get location");
        }
      }
    );

    // Clean up function
    return () => {
      navigator.geolocation.clearWatch(watchID);
      map.remove();
    };
  }
}, [additionalCoordinates]);

  



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

  // const handleClick = () => {
  //   setState(prevState => ({
  //     ...prevState,
  //     clicked: !prevState.clicked // Toggle the value of clicked
  //   }));
  // };

  const [clicked, setClicked] = useState(false);

  // const handleClick = () => {
  //   setClicked(!clicked);
  // };
  
  // const [photoStates, setPhotoStates] = useState([]);
  // const [photoStates, setPhotoStates] = useState([true, ...Array(numberOfPhotos - 1).fill(false)]);
  // Function to handle clicking on an image
  // const [photoStates, setPhotoStates] = useState([true]);
  const [photoStates1, setPhotoStates1] = useState([true]); // for card18.jpg
const [photoStates2, setPhotoStates2] = useState([true]); // for card17.webp
const [photoStates3, setPhotoStates3] = useState([true]);
const [photoStates4, setPhotoStates4] = useState([true]);
  // const handleClick = (index) => {
  //   setPhotoStates(prevStates => {
  //     const newStates = [...prevStates]; // Copy the previous states
  //     newStates[index] = !newStates[index]; // Toggle the state of the clicked image
  //     return newStates;
  //   });
  // };
 // Handle click for the first set of images
const handleClick1 = (index) => {
  setPhotoStates1(prevStates => {
    const newStates = [...prevStates];
    newStates[index] = !newStates[index];
    return newStates;
  });
};

// Handle click for the second set of images
const handleClick2 = (index) => {
  setPhotoStates2(prevStates => {
    const newStates = [...prevStates];
    newStates[index] = !newStates[index];
    return newStates;
  });
};
  
// Handle click for the third set of images
const handleClick3 = (index) => {
  setPhotoStates3(prevStates => {
    const newStates = [...prevStates];
    newStates[index] = !newStates[index];
    return newStates;
  });
};
// Handle click for the fourth set of images
const handleClick4 = (index) => {
  setPhotoStates4(prevStates => {
    const newStates = [...prevStates];
    newStates[index] = !newStates[index];
    return newStates;
  });
};

const cardRef = useRef(null);
const handleButtonClick = () => {
  cardRef.current.scrollIntoView({ behavior: 'smooth' });
};

  return (
    <div className='by1'>
    <div className='by'>
      <Helmet>
        <title>
          VolunteerDashboard  
        </title>
      </Helmet>
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
            <a href="profile" className="btn btn-primary account-settings-button" style={{ fontSize: '15px' }}>Account Settings</a>
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
              <span className="nav117_logo-name" style={{ fontSize: '30px', fontWeight: 1800}}>Servelink</span> 
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
      <a href="events" style={{ textDecoration: 'none' }}className={`nav117_link ${state.activeLink === 'Upcoming Events' ? 'active' : ''}`} onClick={() => handleLinkClick('Upcoming Events')}> 
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
<button class="button-64" role="button" onClick={handleButtonClick}>
  <span class="text">&nbsp;&nbsp;Active Events&nbsp;&nbsp;</span></button>
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

<div id='maploc163'>
<div id="map" ref={mapRef} style={{ height: '470px' }}></div>
</div>
</div>
</div>
<div className='errr117'>
      {/* <div className="height-100 bg-light"> */}
        <h4>Main Components</h4>
      {/* </div> */}
     
      {isButtonVisible && (
        <button id="scrollToTopBtn" className="scroll-to-top-button" onClick={scrollToTop}>
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
      )}
<div>
  <h1>map user location</h1>
  </div>
  </div>

  {/* <div className="card1786" style={{ backgroundColor: 'gray' }}>
     <div id="carddetails1786">
    <img src={"assets/images/logo167.jpeg"} alt="Upcoming Events" id="carddetails1786"/> */}
    <div className="card1786" style={{ backgroundColor: 'gray' }} ref={cardRef}>
      <div id="carddetails1786">
    <i className="bx bxs-megaphone bx-lg"style={{ color: 'red' }}></i>
    <span className="icon-alt"><h4 style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>Upcoming Events</h4></span> 
    </div>
    <div className="card-body1786">
      <div className="photos-container1786">
      <div>
      {photoStates1.map((clicked, index) => (
  <div className="card-photo1786" key={index}>
    <img src={"assets/images/card18.jpg"} alt={`Photo ${index + 1}`} />
    <div className="black-box" onClick={() => handleClick1(index)}>
    <span className="white-text1736"><i className={`bx ${clicked ? 'bxs-heart text-red' : 'bx-heart'}`}></i> Event1 comming soon... </span>
    <button className="centered-button1316">Apply</button>
    <span className="event-description"><h6 style={{ margin: '0', padding: '0' }}>EventName</h6></span>
    <span className="event-description">Place</span>
    </div>
  </div>
))}
{photoStates2.map((clicked, index) => (
  <div className="card-photo1786" key={index}>
    <img src={"assets/images/card13.jpg"} alt={`Photo ${index + 1}`} />
    <div className="black-box" onClick={() => handleClick2(index)}>
    <span className="white-text1736"><i className={`bx ${clicked ? 'bxs-heart text-red' : 'bx-heart'}`}></i> Event2 comming soon... </span>
    <button className="centered-button1316">Apply</button>
    <span className="event-description"><h6 style={{ margin: '0', padding: '0' }}>EventName</h6></span>
    <span className="event-description">Place</span>
    </div>
  </div>
))}
{photoStates4.map((clicked, index) => (
  <div className="card-photo1786" key={index}>
    <img src={"assets/images/card16.jpg"} alt={`Photo ${index + 1}`} />
    <div className="black-box" onClick={() => handleClick4(index)}>
    <span className="white-text1736"><i className={`bx ${clicked ? 'bxs-heart text-red' : 'bx-heart'}`}></i> Event3 comming soon... </span>
    <button className="centered-button1316">Apply</button>
    <span className="event-description"><h6 style={{ margin: '0', padding: '0' }}>EventName</h6></span>
    <span className="event-description">Place</span>
    </div>
  </div>
))}
{photoStates3.map((clicked, index) => (
  <div className="card-photo1786" key={index}>
    <img src={"assets/images/d123.jpg"} alt={`Photo ${index + 1}`} />
    <div className="black-box" onClick={() => handleClick3(index)}>
    <span className="white-text1736"><i className={`bx ${clicked ? 'bxs-heart text-red' : 'bx-heart'}`}></i> Event4 comming soon... </span>
    <button className="centered-button1316">Apply</button>
    <span className="event-description"><h6 style={{ margin: '0', padding: '0' }}>EventName</h6></span>
    <span className="event-description">Place</span>
    </div>
  </div>
))}


</div>

      </div>
      <h5 className="card-title1786">title</h5>
      <p className="card-text1786">tast somethinh</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
</div>

  {/* <div id='maploc163'>
<div id="map" ref={mapRef} style={{ height: '400px' }}></div>
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
