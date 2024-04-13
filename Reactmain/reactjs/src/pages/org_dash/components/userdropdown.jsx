import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const UserDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(prevState => !prevState);

  return (
    <div className="user-dropdown-container" style={{ textAlign: 'right' }}>
      <Dropdown show={dropdownOpen} onToggle={toggleDropdown} style={{ right: 'auto', left:0 }}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          <i className="fa fa-user" aria-hidden="true"></i>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/profile">Profile</Dropdown.Item>
          <Dropdown.Item href="#/settings">Settings</Dropdown.Item>
          <Dropdown.Item href="#/logout">Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default UserDropdown;
