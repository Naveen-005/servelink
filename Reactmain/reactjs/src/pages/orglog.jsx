import React, { useEffect,useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import config from '../config.json'


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
      data: formData
    })
      .then((res) => {
        localStorage.setItem('name', res.data.name);
        localStorage.setItem('uid', res.data.uid);
        localStorage.setItem('token', res.data.token);
        alert("Successfully logged in");
        navigate("/")

      })
      .catch((err) => {
        console.log(err)
        alert("login failed")
      });


  };




  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>

      <div className="d-lg-flex half">
        <div className="bg order-1 order-md-2" style={{ backgroundImage: "url('assets/images/wew.jpg')" }}></div>
        <div className="contents order-2 order-md-1">
          <nav className="navbar11">
            <a href="index.html" className="home-btn" style={{ textDecoration: 'none', color: '#2a5834', position: 'relative', left: '2%' }}>Home</a>
          </nav>

          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-7">
                <center>
                  <h3>LOGIN  <strong></strong></h3>
                </center>
                <br />

                <form onSubmit={handleSubmit}>
                  <div className="form-group first">
                    <label for="email">Email</label>
                    <input type="text" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange}/>
                  </div>
                  <div className="form-group last mb-3">
                    <label for="password">Password</label>
                    <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange}/>
                  </div>

                  <div className="d-flex mb-5 align-items-center">
                    <label className="control control--checkbox mb-0"><span className="caption">Remember me</span>

                      <input type="checkbox" />
                      <div className="control__indicator"></div>
                    </label>

                    <span className="ml-auto"><a href="#" className="forgot-pass" style={{ textDecoration: 'none', position: 'relative', left: '92%' }}>Forgot Password</a></span>


                  </div>

                  <input type="submit" value="Log In" className="btn btn-block btn-primary" style={{ background: '#6675df', border: '#6675df' }} />
                  <center>
                    <Link className="caption" to="/orgreg" style={{ textDecoration: 'none' }}>
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
