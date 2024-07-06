import React, { useEffect,useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
//import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import config from '../../config.json'
import './styl3.css'
//import './bootstrap.min.css'
import { Helmet } from 'react-helmet';
import Cookies from 'js-cookie';



function Orglog() {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios({
      method: 'post',
      url: config.server_api_url + '/login/organization',
      withCredentials:true,
      data: formData
    })
      .then((res) => {
        Cookies.set('name', res.data.name, { expires: 7 })
        Cookies.set('org_id', res.data.org_id, { expires: 7 })
        Cookies.set('token', res.data.token, { expires: 7 })
        alert("Successfully logged in");
        navigate("/odas")

      })
      .catch((err) => {
        console.log(err)
        alert(err.response?.data)
      });

  };

  useEffect(() => {

    AOS.init();
  }, []);

  return (
    <div className='orglog1'>
     <Helmet>
             <title>Organization login</title>
            </Helmet>
      <div className="d-lg-flex half14">
        <div className="bg14 order-1 order-md-2" style={{ backgroundImage: "url('assets/images/wew.jpg')" }}></div>
        <div className="contents14 order-2 order-md-1">
          <nav className="navbar11">
            <Link className="home-btn" to="/" style={{textDecoration:"none",color:"black",position:'relative',left:'5px'}} >Home </Link>
          </nav>

          <div className="container14">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-7">
                <center>
                  <h3>LOGIN  <strong></strong></h3>
                </center>
                <br />

                <form onSubmit={handleSubmit}>
                  <div className="form14-group14 first mb-3">
                    <label htmlFor="email">Email</label>
                    <input type="text" className="form14-control14" id="email" name="email" value={formData.email} onChange={handleChange} required/>
                  </div>
                  <div className="form14-group14 last mb-3">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form14-control14" id="password" name="password" value={formData.password} onChange={handleChange} required/>
                  </div>

                  {/*
                  <div className="d-flex mb-5 align-items-center">
                    <label className="control14 control14--checkbox mb-0"><span className="caption">Remember me</span>

                      <input type="checkbox" />
                      <div className="control__indicator"></div>
                    </label>

                    <Link className="ml-auto forgot-pass" to="" style={{ textDecoration: 'none' }}>Forgot Password</Link>


                  </div>
                  */}

                  <input type="submit" value="Log In" className="btn btn-block btn-primary" style={{ background: '#6675df', border: '#6675df' }} />
                  <center>
                    <Link className="caption" to="/register-organization" style={{ textDecoration: 'none' }}>
                      Register?
                    </Link>
                  </center>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  

  )
}

export default Orglog
