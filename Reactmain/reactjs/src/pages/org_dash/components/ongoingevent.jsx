import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import SideBar from './sidebar';
import UserDropdown from './userdropdown';

const events = [
  { id: 1, name: 'Event 1', details: 'small descp and last date' },
  { id: 2, name: 'Event 2', details: 'small descp and last date' },
  { id: 3, name: 'Event 3', details: 'small descp and last date'},
  { id: 4, name: 'Event 4', details: 'small descp and last date'},
  { id: 5, name: 'Event 5', details: 'small descp and last date' },
];

const Ongoingevent = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  const handleBackClick = () => {
    console.log('Back button clicked');
    window.location.href = '/profileview';
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleSidebarToggle = () => {
    setSidebarExpanded(!sidebarExpanded);
  };

  return (
   
    <div style={styles.app}>
      <Helmet>
        <title>Ongoing-Event</title>
      </Helmet>
      <UserDropdown />
      <SideBar onToggle={handleSidebarToggle} expanded={sidebarExpanded} />
      <div style={{ ...styles.contentWrapper, marginLeft: sidebarExpanded ? '250px' : '0' }}>
        <button style={styles.backButton} onClick={handleBackClick}>
          Back
        </button>
        <div style={styles.container200}>
          <div style={styles.column}>
            {events.map((event) => (
              <div key={event.id} style={styles.eventRow}>
                <span>{event.name}</span>
                <button onClick={() => handleEventClick(event)}>View</button>
              </div>
            ))}
          </div>
          <div style={styles.column}>
            {selectedEvent ? (
              <div style={styles.eventDetails}>
                <h2>{selectedEvent.name}</h2>
                <p>{selectedEvent.details}</p>
              </div>
            ) : (
              <p style={{color:'black'}}>Click on an event to view details</p>
            )}
          </div>
        </div>
      </div>
    </div>
    
  );
};

const styles = {
  app: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '900px',
    margin: '0 90px',
    padding: '20px',
    display: 'flex',
   
  },
  contentWrapper: {
    flex: 1,
    marginLeft: '0',
    transition: 'margin-left 0.3s ease-in-out',
  },
  backButton: {
    backgroundColor: '#4caf50',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginBottom: '20px',
  },
  container200: {
    display: 'flex',
    flexDirection: 'row',
    border: '0px solid black',
    borderRadius: '4px',
    overflow: 'hidden',
    backgroundColor: '#1995AD',
    width:'120%'
  },
  column: {
    flex: 1,
    padding: '20px',
  },
  eventRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
    padding: '20px',
    backgroundColor: '#A1D6E2',
    borderRadius: '4px',
  },
  eventDetails: {
    backgroundColor: '#E4EA8C',
    padding: '30%',
    borderRadius: '4px',
  },
};

export default Ongoingevent;