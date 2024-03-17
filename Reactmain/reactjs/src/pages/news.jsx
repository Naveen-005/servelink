import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Link } from 'react-router-dom';

function News() {
  useEffect(() => {
    AOS.init(); 
}, []);
  return (
    <div>
        
        <div class="site-mobile-menu site-navbar-target">
		<div class="site-mobile-menu-header">
			<div class="site-mobile-menu-close">
				<span class="icofont-close js-menu-toggle"></span>
			</div>
		</div>
		<div class="site-mobile-menu-body"></div>
	</div>


	
	<nav class="navbar navbar-expand-lg navbar-light">
		<div class="container">
		  <a class="navbar-brand logo m-0 float-start text-black-50 " href="index.html">Servelink</a>
		  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		  </button>
		  <div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav ml-auto">
			  <li class="nav-item ">
				<a class="nav-link "  href="index.html">Home <span class="sr-only"></span></a>
			  </li>
			  <li class="nav-item dropdown">
				<a class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				  Volunteer
				</a>
				<div class="dropdown-menu" aria-labelledby="navbarDropdown">
				  <a class="dropdown-item" href="login.html">Login</a>
				  <div class="dropdown-divider"></div>
				  <a class="dropdown-item" href="register.html">Register</a>
				 
				</div>
			  </li>
			  <li class="nav-item dropdown">
				  <a class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					Organization
				  </a>
				  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
					<a class="dropdown-item" href="orglog.html">Login</a>
					<div class="dropdown-divider"></div>
					<a class="dropdown-item" href="">Register</a>
					
				  </div>
				</li>
			  <li class="nav-item">
			  <Link className="nav-link" to="/about">About</Link>
			  </li>
			  <li class="nav-item">
			  <Link className="nav-link" to="/news">Events</Link>
			  </li>
	  
			  <li class="nav-item">
			  <Link className="nav-link" to="/contact">Contact</Link>
			  </li>
			</ul>
		  </div>
		</div>
	  </nav>
	


	
	<div class="hero overlay" style={{backgroundImage: "url('assets/images/img_v_6-min.jpg')"}}>
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
						<a href="#"><img src={"assets/images/img_v_1-min.jpg"} alt="Image" class="img-fluid mb-4 rounded"/></a>
						<div class="px-4 pb-3 pt-3">
							<span class="date">Dec 31, 2023</span>
							<h3><a href="#" style={{textDecoration: 'none', color: "#2a5834"}}>Medical Camp</a></h3>
							<p>"Empowering communities through free medical camps. Join us for impact!"</p>
								
								

					         <div class="progress">
									<div class="progress-bar" role="progressbar" style={{width:' 10%',  backgroundColor: '#2a5834'}} aria-valuenow="36" aria-valuemin="0" aria-valuemax="100">36/100</div>
								</div>
								<br/>
							 <button type="button" class="btn btn-success float-end" >Enroll</button>
						</div>
					     
					</div>
				</div>
				<div class="col-lg-3 col-md-4">
					<div class="causes-item bg-white">
						<a href="#"><img src={"assets/images/img_v_2-min.jpg"} alt="Image" class="img-fluid mb-4 rounded"/></a>
						<div class="px-4 pb-3 pt-3">
							<span class="date">Jan 17, 2024</span>
							<h3><a href="#" style={{textDecoration: 'none', color: "#2a5834"}}>Clean Up</a></h3>
							<p>"Join our clean-up efforts. Together, let's make a difference!"</p>

								<div class="progress">
									<div class="progress-bar" role="progressbar" style={{width:' 25%',  backgroundColor: '#2a5834'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25/100</div>
								  </div>
								  <br/>
								  <button type="button" class="btn btn-success float-end" >Enroll</button>
						</div>
					</div>
				</div>

				<div class="col-lg-3 col-md-4">
					<div class="causes-item bg-white">
						<a href="#"><img src={"assets/images/img_v_3-min.jpg"} alt="Image" class="img-fluid mb-4 rounded"/></a>
						<div class="px-4 pb-3 pt-3">
							<span class="date">June 20, 2023</span>
							<h3><a href="#" style={{textDecoration: 'none', color: "#2a5834"}}>Aid Distribution</a></h3>
							<p>"Supporting communities through aid distribution. Join us in lending hands!"</p>

								<div class="progress">
									<div class="progress-bar" role="progressbar" style={{width:' 80%',  backgroundColor: '#2a5834'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80/100</div>
								  </div>
								  <br/>
								  <button type="button" class="btn btn-success float-end" >Enroll</button>
						</div>
					</div>
				</div>

				<div class="col-lg-3 col-md-4">
					<div class="causes-item bg-white">
						<a href="#"><img src={"assets/images/img_v_4-min - Copy.jpg"} alt="Image" class="img-fluid mb-4 rounded"/></a>
						<div class="px-4 pb-3 pt-3">
							<span class="date">May 11, 2020</span>

							<h3><a href="#" style={{textDecoration: 'none', color: "#2a5834"}}	>
								Hunger Relief</a></h3>
							<p>"Providing food for the hungry. Join our mission to end hunger!"</p>

								<div class="progress">
									<div class="progress-bar" role="progressbar" style={{width:' 55%',  backgroundColor: '#2a5834'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">65/100</div>
								  </div>
								  <br/>
								  <button type="button" class="btn btn-success float-end" >Enroll</button>

						</div>
					</div>
				</div>

				<div class="col-lg-3 col-md-4">
					<div class="causes-item bg-white">
						<a href="#"><img src={"assets/images/img_v_5-min - Copy.jpg"} alt="Image" class="img-fluid mb-4 rounded"/></a>
						<div class="px-4 pb-3 pt-3">
							<span class="date">May 11, 2020</span>
							<h3><a href="#" style={{textDecoration: 'none', color: "#2a5834"}}>Education for Children</a></h3>
							<p>"Empowering children through education. Join us to shape brighter futures!"</p>

								<div class="progress">
									<div class="progress-bar" role="progressbar" style={{width:' 15%',  backgroundColor: '#2a5834'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50/100</div>
								  </div>
								  <br/>
								  <button type="button" class="btn btn-success float-end" >Enroll</button>

						</div>
					</div>
				</div>

				<div class="col-lg-3 col-md-4">
					<div class="causes-item bg-white">
						<a href="#"><img src={"assets/images/img_v_6-min.jpg"} alt="Image" class="img-fluid mb-4 rounded"/></a>
						<div class="px-4 pb-3 pt-3">
							<span class="date">May 11, 2020</span>
							<h3><a href="#" style={{textDecoration: 'none', color: "#2a5834"}}>Support Livelihood</a></h3>
							<p>"Empowering livelihoods. Join us to create sustainable futures together!"</p>
								<div class="progress">
									<div class="progress-bar" role="progressbar" style={{width:' 75%',  backgroundColor: '#2a5834'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">75/100</div>
								  </div>
								  <br/>
								  <button type="button" class="btn btn-success float-end" >Enroll</button>
						</div>
					</div>
				</div>

			</div>
			
		</div>
	</div>






	<div class="site-footer">
		<div class="container">

			<div class="row">
				<div class="col-6 col-sm-6 col-md-6 col-lg-3">
					<div class="widget">
						<h3>Navigation</h3>
						<ul class="list-unstyled float-left links">
							<li><a href="about.html">About us</a></li>
							
							<li><a href="#">Causes</a></li>
							<li><a href="login.html">Volunteer</a></li>
							<li><a href="#">Terms</a></li>
							<li><a href="#">Privacy</a></li>
						</ul>
					</div> 
				</div> 

				<div class="col-6 col-sm-6 col-md-6 col-lg-3">
					<div class="widget">
						<h3>Popular Causes</h3>
						<ul class="list-unstyled float-left links">
							<li><a href="#">Food for the Hungry</a></li>
							<li><a href="#">Education for Children</a></li>
							<li><a href="#">Support for Livelihood</a></li>
							<li><a href="#">Medical Mission</a></li>
							<li><a href="#">Education</a></li>
						</ul>
					</div> 
				</div> 

				<div class="col-6 col-sm-6 col-md-6 col-lg-3">
					<div class="widget">
						<h3>Services</h3>
						<ul class="list-unstyled float-left links">
							<li><a href="#">Causes</a></li>
							<li><a href="#">Volunteer</a></li>
							<li><a href="#">Terms</a></li>
						</ul>
					</div> 
				</div> 


				<div class="col-6 col-sm-6 col-md-6 col-lg-3">
					<div class="widget">
						<h3>Contact</h3>
						<address>Sjcet palai</address>
						<ul class="list-unstyled links mb-4">
							<li><a href="tel://11234567890">+91 11111111</a></li>
							<li><a href="tel://11234567890">+91 00000000</a></li>
							<li><a href="mailto:info@mydomain.com">info@mydomain.com</a></li>
						</ul>

						<h3>Connect</h3>
						<ul class="list-unstyled social">
							<li><a href="#"><span class="icon-instagram"></span></a></li>
							<li><a href="#"><span class="icon-twitter"></span></a></li>
							<li><a href="#"><span class="icon-facebook"></span></a></li>
							<li><a href="#"><span class="icon-linkedin"></span></a></li>
							
						</ul>

					</div> 
				</div> 

			</div> 


		
		</div> 
	</div> 





	{/*
	<div id="overlayer"></div>
	<div class="loader">
		<div class="spinner-border text-primary" role="status">
			<span class="visually-hidden">Loading...</span>
		</div>
	</div>
  */}
















      
    </div>
  )
}

export default News
