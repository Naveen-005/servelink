import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';


const Adminsidebar = ({ children }) => {
  const location = useLocation();

  const sidebarStyle = {
    width: '200px',
    height: '100vh',
    position: 'fixed',
    left: 0,
    top: 0,
    backgroundColor: '#333',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  };

  const itemStyle = {
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    textDecoration: 'none',
    color: 'inherit',
  };

  const activeItemStyle = {
    ...itemStyle,
    backgroundColor: '#555',
  };

  const menuItems = [
   // { label: 'Dashboard', path: '/admindash' },
   // { label: 'Volunteer', path: '/adminvol' },
    { label: 'Organization', path: '/adminorg' },
    { label: 'Reported', path: '/adminrep' },
  //  { label: 'Feedback', path: '/adminfeed' },
    { label: 'Logout', path: '' },
  ];

  const mainContentStyle = {
    marginLeft: '200px',
    padding: '20px',
    flex: 1,
  };

  const handleLogout = () => {

    Cookies.remove('name');
    Cookies.remove('uid');
    Cookies.remove('token');
    Cookies.remove('org_id');
    Cookies.remove('admin');
    alert("Logged out")

  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={sidebarStyle}>
        <Link
          to="/adminorg"
          style={location.pathname === '/adminorg' ? activeItemStyle : itemStyle}
        >
          Organization
        </Link>
        <Link
          to="/adminrep"
          style={location.pathname === '/adminrep' ? activeItemStyle : itemStyle}
        >
          Reported
        </Link>
        <div onClick={handleLogout} style={itemStyle}>
          Logout
        </div>
      </div>
      <div style={mainContentStyle}>{children}</div>
    </div>
  );
};

export default Adminsidebar;