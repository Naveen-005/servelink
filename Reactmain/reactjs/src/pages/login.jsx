import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';


function Login() {
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
				<form className="login100-form validate-form">
					

					<span className="login100-form-title p-b-34 p-t-27">
						Log in
					</span>

					<div className="wrap-input100 validate-input" data-validate = "Enter username">
						<input className="input100" type="text" name="username" placeholder="Username"/>
						<span className="focus-input100" data-placeholder="&#xf207;"></span>
					</div>

					<div className="wrap-input100 validate-input" data-validate="Enter password">
						<input className="input100" type="password" name="pass" placeholder="Password"/>
						<span className="focus-input100" data-placeholder="&#xf191;"></span>
					</div>

					<div className="contact100-form-checkbox">
						<input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me"/>
						<label className="label-checkbox100" for="ckb1">
							Remember me
						</label>
					</div>

					<div className="container-login100-form-btn">
						<button className="login100-form-btn">
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
