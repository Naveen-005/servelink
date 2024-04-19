import React from 'react';

const Error = () => {
  return (
    <div
      style={{
        backgroundColor: '#f8f8f8',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Arial, sans-serif',
        margin:'1px'
      }}
    >
      <div
        style={{
          backgroundColor: '#fff',
          borderRadius: '10px',
          boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
          padding: '40px',
          textAlign: 'center',
          maxWidth: '600px',
         
        }}
      >
        <h1 style={{ color: '#ff6347', fontSize: '5rem', marginBottom: '20px' }}>Oops!</h1>
        <p style={{ fontSize: '1.5rem', marginBottom: '30px' }}>
          Looks like you took a wrong turn while trying to make a difference.
        </p>
        <img
          src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569_960_720.jpg"
          alt="Error"
          style={{ maxWidth: '100%', borderRadius: '5px', marginBottom: '30px' }}
        />
        <p style={{ fontSize: '1.2rem', marginBottom: '40px' }}>
          But don't worry, we'll help you find your way back to making a positive impact!
        </p>
        <a
          href="/"
          style={{
            backgroundColor: '#4CAF50',
            color: '#fff',
            padding: '10px 20px',
            textDecoration: 'none',
            borderRadius: '5px',
            fontSize: '1.2rem',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#3e8e41';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#4CAF50';
          }}
        >
          Take Me Home
        </a>
      </div>
    </div>
  );
};

export default Error;