import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from '../components/navbar';


function Contact() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <> 

           {/* <Navbar activePage="/contact" />   */}
           
           <Navbar/>
          
            <div className="hero overlay" style={{ backgroundImage: "url('assets/images/img_v_5-min.jpg')" }}>
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 text-center">
                            <h1 className="heading text-white mb-2" data-aos="fade-up">Contact Us</h1>
                            <p data-aos="fade-up" className=" mb-5 text-white lead text-white-50">For any inquiries or assistance,
                                don't hesitate to get in touch with us!</p>
                            <p data-aos="fade-up" data-aos-delay="100">
                                <Link className="btn btn-primary me-4" to="/login">Connect</Link>
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
                                    <input type="text" className="form-control" id="classNamee" />
                                </div>
                                <div className="mb-3 col-lg-6">
                                    <label htmlFor="email" className="ps-3 fw-bold mb-2">Email</label>
                                    <input type="email" className="form-control" id="email" />
                                </div>

                                <div className="mb-3 col-lg-12">
                                    <label htmlFor="message" className="ps-3 fw-bold mb-2">Message</label>
                                    <textarea id="message" className="form-control" cols="30" rows="10"></textarea>
                                </div>

                                <div className="col-lg-6">
                                    <input type="submit" className="btn btn-primary text-white py-3" value="Send Message" />
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
                                        +91 111111 <br />
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



            <div className="site-footer" >
				<div className="container" >

					<div className="row">
						<div className="col-6 col-sm-6 col-md-6 col-lg-3">
							<div className="widget">
								<h3>Navigation</h3>
								<ul className="list-unstyled float-left links " style={{textDecoration:"none"}}>
								 <li><Link className="dropdown-item" to="/about">About us</Link></li>
								 <li><Link className="dropdown-item" to="/events">News</Link></li>
								 <li><Link className="dropdown-item" to="/login">Volunteers</Link></li>
								 <li><Link className="dropdown-item" to="/terms">Terms</Link></li>
								 <li><Link className="dropdown-item" to="/privacy">Privacy</Link></li>
								</ul>
							</div>
						</div>

						<div className="col-6 col-sm-6 col-md-6 col-lg-3">
							<div className="widget">
								<h3>Popular Causes</h3>
								<ul className="list-unstyled float-left links">
								<li><Link className="dropdown-item" to="">Food for hungry</Link></li>
								<li><Link className="dropdown-item" to="">Education for Children</Link></li>
								<li><Link className="dropdown-item" to="">Support for Livelihood</Link></li>
								<li><Link className="dropdown-item" to="">Medical Mission</Link></li>
								<li><Link className="dropdown-item" to="">Education</Link></li>
								</ul>
							</div>
						</div>

						<div className="col-6 col-sm-6 col-md-6 col-lg-3">
							<div className="widget">
								<h3>Services</h3>
								<ul className="list-unstyled float-left links">
								<li><Link className="dropdown-item" to="/login">Volunteers</Link></li>
								 <li><Link className="dropdown-item" to="/orglog">Organizations</Link></li>
								 
								</ul>
							</div>
						</div>


						<div className="col-6 col-sm-6 col-md-6 col-lg-3">
							<div className="widget">
								<h3>Contact</h3>
								<address>St.Joseph’s College of Engineering and Technology,Palai,
									Choondacherry P.O,
									Palai, Kottayam 686 579,
									Kerala,India.</address>
								<ul className="list-unstyled links mb-4">
								<li><Link className="dropdown-item" to="">+91 0000000</Link></li>
								<li><Link className="dropdown-item" to="">+91 0000000</Link></li>
								<li><Link className="dropdown-item" to="">abc@gmail.com</Link></li>
								</ul>

								<h3>Connect</h3>
								<ul className="list-unstyled social">
									<li><a href="#"><span className="icon-instagram"></span></a></li>
									<li><a href="#"><span className="icon-twitter"></span></a></li>
									<li><a href="#"><span className="icon-facebook"></span></a></li>
									<li><a href="#"><span className="icon-linkedin"></span></a></li>
									<li></li>

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
    )
}

export default Contact;