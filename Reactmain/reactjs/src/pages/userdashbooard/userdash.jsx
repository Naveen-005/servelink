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
import Cookies from 'js-cookie';

//import 'bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

import 'boxicons/css/boxicons.min.css';
import { Helmet } from 'react-helmet';
import {  Link } from 'react-router-dom';

//import '@fortawesome/fontawesome-free/css/all.min.css';

//import 'boxicons/dist/css/boxicons.min.css';

import config from '../../config.json'


function Userdash(dash) {

  const [isCardVisible, setIsCardVisible] = useState(false);
  console.log("dash:\n",dash)

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
 /*
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
*/
// const [additionalname, setAdditionalname] = useState(null);
// useEffect(() => {
//   axios({
//     method: 'get',
//     url: config.server_api_url + '/event/voluntername',
//     //withCredentials: true,
//   })
//     .then((res) => {

//       setAdditionalname(res.data);



//     })
//     .catch((err) => {
//       alert(err)

//     });



// }, []);
const [additionalname, setAdditionalname] = useState(null);

useEffect(() => {
  axios({
    method: 'get',
    url: config.server_api_url + '/login/voluntername',
    withCredentials: true,
  })
  .then((res) => {
    console.log(res.data)
    setAdditionalname(res.data)
  })
  .catch((err) => {
    alert(err);
  });
}, []);


const [additionalHistory, setAdditionalhistory] = useState(null);

useEffect(() => {
  axios({
    method: 'get',
    url: config.server_api_url + '/event/history',
    withCredentials: true,
  })
  .then((res) => {
    console.log(res.data)
    setAdditionalhistory(res.data)
  })
  .catch((err) => {
    alert(err);
  });
}, []);

const [reviewData, setReviewData] = useState({
  event_id: '',
  reviewMsg: '',
  reviewRating: ''
});
const handleReviewChange = (e) => {
  const { name, value } = e.target;
  setReviewData(prevState => ({
    ...prevState,
    [name]: value
  }));
};

const handleReviewSubmit = (e) => {
  e.preventDefault();
  //console.log("review data:\n",reviewData)
  axios({
    method: 'post',
    url: config.server_api_url + '/event/review',
    data:reviewData,
    withCredentials: true,
  })
    .then((res) => {

     alert("Review Added")

    })
    .catch((err) => {
      alert(err.response?.data)

    });


  
};

const [msg,setMsg]=useState(null);
useEffect(() => {

  axios({
    method: 'get',
    url: config.server_api_url + '/message',
    withCredentials: true,
    })
    .then((res) => {
  
      setMsg(res.data);

    })
    .catch((err) => {
      alert(err.response?.data)

  });


}, []);

const [events1, setEvents1] = useState([]);
	
	useEffect(() => {

		axios({
			method: 'get',
			url: config.server_api_url + '/register/event',
			withCredentials: true,
			data:{}
		  })
			.then((res) => {
	  
				setEvents1(res.data);

			})
			.catch((err) => {
				alert(err)
	
		});

	
	}, []);


/*





  
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
    */
    const [additionalCoordinates, setAdditionalCoordinates] = useState(null);

    // Fetch event data from backend API and update additionalCoordinates
    useEffect(() => {
    axios({
      method: 'get',
      url: config.server_api_url + '/event/location',
      withCredentials: true,
    })
      .then((res) => {
        
        // console.log(res.data)
        setAdditionalCoordinates(res.data);

      })
      .catch((err) => {
        alert(err)

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
      coordinatesArray?.forEach(coords => {
        //const [lat, lng] = coords;
        L.marker([coords.loc_lat, coords.loc_lng], { icon: icon }).addTo(map);
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


const [user_name,setUserName]=useState('Guest')
const [isLoggedIn,setLoginStatus] = useState(false)

const handleLogout = () => {
  setLoginStatus(false)
  setUserName('Guest')
  Cookies.remove('name');
  Cookies.remove('org_id');
  Cookies.remove('token');
  Cookies.remove('uid');


};

useEffect(() => {
  
  if (Cookies.get('name')) {
    setUserName(Cookies.get('name'))
    setLoginStatus(true)
  }

}, []);






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


//   const [photoStates1, setPhotoStates1] = useState([true]);
// const [photoStates2, setPhotoStates2] = useState([true]); 
// const [photoStates3, setPhotoStates3] = useState([true]);
// const [photoStates4, setPhotoStates4] = useState([true]);

// const [photoStates1, setPhotoStates1] = useState(Array(1).fill(false));

// const handleClick1 = (index) => {
//   setPhotoStates1(prevStates => {
//     const newStates = [...prevStates];
//     newStates[index] = !newStates[index];
//     return newStates;
//   });
// };
// const handleClickDetails1 = () => {
 
//   setPhotoStates1(prevStates => prevStates.map(state => !state));
// };
// useEffect(() => {
//   setPhotoStates1(Array(additionalHistory.length).fill(false)); // Reset photo states when additionalHistory changes
// }, [additionalHistory]);

// const [photoStates1, setPhotoStates1] = useState([]);
// const [org,setOrg] = useState(null);

// const additionalHistoryLength = additionalHistory ? additionalHistory.length : 0;

// useEffect(() => {
//   setPhotoStates1(Array(additionalHistoryLength).fill(false)); // Reset photo states when additionalHistory changes
// }, [additionalHistoryLength]);

 // const [dash,setDash] = useState(null);
  const [photoStates2, setPhotoStates2] = useState(Array(1).fill(false));
  const [photoStates3, setPhotoStates3] = useState(Array(1).fill(false));
  const [photoStates4, setPhotoStates4] = useState(Array(1).fill(false));
  const [photoStates5, setPhotoStates5] = useState(Array(1).fill(false));

// const handleClick1 = (index) => {
//   setPhotoStates1(prevStates => {
//     const newStates = [...prevStates];
//     newStates[index] = !newStates[index];
//     return newStates;
//   });
// };

// const [photoStates1, setPhotoStates1] = useState([]);

// useEffect(() => {
//   setPhotoStates1(Array(photoStates1.length).fill(false));
// }, []);



// useEffect(() => {
//   setPhotoStates2(Array(photoStates2.length).fill(false));
// }, []);



// Handle click for the second set of images
const handleClick2 = (index) => {
  setPhotoStates2(prevStates => {
    const newStates = [...prevStates];
    newStates[index] = !newStates[index];
    return newStates;
  });
};
const handleClickDetails2 = () => {
  // Toggle the state of all cards
  setPhotoStates2(prevStates => prevStates.map(state => !state));
};
  
// useEffect(() => {
//   setPhotoStates3(Array(photoStates3.length).fill(false));
// }, []);

// Handle click for the third set of images
const handleClick3 = (index) => {
  setPhotoStates3(prevStates => {
    const newStates = [...prevStates];
    newStates[index] = !newStates[index];
    return newStates;
  });
};
const handleClickDetails3 = () => {
  // Toggle the state of all cards
  setPhotoStates3(prevStates => prevStates.map(state => !state));
};
// useEffect(() => {
//   setPhotoStates4(Array(photoStates4.length).fill(false));
// }, []);
// Handle click for the fourth set of images
const handleClick4 = (index) => {
  setPhotoStates4(prevStates => {
    const newStates = [...prevStates];
    newStates[index] = !newStates[index];
    return newStates;
  });
};
const handleClickDetails4 = () => {
  // Toggle the state of all cards
  setPhotoStates4(prevStates => prevStates.map(state => !state));
};

const handleClick5 = (index) => {
  setPhotoStates5(prevStates => {
    const newStates = [...prevStates];
    newStates[index] = !newStates[index];
    return newStates;
  });
};
const handleClickDetails5 = () => {
  // Toggle the state of all cards
  setPhotoStates5(prevStates => prevStates.map(state => !state));
};
const cardRef = useRef(null);
const handleButtonClick = () => {
  cardRef.current.scrollIntoView({ behavior: 'smooth' });
};


const handleClickDetails = () => {
  // Toggle back any toggled photo when clicking on details
  // if (photoStates1.includes(true)) {
  //   setPhotoStates1(Array(photoStates1.length).fill(false));
  // }
  if (photoStates2.includes(true)) {
    setPhotoStates2(Array(photoStates2.length).fill(false));
  }
  if (photoStates3.includes(true)) {
    setPhotoStates3(Array(photoStates3.length).fill(false));
  }
  if (photoStates4.includes(true)) {
    setPhotoStates4(Array(photoStates4.length).fill(false));
  }
  if (photoStates5.includes(true)) {
    setPhotoStates5(Array(photoStates5.length).fill(false));
  }
};

function scrollToCard() {
  const card = document.getElementById('scrollTarget');
  if (card) {
    card.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
function scrollToContent() {
  const content = document.getElementById('scrollTarget1');
  if (content) {
    content.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function logout() {

  localStorage.removeItem('authToken');

  window.location.href = '/login'; 
}

const [isVisible, setIsVisible] = useState(false); // State to control visibility

const toggleVisibility = () => {
  setIsVisible(!isVisible);
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
  <img src={`${config.bucket_url}profile/volunteer/${additionalname?._id}.jpg`} alt="No photo" style={{ width: '100%', height: '100%' }} />
</button>
{/* {`${config.bucket_url}profile/volunteer/${additionalname?._id}.jpg`} */}

          {/* {state.isCardVisible && (
        <div className="floating-card117" id="floatingCard117">
         
          <div className="user-info">
          <img src={`${config.bucket_url}profile/volunteer/${dash._id}.jpg`} alt="Profile Image" className="profile-image" />
            <h3 className="user-name" style={{ fontSize: '28px' }}>{additionalname.first_name.charAt(0).toUpperCase() + additionalname.first_name.slice(1)} {additionalname.last_name.charAt(0).toUpperCase() + additionalname.last_name.slice(1)}</h3>
            <p className="user-email">{additionalname.email} </p>
            
            <div className="account-actions">
            <a href="profile" className="btn btn-primary account-settings-button" style={{ fontSize: '15px' }}>Account Settings</a>
              <button className="btn btn-danger logout-button" style={{ fontSize: '15px' }}>
                <i className="fas fa-sign-out-alt" ></i>Logout
              </button>
            </div>
          </div>
        </div>
      )} */}
      {state.isCardVisible && additionalname && (
  <div className="floating-card117" id="floatingCard117">
    {/* Profile Picture */}
    <div className="user-info">
      {additionalname?._id && (
         <>
          {console.log('nav')}
        <img src={`${config.bucket_url}profile/volunteer/${additionalname?._id}.jpg`} alt="Profile Image" className="profile-image"  />
        </>

     )  }
     
    
      <h3 className="user-name" style={{ fontSize: '28px' }}>{additionalname?.first_name.charAt(0).toUpperCase() + additionalname?.first_name.slice(1)} {additionalname?.last_name.charAt(0).toUpperCase() + additionalname?.last_name.slice(1)}</h3>
      <p className="user-email">{additionalname?.email} </p>
      {/* Account Actions */}
      <div className="account-actions">
        {/* <a href="profile" className="btn btn-primary account-settings-button" style={{ fontSize: '15px' }} >Account Settings</a> */}
        {isLoggedIn && (
 <Link to="/login" className="btn btn-danger logout-button" style={{ fontSize: '15px' }} onClick={handleLogout}>
 <i className="fas fa-sign-out-alt"></i>Logout
</Link>
)}

      </div>
    </div>
    
  </div>
  
)}

        </div>
      </header>
      <div className="cover-photo-container175">
    <img src={"assets/images/567.jpg"} alt="Cover Photo" className="cover-photo" />
    <img src={`${config.bucket_url}profile/volunteer/${additionalname?._id}.jpg`} alt="Profile Photo" className="profile-photo-overlay" style={{ borderWidth: '8px',borderColor: 'rgb(106, 106, 106)' }}/>
  </div>

      <div className={`l-nav117bar ${state.isNavbarOpen ? 'show' : ''}`} id="nav117-bar">
        <nav117 className="nav117">
          <div> 
            <a href="index" className="nav117_logo"> 
              <i className='fas fa-concierge-bell nav117_logo-icon'></i> 

              <Link to='/' className="nav117_logo-name" style={{ fontSize: '30px', fontWeight: 1800}}>Servelink</Link> 

            </a>
 <div className="nav117_list"> 
      <a href="#" style={{ textDecoration: 'none' }} className={`nav117_link ${state.activeLink === 'Dashboard' ? 'active' : ''}`} onClick={() => handleLinkClick('Dashboard')}> 
        <i className='bx bx-grid-alt nav117_icon'></i> 
        <span className="nav117_name">Dashboard</span> 
      </a> 
      {/* <a href="profile" style={{ textDecoration: 'none' }}className={`nav117_link ${state.activeLink === 'Account' ? 'active' : ''}`} onClick={() => handleLinkClick('Account')}> 
        <i className='bx bx-user nav117_icon'></i> 
        <span className="nav117_name">Account</span> 
      </a>  */}
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
            <Link to="/login" className="nav117_name" onClick={handleLogout}>
  SignOut
</Link>
          </a>
        </nav117>
      </div>
      <div className={`rtyuioghjk67 ${isVisible ? '' : 'hidden'}`}>
        <h2 id="badge123er">Badges</h2>
        <img src={`${config.bucket_url}profile/volunteer/badges/${additionalname?._id}.jpg`} alt="Profile Image" className="profile-image"  />
        <img src={"assets/images/healthand.jpg"} alt="Badge" className="badge-image14" />
      </div>
      
      <div className="components117">
  <h1 className="nev117">Welcome,{additionalname?.first_name}</h1>
  </div>
      <div id='button121'>
<button class="button-64" role="button" onClick={handleButtonClick}>
  <span class="text pulse-grow-btn171">&nbsp;&nbsp;Active Events&nbsp;&nbsp;</span></button>
<a href="events" class="button-64" role="button"><span class="text pulse-grow-btn171">Explore Events</span></a>
 {/*<button class="button-64" role="button" onClick={scrollToContent}><span class="text pulse-grow-btn171">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;read news&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></button>*/}
<button class="button-64" role="button" onClick={scrollToCard}><span class="text pulse-grow-btn171">&nbsp;&nbsp;Event History&nbsp;&nbsp;</span></button>
<button class="button-64" onClick={toggleVisibility} role="button">
  <span class="text pulse-grow-btn171">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Badges&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></button>
</div> 
{/* //////// */}

<div className="card1787" id="scrollTarget" style={{ backgroundColor: 'gray' }}>
      <div id="carddetails1786">
    <i className="bx bxs-megaphone bx-lg"style={{ color: 'red' }}></i>
    <span className="icon-alt"><h4 style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', color: 'white' }}>Event History</h4></span>
    
    </div>
    <div className="card-body1786">
      <div className="photos-container1786">

      <div>

 {/* {additionalHistory?.map((event, index) => (
  <div className={'card-photo1786'} key={index}>
    <div className="image-container" onClick={() => handleClick2(index)}> 
      <img src={`${config.bucket_url}event/${event._id}.jpg`} alt={`Photo ${index + 1}`} style={{ width: '200px', height: '350px' }} />
      <div className="overlay-text" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
        <p style={{ margin: 0 }}>
          {event.title && <div>{event.title}</div>} 
          {event.location && <div>{event.location}</div>}
        </p>
      </div>
    </div>
    <div className="black-box">
      <span className={`white-text1736 ${photoStates1[index] ? 'hidden' : ''}`}>
        <i className={`bx ${photoStates1[index] ? 'bxs-heart text-red' : 'bx-heart'}`}></i>
      </span>
      <button className={`centered-button1317 ${photoStates1[index] ? 'toggled-photo' : ''}`} onClick={() => handleClick2(index)} style={{ position: 'relative' }}>Details</button>
      <div className={`event-details ${photoStates1[index] ? '' : 'hidden'}`}>
     
      </div>
    </div>
  </div>
))} */}

{/* 
1111 */}

{additionalHistory?.map((event, index) => (
  <div className={'card-photo1786'} key={index}>
    <div className="image-container"> 
      <img src={`${config.bucket_url}event/${event._id}.jpg`} alt={`Photo ${index + 1}`} style={{ width: '200px', height: '350px' }} />
      <div className="overlay-text" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
        <p style={{ margin: 0 }}>
   
        </p>
      </div>
    </div>
    <div className="black-boox">
      <span className={`white-text1736`}>
        
      </span>
 
      <div className='wert1236'>
      {event.title && <div>{event.title.charAt(0).toUpperCase() + event.title.slice(1)}</div>}

      </div>
      <div className='wert176'>
    {event.location && <div>{event.location}</div>}
    </div>
    </div>
   
  </div>
))}

      {/* 111   */}

{/* {additionalHistory?.map((event, index)=> (
  <div className={'card-photo1786'} key={index}>
    <div className="image-container">
      
      {photoStates2.map((clicked, index) => (
        <img src={clicked ? "assets/images/114.jpg" : `${config.bucket_url}event/${event._id}.jpg`} alt={`Photo ${index + 1}`}key={index} style={{ width: '100%' }} />
      ))}
      {clicked && (
        <div className="overlay-text" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
          <p style={{ margin: 0 }}>
            <div>Event Name</div>
            <div>Event Place</div>
          </p>
        </div>
      )}
    </div>
    <div className="black-box">
      <span className={`white-text1736 ${clicked ? 'hidden' : ''}`}>
        <i className={`bx ${clicked ? 'bxs-heart text-red' : 'bx-heart'}`}></i>
      </span>
      <button className={`centered-button1317 ${clicked ? 'toggled-photo' : ''}`} onClick={() => handleClick2(index)} style={{ position: 'relative' }}>Details</button>
      <div className={`event-details ${clicked ? '' : 'hidden'}`}>
        
      </div>
    </div>
  </div>
))} */}
{/* {photoStates2.map((clicked, index) => (
  <div className={'card-photo1786'} key={index}>
    <div className="black-box">
      <span className={`white-text1736 ${clicked ? 'hidden' : ''}`}>
        <i className={`bx ${clicked ? 'bxs-heart text-red' : 'bx-heart'}`}></i>
      </span>
      <button className={`centered-button1317 ${clicked ? 'toggled-photo' : ''}`} onClick={() => handleClick2(index)} style={{ position: 'relative' }}>Details</button>
      <div className={`event-details ${clicked ? '' : 'hidden'}`}>
        
      </div>
    </div>
    <div className="image-container">
     
      {additionalHistory?.map((event, imageIndex) => (
        <img src={clicked ? "assets/images/114.jpg" : `${config.bucket_url}event/${event._id}.jpg`} alt={`Photo ${imageIndex + 1}`} key={imageIndex} style={{ width: '100%' }} />
      ))}
      {clicked && (
        <div className="overlay-text" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
          <p style={{ margin: 0 }}>
            <div>Event Name</div>
            <div>Event Place</div>
          </p>
        </div>
      )}
    </div>
  </div>
))} */}
{/* 
{photoStates2.map((clicked, index) => (
  <div className={'card-photo1786'} key={index}>
    <div className="black-box">
      <span className={`white-text1736 ${clicked ? 'hidden' : ''}`}>
        
      </span>
      <button className={`centered-button1317 ${clicked ? 'toggled-photo' : ''}`} onClick={() => handleClick2(index)} style={{ position: 'relative' }}>Details</button>
      <div className={`event-details ${clicked ? '' : 'hidden'}`}>
        
      </div>
    </div>
    <div className="image-container">
   
      {additionalHistory?.[0] && (
        <img src={clicked ? "assets/images/114.jpg" : `${config.bucket_url}event/${additionalHistory[0]._id}.jpg`} alt={`Photo 1`} style={{ width: '200px' }} />
      )}
      {clicked && (
        <div className="overlay-text" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
          <p style={{ margin: 0 }}>
            
          <div className='wert1236'>
  {additionalHistory?.[0]?.title && <div>{additionalHistory[0].title.charAt(0).toUpperCase() + additionalHistory[0].title.slice(1)}</div>}
</div>

            <div className='wert1276'>
            {additionalHistory?.[0]?.location && <div>{additionalHistory[0].location}</div>}
            </div>
          </p>
        </div>
      )}
    </div>
  </div>
))}
{photoStates3.map((clicked, index) => (
  <div className={'card-photo1786'} key={index}>
    <div className="black-box">
      <span className={`white-text1736 ${clicked ? 'hidden' : ''}`}>
        
      </span>
      <button className={`centered-button1317 ${clicked ? 'toggled-photo' : ''}`} onClick={() => handleClick3(index)} style={{ position: 'relative' }}>Details</button>
      <div className={`event-details ${clicked ? '' : 'hidden'}`}>
        
      </div>
    </div>
    <div className="image-container">
    
      {additionalHistory?.[0] && (
        <img src={clicked ? "assets/images/114.jpg" : `${config.bucket_url}event/${additionalHistory[1]._id}.jpg`} alt={`Photo 1`} style={{ width: '200px' }} />
      )}
      {clicked && (
        <div className="overlay-text" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
          <p style={{ margin: 0 }}>
            
          <div className='wert1236'>
  {additionalHistory?.[0]?.title && <div>{additionalHistory[1].title.charAt(0).toUpperCase() + additionalHistory[1].title.slice(1)}</div>}
</div>

            <div className='wert1276'>
            {additionalHistory?.[1]?.location && <div>{additionalHistory[1].location}</div>}
            </div>
          </p>
        </div>
      )}
    </div>
  </div>
))}
{photoStates4.map((clicked, index) => (
  <div className={'card-photo1786'} key={index}>
    <div className="black-box">
      <span className={`white-text1736 ${clicked ? 'hidden' : ''}`}>
        
      </span>
      <button className={`centered-button1317 ${clicked ? 'toggled-photo' : ''}`} onClick={() => handleClick4(index)} style={{ position: 'relative' }}>Details</button>
      <div className={`event-details ${clicked ? '' : 'hidden'}`}>
        
      </div>
    </div>
    <div className="image-container">
      
      {additionalHistory?.[0] && (
        <img src={clicked ? "assets/images/114.jpg" : `${config.bucket_url}event/${additionalHistory[2]._id}.jpg`} alt={`Photo 1`} style={{ width: '200px' }} />
      )}
      {clicked && (
        <div className="overlay-text" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
          <p style={{ margin: 0 }}>
            
          <div className='wert1236'>
  {additionalHistory?.[0]?.title && <div>{additionalHistory[2].title.charAt(0).toUpperCase() + additionalHistory[2].title.slice(1)}</div>}
</div>

            <div className='wert1276'>
            {additionalHistory?.[2]?.location && <div>{additionalHistory[2].location}</div>}
            </div>
          </p>
        </div>
      )}
    </div>
  </div>
))}
{photoStates5.map((clicked, index) => (
  <div className={'card-photo1786'} key={index}>
    <div className="black-box">
      <span className={`white-text1736 ${clicked ? 'hidden' : ''}`}>
        
      </span>
      <button className={`centered-button1317 ${clicked ? 'toggled-photo' : ''}`} onClick={() => handleClick5(index)} style={{ position: 'relative' }}>Details</button>
      <div className={`event-details ${clicked ? '' : 'hidden'}`}>
        
      </div>
    </div>
    <div className="image-container">
      
      {additionalHistory?.[3] && (
        <img src={clicked ? "assets/images/114.jpg" : `${config.bucket_url}event/${additionalHistory[3]._id}.jpg`} alt={`Photo 1`} style={{ width: '200px' }} />
      )}
      {clicked && (
        <div className="overlay-text" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
          <p style={{ margin: 0 }}>
            
          <div className='wert1236'>
  {additionalHistory?.[3]?.title && <div>{additionalHistory[3].title.charAt(0).toUpperCase() + additionalHistory[3].title.slice(1)}</div>}
</div>

            <div className='wert1276'>
            {additionalHistory?.[3]?.location && <div>{additionalHistory[3].location}</div>}
            </div>
          </p>
        </div>
      )}
    </div>
  </div>
))} */}
    
      {/* {photoStates2.map((clicked, index) => (
        <div className={'card-photo1786'} key={index}>
          <div className="image-container">
            <img src={clicked ? "assets/images/114.jpg" : "assets/images/card18.jpg"} alt={`Photo ${index + 1}`} style={{ width: '100%' }} />
            {clicked && (
              <div className="overlay-text" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
                <p style={{ margin: 0 }}>
                  <div>Event Name</div>
                  <div>Event Place</div>
                  </p>
              </div>
            )}
          </div>
          <div className="black-box">
            <span className={`white-text1736 ${clicked ? 'hidden' : ''}`}>
              <i className={`bx ${clicked ? 'bxs-heart text-red' : 'bx-heart'}`}></i>
            </span>
            <button className={"centered-button1317 ${clicked ? 'toggled-photo' : ''}"} onClick={() => handleClick2(index)} style={{ position: 'relative' }}>Details</button>
            <div className={`event-details ${clicked ? '' : 'hidden'}`}>
           
            </div>
          </div>
        </div>
      ))} */}
      {/* 
      {photoStates4.map((clicked, index) => (
        <div className={'card-photo1786'} key={index}>
          <div className="image-container">
            <img src={clicked ? "assets/images/114.jpg" : "assets/images/d123.jpg"} alt={`Photo ${index + 1}`} style={{ width: '100%' }} />
            {clicked && (
              <div className="overlay-text" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
                <p style={{ margin: 0 }}>
                <div>Event Name</div>
                  <div>Event Place</div>
                  </p>
              </div>
            )}
          </div>
          <div className="black-box">
            <span className={`white-text1736 ${clicked ? 'hidden' : ''}`}>
              <i className={`bx ${clicked ? 'bxs-heart text-red' : 'bx-heart'}`}></i>
            </span>
            <button className={"centered-button1317 ${clicked ? 'toggled-photo' : ''}"} onClick={() => handleClick4(index)} style={{ position: 'relative' }}>Details</button>
            <div className={`event-details ${clicked ? '' : 'hidden'}`}>
            
            </div>
          </div>
        </div>
      ))}

{photoStates3.map((clicked, index) => (
        <div className={'card-photo1786'} key={index}>
          <div className="image-container">
            <img src={clicked ? "assets/images/114.jpg" : "assets/images/card18.jpg"} alt={`Photo ${index + 1}`} style={{ width: '100%' }} />
            {clicked && (
              <div className="overlay-text" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
                <p style={{ margin: 0 }}>
                <div>Event Name</div>
                  <div>Event Place</div>
                  </p>
              </div>
            )}
          </div>
          <div className="black-box">
            <span className={`white-text1736 ${clicked ? 'hidden' : ''}`}>
              <i className={`bx ${clicked ? 'bxs-heart text-red' : 'bx-heart'}`}></i>
            </span>
            <button className={"centered-button1317 ${clicked ? 'toggled-photo' : ''}"} onClick={() => handleClick3(index)} style={{ position: 'relative' }}>Details</button>
            <div className={`event-details ${clicked ? '' : 'hidden'}`}>
             
            </div>
          </div>
        </div>
      ))} */}
      

</div>

      </div>

    </div>
    <div id='maploc163'>
    <div id='maploc168'>
<div id="map1316" ref={mapRef} style={{ height: '470px' }}></div>
</div>
</div>
</div>



      {/* Container Main start */}
      {/* <div className="container172">
      <div className="section-container175">
  <div className="left-section1" id="scrollTarget1">
    
    <div className="post12">
  <div className="post-header12">
    <img src={"assets/images/Francesca Tuckey.png"} alt="Profile Picture" className="profile-picture12" />
    <div className="post-header-info12">
      <h3 className="post-author12">Francesca Tuckey</h3>
      <p className="post-time12">Posted on Friday 21 April 2023 </p>
    </div>
  </div>
  <div className="post-content12">
    <p>
    The study of 2,000 adults found assisting in schools, volunteering in charity shops and litter picking in community spaces are some of the most popular ways they are lending their services.

While others have helped out with Scouts or Brownies, local sports events or given lifts to people in need.

Nearly half (46 per cent) would like to volunteer in the near future, but to date, 47 per cent of those yet to do so admit they previously haven’t had the time, while 24 per cent blame a lack of energy.
    </p>
    <img src={"assets/images/vol27.jpg"} alt="Post Photo" className="post-photo12  " />
   
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

  <div className="post121">
    <div className="post-header12">
      <img src={"assets/images/Imy Brighty-Potts.png"} alt="Profile Picture" className="profile-picture12" />
      <div className="post-header-info12">
        <h3 className="post-author12">Imy Brighty-Potts</h3>
        <p className="post-time12">Posted on Wednesday 03 May 2023</p>
      </div>
    </div>
    <div className="post-content12">
      <p>
      

Helpforce’s research suggests 56% of the UK public is willing to volunteer to support the health and wellbeing of people in their local communities.

When asked what would motivate people to volunteer, making a difference to individuals (34%), their local community (28%), and having a sense of purpose (26%), were the most compelling reasons.

“Numerous studies have shown the widespread benefits that volunteering has for the volunteers themselves,” says Mark Lever OBE, chief executive of Helpforce.
      </p>
      <div id='post-container175'>
      <img src={"assets/images/vol6.jpg"} alt="Post Photo" className="post-photo12" />
      </div>
     
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





<div className="section-container175">
  <div className="left-section1">
 
    <div className="post12">
  <div className="post-header12">
    <img src={"assets/images/James Pollard.png"} alt="Profile Picture" className="profile-picture12" />
    <div className="post-header-info12">
      <h3 className="post-author12"> James Pollard</h3>
      <p className="post-time12">Posted on 5 days ago</p>
    </div>
  </div>
  <div className="post-content12">
    <p>
    Michelle Barbin's job at Blue Cross Blue Shield of Massachusetts brings fulfillment, though she occasionally feels empty. While she values improving consumer experiences, her empathetic nature resonates most. With nearly 19 years at the company, she finds true satisfaction in supporting nonprofits. Routine tasks gain meaning when aligned with her desire to make a difference, like spearheading marketing campaigns for organizations in need.
   </p>
    <img src={"assets/images/vol22.jpg"} alt="Post Photo" className="post-photo12  " />
    
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
  
    <div className="post121">
    <div className="post-header12">
    <img src={"assets/images/Harry Stedman.png"} alt="Profile Picture" className="profile-picture12" />
    <div className="post-header-info12">
      <h3 className="post-author12">Harry Stedman</h3>
      <p className="post-time12">Posted on Thursday 06 July 2023</p>
    </div>
  </div>
    <div className="post-content12">
    <p>
      
On its 75th anniversary, the NHS receives support from the Royal Voluntary Service, which aims to recruit 25,000 more volunteers for hospital and community roles. This initiative, facilitated by NHS England, assists the most vulnerable with short-term aid, including shopping, prescription deliveries, friendly calls, and medical supply transportation. The Royal Voluntary Service seeks to address immediate and forthcoming needs, aligning with the evolving demands of healthcare.
    </p>
    <img src={"assets/images/vol25.jpg"} alt="Post Photo" className="post-photo12  " />
   
  </div>
    <div className="post-actions12">
    <button className="post-like-button">Like</button>
    <button className="post-comment-button">Comment</button>
    <button className="post-share-button">Share</button>
  </div>
  </div>
  </div>
</div>
</div> */}

<div id='mov121'>
<div className="container1721">
{/* <div className="section-container175">
  <div className="left-section">
 
    <div className="post12">
  <div className="post-header12">
    <img src={"assets/images/Nina Lloyd.png"} alt="Profile Picture" className="profile-picture12" />
    <div className="post-header-info12">
      <h3 className="post-author12">Nina Lloyd</h3>
      <p className="post-time12">Posted on Tuesday 06 June 2023</p>
    </div>
  </div>
  <div className="post-content12">
    <p>
    
Amid staff shortages in the social care sector, the Government plans to launch a recruitment drive for volunteers. The initiative, expected to be announced on Wednesday, will utilize an app to enlist members of the public for tasks like providing phone support and delivering medicine. Volunteers may also assist with shopping and errands, addressing various needs within the community.
    </p>
    <img src={"assets/images/vol24.jpg"} alt="Post Photo" className="post-photo12  " />
  
  </div>
  <div className="post-actions12">
    <button className="post-like-button">Like</button>
    <button className="post-comment-button">Comment</button>
    <button className="post-share-button">Share</button>
  </div>
</div>
</div>
  </div> */}
  {/* <div className="section-container175">
  <div className="left-section">

    <div className="post121">
    <div className="post-header12">
    <img src={"assets/images/Glenn Gamboa.png"} alt="Profile Picture" className="profile-picture12" />
    <div className="post-header-info12">
      <h3 className="post-author12">Glenn Gamboa</h3>
      <p className="post-time12">Posted on Thursday 20 April 2023 </p>
    </div>
  </div>
    <div className="post-content12">
    <p>
    At the Our Ocean Youth Leadership Summit in Panama, Daniela Fernandez attracted 77 volunteers from 45 countries to develop ocean protection solutions. The summit targeted individuals aged 18 to 35, a demographic often criticized for insufficient volunteering. Fernandez emphasized the desire of young people for meaningful impact, citing the lack of suitable projects as a barrier. In the US, volunteerism declined by 7% between 2019 and 2021.
    </p>
    <img src={"assets/images/vol23.jpg"} alt="Post Photo" className="post-photo12  " />
  
  </div>
    <div className="post-actions12">
    <button className="post-like-button">Like</button>
    <button className="post-comment-button">Comment</button>
    <button className="post-share-button">Share</button>
  </div>
  </div>
  </div>
  </div> */}
  


</div>
</div>
<div className='errr117'>
     
        <h4>Main Components</h4>
      
     
      {isButtonVisible && (
        <button id="scrollToTopBtn" className="scroll-to-top-button" onClick={scrollToTop}>
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
      )}

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

      {events1.map((evnt1, index) => (
  <div className="card-photo1786" key={index}>
    <img src={`${config.bucket_url}event/${evnt1?._id}.jpg`} alt={`Photo ${index + 1}`} style={{ width: '200px', height: '330px' }}/>
    <div className="black-box" onClick={() => handleClick2(index)}>
      <span className="white-text1736"><i className={`bx ${clicked ? 'bxs-heart text-red' : 'bx-heart'}`}></i> {evnt1.title.charAt(0).toUpperCase() + evnt1.title.slice(1)} coming soon... </span>
      {/* <button className="centered-button1316">Apply</button> */}
      <a href={`/event_details/${evnt1?._id}`} className="centered-button1316">Apply</a>

      <span className="event-description"><h6 style={{ margin: '0', padding: '0' }}>Event Name: <span style={{ fontFamily: 'Arial', fontSize: '17px', fontWeight: 'bold' }}>{evnt1.title.toUpperCase()}</span></h6></span> {/* Render event name */}
      <span className="event-description">{evnt1.place}</span> {/* Render event place */}
    </div>
  </div>
))}

      {/* {photoStates1.map((clicked, index) => (
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
))} */}


</div>

      </div>
      
    </div>
</div>

  {/* <div id='maploc163'>
<div id="map" ref={mapRef} style={{ height: '400px' }}></div>
</div> */}

{/* <div>
{additionalname !== null ? (
      <div>
        <h3>Name: {additionalname.first_name} {additionalname.last_name} {additionalname.email}</h3>
        
      </div>
    ) : (
      <p>Loading...</p>
    )}
  </div> */}



      
<div className="messages-floating-option" onClick={handleMessagesClick} style={{ boxShadow: '0 4px 10px rgba(0, 0, 0, 0.99)' }}>
        <i className="bx bx-message-square-detail"></i>
      </div>

      {isCardVisible && (
        <div className="floating-card"  style={{ maxHeight: `${msg.length * 100}px`, maxWidth: `1110px` }}>
        {/* Content of the floating card */}
        {msg.map((_msg, index) => (
          <div key={index}>
              <p style={{ color: 'white', fontSize: '16px' }}>{_msg.message}</p>
          </div>
        ))}
        {/*
        <div>
          <p style={{ color: 'white',fontSize:'16px'}}>You have Message</p>
        </div>
        <a href="/message2">
          <p style={{ color: 'red',fontSize:'16px' }}>Please be alert</p>
        </a>
      */}
      </div>
      
      )}

<div className='y567891'></div>


<div className="review-section review-section1201">
  <h2>Leave a Review</h2>
  <div className="form-group">
  <label htmlFor="eventSelect" className="sr-only">Select Event:</label>
  <select id="eventSelect" className="form-control" style={{ width: '160px' }} name="event_id" onChange={handleReviewChange} value={reviewData.event_id} required>
    <option value="" disabled selected>Select Event</option>
    {additionalHistory?.map((event, index) => (
      <option key={index} value={event._id}>{event.title}</option>
    ))}
  </select>
</div>



<div className="form-group">
  <label htmlFor="ratingSelect" className="sr-only">Rating:</label>
  <select id="ratingSelect" className="form-control" style={{ width: '160px' }} name="reviewRating" onChange={handleReviewChange} value={reviewData.reviewRating}>
    <option value="" disabled selected>Rating</option>
    <option value="bad">Bad</option>
    <option value="satisfying">Satisfying</option>
    <option value="good">Good</option>
    <option value="awesome">Awesome Experience</option>
    {/* Adjust the range of ratings as needed */}
  </select>
</div>




  <div className="form-group" style={{ width: '460px' }}>
    <label htmlFor="reviewText">Review:</label>
    <textarea id="reviewText" className="form-control" placeholder="Write your review here..." rows="4" cols="50" name="reviewMsg" value={reviewData.reviewMsg} onChange={handleReviewChange}></textarea>
  </div>
  <button className="btn btn-primary" onClick={handleReviewSubmit}>
        Submit Review
      </button>
</div>


    </div>
    </div>
    </div>
  );
}

export default Userdash;

