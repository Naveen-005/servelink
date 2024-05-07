import React, { useState, useEffect } from 'react';
import coverPhoto from './cvo.jpg'
import { Helmet } from 'react-helmet';
import SideBar from './components/sidebar';
import UserDropdown from './components/userdropdown';
import axios from 'axios';
import config from '../../config.json'

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
        position: 'absolute',
        left: '40%',
    }),
    eventButton1: (bgColor = '4CAF50', color = '#fff') => ({
        padding: '8px 16px',
        backgroundColor: bgColor,
        color: color,
        border: 'none',
        borderRadius: '4px',
        position: 'absolute',
        left: '40%',
    }),

    area121: () => ({
        display: 'flex',
        height: '100vh',
        flex: 1,
        padding: '50px',
    }),

    popupContainer: () => ({
        position: 'relative',
    }),
    popup: (showPopup) => ({
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        padding: '20px',
        display: showPopup ? 'block' : 'none',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        maxHeight: '80vh',
        overflowY: 'auto',
    }),
    divider: (color = '#ccc') => ({
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        height: '25%',
        width: '1px',
        backgroundColor: color,
    }),
    reviewContainer: {
        marginBottom: '20px',
        borderBottom: '1px solid black',
        paddingBottom: '10px',
    },
    reviewName: {
        fontSize: '14px',
        fontWeight: 'bold',
        marginBottom: '5px',
    },
    reviewText: {
        fontSize: '18px',
    },
};

const ReviewCard = ({_event}) => {
    const [showPopup, setShowPopup] = useState(false);

    const handleReviewClick = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };
/*
    const reviews = [
        { name: 'John Doe', text: 'This event was great! Highly recommended.' },
        { name: 'Jane Smith', text: 'I had an amazing experience at this event. Well organized and informative.' },
        { name: 'Michael Johnson', text: 'Could have been better in terms of organization, but overall it was good.' },
        { name: 'Emily Davis', text: 'I loved the speakers and the networking opportunities.' },
        { name: 'David Wilson', text: 'It was an excellent event. Looking forward to the next one!' },
    ];
*/

    const [reviews,setReviews]=useState(null)

    useEffect(() => {


        axios({
          method: 'get',
          url: config.server_api_url + '/event/review',
          params:{
            id:_event._id
          },
          withCredentials: true,
        })
          .then((res) => {
    
            setReviews(res.data);
    
          })
          .catch((err) => {
            alert(err.response?.data)
    
          });
    
      }, []);

    return (

        <>
            <div style={styleName.rec121('#ffffff')}>
                <div style={styleName.eventName('#333')}>
                    {_event.title}
                    <br />
                    <img
                        src={`${config.bucket_url}event/${_event._id}.jpg`}
                        alt="Event"
                        style={{ width: '20%', height: '20%', objectFit: 'cover' }}
                    />
                </div>
                <div style={styleName.eventButton('red', '#fff')}>Completed</div>
                {/* <div style={styleName.eventButton1('#4CAF50', '#fff')}> Ongoing</div> */}

                <div style={styleName.divider('#cccccc')} />

                {   /*     <Meter total={100} enrolled={75} />
*/}
                <div style={styleName.popupContainer()}>
                    <div style={styleName.popup(showPopup)}>
                        <button
                            style={{
                                position: 'absolute',
                                top: '10px',
                                right: '10px',
                                backgroundColor: '#f44336',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '50%',
                                width: '30px',
                                height: '30px',
                                cursor: 'pointer',
                                fontSize: '16px',
                                fontWeight: 'bold',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                            onClick={handleClosePopup}
                        >
                            X
                        </button>
                        {reviews?.map((review, index) => (
                            <div key={index} style={styleName.reviewContainer}>
                                <div style={styleName.reviewName}>{review.volunteer.first_name} {review.volunteer.last_name}</div>
                                <div style={styleName.reviewText}>Rating: {review.reviewRating}</div>
                                <div style={styleName.reviewText}>{review.reviewMsg}</div>
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={handleReviewClick}
                        style={{
                            padding: '8px 16px',
                            backgroundColor: '#4CAF50',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                        }}
                    >
                        Reviews
                    </button>
                </div>
            </div>

        </>

    )
}


export default ReviewCard;
