import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import config from '../../config.json'
import './assets/css/main2.css'
import './assets/vendor/select2/select2.min.css'
import './assets/vendor/datepicker/daterangepicker.css'
import './assets/vendor/mdi-font/css/material-design-iconic-font.min.css'
import './assets/vendor/font-awesome-4.7/css/font-awesome.min.css'
import { Helmet } from 'react-helmet';
import Cookies from 'js-cookie';   


function Register() {

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        dob: new Date(),
        email: "",
        phone_no: "",
        city: "",
        district: "",
        pincode: "",
        gender: "",
        password:"",

    });

    const navigate = useNavigate();


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handle_radio_change=(event)=>{

        setFormData({...formData,gender:event.currentTarget.value});
    };
   
    {/*
      const handleChange_date = (date) => {
        setFormData({ ...formData, dob: date });
      };
    
      const toggleCalendar = () => {
        const datePickerInput = document.querySelector('.js-datepicker');
        datePickerInput.click(); // Programmatically click on the date input to open the calendar
      };
   
    */}

    const handleSubmit = (event) => {
        event.preventDefault();
        
        axios({
            method: 'post',
            url: config.server_api_url + '/register/volunteer',
            data: formData
            })
            .then((res) => {
                Cookies.set('name', res.data.name, { expires: 7 })
        		Cookies.set('uid', res.data.uid, { expires: 7 })
        		Cookies.set('token', res.data.token, { expires: 7 })
                alert("Registered Successfully");
                navigate("/")
            })
            .catch((err) => {
                console.log(err)
                alert(err)
        });

    };


    useEffect(() => {
        AOS.init();
    }, []);


    return (
        <>
              <Helmet>
             <title>Volunteer Register</title>
            </Helmet>
            <div class="page-wrapper1 container1-login1001 font-poppins" style={{ backgroundImage: "url('assets/images/v3.webp')" }} >
                <div class="wrapper1 wrapper1--w680">

                    <div class="card1 card1-5">
                        <nav class="navbar1">
                            <Link className="txt11 " to="/" style={{ textDecoration: "none", color: "darkgrey", position: "relative", left: "3%" }} >Home <span className="sr-only"></span></Link>
                        </nav>
                        {/*       
            <div class="card card-4">
            <nav class="navbar1">
                <Link to="/index" class="home-btn">Home</Link>
              </nav>

    */}
                        <div class="card1-body">

                            <h2 class="title">Registration Form</h2>
                            <form onSubmit={handleSubmit}>
                                <div class="row row-space">
                                    <div class="col-6">
                                        <div class="input-group">
                                            <label class="label2">first name</label>
                                            <input class="input--style-4" type="text" name="first_name" value={formData.first_name} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="input-group">
                                            <label class="label2">last name</label>
                                            <input class="input--style-4" type="text" name="last_name" value={formData.last_name} onChange={handleChange} />
                                        </div>
                                    </div>
                                </div>
                                <div class="row row-space">
                                    <div class="col-6">
                                        <div class="input-group">
                                            <label class="label2">DOB</label>
                                               <br/>
            
                                                <input class="input--style-9 js-datepicker" type="date" name="dob" value={formData.dob} onChange={handleChange} />
                                         
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="input-group">
                                            <label class="label2">Gender</label>

                                            <div class="p-t-9">
                                                <br />
                                                <label class="radio-container m-r-18 ">Male
                                                    <input type="radio" name="gender" value="male" checked={formData.gender === "male"} onChange={handle_radio_change}/>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <label class="radio-container">Female
                                                    <input type="radio" name="gender" value="female" checked={formData.gender === "female"} onChange={handle_radio_change}/>
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row row-space">
                                    <div class="col-6">
                                        <div class="input-group">
                                            <label class="label2">Email</label>
                                            <input class="input--style-4" type="email" name="email" value={formData.email} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="input-group">
                                            <label class="label2">Phone Number</label>
                                            <input class="input--style-4" type="text" name="phone_no" value={formData.phone_no} onChange={handleChange} />
                                        </div>
                                    </div>
                                </div>
                                <div class="row row-space">
                                    <div class="col-6">
                                        <div class="input-group">
                                            <label class="label2">City</label>
                                            <input class="input--style-4" type="text" name="city" value={formData.city} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="input-group">
                                            <label class="label2">District</label>
                                            <input class="input--style-4" type="text" name="district" value={formData.district} onChange={handleChange} />
                                        </div>
                                    </div>
                                </div>
                                <div class="row row-space">

                                <div class="col-6">
                                    <div class="input-group">
                                        <label class="label2">Pincode</label>
                                        <input class="input--style-4" type="text" name="pincode" value={formData.pincode} onChange={handleChange}/>
                                    </div>
                                </div>
                                  <div class="col-6">
                                        <div class="input-group">
                                            <label class="label2">Password</label>
                                            <input class="input--style-4" type="password" name="password" required value={formData.password} onChange={handleChange} />
                                        </div>
                                    </div>
                                 </div>

                                <div class="container1-login1001-form-btn">
                                    <button class="login1002-form12-btn" type="submit">
                                        Submit
                                    </button>
                                    <centre>
                                        <div class="text-center p-t-90">
                                            <Link className="txt12 " to="/login" style={{ textDecoration: "none", position: "relative", left: "-244%" }} >Login <span className="sr-only"></span></Link>


                                        </div>
                                    </centre>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Register;