import React, { useEffect,useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';	
import { NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import { Helmet } from 'react-helmet';
import { Element } from 'react-scroll';


import './style.css'
import './tiny-slider.css'
import './aos.css'
import './flatpickr.min.css'
import './glightbox.min.css'



function Index() {

	const [activeTab, setActiveTab] = useState('mission');

	const handleTabClick = (tabName) => {
	  setActiveTab(tabName);
	};

	
	useEffect(() => {
		AOS.init();
	}, []);

	const settings = {
		dots: false,
		infinite: true,
		speed: 1000, // Animation speed
		slidesToShow: 3, // Display 3 slides at a time
		slidesToScroll: 1,
		autoplay: true, // Autoplay enabled
		autoplaySpeed: 3000, // Transition every 3 seconds

		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			}
		]
	};
	const [sectionIndex, setSectionIndex] = useState(0);
	const sections = [
	  {
		imageUrl: 'assets/images/vol25.jpg',
		subheading: 'Volunteer',
		heading: 'Give a helping hand to those who need it!',
		description: '"Everybody can be great. Because anybody can serve. You dont have to have a college degree to serve. You dont have to make your subject and your verb agree to serve. You dont have to know the second theory of thermodynamics in physics to serve. You only need a heart full of grace. A soul generated by love." – Martin Luther King, Jr.',
		videoUrl: 'https://www.youtube.com/watch?v=uGtFvOSmZ8A',
	  },
	  {
		imageUrl: 'assets/images/vol28.jpg',
		subheading: 'Organization',
		heading: 'Be the change you wish to see in the world. Volunteer with us!',
		description: '“Volunteerism is the voice of the people put into action. These actions shape and mold the present into a future of which we can all be proud.” -Helen Dyer',
		videoUrl: 'https://www.youtube.com/watch?v=jbV1TDZQAFc',
	  },
	  {
		imageUrl: 'assets/images/hero_11.jpg',
		subheading: 'Volunteer',
		heading: 'Volunteers are community superheroes. Suit up!',
		description: ' “Volunteers do not necessarily have the time ,they have the heart.” -Elizabeth Andrew',
		videoUrl: 'https://www.youtube.com/watch?v=wXb6bDX9FDo',
	  },
	  {
		imageUrl: 'assets/images/hero_13.jpg',
		subheading: 'Organization',
		heading: 'Lend a hand, uplift a community',
		description: ' “Volunteers don’t get paid, not because they’re worthless, but because they’re priceless.” -Sherry Anderson',
		videoUrl: 'https://www.youtube.com/watch?v=wyUdqRstdOc',
	  },
	  
	];
  
	useEffect(() => {
	  const interval = setInterval(() => {
		setSectionIndex((prevIndex) => (prevIndex + 1) % sections.length);
	  }, 4000);
  
	  return () => clearInterval(interval);
	}, []);
  
	const currentSection = sections[sectionIndex];







	return (
		<div>

             <Helmet>
             <title>Servelink &mdash; Empowering Communities</title>
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


		   {/*

			<div className="hero overlay" style={{ backgroundImage: "url('assets/images/hero_2.jpg')" }}>
				<div className="container">
					<div className="row align-items-center justify-content-between">
						<div className="col-lg-6 text-left">
							<span className="subheading-white text-white mb-3" data-aos="fade-up">Volunteer</span>
							<h1 className="heading text-white mb-2" data-aos="fade-up">Give a helping hand to those who need it!</h1>
							<p data-aos="" className=" mb-5 text-white lead text1-white-50" align="justify">“Everybody can be great. Because anybody can serve.
								You don’t have to have a college degree to serve. You don’t have to make your subject and your verb agree to serve.
								You don’t have to know the second theory of thermodynamics in physics to serve.
								You only need a heart full of grace. A soul generated by love.” – Martin Luther King, Jr.</p>
							<p data-aos="fade-up" data-aos-delay="100">

								<a href="https://www.youtube.com/watch?v=uGtFvOSmZ8A" className="text-white glightbox d-inline-flex align-items-center" style={{ textDecoration: "none" }}><span className="icon-play me-2"></span><span>Watch the video</span></a>
							</p>

						</div>

					</div>
				</div>
			</div>
	*/}

<div
      className="hero overlay"
      style={{ backgroundImage: `url(${currentSection.imageUrl})` }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6 text-left">
            <span className="subheading-white text-white mb-3" data-aos="fade-up">
              {currentSection.subheading}
            </span>
            <h1 className="heading text-white mb-2" data-aos="fade-up">
              {currentSection.heading}
            </h1>
            <p
              data-aos=""
              className="mb-5 text-white lead text1-white-50"
              align="justify"
            >
              {currentSection.description}
            </p>
            <p data-aos="fade-up" data-aos-delay="100">
              <a
                href={currentSection.videoUrl}
                className="text-white glightbox d-inline-flex align-items-center"
                style={{ textDecoration: 'none' }}
              >
                <span className="icon-play me-2"></span>
                <span>Watch the video</span>
              </a>
            </p>
          </div>
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
								<p className="mb-4 lead" >"To mobilize, engage, and support diverse
									volunteers worldwide in making meaningful contributions to address pressing
									social, environmental, and humanitarian challenges."
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>







			<div className="section">
				<div className="container">
					<div className="row mb-5 align-items-center justify-content-between">
						<div className="col-lg-5" data-aos="fade-up" data-aos-delay="0">
							<span className="subheading mb-3">Who we are</span>
							<h2 className="heading">About Us</h2>
							<p align="justify">Welcome to our platform, a dynamic online hub dedicated to bridging the gap between passionate
								volunteers and organizations in need. Founded in 2024, our mission is to streamline the process
								of volunteer engagement by providing a user-friendly interface where individuals can easily find
								opportunities that match their interests and skill sets. Whether you're eager to lend a hand in your
								local community or support a cause on a global scale, our platform offers a diverse range of projects
								and initiatives for volunteers to get involved in. From environmental conservation efforts to community
								development projects, we connect volunteers with organizations seeking their valuable contributions.
								Our goal is to empower both volunteers and organizations to make a meaningful impact together, fostering a
								spirit of collaboration and positive change in communities worldwide.
								Join us in our mission to create a better world through the power of volunteering.</p>
						</div>

						<div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
							<blockquote align="justify" >
								"At the heart of every meaningful connection lies the power to transform lives.
								Together, through volunteerism, we weave a tapestry of compassion, unity, and progress.
								Join us in building a brighter tomorrow, one act of service at a time."
							</blockquote>
						</div>
					</div>
					<div className="row justify-content-between">
						<div className="col-lg-5 pe-lg-5" data-aos="fade-up" data-aos-delay="200">

						<ul className="nav1 nav1-pills mb-5 custom-nav-pills" id="pills-tab" role="tablist">
        <li className="nav1-item" role="presentation">
          <button
            className={`nav1-link ${activeTab === 'mission' ? 'active' : ''}`}
            onClick={() => handleTabClick('mission')}
            aria-selected={activeTab === 'mission'}
          >
            Our Mission
          </button>
        </li>
        <li className="nav1-item" role="presentation">
          <button
            className={`nav1-link ${activeTab === 'values' ? 'active' : ''}`}
            onClick={() => handleTabClick('values')}
            aria-selected={activeTab === 'values'}
          >
            Our Values
          </button>
        </li>
        <li className="nav1-item" role="presentation">
          <button
            className={`nav1-link ${activeTab === 'history' ? 'active' : ''}`}
            onClick={() => handleTabClick('history')}
            aria-selected={activeTab === 'history'}
          >
            Our History
          </button>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div className={`tab-pane fade ${activeTab === 'mission' ? 'show active' : ''}`} id="pills-mission" role="tabpanel" aria-labelledby="pills-mission-tab" style={{ backgroundColor: 'white' }}>
          <h2 className="mb-3 fw-bold" style={{ color: "#59886b", backgroundColor: 'white' }}>Our Mission</h2>
          <p align="justify" style={{ backgroundColor: 'white' }}> Our mission is to revolutionize the landscape of volunteer engagement by providing a centralized platform that seamlessly connects volunteers with organizations in need. By addressing the current challenges of recruitment, management, and retention faced by organizations, we aim to create a dynamic and efficient ecosystem where volunteers can easily find opportunities that align with their passions and skills. Through our user-friendly interface and comprehensive tools, we empower organizations to streamline their volunteer coordination processes, ensuring that every volunteer is effectively utilized and valued. Join us on our mission to unlock the full potential of volunteerism and create a more impactful and interconnected world.</p>
        </div>
        <div className={`tab-pane fade ${activeTab === 'values' ? 'show active' : ''}`} id="pills-mission" role="tabpanel" aria-labelledby="pills-mission-tab" style={{ backgroundColor: 'white' }}>
          <h2 className="mb-3 fw-bold" style={{ color: "#59886b", backgroundColor: 'white' }}>Our Values</h2>
          <p align="justify" style={{ backgroundColor: 'white' }}> At ServeLink, our values are at the core of everything we do. We are committed to empowering individuals to make
										a meaningful impact in their communities by providing a comprehensive volunteer connecting system that streamlines
										processes, enhances transparency, and matches volunteers with opportunities tailored to their location, skills, and
										preferences. Central to our mission is the belief in collaboration and inclusivity, ensuring that organizations can
										efficiently recruit, onboard, and supervise volunteers, leading to seamless collaboration and impactful outcomes.

										Furthermore, we embrace feedback and reviews as essential tools for continuous improvement, encouraging users to share their
										experiences and insights to further enhance the volunteer experience for all. ServeLink is more than just a platform;
										it's a vibrant community united by the shared goal of creating positive change and making a difference in the world.</p>
										<p className="mt-5">
										<Link className="btn btn-primary me-4" to="/login">Be A Volunteer</Link>

		</p>
		</div>
        <div className={`tab-pane fade ${activeTab === 'history' ? 'show active' : ''}`} id="pills-mission" role="tabpanel" aria-labelledby="pills-mission-tab" style={{ backgroundColor: 'white' }}>
          <h2 className="mb-3 fw-bold" style={{ color: "#59886b", backgroundColor: 'white' }}>Our History</h2>
          <p align="justify" style={{ backgroundColor: 'white' }}> ServeLink traces its humble beginnings back to the year 2024 when a group
										of passionate computer science students embarked on a journey to create
										a platform that would revolutionize the way communities connect through
										volunteering. As part of their mini-project, these visionary students
										recognized the immense potential of leveraging technology to address societal
										challenges and facilitate meaningful engagement. With dedication and innovation
										at the forefront, they laid the foundation for what would become ServeLink a pioneering
										online platform dedicated to fostering collaboration, empowerment, and positive change
										through volunteerism. From its inception, ServeLink has remained committed to its mission of uniting communities,
										bridging gaps, and amplifying impact through volunteer service.</p>
		</div>	
		
		

								
								
								
							</div>

						</div>
						<div className="col-lg-6">
							<div className="overlap-imgs">
								<img src={"assets/images/vol3.jpg"} alt="Image" className="img-fluid rounded" data-aos="fade-up" />
								<img src={"assets/images/img_pp_2.jpg"} alt="Image" className="img-fluid rounded" data-aos="fade-up" />
								<img src={"assets/images/img_pp_1.jpg"} alt="Image" className="img-fluid rounded" data-aos="fade-up" />
								
							</div>
						</div>
					</div>
				</div>
			</div>


			<div className="section cause-section bg-light">

				<div className="container">
					<div className="row justify-content-center mb-5">
						<div className="col-lg-6 text-center" data-aos="fade-up" data-aos-delay="100">
							<span className="subheading mb-3">Causes</span>
							<h2 className="heading">Featured Causes</h2>
							<p >Featured causes on ServeLink include environmental conservation, youth empowerment,
								and community development initiatives.</p>

							{/*	<div id="features-slider-nav" className="mt-5 d-flex justify-content-center">
						/* <button  className="btn btn-primary prev d-flex align-items-center me-2" data-controls="prev"> <span className="icon-chevron-left"></span> <span className="ms-3">Prev</span></button>
						<button className="btn btn-primary next d-flex align-items-center" data-controls="next"><span className="me-3">Next</span> <span className="icon-chevron-right"></span></button>
                        
					</div>
                 */}
						</div>
					</div>
				</div>




				<div className="container mb-5">
					<div className="features-slider-wrap position-relative" data-aos="fade-up" data-aos-delay="200">
						<Slider {...settings} className="features-slider">
						<Element name="food-for-hungry">
							<div className="item px-2" >
								<div className="causes-item bg-white ">
									<img src={"assets/images/v13.jpg"} alt="Image" className="img-fluid mb-4 rounded" />
									<div className="px-4 pb-5 pt-3" style={{ height: '500px' }}>
										<h3><a href="#" style={{ textDecoration: 'none', color: '#2a5834' }}>Food for the Hungry</a></h3>
										<p align="justify">"Food for the Hungry" involves organizing community food drives and meal distribution events.
											Volunteers can collaborate with local businesses, schools, and religious organizations to collect
											non-perishable food items and prepare nutritious meals for those in need. Additionally, volunteers can
											support urban farming initiatives to cultivate fresh produce in underserved areas, providing communities
											with access to healthy food options. Through these efforts,
											volunteers can play a crucial role in alleviating hunger and promoting food security among vulnerable populations.
											Volunteers dedication ensures no one goes hungry.</p>
									</div>
								</div>
							</div>
							</Element>

							<Element name="education-for-children">
							<div className="item px-2" >
								<div className="causes-item bg-white">
									<a href="#"><img src={"assets/images/v11.jpg"} alt="Image" className="img-fluid mb-4 rounded" /></a>
									<div className="px-4 pb-5 pt-3" style={{ height: '500px' }}>
										<h3><a href="#" style={{ textDecoration: 'none', color: '#2a5834' }}>Education for Children</a></h3>
										<p align="justify" >Volunteers can offer one-on-one or group tutoring sessions to support children in their academic
											studies, focusing on subjects where they may need additional help or guidance. Additionally,
											volunteers can serve as mentors, providing encouragement, guidance, and positive role modeling
											to help children develop essential life skills and pursue their educational goals. By volunteering
											their time and expertise, individuals can make a meaningful difference in the lives of children,
											empowering them to succeed academically and unlock their full potential.
											Volunteers help children to achieve success.</p>
									</div>
								</div>
							</div>
							</Element>

							<Element name="support-live-hood">

							<div className="item px-2" >
								<div className="causes-item bg-white">
									<a href="#"><img src={"assets/images/img_pp_3.jpg"} alt="Image" className="img-fluid mb-4 rounded" /></a>
									<div className="px-4 pb-5 pt-3" style={{ height: '500px' }}>
										<h3><a href="#" style={{ textDecoration: 'none', color: '#2a5834' }}>Support Livelihood</a></h3>
										<p align="justify">Supporting livelihoods through volunteering is a cornerstone of our mission. We believe
											in empowering individuals and communities to achieve economic self-sufficiency and financial
											stability. Through our volunteering website, volunteers have the opportunity to contribute to various
											initiatives aimed at supporting livelihoods, such as skills training programs, microenterprise development
											projects, and job placement assistance services. By volunteering their time and expertise, individuals can
											help marginalized populations gain access to education and training, and resources.</p>
									</div>
								</div>
							</div>
                            </Element>
							
							<div className="item px-2">
								<div className="causes-item bg-white">
									<a href="#"><img src={"assets/images/p2.jpg"} alt="Image" className="img-fluid mb-4 rounded" /></a>
									<div className="px-4 pb-5 pt-3" style={{ height: '500px' }}>
										<h3><a href="#" style={{ textDecoration: 'none', color: '#2a5834' }}>Environmental Conservation</a></h3>
										<p align="justify">Volunteering activities in environmental conservation encompass a wide range of
											impactful initiatives aimed at protecting and preserving the natural world. Volunteers
											participate in tree planting events to restore ecosystems, engage in beach clean-ups to
											remove litter and debris from coastal areas, and assist with habitat restoration projects
											to support biodiversity. Additionally, volunteers may contribute to wildlife monitoring efforts,
											conduct environmental education and outreach programs, and advocate for sustainable practices
											within their communities.Volunteers also advocate for policy changes.</p>
									</div>
								</div>
							</div>

							<div className="item px-2">
								<div className="causes-item bg-white">
									<a href="#"><img src={"assets/images/m1.jpg"} alt="Image" className="img-fluid mb-4 rounded" /></a>
									<div className="px-4 pb-5 pt-3" style={{ height: '500px' }}>
										<h3><a href="#" style={{ textDecoration: 'none', color: '#2a5834',}}><strong> Healthcare Access & Support </strong></a></h3>
										<p align="justify">Volunteering activities in healthcare access and support are essential
											for ensuring that individuals receive the care and assistance they need.
											Volunteers play a crucial role in providing support services such as assisting
											with patient transport, delivering meals to hospital wards, and offering companionship
											to patients. Additionally, volunteers may assist healthcare professionals
											with administrative tasks, contribute to fundraising efforts for medical equipment and supplies, and provide emotional
											support to patients and their families during challenging times. Volunteers enhance healthcare services.</p>
									</div>
								</div>
							</div>

							<div className="item px-2">
								<div className="causes-item bg-white">
									<a href="#"><img src={"assets/images/d1.webp"} alt="Image" className="img-fluid mb-4 rounded" /></a>
									<div className="px-4 pb-5 pt-3" style={{ height: '500px' }}>
										<h3><a href="#" style={{ textDecoration: 'none', color: '#2a5834' }}>Disaster Response & Relief</a></h3>
										<p align="justify">In disaster response and relief, volunteers are at
											the forefront of providing essential aid and support to communities
											affected by natural disasters and humanitarian crises. They play a critical
											role in emergency response efforts, assisting with search and rescue operations,
											distributing food, water, and shelter materials, and providing medical care to
											those injured or displaced. Volunteers helps to
											coordinate relief efforts, manage evacuation centers, and organize donations of supplies
											and resources. Additionally, volunteers offer emotional support and counseling to survivors.
											Volunteers offer hope amidst devastation's aftermath.</p>
									</div>
								</div>
							</div>
						</Slider>
					</div>

				</div>










			</div>

			<div className="section flip-section secondary-bg" style={{ backgroundImage: "url('assets/images/v12.jpg')" }}>
				<div className="container">
					<div className="row">
						<div className="col-lg-7 mx-auto text-center">

							<h3 className="mb-4 heading text-white" data-aos="fade-up">Let's Help The Unfortunate People </h3>
							<Link to="/register" className="btn btn-outline-white me-3" data-aos="fade-up" data-aos-delay="100">Become a Volunteer</Link>
						</div>
					</div>
				</div>
			</div>


			<div className="section bg-light">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-lg-5" data-aos="fade-up">
							<span className="subheading mb-3">Impact</span>
							<h2 className="heading mb-4">Explore Volunteer work and Impact in 2023</h2>

							<p align="justify">In 2023, volunteer work continued to be a driving force for positive change,
								with individuals and organizations worldwide demonstrating resilience and adaptability
								in the face of ongoing challenges. Despite lingering effects of the COVID-19 pandemic,
								volunteers found innovative ways to contribute to their communities, whether through
								virtual volunteering opportunities, socially distanced initiatives, or in-person service
								projects with enhanced safety measures. From supporting vulnerable populations with food
								distribution and healthcare assistance to advocating for social justice and environmental
								sustainability, volunteers played a crucial role in addressing pressing issues and fostering
								solidarity and resilience. Their collective efforts underscored the enduring
								importance of volunteerism as a catalyst for creating meaningful impact and building stronger, more inclusive societies.</p>
						</div>
						<div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
							<div className="row section-counter">
								<div className="col-lg-6">

									
									<div className="counter">
										<i className="flaticon-social-services d-block text-secondary"></i>

										<span className="number countup">10</span>
										<span className="d-block">Causes</span>
									</div>
				                    

									<div className="counter">
										<i className="flaticon-charity-money d-block text-secondary"></i>
										<span className="number"><span className="countup">10</span></span>
										<span className="d-block">Events</span>
									</div>

								</div>
								<div className="col-lg-6">
									<div className="counter mt-5">
										<i className="flaticon-money-donation d-block text-secondary"></i>
										<span className="number countup">8</span>
										<span className="d-block">Organizations</span>
									</div>

									<div className="counter">
										<i className="flaticon-organs-donation d-block text-secondary"></i>
										<span className="number countup">15</span>
										<span className="d-block">Volunteers</span>
									</div>
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

export default Index
