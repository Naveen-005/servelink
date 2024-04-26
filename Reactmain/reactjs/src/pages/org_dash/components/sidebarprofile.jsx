import { color } from 'framer-motion';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
              <p>{org?.about}</p>
            </div>
          )}
          {activeTab === 'address' && (
            <div style={styles.sidebarprofilePane}>
              <h2>Address</h2>
              <p>{org?.address}</p>
            </div>
          )}
          {activeTab === 'contact' && (
            <div style={styles.sidebarprofilePane}>
              <h2>Contact</h2>
              <p>Email: {org?.email}</p>
              <p>Phone no: {org?.phone_no}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Sidebarprofile;

const styles = {
  sidebarprofileContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '1000px',
    border:'3px solid black',
    borderRadius: '4px',
    backgroundColor: '#76ABAE',
    color:'white',
    height:'400px',
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
  },
  sidebarprofilePane: {
    display: 'block',
  },
};