import React from 'react';
import Sidebarprofile from './components/sidebarprofile';
import { Helmet } from 'react-helmet';
import SideBar from './components/sidebar'
import UserDropdown from './components/userdropdown';
import { FaFontAwesome } from 'react-icons/fa';
import { BiFontFamily } from 'react-icons/bi';

const ProfileView = () => {
  return (
    
    <div className="container141" style={container141Style}>
      <Helmet>
      <title>Profile</title>
    </Helmet>
    <SideBar />
    <UserDropdown />
    <div className="container142" style={container142Style}>
      <div style={rectangle141Style}>
        <h1>cover photo</h1>
        <div style={square141Style}>
          <h1>Profile photo</h1>
        </div>
      </div>
      <div style={boxStyle}>
        <div>Organization Name</div>
        <div>Domain</div>
        <div>Joined Year</div>
        
      </div>
      
      <div style={sidebarStyle}>
         <Sidebarprofile/>
      </div>
      <div style={buttonRowStyle}>
        <button style={buttonStyle}>Ongoing Event</button>
        <button style={buttonStyle}>Completed Event</button>
      </div>
      <div>
        <h3>Reviews</h3>
        
      </div>
    </div>
    </div>
  );
};

const container141Style = {
  backgroundColor: 'aliceblue', 
  padding: '60px',
  
  
};
const container142Style = {
  backgroundColor: '#90AEAD',
  border:'3px solid black',
  position:'Relative',
  left:'25px'
};

const rectangle141Style = {
  backgroundColor: '#ccc',
  height: '200px',
  border:'2px solid black',
  position: 'relative',
};

const square141Style = {
  width: '150px',
  height: '150px',
  backgroundColor: '#999',
  position: 'absolute',
  top: '62%',
  left: '50%',
  border:'2px solid black',
  transform: 'translate(-50%, -50%)',
};

const boxStyle = {
  marginTop: '',
  padding: '10px',
  backgroundColor: '#90AEAD',
  BiFontFamily:'Helvetica',
  fontweight: 'bold',
  border:'1px solid black',
  
};

const sidebarStyle = {
  marginTop: '10px',
  display: 'flex',
  justifyContent: 'center',
  width:'100px',
  position:'relative',
  left:'520px'

  
};

const buttonRowStyle = {
  marginTop: '100px',
  display: 'flex',
  justifyContent: 'space-between',
};

const buttonStyle = {
  padding: '10px 201px',
  backgroundColor: '#FF6A3D',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  ':hover': {
    backgroundColor: 'black', 
  },
};



export default ProfileView;