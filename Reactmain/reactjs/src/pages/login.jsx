import React, { useEffect,useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import config from '../config.json'


function Login() {

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
            url: config.server_api_url + '/login/volunteer',
            data: formData
            })
            .then((res) => {
                localStorage.setItem('name', res.data.name);
                localStorage.setItem('uid', res.data.uid);
                localStorage.setItem('token', res.data.token);
				alert("Successfully logged in")
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
      
      	
	<div className="limiter">
		<div className="container-login100" style={{backgroundImage: "url('assets/images/v1.jpg')"}}>
			<div className="wrap-login100">
				<nav className="navbar1">
				<Link className="txt1 " to="/index" style={{textDecoration:"none",color:"darkgrey"}} >Home <span className="sr-only"></span></Link>
				  </nav>
				<form className="login100-form validate-form" onSubmit={handleSubmit}>
					

					<span className="login100-form-title p-b-34 p-t-27">
						Log in
					</span>

					<div className="wrap-input100 validate-input" data-validate = "Enter email">
						<input className="input100" type="text" name="email" placeholder="email" value={formData.email} onChange={handleChange}/>
						<span className="focus-input100" data-placeholder="&#xf207;"></span>
					</div>

					<div className="wrap-input100 validate-input" data-validate="Enter password">
						<input className="input100" type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange}/>
						<span className="focus-input100" data-placeholder="&#xf191;"></span>
					</div>

					<div className="contact100-form-checkbox">
						<input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me"/>
						<label className="label-checkbox100" for="ckb1">
							Remember me
						</label>
					</div>

					<div className="container-login100-form-btn">
						<button className="login100-form-btn" type="submit">
							Login
						</button>
					</div>
					
					<div className="text-center p-t-90">
					<Link className="txt1 " to="/register" style={{textDecoration:"none"}} >Register? <span className="sr-only"></span></Link>
						<br/>
						<Link className="txt1 " to="" style={{textDecoration:"none"}} >Forgot password? <span className="sr-only"></span></Link>
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
