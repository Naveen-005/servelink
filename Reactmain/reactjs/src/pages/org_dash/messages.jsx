import React, { useState } from 'react';
import coverPhoto from './cvo.jpg'
import { Helmet } from 'react-helmet';
import SideBar from './components/sidebar';

const styleName = {
  rec121: (bgColor = '#f2f2f2') => ({
    width: '90%',
    height: '150px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: bgColor,
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
   
  }),
  eventName: (color = '#333') => ({
    fontWeight: 'bold',
    fontSize: '18px',
    color: color,
  }),
  eventButton: (bgColor = 'red', color = '#fff') => ({
    padding: '8px 16px',
    backgroundColor: bgColor,
    color: color,
    border: 'none',
    borderRadius: '4px',
    position:'absolute',
    left:'40%',
  }),
  eventButton1: (bgColor = '4CAF50', color = '#fff') => ({
    padding: '8px 16px',
    backgroundColor: bgColor,
    color: color,
    border: 'none',
    borderRadius: '4px',
    position:'absolute',
    left:'40%',
  }),

  area121:()=>({
   padding:'130px'
  }),

  popupContainer: () => ({
    position: 'relative',
  }),
  popup: (showPopup, bgColor = '#fff', borderColor = '#ccc') => ({
    position: 'absolute',
    top: '100%',
    left: 0,
    backgroundColor: bgColor,
    border: `1px solid ${borderColor}`,
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    display: showPopup ? 'flex' : 'none',
  }),
  messageArea: (borderColor = '#ccc') => ({
    width: '200px',
    height: '100px',
    resize: 'none',
    marginBottom: '10px',
    borderRadius: '4px',
    border: `1px solid ${borderColor}`,
    padding: '8px',
    fontFamily: 'inherit',
    fontSize: '14px',
  }),
  sendButton: (bgColor = '#4CAF50', color = '#fff') => ({
    padding: '8px 16px',
    backgroundColor: bgColor,
    color: color,
    border: 'none',
    borderRadius: '4px',
    transition: 'background-color 0.3s ease',
  }),
  divider: (color = '#ccc') => ({
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    height: '25%',
    width: '1px',
    backgroundColor: color,
  }),
  closeButton: (bgColor = '#f44336', color = '#fff') => ({
    position: 'absolute',
    top: '-15px',
    right: '-15px',
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: bgColor,
    color: color,
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: '#e53935',
    },
  
  }),
};

const Messages = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState('');

  const handleMessageClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setMessage('');
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    // Implement your logic to send the message here
    console.log('Message:', message);
    handleClosePopup();
  };

  return (
    <div style={styleName.area121()}>
        <Helmet>
            <title>
                Message
            </title>
        </Helmet>
        <SideBar/>
    <div style={styleName.rec121('#ffffff')}>
      <div style={styleName.eventName('#333')}>Event Name
      <br/>
      <img
          src={coverPhoto} 
          alt="Event"
          style={{ width: '20%', height: '20%', objectFit: 'cover' }}
        />
        </div>
        <div style={styleName.eventButton('red', '#fff')}>Completed</div>
       {/*<div style={styleName.eventButton1('#4CAF50', '#fff')}> Ongoing</div>  // THIS IS NEEDED!!!*/}

      <div style={styleName.divider('#cccccc')} />
      <div style={styleName.popupContainer()}>
        <div
          style={styleName.popup(showPopup, '#ffffff', '#cccccc')}
        >
          <button
            style={styleName.closeButton('#f44336', '#fff')}
            onClick={handleClosePopup}
          >
            X
          </button>
          <textarea
            style={styleName.messageArea('#cccccc')}
            value={message}
            onChange={handleMessageChange}
            placeholder="Enter your message..."
          />
          <button
            style={styleName.sendButton('#4CAF50', '#fff')}
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
        <div
          onClick={handleMessageClick}
          style={{
            cursor: 'pointer',
            color: '#4CAF50',
            fontWeight: 'bold',
          }}
        >
          Message
        </div>
      </div>
    </div>
    </div>
  );
};

export default Messages;