import React, { useState } from 'react';
import ProfileView from './profileview';
import Orgprofile from './orgprofile';
import Orgauth from './components/Orgauth';
import Changepass from './components/Changepass';

const Settings = () => {
  const [selectedOption, setSelectedOption] = useState('profile');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="settings-container">
      <div className="option-slider">
        <button
          className={`option-btn ${selectedOption === 'profile' ? 'active' : ''}`}
          onClick={() => handleOptionChange('profile')}
        >
          Profile
        </button>
        
        <button
          className={`option-btn ${selectedOption === 'changePassword' ? 'active' : ''}`}
          onClick={() => handleOptionChange('changePassword')}
        >
          Change Password
        </button>
      </div>
      <hr className="separator" />
      <div className="content-container">
        {selectedOption === 'profile' && <ProfilePage />}
       {/* {selectedOption === 'authentication' && <AuthenticationPage />}*/}
        {selectedOption === 'changePassword' && <ChangePasswordPage />}
      </div>

      <style>{`
        .settings-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
        }

        .option-slider {
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
        }

        .option-btn {
          padding: 10px 20px;
          background-color: #f0f0f0;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .option-btn.active {
          background-color: #333;
          color: #fff;
        }

        .separator {
          width: 200%;
          border: none;
          border-top: 2px solid #333;
          margin-bottom: 10px;
        }

        .content-container {
          width: 100%;
        }
      `}</style>
    </div>
  );
};

const ProfilePage = () => {
  return <div><Orgprofile  /> </div>;
};

const AuthenticationPage = () => {
  return <div><Orgauth/></div>;
};

const ChangePasswordPage = () => {
  return <div><Changepass/></div>;
};

export default Settings;