import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function Orgreg() {
    useEffect(() => {
        AOS.init(); 
    }, []);

  return (
    <div>
       <div class="limiter">
		<div class="container-login1000">
			<div class="wrap-login1000">
				<form class="login1000-form validate-form">
					<span class="login1000-form-title p-b-43">
						REGISTER
					</span>
					
					
					<div class="wrap-input1000 validate-input" data-validate = "name">
						<input class="input1000" type="text" name="name"/>
						<span class="focus-input1000"></span>
						<span class="label-input1000">Organization Name</span>
					</div>

					
					<div class="wrap-input1000 validate-input" data-validate = "Address">
						<input class="input1000" type="text" name="Address"/>
						<span class="focus-input1000"></span>
						<span class="label-input1000">Address</span>
					</div>
					
					
					<div class="wrap-input1000 validate-input" data-validate = "District">
						<input class="input1000" type="text" name="District"/>
						<span class="focus-input1000"></span>
						<span class="label-input1000">District</span>
					</div>
					
					
					<div class="wrap-input1000 validate-input" data-validate = "Country">
						<input class="input1000" type="text" name="Country"/>
						<span class="focus-input1000"></span>
						<span class="label-input1000">Country</span>
					</div>
					
					
					<div class="wrap-input1000 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input class="input1000" type="text" name="email"/>
						<span class="focus-input1000"></span>
						<span class="label-input1000">Email</span>
					</div>
					
					
				   
					<div class="wrap-input1000 validate-input" data-validate="Password is required">
						<input class="input1000" type="password" name="pass"/>
						<span class="focus-input1000"></span>
						<span class="label-input1000">Password</span>
					</div>

					

					<div class="container-login1000-form-btn">
						<button class="login1000-form-btn">
							Register
						</button>
					</div>
					<center>
						<a class="caption" href="orglog.html">
						  Login
						</a>
					  </center>
					
					
				</form>

				<div class="login1000-more" style={{backgroundImage: "url('assets/images/13.jpg')"}}>
					<nav class="navbar1">
						<a href="index.html" class="home-btn" style={{ textDecoration: 'none', color: '#2a5834',position:'relative',left:'186%'}}>Home</a>
					  </nav>
				</div>
			</div>
		</div>
	</div>
	
	
    </div>

    )
}
 export default Orgreg