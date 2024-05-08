import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { Link, useNavigate } from 'react-router-dom';


const UserDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(prevState => !prevState);
  const navigate = useNavigate();
  const [user_name,setUserName]=useState('Guest')
  //const [isLoggedIn,setLoginStatus] = useState(false)
  const handleLogout = () => {

    Cookies.remove('name');
    Cookies.remove('uid');
    Cookies.remove('token');
    Cookies.remove('org_id');
    Cookies.remove('admin');
    alert("Logged out");
    navigate("/");

   
  };

  return (
    <div className="user-dropdown-container" style={{ position: 'absolute', top: 2, right: -80 }}>
      <Dropdown show={dropdownOpen} onToggle={toggleDropdown} style={{ right: 'calc(100% - 150px)', minWidth: '150px' }}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          <i className="fa fa-user" aria-hidden="true"></i>
        </Dropdown.Toggle>

        <Dropdown.Menu style={{ right: 0, left: 'auto' }}>
          <Dropdown.Item href="/profileview">Profile</Dropdown.Item>
          <div className="dropdown-divider"></div>
          <Dropdown.Item href="/settings">Settings</Dropdown.Item>
          <div className="dropdown-divider"></div>
          <Dropdown.Item  onClick={handleLogout} >Logout</Dropdown.Item>
        
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default UserDropdown;
