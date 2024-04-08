import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
//import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import { Helmet } from 'react-helmet';

import './style.css'
import './tiny-slider.css'
import './aos.css'
import './flatpickr.min.css'
import './glightbox.min.css'




function About() {
	useEffect(() => {
		AOS.init();
	}, []);

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3, // Show 3 slides at a time
		slidesToScroll: 1, // Scroll one slide at a time
		autoplay: true, // Autoplay slides
		autoplaySpeed: 1700, // Autoplay every 1.7 seconds
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2, // Show 2 slides at a time on smaller screens
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1, // Show 1 slide at a time on even smaller screens
				}
			}
		]
	};


	return (
		<div>

            <Helmet>
             <title>About</title>
            </Helmet>
			<div className="site-mobile-menu site-navbar-target">
				<div className="site-mobile-menu-header">
					<div className="site-mobile-menu-close">
						<span className="icofont-close js-menu-toggle"></span>
					</div>
				</div>
				<div className="site-mobile-menu-body"></div>
			</div>

			<Navbar/>

			<div className="hero overlay" style={{ backgroundImage: "url('assets/images/img_v_8-min.jpg')" }}>
				<div className="container">
					<div className="row align-items-center justify-content-center">
						<div className="col-lg-6 text-center">
							<h1 className="heading text-white mb-2" data-aos="fade-up" data-aos-delay="100">About Us</h1>
							<p data-aos="fade-up" data-aos-delay="100" className=" mb-5 text-white lead text-white-50">Welcome to ServeLink! We're your go-to
								platform for connecting passionate volunteers with impactful opportunities in communities worldwide.

							</p>
							<p data-aos="fade-up" data-aos-delay="100">
								<a href="#" className="btn btn-primary me-4">Join </a>
							</p>

						</div>


					</div>
				</div>
			</div>

			<div className="section sec-about">
				<div className="container">
					<div className="row g-5 justify-content-between">
						<div className="col-lg-6 has-bg" data-aos="fade-right">
							<img src={"assets/images/vol14.jpg"} alt="Image" className="img-fluid img-box-shadow rounded" />
						</div>
						<div className="col-lg align-self-center" data-aos="fade-left" data-aos-delay="100">
							<span className="subheading mb-3">About</span>
							<h2 className="heading mb-4">History</h2>
							<p align="justify" > Established in 2024 by a group of computer science students,
								our mission is simple: to streamline the volunteering process,
								enhance transparency, and match volunteers with opportunities tailored to their location,
								skills, and preferences. Through our user-friendly interface, organizations can efficiently
								recruit, onboard, and supervise volunteers, ensuring smooth collaboration and meaningful outcomes.
								At ServeLink, we believe in the power of collective action to create positive change, and we're here
								to empower you to make a difference, one volunteer opportunity at a time.
								Join us in building a brighter future together!</p>
						</div>
					</div>
				</div>
			</div>


			<div className="section sec-features bg-light">
				<div className="container">
					<div className="row mb-5">
						<div className="col-lg-4" data-aos="fade-up">
							<span className="subheading mb-3">The Team</span>
							<h2 className="heading">Who We Are</h2>
						</div>
						<div className="col-lg-6 text-start" data-aos="fade-up" data-aos-delay="100">
							<p align="justify">Committed to excellence and driven by a common purpose, we leverage our
								collective strengths to drive meaningful change and inspire others to join us on our mission. As a team,
								we are united in our commitment to building a brighter, more inclusive future for all</p>
						</div>
					</div>
				</div>

				
				<div className="container">
					<div className="features-slider-wrap" data-aos="fade-up" data-aos-delay="100">
						<Slider {...settings}>
							<div className="item">
								<div className="feature bg-color-1">
									<img src={"assets/images/nk1.jpg"} alt="Image" className="img-fluid rounded-circle mb-4" style={{ width: '50%', maxWidth: '200px' }} />
									<h3 className="mb-0">Navaneeth Krishna</h3>
									<span className="text-black-50 mb-3 d-block"></span>
									<p className="text-black-50">Developer</p>
								</div>
							</div>
							<div className="item">
								<div className="feature bg-color-2">
									<img src={"assets/images/navee.jpg"} alt="Image" className="img-fluid rounded-circle mb-4" style={{ width: '50%', maxWidth: '200px' }} />
									<h3 className="mb-0">Naveen Alex</h3>
									<span className="text-black-50 mb-3 d-block"></span>
									<p className="text-black-50">Developer</p>
								</div>
							</div>
							<div className="item">
								<div className="feature bg-color-3">
									<img src={"assets/images/nmn.jpg"} alt="Image" className="img-fluid rounded-circle mb-4" style={{ width: '50%', maxWidth: '200px' }} />
									<h3 className="mb-0">Nevin M Noby</h3>
									<span className="text-black-50 mb-3 d-block"></span>
									<p className="text-black-50">Developer</p>
								</div>
							</div>
							<div className="item">
								<div className="feature bg-color-4">
									<img src={"assets/images/sree.jpg"} alt="Image" className="img-fluid rounded-circle mb-4" style={{ width: '50%', maxWidth: '200px' }} />
									<h3 className="mb-0">Sreelakshmi Biju</h3>
									<span className="text-black-50 mb-3 d-block"></span>
									<p className="text-black-50">Developer</p>
								</div>
							</div>
						</Slider>
					</div>
				</div>

			</div>

			<div className="section ">
				<div className="container">

					<div className="row">
						{/*
				<div className="col-lg-7" data-aos="fade-up" data-aos-delay="100">
				
					<div id="features-slider-nav" className="mt-5 d-flex justify-content-center">
						<button  className="btn btn-primary prev d-flex align-items-center me-2" data-controls="prev"> <span className="icon-chevron-left"></span> <span className="ms-3">Prev</span></button>
						<button className="btn btn-primary next d-flex align-items-center" data-controls="next"><span className="me-3">Next</span> <span className="icon-chevron-right"></span></button>
					</div>
				</div>
				*/}
					</div>
				</div>

			</div>

			<div className="section bg-light">
				<div className="container">
					<div className="row">
						<div className="col-lg-6" data-aos="fade-up">
							<div className="vision">
								<h2>Our Vision</h2>
								<p className="mb-4 lead">"A connected global community where volunteerism is celebrated as a
									powerful force for positive change, creating a more equitable,
									compassionate, and sustainable world for all."</p>

							</div>
						</div>
						<div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
							<div className="mission">
								<h2>Our Mission</h2>
								<p className="mb-4 lead"> "To mobilize, engage, and support diverse
									volunteers worldwide in making meaningful contributions to address pressing
									social, environmental, and humanitarian challenges."</p>
							</div>
						</div>
					</div>
				</div>
			</div>
        	<Footer />

		</div>
	)
}

export default About