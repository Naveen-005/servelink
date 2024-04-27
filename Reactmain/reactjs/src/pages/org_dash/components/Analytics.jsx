import { color } from 'framer-motion';
import React, { useState } from 'react';

function Analytics() {
  const [showPopup, setShowPopup] = useState(false);
  const [enrolledCount, setEnrolledCount] = useState(50);
  const [totalRequired, setTotalRequired] = useState(100);
  const [maleCount, setMaleCount] = useState(30);
  const [femaleCount, setFemaleCount] = useState(20);
 

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <div className="container10" style={containerStyle10}>
        <div>
          <h2>Title</h2>
          <p>Post content...</p>
          <button onClick={togglePopup} style={viewButtonStyle}>
            View
          </button>
          {showPopup && (
            <div className="popup" style={popupStyle}>
              <div style={columnStyle}>
                <span>Enrolled     :</span>
                <span>{enrolledCount}</span>
              </div>
              <div style={columnStyle}>
                <span>Total Required    :</span>
                <span>{totalRequired}</span>
              </div>
              <span>Range   :</span>
              <div style={rangeBarContainer}>
             
                <div
                  style={{
                    ...rangeBarStyle,
                    width: `${(enrolledCount / totalRequired) * 100}%`,
                  }}
                />
              </div>
              <div style={columnStyle}>
                <span>Male   :</span>
                <span>{maleCount}</span>
              </div>
              <div style={columnStyle}>
                <span>Female :</span>
                <span>{femaleCount}</span>
              </div>
              </div>
              )}
            
        
        </div>
      
      </div>
    </div>
  );
}

const containerStyle10 = {
  margin: '3% auto ',
  width: '50%',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
  padding: '100px',
  color: 'red',
  backgroundColor: 'white',
  position: 'relative',
};

const viewButtonStyle = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  padding: '8px 16px',
  backgroundColor: '#66A5AD',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

const popupStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#A1BE95',
  padding: '20px',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
  borderRadius: '8px',
  zIndex: '1',
  width:'50%'
};

const columnStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '10px',
  
};

const rangeBarContainer = {
  height: '20px',
  backgroundColor: '#e9ecef',
  borderRadius: '4px',
  overflow: 'hidden',
};

const rangeBarStyle = {
  height: '100%',
  backgroundColor: '#20948B',
  transition: 'width 0.3s ease',
};

export default Analytics;