import React, { useState } from 'react';
import Adminsidebar from './components/Adminsidebar';
import UserIcon from './components/UserIcon';

const AdminOrg = () => {
  const [selectedOrg, setSelectedOrg] = useState(null);
  const container1Style = {
    backgroundColor: 'lightblue',
    height: '100%',
    padding: '15px',
    backgroundAttachment: 'fixed',
    backgroundSize: '100%',
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
  };

  const statsContainerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    width: '70%',
    marginBottom: '30px',
  };

  const statBoxStyle = {
    width: '200px',
    height: '200px',
    backgroundColor: '#375E97',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease', // Add transition for smooth animation
  };

  const statBox1Style = {
    ...statBoxStyle, // Inherit styles from statBoxStyle
    backgroundColor: '#FFBB00',
  };

  const statBox2Style = {
    ...statBoxStyle, // Inherit styles from statBoxStyle
    backgroundColor: '#FB6542',
  };

  const statValueStyle = {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const statLabelStyle = {
    fontSize: '18px',
    color: 'black',
  };

  const newOrganizationsContainerStyle = {
    width: '50%',
    backgroundColor: '#F98866',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    left: '-100px',
  };

  const tableHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
  };

  const tableRowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
    padding: '10px',
    backgroundColor: '#FFF2D7',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease', // Add transition for smooth animation
  };

  const organizationDetailsContainerStyle = {
    width: '330px',
    height: '260px',
    backgroundColor: '#F2F2F2',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    top: '-250px',
    right: '-390px',
  };

  const buttonStyle = {
    backgroundColor: 'green',
    padding: '11px',
    position: 'absolute',
    top: '-3px',
    left: '310px',
    borderRadius: '0 39px 0 10px',
  };

  const newOrganizations = [
    { name: 'Organization A', date: '2023-04-15', documents: ['doc1.pdf', 'doc2.doc'] },
    { name: 'Organization B', date: '2023-04-20', documents: ['doc3.pdf'] },
    { name: 'Organization C', date: '2023-04-25', documents: [] },
  ];

  const handleViewDetails = (org) => {
    setSelectedOrg(org);
  };

  const closeDetailsModal = () => {
    setSelectedOrg(null);
  };

  return (
    <>
      <div style={container1Style}>
        <Adminsidebar />
        <div style={containerStyle}>
          <div style={statsContainerStyle}>
            <div
              style={{
                ...statBoxStyle,
                transform: 'scale(1.1)', // Apply scale transformation on hover
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)'; // Apply scale transformation on hover
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'; // Reset scale transformation on mouse leave
              }}
            >
              <div style={statValueStyle}>1000</div>
              <div style={statLabelStyle}>Users Joined</div>
            </div>
            <div
              style={{
                ...statBox1Style,
                transform: 'scale(1.1)', // Apply scale transformation on hover
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)'; // Apply scale transformation on hover
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'; // Reset scale transformation on mouse leave
              }}
            >
              <div style={statValueStyle}>56</div>
              <div style={statLabelStyle}>Events Hosted</div>
            </div>
            <div
              style={{
                ...statBox2Style,
                transform: 'scale(1.1)', // Apply scale transformation on hover
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)'; // Apply scale transformation on hover
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'; // Reset scale transformation on mouse leave
              }}
            >
              <div style={statValueStyle}>128</div>
              <div style={statLabelStyle}>Feedbacks</div>
            </div>
          </div>
          <div style={newOrganizationsContainerStyle}>
            <div style={tableHeaderStyle}>
              <h3>New Organizations</h3>
            </div>
            {newOrganizations.map((org, index) => (
              <div
                key={index}
                style={{
                  ...tableRowStyle,
                  transform: 'scale(1.05)', // Apply scale transformation on hover
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)'; // Apply scale transformation on hover
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)'; // Reset scale transformation on mouse leave
                }}
              >
                <div>{org.name}</div>
                <div>{org.date}</div>
                <button onClick={() => handleViewDetails(org)}>View Details</button>
              </div>
            ))}
          </div>
          {selectedOrg && (
            <div style={organizationDetailsContainerStyle}>
              <h3>Organization Details</h3>
              <p>Name: {selectedOrg.name}</p>
              <p>Date: {selectedOrg.date}</p>
              <h4>Documents:</h4>
              <ul>
                {selectedOrg.documents.map((doc, index) => (
                  <li key={index}>{doc}</li>
                ))}
              </ul>
              <button style={buttonStyle} onClick={closeDetailsModal}>
                x
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminOrg;