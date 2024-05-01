import React, { useEffect, useState, useRef } from 'react';
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

import L from 'leaflet';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import 'leaflet/dist/leaflet.css';

function Events() {

  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({
    location: "",
    loc_lat: "",
    loc_lng: ""
  })
  
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

  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map('map', {
        center: [0, 0],
        zoom: 12,
        dragging: true,
      });

      const provider = new OpenStreetMapProvider();
      const searchControl = new GeoSearchControl({
        provider,
        showMarker: false,
        showPopup: false,
      });

      let redDotMarker = null;
      mapRef.current.addControl(searchControl);
      
      mapRef.current.on('geosearch/showlocation', function (data) {
        setFormData(prevFormData => ({ ...prevFormData, location: data.location.raw.name }));
        setFormData(prevFormData => ({ ...prevFormData, loc_lat: data.location.y }));
        setFormData(prevFormData => ({ ...prevFormData, loc_lng: data.location.x }));

        mapRef.current.eachLayer(function (layer) {
          if (layer instanceof L.Marker) {
            mapRef.current.removeLayer(layer);
          }
        });

        redDotMarker = L.circleMarker([formData.loc_lat, formData.loc_lng], { color: 'red', radius: 5 }).addTo(mapRef.current);
      });

      mapRef.current.on('mousedown', function (e) {
        mapRef.current.dragging.disable();
      });

      mapRef.current.on('mouseup', function (e) {
        mapRef.current.dragging.enable();
      });
      
      mapRef.current.on('click', function (e) {
        const { lat, lng } = e.latlng;
        setFormData(prevFormData => ({ ...prevFormData, loc_lat: lat }));
        setFormData(prevFormData => ({ ...prevFormData, loc_lng: lng }));

        if (redDotMarker) {
          mapRef.current.removeLayer(redDotMarker);
        }

        redDotMarker = L.circleMarker([lat, lng], { color: 'red', radius: 5 }).addTo(mapRef.current);
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mapRef.current);
    }
  }, []);

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setFormData(prevFormData => ({ ...prevFormData, loc_lat: position.coords.latitude }));
        setFormData(prevFormData => ({ ...prevFormData, loc_lng: position.coords.longitude }));
        mapRef.current.panTo([position.coords.latitude, position.coords.longitude]);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

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
          <label for="eventLocation" style={{position:'relative',left:'55%'}}>Location</label>
          <input type="text" id="eventLocation" name="location" style={{ width:'40%',padding:'10px',margin:'10px 0',border:'1px solid #ccc',borderRadius: '5px',color:'#060606',backgroundColor: 'white',position:'relative',left:'57%'}} value={formData.location}/>

          <div id="map" style={{ width: '50%', height: '300px', marginTop: '10px',color:'white',position:'relative',left:'54%' }}>
            <button onClick={getCurrentLocation} style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 1000,backgroundColor:'white' }}>Get Current Location</button>
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

export default Events;