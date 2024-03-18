import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function Orglog() {
    useEffect(() => {
        AOS.init(); 
    }, []);

  return (
    <div>
      
      	
      

     <div class="d-lg-flex half">
    <div class="bg order-1 order-md-2" style={{backgroundImage: "url('assets/images/wew.jpg')"}}></div>
    <div class="contents order-2 order-md-1">
    <nav class="navbar11">
      <a href="index.html" class="home-btn" style={{ textDecoration: 'none', color: '#2a5834',position:'relative',left:'2%'}}>Home</a>
     </nav>

      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-md-7">
            <center>
            <h3>LOGIN  <strong></strong></h3>
           </center>
            <br/>
           
            <form action="#" method="post">
              <div class="form-group first">
                <label for="username">OrganizationID</label>
                <input type="text" class="form-control"  id="username"/>
              </div>
              <div class="form-group last mb-3">
                <label for="password">Password</label>
                <input type="password" class="form-control"  id="password"/>
              </div>
              
              <div class="d-flex mb-5 align-items-center">
                <label class="control control--checkbox mb-0"><span class="caption">Remember me</span>
                
                  <input type="checkbox" />
                  <div class="control__indicator"></div>
                </label>
                
                <span class="ml-auto"><a href="#" class="forgot-pass" style={{ textDecoration: 'none',position:'relative',left:'92%'}}>Forgot Password</a></span> 
                
               
              </div>
              
              <input type="submit" value="Log In" class="btn btn-block btn-primary" style={{background:'#6675df', border: '#6675df'}}/>
              <center>
              <a class="caption" href="orgreg.html" style={{ textDecoration: 'none'}}>
                Register?
              </a>
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
