import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
       <div className="site-footer" >
				<div className="container" >

					<div className="row">
						<div className="col-6 col-sm-6 col-md-6 col-lg-3">
							<div className="widget">
								<h3>Navigation</h3>
								<ul className="list-unstyled float-left links " style={{textDecoration:"none"}}>
								 <li><Link className="" to="/about">About us</Link></li>
								 <li><Link className="" to="/events">Events</Link></li>
								 <li><Link className="" to="/login">Volunteers</Link></li>
								 <li><Link className="" to="/terms">Terms</Link></li>
								 <li><Link className="" to="/privacy">Privacy</Link></li>
								</ul>
							</div>
						</div>

						<div className="col-6 col-sm-6 col-md-6 col-lg-3">
							<div className="widget">
								<h3>Popular Causes</h3>
								<ul className="list-unstyled float-left links">
								<li><Link className="" to="">Food for hungry</Link></li>
								<li><Link className="" to="">Education for Children</Link></li>
								<li><Link className="" to="">Support for Livelihood</Link></li>
								<li><Link className="" to="">Medical Mission</Link></li>
								<li><Link className="" to="">Education</Link></li>
								</ul>
							</div>
						</div>

						<div className="col-6 col-sm-6 col-md-6 col-lg-3">
							<div className="widget">
								<h3>Services</h3>
								<ul className="list-unstyled float-left links">
								<li><Link className="" to="/login">Volunteers</Link></li>
								 <li><Link className="" to="/orglog">Organizations</Link></li>
								 
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
								<li><Link className="" to="">+91 0000000</Link></li>
								<li><Link className="" to="">+91 0000000</Link></li>
								<li><Link className="" to="">abc@gmail.com</Link></li>
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
        </div>
    )
}



export default Footer
