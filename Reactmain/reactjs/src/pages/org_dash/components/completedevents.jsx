import React from 'react';
import { Helmet } from 'react-helmet';
import SideBar from './sidebar';
import UserDropdown from './userdropdown';

const CompletedEvents = () => {
  const events = [
    { id: 1, name: 'Event 1', completed: true },
    { id: 2, name: 'Event 2', completed: false },
    { id: 3, name: 'Event 3', completed: true },
    { id: 4, name: 'Event 4', completed: false },
    { id: 5, name: 'Event 5', completed: true },
  ];

  const handleBackClick = () => {
    window.location.href = '/profileview';
  };

  return (
    <div style={styles.containe1r}>
      <Helmet>
        <title>Completed-Events</title>
      </Helmet>
      <SideBar />
      <UserDropdown />
      <div style={styles.content}>
        <button onClick={handleBackClick} style={styles.backButton}>
          Back
        </button>       
        <div style={styles.boxContainer}>
          {events.map((event) => (
            <div key={event.id} style={styles.eventRow}>
              <span style={styles.eventName}>{event.name}</span>
              {event.completed && (
                <div style={styles.completedBox}>Completed</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  containe1r: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor:'#EDF4F2'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
  boxContainer: {
    backgroundColor: '#20948B',
    padding: '20px',
    borderRadius: '4px',
    height: '400px',
    width: '600px',
    overflowY: 'scroll',
  },
  eventRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
    padding: '20px',
    backgroundColor: '#6AB187',
    borderRadius: '4px',
  },
  eventName: {
    fontWeight: 'bold',
  },
  completedBox: {
    backgroundColor: '#ff0000',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '4px',
  },
};

export default CompletedEvents;