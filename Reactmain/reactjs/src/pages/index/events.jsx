import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Loader from '../../components/loader';
import Event from '../../components/event_card';
import { Helmet } from 'react-helmet';

import './style.css'
import './tiny-slider.css'
import './aos.css'
import './flatpickr.min.css'
import './glightbox.min.css'


function Events() {
	useEffect(() => {
		AOS.init();
	}, []);

	{/*
	const truncateText = (text, maxLength) => {
		const words = text.split(' ');
		if (words.length > maxLength) {
		  return words.slice(0, maxLength).join(' ') + '...';
		} else {
		  return text;
		}
	  };
	
	  const truncatedDescription = truncateText(description, 35);

	*/}



	return (
		<div>
			  <Helmet>
             <title>Events</title>
            </Helmet>
             
			<div class="site-mobile-menu site-navbar-target">
				<div class="site-mobile-menu-header">
					<div class="site-mobile-menu-close">
						<span class="icofont-close js-menu-toggle"></span>
					</div>
				</div>
				<div class="site-mobile-menu-body"></div>
			</div>

			<Navbar/>

			<div class="hero overlay" style={{ backgroundImage: "url('assets/images/img_v_6-min.jpg')" }}>
				<div class="container">
					<div class="row align-items-center">
						<div class="col-lg-6 text-center mx-auto">


							<h1 class="heading text-white mb-2" data-aos="fade-up">Events</h1>
							<p data-aos="fade-up" class="mb-5 text-white lead text-white-50">Checkout the events in need of volunteers</p>
						</div>


					</div>
				</div>
			</div>



			<div class="section bg-light">
				<div class="container">
					<div class="row">
						<div class="col-lg-3 col-md-4">
							<div class="causes-item bg-white">
								<a href="#"><img src={"assets/images/img_v_1-min.jpg"} alt="Image" class="img-fluid mb-4 rounded" /></a>
								<div class="px-4 pb-3 pt-3" style={{ height: '300px' }}>
									<span class="date">Dec 31, 2023</span>
									<h3><a href="#" style={{ textDecoration: 'none', color: "#2a5834" }}>Medical Camp</a></h3>
									<p>"Empowering communities through free medical camps. Join us for impact!"</p>



									<div class="progress">
										<div class="progress-bar" role="progressbar" style={{ width: ' 29%', backgroundColor: '#2a5834' }} aria-valuenow="36" aria-valuemin="0" aria-valuemax="100">29/100</div>
									</div>
									<br />
									<button type="button" class="btn btn-success float-end" >view</button>
								</div>

							</div>
						</div>
						<div class="col-lg-3 col-md-4">
							<div class="causes-item bg-white">
								<a href="#"><img src={"assets/images/img_v_2-min.jpg"} alt="Image" class="img-fluid mb-4 rounded" /></a>
								<div class="px-4 pb-3 pt-3" style={{ height: '300px' }}>
									<span class="date">Jan 17, 2024</span>
									<h3><a href="#" style={{ textDecoration: 'none', color: "#2a5834" }}>Clean Up</a></h3>
									<p>"Join our clean-up efforts. Together, let's make a difference!"</p>

									<div class="progress">
										<div class="progress-bar" role="progressbar" style={{ width: ' 25%', backgroundColor: '#2a5834' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25/100</div>
									</div>
									<br />
									<button type="button" class="btn btn-success float-end" >view</button>
								</div>
							</div>
						</div>

						<div class="col-lg-3 col-md-4">
							<div class="causes-item bg-white">
								<a href="#"><img src={"assets/images/img_v_3-min.jpg"} alt="Image" class="img-fluid mb-4 rounded" /></a>
								<div class="px-4 pb-3 pt-3" style={{ height: '300px' }}>
									<span class="date">June 20, 2023</span>
									<h3><a href="#" style={{ textDecoration: 'none', color: "#2a5834" }}>Aid Distribution</a></h3>
									<p>"Supporting communities through aid distribution. Join us in lending hands!"</p>

									<div class="progress">
										<div class="progress-bar" role="progressbar" style={{ width: ' 80%', backgroundColor: '#2a5834' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80/100</div>
									</div>
									<br />
									<button type="button" class="btn btn-success float-end" >view</button>
								</div>
							</div>
						</div>

						<div class="col-lg-3 col-md-4">
							<div class="causes-item bg-white">
								<a href="#"><img src={"assets/images/vol8.jpg"} alt="Image" class="img-fluid mb-4 rounded" /></a>
								<div class="px-4 pb-3 pt-3" style={{ height: '300px' }}>
									<span class="date">May 11, 2020</span>

									<h3><a href="#" style={{ textDecoration: 'none', color: "#2a5834" }}	>
										Hunger Relief</a></h3>
									<p>"Providing food for the hungry. Join our mission to end hunger!"</p>

									<div class="progress">
										<div class="progress-bar" role="progressbar" style={{ width: ' 65%', backgroundColor: '#2a5834' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">65/100</div>
									</div>
									<br />
									<button type="button" class="btn btn-success float-end" >view</button>

								</div>
							</div>
						</div>

						<div class="col-lg-3 col-md-4">
							<div class="causes-item bg-white">
								<a href="#"><img src={"assets/images/vol9.jpg"} alt="Image" class="img-fluid mb-4 rounded" /></a>
								<div class="px-4 pb-3 pt-3" style={{ height: '300px' }}>
									<span class="date">May 11, 2020</span>
									<h3><a href="#" style={{ textDecoration: 'none', color: "#2a5834" }}>Education for Children</a></h3>
									<p>"Empowering children through education. Join us to shape brighter futures!"</p>

									<div class="progress">
										<div class="progress-bar" role="progressbar" style={{ width: ' 50%', backgroundColor: '#2a5834' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50/100</div>
									</div>
									<br />
									<button type="button" class="btn btn-success float-end" >view</button>

								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-4">
							<div class="causes-item bg-white">
								<a href="#"><img src={"assets/images/vol6.jpg"} alt="Image" class="img-fluid mb-4 rounded" /></a>
								<div class="px-4 pb-3 pt-3" style={{ height: '300px' }}>
									<span class="date">Jan 27, 2024</span>
									<h3><a href="#" style={{ textDecoration: 'none', color: "#2a5834" }}>Animal Shelter Volunteering</a></h3>
									<p>Assisting animals, cleaning, feeding, walking, nurturing, aiding adoption efforts</p>
									<div class="progress">
										<div class="progress-bar" role="progressbar" style={{ width: ' 95%', backgroundColor: '#2a5834' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">95/100</div>
									</div>
									<br />
									<button type="button" class="btn btn-success float-end" >view</button>
								</div>
							</div>
						</div>

                        <div class="col-lg-3 col-md-4">
							<div class="causes-item bg-white">
								<a href="#"><img src={"assets/images/vol1.jpg"} alt="Image" class="img-fluid mb-4 rounded" /></a>
								<div class="px-4 pb-3 pt-3" style={{ height: '300px' }}>
									<span class="date">Nov 17, 2024</span>
									<h3><a href="#" style={{ textDecoration: 'none', color: "#2a5834" }}>Blood Donation Volunteers</a></h3>
									<p>"Selfless individuals aiding blood donation through compassionate service."</p>

									<div class="progress">
										<div class="progress-bar" role="progressbar" style={{ width: ' 41%', backgroundColor: '#2a5834' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">41/100</div>
									</div>
									<br />
									<button type="button" class="btn btn-success float-end" >view</button>
								</div>
							</div>
						</div>

{/*
						<Event evnt={{
							enrolled: 45,
							required: 70,
							title: "test title",
							img_url:"assets/images/vol1.jpg",
							date: "Nov 17, 2024",
							description:"test description 123"
						}}/>
                      
					*/}

						<div class="col-lg-3 col-md-4">
							<div class="causes-item bg-white">
								<a href="#"><img src={"assets/images/vol7.jpg"} alt="Image" class="img-fluid mb-4 rounded" /></a>
								<div class="px-4 pb-3 pt-3" style={{ height: '300px' }}>
									<span class="date">May 11, 2020</span>
									<h3><a href="#" style={{ textDecoration: 'none', color: "#2a5834" }}>Support Livelihood</a></h3>
									<p>"Empowering livelihoods. Join us to create sustainable futures together!"</p>
									<div class="progress">
										<div class="progress-bar" role="progressbar" style={{ width: ' 75%', backgroundColor: '#2a5834' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">75/100</div>
									</div>
									<br />
									<button type="button" class="btn btn-success float-end" >view</button>
								</div>
							</div>
						</div>

					</div>

				</div>
			</div>

			<Footer />
           
		</div>
	)
}

export default Events
