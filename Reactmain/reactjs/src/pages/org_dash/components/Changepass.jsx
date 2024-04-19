import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import SideBar from './sidebar';
import UserDropdown from './userdropdown';

const Changepass = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleCurrentPasswordChange = (e) => {
    setCurrentPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmNewPasswordChange = (e) => {
    setConfirmNewPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password change logic here
    console.log('Current Password:', currentPassword);
    console.log('New Password:', newPassword);
    console.log('Confirm New Password:', confirmNewPassword);
  };

  return (
    <div className="change-password-container">
        <Helmet>
            <title>
                Change password
            </title>
        </Helmet>
        <SideBar/>
        <UserDropdown/>
      <h2>Change Password</h2>
      <div className="change-password-box">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="currentPassword">Current Password</label>
            <input
              type="password"
              id="currentPassword"
              value={currentPassword}
              onChange={handleCurrentPasswordChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="newPassword">New Password</label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={handleNewPasswordChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirmNewPassword">Re-enter New Password</label>
            <input
              type="password"
              id="confirmNewPassword"
              value={confirmNewPassword}
              onChange={handleConfirmNewPasswordChange}
            />
          </div>
          <button type="submit">Change Password</button>
        </form>
      </div>

      <style>{`
        .change-password-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
        }

        .change-password-box {
          background-color: #f0f0f0;
          border: 1px solid #ccc;
          border-radius: 5px;
          padding: 20px;
          max-width: 500px;
          width: 100%;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          margin-bottom: 20px;
        }

        .input-group label {
          font-weight: bold;
          margin-bottom: 5px;
        }

        .input-group input {
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 3px;
        }

        button[type="submit"] {
          padding: 10px 20px;
          background-color: #333;
          color: #fff;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Changepass;