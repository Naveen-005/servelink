import { color, motion } from 'framer-motion';
import React, { useState, useRef, useEffect } from 'react';
import ViewAnalytics from './ViewAnalytics';
import axios from 'axios';
import config from '../../../config.json'


function Analytics({ evnt }) {
  const [showPopup, setShowPopup] = useState(false);
  //const [enrolledCount, setEnrolledCount] = useState('');
  //const [totalRequired, setTotalRequired] = useState('');
  //const [skill1Count, setSkill1Count] = useState('');
  //const [skill2Count, setSkill2Count] = useState('');
  const [showVolunteers, setShowVolunteers] = useState(false);
  const [showMessagePopup, setShowMessagePopup] = useState(false);
  const [isMessageMinimized, setIsMessageMinimized] = useState(false);
  const [message, setMessage] = useState('');
  const [selectedVolunteer, setSelectedVolunteer] = useState(null);
  const [volunteerButtonPosition, setVolunteerButtonPosition] = useState(null);

  const [messageData, setMessageData] = useState({
    event_id: evnt._id,
    message: "",
  });

  const volunteerButtonRef = useRef(null);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const toggleVolunteers = () => {
    const buttonRect = volunteerButtonRef.current.getBoundingClientRect();
    setVolunteerButtonPosition(buttonRect);
    setShowVolunteers(!showVolunteers);
  };

  const toggleMessagePopup = () => {
    setShowMessagePopup(!showMessagePopup);
    setIsMessageMinimized(false);
  };

  const minimizeMessagePopup = () => {
    setIsMessageMinimized(true);
  };

  const restoreMessagePopup = () => {
    setShowMessagePopup(true);
    setIsMessageMinimized(false);
  };

  const sendMessage = () => {
    axios({
      method: 'post',
      url: config.server_api_url + '/message',
      withCredentials: true,
      data: messageData
    })
      .then((res) => {

        alert("Message send to enrolled volunteers")

      })
      .catch((err) => {
        alert(err.response?.data)

      });;
  };

  const handleVolunteerClick = (volunteer) => {
    setSelectedVolunteer(volunteer);
    // Navigate to the volunteer's profile page
    console.log(`Navigating to ${volunteer.name}'s profile`);
  };

  const volunteers = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Bob Johnson' },
    // Add more volunteers as needed
  ];

  const [skillEnrollment,setSkillEnrollment]=useState(null)
  const [volunteerList,setVolunteerList]=useState(null)

  useEffect(() => {


    axios({
      method: 'get',
      url: config.server_api_url + '/event_details',
      withCredentials: true,
      params: {
        id: evnt._id
      }
    })
      .then((res) => {

        //setEvent(res.data.event);
        setSkillEnrollment(res.data.skill_enrollment)
        console.log(res.data.skill_enrollment)
        console.log("skill:\n",skillEnrollment)

      })
      .catch((err) => {
        alert(err.response?.data)

      });


      axios({
        method: 'get',
        url: config.server_api_url + '/event/volunteerList',
        withCredentials: true,
        params: {
          id: evnt._id
        }
      })
        .then((res) => {
  
          //setEvent(res.data.event);
          console.log("volunteers:\n",res.data)
          setVolunteerList(res.data)
  
        })
        .catch((err) => {
          alert(err.response?.data)
  
        });


  }, []);


  return (
    <div>
      <div className="container10" style={containerStyle10}>
        <div>
          <h2>{evnt.title}</h2>
          <p>{evnt.short_description}</p>
          {/* Other post elements */}
          <progress value={evnt.enrolled} max={evnt.required}></progress>
        </div>
        <button onClick={togglePopup} style={viewButtonStyle}>
          View
        </button>
        {showPopup && (

          //<ViewAnalytics evnt={evnt} />
          
          <div className="popup" style={popupStyle}>
            <div style={columnStyle}>
              <span>Enrolled :</span>

            

              <span>{evnt.enrolled}</span>
            </div>
            <div style={columnStyle}>
              <span>Total Required :</span>
              <span>{evnt.required}</span>

            </div>
            <div style={rangeBarContainer}>
              <div
                style={{
                  ...rangeBarStyle,
                  width: `${(evnt.enrolled / evnt.required) * 100}%`,
                }}
              />
            </div>
            {
              

              Object.keys(skillEnrollment).map(skill => (
                <>  
                    <div style={columnStyle}>
                        <span>{skill} :</span>
                        <span>{skillEnrollment[skill]}</span>
                    </div>
                    <div style={rangeBarContainer}>
                        <div
                            style={{
                                ...rangeBarStyle,
                                width: `${(skillEnrollment[skill] / evnt.skills[skill]) * 100}%`,
                            }}
                        />
                    </div>
                </>
            ))
                      
            }


            <div style={buttonContainer}>
              <button ref={volunteerButtonRef} onClick={toggleVolunteers} style={buttonStyle}>
                Volunteer
              </button>
              <button onClick={toggleMessagePopup} style={buttonStyle}>
                Message
              </button>
            </div>
          </div>
         
        )}
      </div>

    

      {showVolunteers && volunteerButtonPosition && (
        <div className="volunteer-popup" style={{ ...volunteerPopupStyle, right: volunteerButtonPosition.left, top: volunteerButtonPosition.bottom }}>
          <div style={closeButtonContainer}>
            <button onClick={() => setShowVolunteers(false)} style={closeButtonStyle}>
              X
            </button>
          </div>
          <h3>Volunteers</h3>
          {/*
          <ul>
            {volunteers.map((volunteer) => (
              <li key={volunteer.id} onClick={() => handleVolunteerClick(volunteer)}>
                {volunteer.name}
              </li>
            ))}
          </ul>
          */}
          <ul>
        {volunteerList && volunteerList.map((volunteer) => (
          <li key={volunteer.id} onClick={() => handleVolunteerClick(volunteer)}>
            {volunteer.name}
          </li>
        ))}
      </ul>
        </div>
      )}

      {showMessagePopup && !isMessageMinimized && (
        <motion.div
          className="message-popup"
          style={messagePopupStyle}
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ duration: 0.3 }}
        >
          <div style={messagePopupHeader}>
            <h3>Send Message</h3>
            <div>
              <button onClick={minimizeMessagePopup} style={minimizeButtonStyle}>
                -
              </button>
              <button onClick={() => setShowMessagePopup(false)} style={closeButtonStyle}>
                X
              </button>
            </div>
          </div>
          <textarea
            value={messageData.message}
            onChange={(e) => setMessageData({ ...messageData, message: e.target.value })}
            style={{ width: '100%', backgroundColor: '#C4DFE6' }}
            rows={10}
            placeholder="Type your message here..."
          />
          <motion.button
            onClick={sendMessage}
            style={sendButtonStyle}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Send
          </motion.button>
        </motion.div>
      )}
      {isMessageMinimized && (
        <div className="minimized-message" style={minimizedMessageStyle}>
          <button onClick={restoreMessagePopup}>Send Message</button>
        </div>
      )}

  
    </div>
  );
}

const containerStyle10 = {
  margin: '3% auto ',
  width: '50%',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
  padding: '100px',
  color: ' #990011',
  backgroundColor: '#FFF2D7',
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
  width: '50%',
};

const columnStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '10px',
};

const rangeBarContainer = {
  height: '20px',
  backgroundColor: '#F1F1F2',
  borderRadius: '4px',
  overflow: 'hidden',
};


const rangeBarStyle = {
  height: '100%',
  backgroundColor: '#31473A',
  transition: 'width 0.3s ease',
};

const buttonContainer = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '20px',
};

const buttonStyle = {
  padding: '8px 16px',
  backgroundColor: '#F98866',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

const volunteerPopupStyle = {
  position: 'absolute',
  top: '50%',
  left: '15%',
  transform: 'translateY(-8%)',
  backgroundColor: '#6AB187',
  padding: '20px',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
  borderRadius: '8px',
  zIndex: '2',
  width: '300px',

};

const messagePopupStyle = {
  position: 'fixed',
  bottom: 0,
  left: 300,
  right: 1,
  backgroundColor: '#66A5AD',
  padding: '20px',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
  zIndex: '2',
  height: '100%'
};

const textarea1Style = {
  width: '100%',
  height: '300px', // Adjust the height as needed
  padding: '10px',
  marginBottom: '10px',
  border: '1px solid #ccc',
  borderRadius: '4px',
};

const sendButtonStyle = {
  padding: '8px 16px',
  backgroundColor: '#31473A',
  color: '#fff',
  border: ' 1px solid black',
  borderRadius: '4px ',
  cursor: 'pointer',
};

const closeButtonContainer = {
  display: 'flex',
  justifyContent: 'flex-end',
};

const closeButtonStyle = {
  padding: '1px 8px',
  backgroundColor: '#ff6961',
  color: '#fff',
  border: 'none',
  borderRadius: '20px',
  cursor: 'pointer',
};

const messagePopupHeader = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '10px',


};

const minimizeButtonStyle = {
  padding: '1px 8px',
  backgroundColor: '#ffc107',
  color: '#fff',
  border: 'none',
  borderRadius: '20px',
  cursor: 'pointer',
  marginRight: '5px',
};

const minimizedMessageStyle = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  backgroundColor: '#fff',
  padding: '10px',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
  zIndex: '2',
};

export default Analytics;