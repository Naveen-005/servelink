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
        skills: [],
        //profilePhoto: null,

    });

    const navigate = useNavigate();


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const [Profile_pic,setProfilePic]=useState(null)
    const handleFileChange = (event) => {
      //console.log("event")
      setProfilePic(event.target.files[0]);
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
        console.log(Profile_pic)
        
        axios({
            method: 'post',
            url: config.server_api_url + '/register/volunteer',
            withCredentials:true,
            headers: {
              'Content-Type': 'multipart/form-data' // Set content type to multipart/form-data
            },
            data:{
              formData: formData,
              file: Profile_pic
            }
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
                alert(err.response?.data)
        });

    };
/*
    const handle1Change = (e) => {
        const { name, value } = e.target;
        if (name.includes('skills')) {
          const index = parseInt(name.match(/\d+/)[0], 10);
          const newSkills = [...formData.skills];
          newSkills[index] = value;
          setFormData({ ...formData, skills: newSkills });
        } else {
          setFormData({ ...formData, [name]: value });
        }
      };
*/
/*
const handle1Change = (e) => {
  const { name, value } = e.target;
  if (name === 'newSkill') {
    setFormData({ ...formData, newSkill: value });
  } else if (name.includes('skills')) {
    const index = parseInt(name.match(/\d+/)[0], 10);
    const newSkills = [...formData.skills];
    newSkills[index] = value;
    setFormData({ ...formData, skills: newSkills });
  } else {
    setFormData({ ...formData, [name]: value });
  }
};
*/
const handle1Change = (e) => {
  const { name, value } = e.target;

  // If the input field name is 'newSkill', update the newSkill value directly
  if (name === 'newSkill') {
    setFormData({ ...formData, newSkill: value });
  } 
  // If the input field name includes 'skills', update the skills array
  else if (name.startsWith('skills')) {
    const index = parseInt(name.split('skills[')[1].split(']')[0], 10);
    const newSkills = [...formData.skills];
    newSkills[index] = value;
    setFormData({ ...formData, skills: newSkills });
  } 
  // For other fields, update their values directly
  else {
    setFormData({ ...formData, [name]: value });
  }
};



    const addSkill = () => {
        setFormData({ ...formData, skills: [...formData.skills, ''] });
      };
    const removeSkill = (index) => {
        const newSkills = [...formData.skills];
        newSkills.splice(index, 1);
        setFormData({ ...formData, skills: newSkills });
      };
    
     


    useEffect(() => {
        AOS.init();
    }, []);


    return (
        <>
              <Helmet>
             <title>Volunteer Register</title>
            </Helmet>
            <div className="page-wrapper1 container1-login1001 font-poppins" style={{ backgroundImage: "url('assets/images/v3.webp')" }} >
                <div className="wrapper1 wrapper1--w680">

                    <div className="card1 card1-5">
                        <nav className="navbar1">
                            <Link className="txt11 " to="/" style={{ textDecoration: "none", color: "darkgrey", position: "relative", left: "3%" }} >Home <span className="sr-only"></span></Link>
                        </nav>
                        {/*       
            <div className="card card-4">
            <nav className="navbar1">
                <Link to="/index" className="home-btn">Home</Link>
              </nav>

    */}
                        <div className="card1-body">

                            <h2 className="title">Registration Form</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="row row-space">
                                    <div className="col-6">
                                        <div className="input-group">
                                            <label className="label2">first name</label>
                                            <input className="input--style-4" type="text" name="first_name" value={formData.first_name} onChange={handleChange} required/>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="input-group">
                                            <label className="label2">last name</label>
                                            <input className="input--style-4" type="text" name="last_name" value={formData.last_name} onChange={handleChange} required/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-space">
                                    <div className="col-6">
                                        <div className="input-group">
                                            <label className="label2">DOB</label>
                                               <br/>
            
                                                <input className="input--style-9 js-datepicker" type="date" name="dob" value={formData.dob} onChange={handleChange} required/>
                                         
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="input-group">
                                            <label className="label2">Gender</label>

                                            <div className="p-t-9">
                                                <br />
                                                <label className="radio-container m-r-18 ">Male
                                                    <input type="radio" name="gender" value="male" checked={formData.gender === "male"} onChange={handle_radio_change}/>
                                                    <span className="checkmark"></span>
                                                </label>
                                                <label className="radio-container">Female
                                                    <input type="radio" name="gender" value="female" checked={formData.gender === "female"} onChange={handle_radio_change}/>
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-space">
                                    <div className="col-6">
                                        <div className="input-group">
                                            <label className="label2">Email</label>
                                            <input className="input--style-4" type="email" name="email" value={formData.email} onChange={handleChange} required />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="input-group">
                                            <label className="label2">Phone Number</label>
                                            <input className="input--style-4" type="text" name="phone_no" maxLength="10" value={formData.phone_no} onChange={handleChange} required/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-space">
                                    <div className="col-6">
                                        <div className="input-group">
                                            <label className="label2">City</label>
                                            <input className="input--style-4" type="text" name="city" value={formData.city} onChange={handleChange} required />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="input-group">
                                            <label className="label2">District</label>
                                            <input className="input--style-4" type="text" name="district" value={formData.district} onChange={handleChange} required/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-space">

                                <div className="col-6">
                                    <div className="input-group">
                                        <label className="label2">Pincode</label>
                                        <input className="input--style-4" type="text" name="pincode" maxLength="6" value={formData.pincode} onChange={handleChange} required/>
                                    </div>
                                </div>
                                  <div className="col-6">
                                        <div className="input-group">
                                            <label className="label2">Password</label>
                                            <input className="input--style-4" type="password" name="password" required value={formData.password} onChange={handleChange} />
                                        </div>
                                    </div>
                                 </div>
                                 <div className="row row-space">
                                 <div className="col-12">
    <div className="input-group">
      <label className="label2">Profile Photo</label>
      <input
        className="input--style-4"
        type="file"
        name="profilePhoto"
        accept="image/*"
        onChange={handleFileChange}
        required
      />
      
    </div>
  </div>

                               
  <div className="col-12">
    <div className="input-group">
    <label className="label2" style={{ marginRight: '10px',whiteSpace: 'pre-line'  }}>Skills</label><br/>
      
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px',position:'relative',left:'10px' }}>
        {/*
        <input
          className="input--style-4"
          type="text"
          name="newSkill"
          value={formData.newSkill}
          onChange={handleChange}
          placeholder="Enter a skill"
          style={{ flexGrow: 1, marginRight: '15px' }}
        />
  */}
        <button
          type="button"
          onClick={addSkill}
          style={{
            backgroundColor: 'green',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            padding: '3px 5px 3px 5px',
            cursor: 'pointer',
            marginRight: '5px',
          }}
        >
          +
        </button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {formData.skills.map((skill, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <input
              className="input--style-4"
              type="text"
              name={`skills[${index}]`}
              value={skill}
              onChange={handle1Change}
              placeholder="Enter a skill"
              style={{ flexGrow: 1, marginRight: '10px' }}
            />
            <button
              type="button"
              onClick={() => removeSkill(index)}
              style={{
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                padding: '5px 10px',
                cursor: 'pointer',
              }}
            >
              -
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
                                <div className="container1-login1001-form-btn">
                                    <button className="login1002-form12-btn" type="submit">
                                        Submit
                                    </button>
                                    <centre>
                                        <div className="text-center p-t-90">
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