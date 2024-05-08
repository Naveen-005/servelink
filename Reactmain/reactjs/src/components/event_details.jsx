import { color } from 'framer-motion';
import React,{useState,useEffect} from 'react'
import { Helmet } from 'react-helmet';
import axios from 'axios';
import config from '../config.json'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';


function Event_details() {

        const [enrolled, setEnrolled] = useState(0);
        const [event, setEvent] = useState(0);
        const [skillCount, setSkillCount] = useState(0);
        const [conditions, setConditions] = useState(0);
        const { id } = useParams();
        const navigate = useNavigate();

        const handleEnroll = (skill) => {
            axios({
                method: 'post',
                url: config.server_api_url + '/event_details',
                withCredentials: true,
                data: {
                  event_id:id,
                  vol_id:Cookies.get('uid'),
                  skill: skill,
                  conditions: conditions,
                }
              })
                .then((res) => {
          
                    setEvent(prevEvent => ({ ...prevEvent, enrolled: prevEvent.enrolled + 1 }));
                    alert("successfully Enrolled")
          
                })
                .catch((err) => {
                  alert(err.response?.data)
                });
        };

        const listStyle = {
            paddingLeft: '20px', // Adjust the indentation as needed
            listStyle: 'none', // Remove default list styles
        };

        useEffect(() => {
 
            axios({
                method: 'get',
                url: config.server_api_url + '/event_details',
                withCredentials: true,
                params:{
                    id: id
                }
              })
                .then((res) => {

                    setEvent(res.data.event);
                    setSkillCount(res.data.skill_enrollment)
                    setConditions(res.data.conditions)
                    console.log(skillCount)
    
                })
                .catch((err) => {
                    alert(err.response?.data)
        
            });

        },[]);

        
        
        
    
        return (
            
            <div className="container77" style={containerStyle77}>
                 <Helmet>
                 <title>EventDetails</title>
                 </Helmet>
                <div className="content" style={contentStyle77}>
                    <div className="column1" style={coloumnStyle77}>
                        <img src={`${config.bucket_url}event/${event._id}.jpg`} alt="Event" style={imageStyle77} />
                        <a href={`https://www.google.com/maps/dir/?api=1&destination=${event.loc_lat},${event.loc_lng}`} target="_blank" style={{color:'black',backgroundColor:'white',padding:'20px',position:'relative',top:'30px',borderRadius:'19px'}}>Get Directions</a>

                    </div>
                    <div className="divider" style={dividerStyle}></div>
                    <div className="column2" style={coloumnStyle78}>
                    <button onClick={() => navigate('/events')} style={closeButtonStyle77}>X</button>
                        <h2 style={{ fontSize: '44px', fontWeight: 'bold', color: 'green' }}>{event.title}</h2>
                        <p>Date  :{new Date(event.date).toDateString()} <br/> Time :{event.time}</p>
                        
                        <div style={descriptionStyle77}>
                            <p>
                                {event.long_description}
                            </p>
                        </div>
                        <div style={conditionsStyle77}>
                            <p>Conditions for Volunteers:
                            <ul style={listStyle}>
                                <li>{event.conditions}</li>
                                <li>Location: {event.location}</li>
                               {/*<li>Qualifications: Relevant qualifications if required</li>*/}
                            </ul>
                            </p>
                        </div>

                        {event.skills && Object.keys(event.skills).map(skill => (
                         <div key={skill} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                         <div style={{ flex: 1 }}>
                        <p>{skill}</p>
                        <progress value={parseInt(skillCount[skill], 10)} max={parseInt(event.skills[skill], 10)}></progress>
                        <p>{`${parseInt(skillCount[skill], 10)} / ${parseInt(event.skills[skill], 10)}`}</p>
                             </div>
                         <button onClick={() => handleEnroll(skill)} style={enrollButtonStyle7}>Enroll</button>
                        </div>
                       ))}
                       {/*
                        <div style={enrollmentStyle77}>
                            <p>Enrolled: {enrolled}/{event.required}</p>
                            <input type="range" min="0" max={event.required} value={event.enrolled} style={rangeStyle77} disabled />
                            <button onClick={() => handleEnroll('general')} style={enrollButtonStyle7}>Enroll</button>
                        </div>
                    */}
                    </div>
                </div>
            </div>
        );
}
    
    // Inline CSS styles
    const containerStyle77 = {
        margin: '3% auto ',
        width: '80%',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
        padding: '20px',
    };
    
    const contentStyle77 = {
        display: 'flex',
    };
    
    const coloumnStyle77 = {
        flex: '1',
        padding: '10px',
        backgroundColor:"green"
    };
    
    const coloumnStyle78  = {
        flex: '1',
        padding: '10px',
        
    };

    const imageStyle77 = {
        maxWidth: '100%',
    };
    
    const descriptionStyle77 = {
        backgroundColor: '#f2f2f2',
        padding: '10px',
        borderRadius: '5px',
        marginBottom: '10px',
    };
    
    const conditionsStyle77 = {
        marginBottom: '10px',
    };
    
    const enrollmentStyle77 = {
        textAlign: 'center',
    };
    
    const rangeStyle77 = {
        width: '80%',
        
        
    };
    
    const enrollButtonStyle7 = {
        marginTop: '8px ',
        backgroundColor:'green',
        borderRadius:'25% ',
        padding:'3%',
        color:'white',
       
        
       
    };
    
    const closeButtonStyle77 = {
        position: 'absolute',
        top: '8%',
        right: '11%',
    };

    const dividerStyle = {
        height: '100%',
        width: '1px',
        backgroundColor: 'black',
        margin: '4%', // Adjust the margin as needed
       
    };


export default Event_details;
