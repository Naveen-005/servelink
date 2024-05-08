import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

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
								<li>
								<ScrollLink to="food-for-hungry" smooth={true} duration={500}>
                                            Food for hungry
                                     </ScrollLink></li>
								<li><ScrollLink to="education-for-children" smooth={true} duration={500}>
                                      Education for Children
                                       </ScrollLink></li>
								<li> <ScrollLink to="support-live-hood" smooth={true} duration={500}>
                                         Support for Livelihood
                                      </ScrollLink></li>
								<li><ScrollLink to="support-live-hood" smooth={true} duration={500}>
                                         Health Care
                                      </ScrollLink></li>
								
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
								
                              {/*
								<h3>Connect</h3>
								<ul className="list-unstyled social">
									<li><a href="#"><span className="icon-instagram"></span></a></li>
									<li><a href="#"><span className="icon-twitter"></span></a></li>
									<li><a href="#"><span className="icon-facebook"></span></a></li>
									<li><a href="#"><span className="icon-linkedin"></span></a></li>
									<li></li>

								</ul>
                              */}
							</div>
						</div>

					</div>




				</div>
			</div>
        </div>
    )
}



export default Footer
