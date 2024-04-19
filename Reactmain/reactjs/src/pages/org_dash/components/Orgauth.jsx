import React, { useState } from 'react';
import SideBar from './sidebar';
import UserDropdown from './userdropdown';
import { Helmet } from 'react-helmet';

const Orgauth = () => {
  const [authMethod, setAuthMethod] = useState(null);

  const handleAuthMethodChange = (method) => {
    setAuthMethod(method);
  };

  const handleBackClick = () => {
    setAuthMethod(null);
  };

  return (
    <div className="authentication-container">
        <Helmet>
            <title>
                Authentication
            </title>
        </Helmet>
    <SideBar />
    <UserDropdown />
      <h2>Authentication</h2>
      <div className="auth-box">
        {!authMethod && (
          <div className="auth-method-selection">
            <button onClick={() => handleAuthMethodChange('email')}>Email</button>
            <button onClick={() => handleAuthMethodChange('phone')}>Phone Number</button>
          </div>
        )}
        {authMethod === 'email' && (
          <div>
            <EmailAuthentication />
            <button className="back-btn" onClick={handleBackClick}>Back</button>
          </div>
        )}
        {authMethod === 'phone' && (
          <div>
            <PhoneAuthentication />
            <button className="back-btn" onClick={handleBackClick}>Back</button>
          </div>
        )}
      </div>

      <style>{`
        .authentication-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
        }

        .auth-box {
          background-color: #f0f0f0;
          border: 1px solid #ccc;
          border-radius: 5px;
          padding: 20px;
          max-width: 500px;
          width: 100%;
        }

        .auth-method-selection {
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
        }

        .auth-method-selection button {
          padding: 10px 20px;
          background-color: #fff;
          border: 1px solid #ccc;
          cursor: pointer;
          transition: background-color 0.3s ease;
          margin: 0 10px;
        }

        .auth-method-selection button:hover {
          background-color: #ddd;
        }

        .back-btn {
          padding: 10px 20px;
          background-color: #333;
          color: #fff;
          border: none;
          cursor: pointer;
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
};

const EmailAuthentication = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission logic here
    console.log('Submitted email:', email);
  };

  return (
    <div className="email-auth-container">
      <h3>Email Authentication</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
        />
        <button type="submit">Submit</button>
      </form>

      <style>{`
        .email-auth-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .email-auth-container form {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .email-auth-container input {
          padding: 10px;
          margin-bottom: 10px;
          width: 300px;
        }

        .email-auth-container button {
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

const PhoneAuthentication = () => {
  const [phone, setPhone] = useState('');

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle phone number submission logic here
    console.log('Submitted phone number:', phone);
  };

  return (
    <div className="phone-auth-container">
      <h3>Phone Number Authentication</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="tel"
          placeholder="Enter your phone number"
          value={phone}
          onChange={handlePhoneChange}
        />
        <button type="submit">Submit</button>
      </form>

      <style>{`
        .phone-auth-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .phone-auth-container form {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .phone-auth-container input {
          padding: 10px;
          margin-bottom: 10px;
          width: 300px;
        }

        .phone-auth-container button {
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

export default Orgauth;