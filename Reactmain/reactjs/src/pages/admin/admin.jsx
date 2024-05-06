import React, { useState } from 'react';
import './styleadmin.css'; 
import { Link, NavigationType, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Cookies from 'js-cookie';
import axios from 'axios';
import config from '../../config.json'

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  
  const navigate= useNavigate()

  const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };


    const handleSubmit = (event) => {
      event.preventDefault();
      
    axios({
      method: 'post',
      url: config.server_api_url + '/admin',
      data: formData
      })
      .then((res) => {
          console.log(res);
          Cookies.set('name', res.data.name, { expires: 7 })
        	Cookies.set('admin', res.data.admin_id, { expires: 7 })
          alert("Successfully logged in")
          navigate("/admindash")

      })
      .catch((err) => {
          console.log(err)
          alert(err.response?.data)
  });
    };



  const handleLogin = () => {
    // Add your login logic here
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  return (
  <div className="container16">
    <Helmet>
      <title>
        Admin
      </title>
    </Helmet>
      <div className="login16-container16">
        <center>
      <h1 style={{color:'white'}}>
        Login
        </h1>
        </center>
      <form>
        <div className="form16-group16">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name='username'
            value={formData.username}
            onChange={handleChange}
            required
            style={{width:'100%',padding: '10px',margin: '10px 0',border: '1px solid #ccc',borderRadius: '5px',color:'#c4bdbd', backgroundColor:'#3c3d3d'}}/>
        </div>
        <div className="form16-group16">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name='password'
            value={formData.password}
            onChange={handleChange}
            required
            
            style={{width:'100%',padding: '10px',margin: '10px 0',border: '1px solid #ccc',borderRadius: '5px',color:'#c4bdbd', backgroundColor:'#3c3d3d'}}/>
        </div>
        
          <div className="contact100-form12-checkbox">
						<input className="input-checkbox100" id="ckb" type="checkbox" checked={rememberMe} onChange={handleRememberMeChange}/>
						<label className="label-checkbox100" for="ckb">
							Remember me
						</label>
					</div>
        
        <center>
        < button type="button" onClick={handleSubmit} style={{color:'white',backgroundColor:'gray',borderRadius:'10px',padding:'10px'}}>SIGN IN</button>
        </center>
      </form>
     
    </div>
  </div>
  );
};

export default LoginPage;
