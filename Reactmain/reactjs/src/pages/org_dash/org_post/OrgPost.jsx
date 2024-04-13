import React,{useState,useEffect,useRef} from 'react'
import { Link } from 'react-router-dom';
import './OrgPost.css'
import L from 'leaflet';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import 'leaflet/dist/leaflet.css';


function OrgPost()
 {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const words = inputValue.trim().split(/\s+/); // Split input into words
    if (words.length > 20) {
      // If more than 20 words, truncate the input
      setInputValue(words.slice(0, 20).join(' '));
    } else {
      setInputValue(inputValue);
    }
  };

  const mapRef = useRef(null);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map('map', {
        center: [0, 0], // Initial center coordinates
        zoom: 2, // Initial zoom level
      });

      const provider = new OpenStreetMapProvider();
      const searchControl = new GeoSearchControl({
        provider,
        showMarker: true,
        showPopup: false,
        retainZoomLevel: true,
      });

      mapRef.current.addControl(searchControl);

      mapRef.current.on('geosearch/showlocation', function (data) {
        const location = data?.location?.location; // Using optional chaining to handle undefined properties
        if (location) {
          const { label, location: loc } = data.location;
          setSelectedLocation(label);
          if (loc && typeof loc.lat !== 'undefined' && typeof loc.lng !== 'undefined') {
            setLatitude(loc.lat);
            setLongitude(loc.lng);
          } else {
            setLatitude('');
            setLongitude('');
          }
        }
      });
    }
  }, []);

  return (
    <div class="system9">
    <div class="container9">
    <h2 className='txt9'>New Post</h2>
    <Link id="crossButton9" to="/odas">&#10006;</Link>
    <form>
      <label for="eventName">Event Name:</label>
      <input type="text" id="eventName" name="eventName" required/>

      <label for="eventLocation">Location:</label>
      <input type="text" id="eventLocation" name="eventLocation" value={selectedLocation}
        onChange={(e) => setSelectedLocation(e.target.value)}
        required/>
      <div id="map" style={{ width: '100%', height: '300px', marginTop: '10px' }}></div>
      <div>
        <p>Latitude: {latitude}</p>
        <p>Longitude: {longitude}</p>
     </div>

      <label for="eventDate">Date:</label>
      <input type="date" id="eventDate" name="eventDate" required/>

      <label for="eventTime">Time:</label>
      <input type="time" id="eventTime" name="eventTime"/>

      <label for="media">Upload Media:</label>
      <input type="file" id="media" name="media" accept="image/*, video/*, audio/*" multiple  onchange="previewMedia(event)"/>
      <div id="mediaPreview"></div>

      <label for="description">Short Description: (max 20 words)</label>
      <input type="text" id="description" name="description"  value={inputValue} onChange={handleInputChange}required/>

      <label for="count">Number of Volunteers required :</label>
      <input type="number" id="count" name="count" required/>

      <label for="description">Long Description: </label>
      <textarea id="description" name="description" placeholder="write full details on here......" ></textarea>
      
      <button id="da" type="submit">Post</button>
    </form>
  </div>
  </div>
  
  )
}

export default OrgPost;
