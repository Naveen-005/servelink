import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';


function Orglog() {
    useEffect(() => {
        AOS.init(); 
    }, []);

  return (
    <div>
      
      	
      

     <div className="d-lg-flex half">
    <div className="bg order-1 order-md-2" style={{backgroundImage: "url('assets/images/wew.jpg')"}}></div>
    <div className="contents order-2 order-md-1">
    <nav className="navbar11">
      <a href="index.html" className="home-btn" style={{ textDecoration: 'none', color: '#2a5834',position:'relative',left:'2%'}}>Home</a>
     </nav>

      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-7">
            <center>
            <h3>LOGIN  <strong></strong></h3>
           </center>
            <br/>
           
            <form action="#" method="post">
              <div className="form-group first">
                <label for="username">OrganizationID</label>
                <input type="text" className="form-control"  id="username"/>
              </div>
              <div className="form-group last mb-3">
                <label for="password">Password</label>
                <input type="password" className="form-control"  id="password"/>
              </div>
              
              <div className="d-flex mb-5 align-items-center">
                <label className="control control--checkbox mb-0"><span className="caption">Remember me</span>
                
                  <input type="checkbox" />
                  <div className="control__indicator"></div>
                </label>
                
                <span className="ml-auto"><a href="#" className="forgot-pass" style={{ textDecoration: 'none',position:'relative',left:'92%'}}>Forgot Password</a></span> 
                
               
              </div>
              
              <input type="submit" value="Log In" className="btn btn-block btn-primary" style={{background:'#6675df', border: '#6675df'}}/>
              <center>
              <Link className="caption" to="/orgreg" style={{ textDecoration: 'none'}}>
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
