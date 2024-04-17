import React, { useState, useEffect } from 'react'
import SideBar from './components/sidebar'
import PostButton from './components/postButton'
import './odas.css'
import { color } from 'framer-motion';
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import UserDropdown from './components/userdropdown';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import config from '../../config.json'
import Org_Event from './components/org_dash_event';


function Odas() {

  const [events, setEvents] = useState(null)

  useEffect(() => {


    axios({
      method: 'get',
      url: config.server_api_url + '/org/event',
      withCredentials: true,
    })
      .then((res) => {

        setEvents(res.data);

      })
      .catch((err) => {
        alert(err)

      });

  }, []);


  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <UserDropdown />
      <SideBar />

      {/*
    <div className="container10" style={containerStyle10}>  
 
    <div>
      <h2>Title</h2>
      <p>Post content...</p>
  
    </div>
  </div>


<div className="container10" style={containerStyle10}>

<div>
  <h2>Title</h2>
  <p>Post content...</p>

</div>
</div>

<div className="container10" style={containerStyle10}>

<div>
  <h2>Title</h2>
  <p>Post content...</p>

</div>
</div>


<div className="container10" style={containerStyle10}>

<div>
  <h2>Title</h2>
  <p>Post content...</p>


</div>
</div>

  */}

      {events && events.map((evnt, index) => (
        <Org_Event key={index} evnt={evnt} />
      ))}





      <Link to="/post"></Link>
      <div
        style={{
          position: 'fixed',
          bottom: '20px', // Adjust this value to change the distance from the bottom
          right: '20px', // Adjust this value to change the distance from the right
          backgroundColor: 'green',
          borderRadius: '10%',
          padding: '10px',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          cursor: 'pointer',
          zIndex: 1000, // Ensure it's above other content
          animation: 'glow 1.5s ease-in-out infinite alternate', // CSS animation for glowing effect
        }}
        // Keyframes for the glowing effect
        onAnimationName={{
          '@keyframes glow': {
            from: { backgroundColor: 'green' },
            to: { backgroundColor: 'lime' }, // Change the glow color here
          },
        }}
      >
        <Link to="/post" style={{ textDecoration: 'none', color: 'inherit' }}>
          <FaPlus size={24} color="#000" />
        </Link>
      </div>

    </>
  );
}

const containerStyle10 = {
  margin: '3% auto ',
  width: '50%',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
  padding: '100px',
  color: 'red',

};


export default Odas;