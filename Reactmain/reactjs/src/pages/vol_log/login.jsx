import React, { useEffect,useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import config from '../../config.json'
import './assets/css/util.css'
import './assets/fonts/iconic/css/material-design-iconic-font.min.css'
import './assets/css/main.css'
import './assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/fonts/iconic/css/material-design-iconic-font.min.css'
import './assets/vendor/animate/animate.css'
import './assets/vendor/css-hamburgers/hamburgers.min.css'
import './assets/vendor/animsition/css/animsition.min.css'
import './assets/vendor/select2/select2.min.css'
import { Helmet } from 'react-helmet';
import Cookies from 'js-cookie';

function Login() {

	const [formData, setFormData] = useState({
		first_name: "",
		last_name: "",
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
            url: config.server_api_url + '/login/volunteer',
            data: formData
            })
            .then((res) => {
				Cookies.set('name', res.data.name, { expires: 7 })
        		Cookies.set('uid', res.data.uid, { expires: 7 })
        		Cookies.set('token', res.data.token, { expires: 7 })
                alert("Registered Successfully");
				alert("Successfully logged in")
                navigate("/userdash")

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
    <div>
           <Helmet>
             <title>Volunteer login</title>
            </Helmet>
	<div className="limiter2">
		<div className="container2-login1002" style={{backgroundImage: "url('assets/images/v1.jpg')"}}>
			<div className="wrap2-login1002">
				<nav className="navbar1">
				<Link className="txt121" to="/" style={{textDecoration:"none",color:"darkgrey",position:'relative',left:'5px'}} >Home <span className="sr-only"></span></Link>
				  </nav>
				<form className="login1002-form12 validate-form12" onSubmit={handleSubmit}>
					

					<span className="login1002-form12-title p-b-55 p-t-30">
						Log in
					</span>

					<div className="wrap2-input1002 validate-input" data-validate = "Enter email">
						<input className="input1002" type="text" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required/>
						<span className="focus-input1002" data-placeholder="&#xf207;"></span>
					</div>

					<div className="wrap2-input1002 validate-input" data-validate="Enter password">
						<input className="input1002" type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required/>
						<span className="focus-input1002" data-placeholder="&#xf191;"></span>
					</div>

					<div className="contact100-form12-checkbox">
						<input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me"/>
						<label className="label-checkbox100" for="ckb1">
							Remember me
						</label>
					</div>

					<div className="container2-login1002-form12-btn">
						<button className="login1002-form12-btn" type="submit">
							Login
						</button>
					</div>
					
					<div className="text-center p-t-90">
					<Link className="txt121" to="/register" style={{textDecoration:"none",position:'relative',left:'5px'}} >Register? <span className="sr-only"></span></Link>
						<br/>
						<Link className="txt121 " to="" style={{textDecoration:"none",position:'relative',left:'5px'}} >Forgot password? <span className="sr-only"></span></Link>
						<br/>
					</div>
				</form>
			</div>
		</div>
	</div>
	

	<div id="dropDownSelect1"></div>

    </div>
  )
}

export default Login
