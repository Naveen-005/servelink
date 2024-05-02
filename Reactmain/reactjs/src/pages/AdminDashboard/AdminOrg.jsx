import React, { useState,useEffect } from 'react';
import Adminsidebar from './components/Adminsidebar';
import UserIcon from './components/UserIcon';
import axios from 'axios';
import config from '../../config.json'


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

  const [unverifiedOrg,setUnverifiedOrg]=useState(null)
  const [count,setCount]=useState(null)

  const handleViewDetails = (org) => {
    setSelectedOrg(org);
  };

  const handleVerify = (id) => {
    axios({
      method: 'post',
      url: config.server_api_url + '/admin/org_verify',
      withCredentials: true,
      data:{id:id}
    })
      .then((res) => {
        alert("Verified")
        
      })
      .catch((err) => {
        alert(err.response?.data)
      });
  };

  const closeDetailsModal = () => {
    setSelectedOrg(null);
  };

  useEffect(() => {

    axios({
      method: 'get',
      url: config.server_api_url + '/admin/org_verify',
      withCredentials: true,
    })
      .then((res) => {
        setUnverifiedOrg(res.data);
      })
      .catch((err) => {
        alert(err.response?.data)
      });


      axios({
        method: 'get',
        url: config.server_api_url + '/count',
        withCredentials: true,
      })
        .then((res) => {
          setCount(res.data)
        })
        .catch((err) => {
          alert(err.response?.data)
        });

  }, []);

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
              <div style={statValueStyle}>{count?.vol}</div>
              <div style={statLabelStyle}>Volunteers</div>
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
              <div style={statValueStyle}>{count?.events}</div>
              <div style={statLabelStyle}>Events</div>
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
              <div style={statValueStyle}>{count?.org}</div>
              <div style={statLabelStyle}>Organizations</div>
            </div>
          </div>
          <div style={newOrganizationsContainerStyle}>
            <div style={tableHeaderStyle}>
              <h3>New Organizations</h3>
            </div>
            {unverifiedOrg?.map((org, index) => (
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
                <div>{new Date(org.joined_Date).toDateString()}</div>
                <button onClick={(e) => {e.preventDefault(); handleViewDetails(org)}}>View Details</button>
              </div>
            ))}
          </div>

          {selectedOrg && (
            <div style={organizationDetailsContainerStyle}>
              <h3>Organization Details</h3>
              <p>Name: {selectedOrg.name}</p>
              <p>Date: {new Date(selectedOrg.joined_Date).toDateString()}</p>
              <h4>Documents:</h4>
              
              <ul>
              <iframe src={`${config.bucket_url}profile/organization/document/${selectedOrg._id}.pdf`} style={{width: '100%', height: '600px'}}></iframe>
              
                {              
                //<embed src={`${config.bucket_url}profile/organization/document/${selectedOrg._id}.pdf`} type="application/pdf" width="100%" height="600px" />

                /*selectedOrg.documents.map((doc, index) => (
                  <li key={index}>{doc}</li>
                ))
              */}

              </ul>
              <button  onClick={(e)=>{e.preventDefault(); handleVerify(selectedOrg._id)}}>
                Verify
              </button>
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