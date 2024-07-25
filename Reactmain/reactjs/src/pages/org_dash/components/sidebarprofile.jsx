import { color } from 'framer-motion';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


function Sidebarprofile({org}) {
  const [activeTab, setActiveTab] = useState('about');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div style={styles.sidebarWrapper}>
      <div style={styles.sidebarprofileContainer}>
        <div style={styles.sidebarprofileTabs}>
          <button
            style={{
              ...styles.sidebarprofileTab,
              ...(activeTab === 'about' ? styles.sidebarprofileTabActive : {}),
            }}
            onClick={() => handleTabClick('about')}
            aria-selected={activeTab === 'about'}
          >
            About
          </button>
          <span style={styles.sidebarprofileTabSpace}></span>
          <button
            style={{
              ...styles.sidebarprofileTab,
              ...(activeTab === 'address' ? styles.sidebarprofileTabActive : {}),
            }}
            onClick={() => handleTabClick('address')}
            aria-selected={activeTab === 'address'}
          >
            Address
          </button>
          <span style={styles.sidebarprofileTabSpace}></span>
          <button
            style={{
              ...styles.sidebarprofileTab,
              ...(activeTab === 'contact' ? styles.sidebarprofileTabActive : {}),
            }}
            onClick={() => handleTabClick('contact')}
            aria-selected={activeTab === 'contact'}
          >
            Contact
          </button>
          <div style={styles.sidebarprofileUnderline}></div>
        </div>
        <div style={styles.sidebarprofileContent}>
          {activeTab === 'about' && (
            <div style={styles.sidebarprofilePane}>
              <h2>About</h2>
              <p style={{color:'#31473A'}}> {org?.about}</p>
            </div>
          )}
          {activeTab === 'address' && (
            <div style={styles.sidebarprofilePane}>
              <h2>Address</h2>
              <p style={{color:'#31473A'}}>{org?.address}</p>
            </div>
          )}
          {activeTab === 'contact' && (
            <div style={styles.sidebarprofilePane}>
              <h2>Contact</h2>
              <p style={{color:'#31473A'}}>Email: {org?.email}</p>
              <p style={{color:'#31473A'}}>Phone no: {org?.phone_no}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
Sidebarprofile.propTypes = {
  org: PropTypes.shape({
    about: PropTypes.string,
    address: PropTypes.string,
    email: PropTypes.string,
    phone_no: PropTypes.string,
  }).isRequired,
};

export default Sidebarprofile;

const styles = {
  sidebarWrapper: {
    position: 'relative', // Added relative positioning
  },
  sidebarprofileContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%', // Set width to 100% to fit within the container
    border: '3px solid black',
    borderRadius: '4px',
    backgroundColor: '#76ABAE',
    color: 'white',
    height: 'auto', // Removed fixed height
  },
  sidebarprofileTabs: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid #ccc',
    position: 'relative',
  },
  sidebarprofileTab: {
    padding: '10px',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    outline: 'none',
  },
  sidebarprofileTabActive: {
    fontWeight: 'bold',
    color:'black'
  },
  sidebarprofileTabSpace: {
    flex: '1',
  },
  sidebarprofileUnderline: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: '2px',
    width: '100%',
    backgroundColor: '#76ABAE',
  },
  sidebarprofileContent: {
    padding: '20px',
    overflow: 'auto', // Added overflow: 'auto' to handle content overflow
    maxHeight: 'calc(100vh - 200px)', // Set a maximum height for the content area
  },
  sidebarprofilePane: {
    display: 'block',
  },
};

