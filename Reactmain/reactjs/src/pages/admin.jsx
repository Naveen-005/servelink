import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function Admin() {
    useEffect(() => {
        AOS.init(); 
    }, []);

  return (
    <div>
     <body class="img js-fullheight1" style={{backgroundImage: "url(assets/images/adminsa.jpg)"}}/>
	 
		<div class="container1">
			<div class="row justify-content-center">
				<div class="col-md-6 text-center mb-5">
					<h2 class="heading-section1"></h2>	
				</div>
			</div>
			<div class="row justify-content-center">
				<div class="col-md-6 col-lg-4">
					<div class="login-   p-0">
		      	<h3 class="mb-4 text-center">ADMIN LOGIN</h3>
		      	<form action="#" class="signin-form">
		      		<div class="form-group">
		      			<input type="text" class="form-control" placeholder="Username" required/>
		      		</div>
	            <div class="form-group">
	              <input id="password-field" type="password" class="form-control" placeholder="Password" required/>
	              <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span>
	            </div>
	            <div class="form-group">
	            	<button type="submit" class="form-control btn btn-primary submit px-3">Sign In</button>
	            </div>
	            <div class="form-group d-md-flex">
	            	<div class="w-50">
		            	<label class="checkbox-wrap checkbox-primary">Remember Me
									  <input type="checkbox" checked/>
									  <span class="checkmark"></span>
									</label>
								</div>
								<div class="w-50 text-md-right">
									<a href="#" style={{color: "#fff"}}>Forgot Password</a>
								</div>
	            </div>
	          </form>
	        
			</div>
            
		</div>
	
     </div>
     </div>


    </div>

  )
  }
  export default Admin