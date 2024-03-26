import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';



function Orgreg() {
    useEffect(() => {
        AOS.init(); 
    }, []);

  return (
    <div>
       <div className="limiter">
		<div className="container-login1000">
			<div className="wrap-login1000">
				<form className="login1000-form validate-form">
					<span className="login1000-form-title p-b-43">
						REGISTER
					</span>
					
					
					<div className="wrap-input1000 validate-input" data-validate = "name">
						<input className="input1000" type="text" name="name"/>
						<span className="focus-input1000"></span>
						<span className="label-input1000">Organization Name</span>
					</div>

					
					<div className="wrap-input1000 validate-input" data-validate = "Address">
						<input className="input1000" type="text" name="Address"/>
						<span className="focus-input1000"></span>
						<span className="label-input1000">Address</span>
					</div>
					
					
					<div className="wrap-input1000 validate-input" data-validate = "District">
						<input className="input1000" type="text" name="District"/>
						<span className="focus-input1000"></span>
						<span className="label-input1000">District</span>
					</div>
					
					
					<div className="wrap-input1000 validate-input" data-validate = "Country">
						<input className="input1000" type="text" name="Country"/>
						<span className="focus-input1000"></span>
						<span className="label-input1000">Country</span>
					</div>
					
					
					<div className="wrap-input1000 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input className="input1000" type="text" name="email"/>
						<span className="focus-input1000"></span>
						<span className="label-input1000">Email</span>
					</div>
					
					
				   
					<div className="wrap-input1000 validate-input" data-validate="Password is required">
						<input className="input1000" type="password" name="pass"/>
						<span className="focus-input1000"></span>
						<span className="label-input1000">Password</span>
					</div>

					

					<div className="container-login1000-form-btn">
						<button className="login1000-form-btn">
							Register
						</button>
					</div>
					
					<Link className="txt1 " to="/orglog" style={{textDecoration:"none"}} >Login? </Link>
						
						
					
					
					
				</form>

				<div className="login1000-more" style={{backgroundImage: "url('assets/images/13.jpg')"}}>
					<nav className="navbar1">
						
						<Link className="home-btn" to="/" style={{ textDecoration: 'none', color: '#2a5834',position:'relative',left:'170%'}} >Home</Link>
						<br/>
						</nav>
				</div>
			</div>
		</div>
	</div>
	
	
    </div>

    )
}
 export default Orgreg