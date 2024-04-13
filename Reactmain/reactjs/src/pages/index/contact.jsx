import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import './style.css'
import './tiny-slider.css'
import './aos.css'
import './flatpickr.min.css'
import './glightbox.min.css'
import { Helmet } from 'react-helmet';


function Contact() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <> 
            <Helmet>
             <title>Contact</title>
            </Helmet>
           
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
                                    <label htmlFor="classNamee" className="ps-3 fw-bold mb-2">Name</label>
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



           <Footer />


         



        </>
    )
}

export default Contact;