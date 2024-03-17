import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Link } from 'react-router-dom';

function Contact(){
    useEffect(() => {
        AOS.init(); 
    }, []);

    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light">
           <div className="container">
              <a className="navbar-brand logo m-0 float-start text-black-50 " href="index.html">Servelink</a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                     </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                               <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
        <a className="nav-link "  href="about.jsx">Home <span className="sr-only"></span></a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Volunteer
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="login.html">Login</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="register.html">Register</a>
         
        </div>
      </li>
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Organization
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="orglog.html">Login</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="">Register</a>
            
          </div>
        </li>
      <li className="nav-item">
      <Link className="nav-link" to="/about">About</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/news">Events</Link>
      </li>

      <li className="nav-item">
      <Link className="nav-link" to="/contact">Contact</Link>
      </li>
    </ul>
  </div>
 </div>
 </nav>

 <div className="hero overlay" style={{backgroundImage: "url('assets/images/img_v_5-min.jpg')"}}>
    <div className="container">
        <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 text-center">
                <h1 className="heading text-white mb-2" data-aos="fade-up">Contact Us</h1>
                <p data-aos="fade-up" className=" mb-5 text-white lead text-white-50">For any inquiries or assistance, 
                    don't hesitate to get in touch with us!</p>
                <p data-aos="fade-up"  data-aos-delay="100">
                    <a href="#" className="btn btn-primary me-4">Connect</a> 
                </p>		
                
            </div>

            
        </div>
    </div>
 </div>

 <div className="section">
    <div className="container">
        <div className="row mb-5">
            <div className="col-lg-6" data-aos="fade-up">
                <h2 className="heading">Get In Touch</h2>
                <p className="text-black-50" align="justify">
                    Additionally, you can visit our website and fill out the 
                    contact form for a prompt response. 
                    Thank you for your interest in ServeLink, and we look forward to connecting with you soon!
                    </p>
                    </div>
        </div>

        <form action="" className="row justify-content-between">

            <div className="col-md-6 col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <div className="row">

                    <div className="mb-3 col-lg-6">
                        <label htmlFor="classNamee" className="ps-3 fw-bold mb-2">className</label>
                        <input type="text" className="form-control" id="classNamee"/>
                    </div>
                    <div className="mb-3 col-lg-6">
                        <label htmlFor="email" className="ps-3 fw-bold mb-2">Email</label>
                        <input type="email" className="form-control" id="email"/>
                    </div>

                    <div className="mb-3 col-lg-12">
                        <label htmlFor="message" className="ps-3 fw-bold mb-2">Message</label>
                        <textarea  id="message" className="form-control" cols="30" rows="10"></textarea>
                    </div>	

                    <div className="col-lg-6">
                        <input type="submit" className="btn btn-primary text-white py-3" value="Send Message"/>
                    </div>

                </div>
            </div>
            <div className="col-md-6 col-lg-5" data-aos="fade-up" data-aos-delay="200">
                <div className="row">
                    <div className="col-6 col-lg-6 mb-4">
                        <h3 className="h6 fw-bold text-secondary">Address</h3>
                        <p>Sjcet palai</p>
                    </div>
                    <div className="col-6 col-lg-6 mb-4">
                        <h3 className="h6 fw-bold text-secondary">Phone</h3>
                        <p>
                            +91 111111 <br/>
                            +91 0000000
                        </p>
                    </div>

                    <div className="col-6 col-lg-6 mb-4">
                        <h3 className="h6 fw-bold text-secondary">Follow</h3>
                        <ul className="list-unstyled social-custom">
                            <li><a href="#"><span className="icon-instagram"></span></a></li>
                            <li><a href="#"><span className="icon-twitter"></span></a></li>
                            <li><a href="#"><span className="icon-facebook"></span></a></li>
                            <li><a href="#"><span className="icon-linkedin"></span></a></li>
                            
                        </ul>
                    </div>
                    <div className="col-6 col-lg-6 mb-4">
                        <h3 className="h6 fw-bold text-secondary">Email</h3>
                        <p>
                            <a href="#">info@mydomain.com</a>
                        </p>
                    </div>

                </div>
            </div>
            

        </form>
    </div>
 </div>



  <div className="site-footer">
    <div className="container">

        <div className="row">
            <div className="col-6 col-sm-6 col-md-6 col-lg-3">
                <div className="widget">
                    <h3>Navigation</h3>
                    <ul className="list-unstyled float-left links">
                        <li><a href="#">About us</a></li>
                        
                        <li><a href="#">Causes</a></li>
                        <li><a href="#">Volunteer</a></li>
                        <li><a href="#">Terms</a></li>
                        <li><a href="#">Privacy</a></li>
                    </ul>
                </div> 
            </div> 

            <div className="col-6 col-sm-6 col-md-6 col-lg-3">
                <div className="widget">
                    <h3>Popular Causes</h3>
                    <ul className="list-unstyled float-left links">
                        <li><a href="#">Food for the Hungry</a></li>
                        <li><a href="#">Education for Children</a></li>
                        <li><a href="#">Support for Livelihood</a></li>
                        <li><a href="#">Medical Mission</a></li>
                        <li><a href="#">Education</a></li>
                    </ul>
                </div>
            </div> 

            <div className="col-6 col-sm-6 col-md-6 col-lg-3">
                <div className="widget">
                    <h3>Services</h3>
                    <ul className="list-unstyled float-left links">
                        <li><a href="#">Causes</a></li>
                        <li><a href="#">Volunteer</a></li>
                        <li><a href="#">Terms</a></li>
                    </ul>
                </div> 
            </div>


            <div className="col-6 col-sm-6 col-md-6 col-lg-3">
                <div className="widget">
                    <h3>Contact</h3>
                    <address>palai</address>
                    <ul className="list-unstyled links mb-4">
                        <li><a href="tel://11234567890">+91 1111111</a></li>
                        <li><a href="tel://11234567890">+91 0000000</a></li>
                        <li><a href="mailto:info@mydomain.com">info@mydomain.com</a></li>
                    </ul>

                    <h3>Connect</h3>
                    <ul className="list-unstyled social">
                        <li><a href="#"><span className="icon-instagram"></span></a></li>
                        <li><a href="#"><span className="icon-twitter"></span></a></li>
                        <li><a href="#"><span className="icon-facebook"></span></a></li>
                        <li><a href="#"><span className="icon-linkedin"></span></a></li>
                        
                        
                    </ul>

                </div>
            </div>

        </div> 


        
    </div>
 </div> 



      {/* <div id="overlayer"></div>
            <div className="loader">
               <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
           </div>
    </div> */}

    

 </>
)}

export default Contact;