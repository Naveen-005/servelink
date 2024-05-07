import React, { useState, useEffect } from 'react';
import { Link, useNavigate , useParams} from 'react-router-dom';
import './profile.css';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import config from '../../config.json'


function Profile() {

    const [volunteer, setVolunteer]=useState(null)
    const { id } = useParams();
    const [eventCount, setEventCount]=useState(0)


    useEffect(() => {
 
        axios({
            method: 'get',
            url: config.server_api_url + '/volunteerProfile',
            withCredentials: true,
            params:{
                id: id
            }
          })
            .then((res) => {

                setVolunteer(res.data.volunteer)
                setEventCount(res.data.eventCount)
                //console.log(res.data)

            })
            .catch((err) => {
                alert(err.response?.data)
    
        });

    },[]);

  return (
    <div>
            <Helmet>
            <title>VolunteerProfile</title>
             </Helmet>
         <section className="h-100 gradient-custom-2">
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-lg-9 col-xl-12">
                    <div className="card">
                        <div className="rounded-top text-white d-flex flex-row"
                            style={{backgroundColor: '#000', height:'200px'}}>
                            <div className="ms-4 mt-5 d-flex flex-column" style={{width:'150px'}}>
                                <img src={`${config.bucket_url}profile/volunteer/${volunteer?._id}.jpg`}
                                    alt="Generic placeholder image" className="img-fluid img-thumbnail mt-4 mb-2"
                                    style={{width: '150px', zIndex:'1'}}/>
                                    {/*
                                <button type="button" className="btn btn-outline-dark" data-mdb-ripple-color="dark"
                                    style="z-index: 1;">
                                    Edit profile
                                </button>
                                */}
                            </div>
                            <div className="ms-3" style={{marginTop: '130px'}}>
                                <h5>{volunteer?.first_name} {volunteer?.last_name}</h5>
                                <p>{}</p>
                            </div>
                        </div>
                        <div className="p-4 text-black" style={{backgroundColor: '#f8f9fa'}}>
                          
                            <div className="d-flex justify-content-end text-center py-1">
                                <div>
                                    <p className="mb-1 h5">{eventCount}</p>
                                    <p className="small text-muted mb-0">Events</p>
                                </div>
                                <div className="px-3">
                                    <p className="mb-1 h5">4</p>
                                    <p className="small text-muted mb-0">Achievments</p>
                                </div>
                                <div>
                                    <p className="mb-1 h5">106 Hrs</p>
                                    <p className="small text-muted mb-0">Volunteering</p>
                                </div>
                            </div>
                        
{      /*                  <p className="pt-5">Special Skill: {volunteer?.skills}</p>
*/}
                        <p className="pt-5">Special Skill:
                        {volunteer?.skills.map((skill, index) => (
                        <span key={index}> {skill}{index !== volunteer.skills.length - 1 ? ', ' : ''}</span>
                        ))}
                        </p>


                        </div>
                        <div className="card-body p-4 text-black">
                            <div className="mb-5">
                                <p className="lead fw-normal mb-1">Achievments</p>
                                <div className="p-4" style={{backgroundColor: '#f8f9fa'}}>
                                 
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <p className="lead fw-normal mb-0">Photos from recent events</p>
                                <p className="mb-0"><a href="#!" className="text-muted">Show all</a></p>
                            </div>
                            <div className="row g-2">
                                <div className="col mb-2">
                                    <img src={"assets/images/img_pp_1.jpg"}
                                        alt="image 1" className="w-100 rounded-3" style={{height:'400px'}}/>
                                </div>
                                <div className="col mb-2">
                                    <img src={"assets/images/img_pp_2.jpg"}
                                        alt="image 1" className="w-100 rounded-3" style={{height:'400px'}}/>
                                </div>
                            </div>
                            <div className="row g-2">
                                <div className="col">
                                    <img src={"assets/images/img_pp_3.jpg"}
                                        alt="image 1" className="w-100 rounded-3" style={{height:'400px'}}/>
                                </div>
                                <div className="col">
                                    <img src={"assets/images/img_pp_4.jpg"}
                                        alt="image 1" className="w-100 rounded-3" style={{height:'400px'}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
      
    </div>
  )
}

export default Profile
