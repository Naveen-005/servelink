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
import Analytics from './components/Analytics';


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
        alert(err.response?.data)

      });

  }, []);


  return (
    <div className='mainbody1' style={{backgroundColor:'#E4EA8C',padding:'10px',backgroundAttachment:'fixed',minHeight:'100vh'}}>
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
       <>
        <Analytics key={index} evnt={evnt}/>
        </>
      ))

      }
      





      <Link to="/post"></Link>
      <div
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: 'red',
          padding: '10px',
          boxShadow: '0px 0px 17px rgba(0, 0, 0, 0.2)',
          zIndex: '2',// CSS animation for glowing effect
          borderRadius:'18px 0 13px '
        }}
       
      >
        <Link to="/post" style={{ textDecoration: 'none', color: 'inherit' }}>
          <FaPlus size={20} color="white" />
        </Link>
      </div>

    </div>
  );
}

const containerStyle10 = {
  margin: '3% auto ',
  width: '50%',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
  padding: '100px',
  color: 'red',
  backgroundColor:'white'


};


export default Odas;