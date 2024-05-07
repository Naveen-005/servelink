import React, { useEffect,useState } from 'react'; 
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
import Cookies from 'js-cookie'; 
import axios from 'axios'; 
import config from '../../config.json' 
 
import './style.css' 
import './tiny-slider.css' 
import './aos.css' 
import './flatpickr.min.css' 
import './glightbox.min.css' 
 
 
function Events() { 
 
 const [events, setEvents] = useState([]); 
  
 useEffect(() => { 
 
  axios({ 
   method: 'get', 
   url: config.server_api_url + '/register/event', 
   withCredentials: true, 
   data:{} 
    }) 
   .then((res) => { 
    
    setEvents(res.data); 
 
   }) 
   .catch((err) => { 
    alert(err) 
  
  }); 
 
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
      
      {events.map((evnt, index) => ( 
             <Event key={index} evnt={evnt} /> 
           ))} 
 
     </div> 
 
    </div> 
   </div> 
 
   <Footer /> 
   
            
  </div> 
 ) 
} 
 
export default Events