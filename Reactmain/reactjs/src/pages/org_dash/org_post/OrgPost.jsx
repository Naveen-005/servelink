
import React,{useState,useEffect,useRef, useContext } from 'react'
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import config from '../../../config.json'
import Cookies from 'js-cookie';
import './OrgPost.css'
import L from 'leaflet';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import 'leaflet/dist/leaflet.css';
import { Helmet } from 'react-helmet';
import { LocationContext } from '../../../components/LocationContext';
import { useLocationData } from '../../../components/LocationContext';
// const { locationData, updateLocationData } = useContext(LocationContext);




function OrgPost() {
  
  const { setLocationData } = useLocationData();
  // const { locationData, updateLocationData } = useContext(LocationContext); // Using the context here
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    loc_lat: "", // Initialize with default value
    loc_lng: "",
    date: "",
    time: "",
    short_description: "",
    long_description: "",
    org_id:"",
    skills: {},
  });
//     const history = useHistory();

// const handleNavigation = () => {
//   history.push(`/userdash?lat=${formData.loc_lat}&lng=${formData.loc_lng}`);
// };
// const { locationData, updateLocationData } = useContext(LocationContext);
  const [newSkillName, setNewSkillName] = useState("");
  const [image, setImage] = useState(null);




  const handleFileChange = (event) => {
    console.log("event")
    setImage(event.target.files[0]);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  // Function to update the skills in formData
  const handleSkillChange = (skillName, skillLevel) => {
    setFormData({
      ...formData,
      skills: {
        ...formData.skills,
        [skillName]: skillLevel, // Set the skill name as key and skill level as value
      }
    });
  };

  // Function to handle changes in the new skill name input
  const handleNewSkillNameChange = (e) => {
    setNewSkillName(e.target.value);
  };

  // Function to add a new empty skill field
  const handleAddSkill = (e) => {
    
    e.preventDefault();
    if (newSkillName.trim() !== "") {
      setFormData({
        ...formData,
        skills: {
          ...formData.skills,
          [newSkillName]: 0, // Add a new skill with initial level 0
        }
      });
      setNewSkillName(""); // Clear the new skill name input after adding
    }
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setLocationData(formData.loc_lat, formData.loc_lng); // Setting location data using context
    console.log("Data:\n",formData);
    //console.log("Image:\n",image)
    // Update location data in the context before submitting
    // updateLocationData(formData.loc_lat, formData.loc_lng);

    axios({
      method: 'post',
      url: config.server_api_url + '/register/event',
      headers: {
        'Content-Type': 'multipart/form-data' // Set content type to multipart/form-data
      },
      data: {
        auth:{
          name: Cookies.get('name'),
          _id: Cookies.get('org_id'),
          token: Cookies.get('token')
        },
        file: image,
        formData: formData,
        
      },
    })
      .then((res) => {

        alert("Succesfully registered")
        //navigate("/")

      })
      .catch((err) => {
        console.log(err)
        alert(err)
      });

  };



/*
  // Define CSS styles for the marker
const markerStyle = {
  backgroundColor: 'red',
  borderRadius: '50%',
  width: '10px',
  height: '10px',
};

// Create a custom icon with the specified CSS styles
const customIcon = L.divIcon({
  className: 'custom-marker',
  html: '<div style="background-color: red; border-radius: 50%; width: 10px; height: 10px;"></div>',
});

*/
/*
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
*/
  const mapRef = useRef(null);
  //const [selectedLocation, setSelectedLocation] = useState('');
  //const [latitude, setLatitude] = useState('');
  //const [longitude, setLongitude] = useState('');
    // Update formData when locationData changes

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map('map', {
        center: [0, 0], // Initial center coordinates
        zoom: 12, // Initial zoom level
        dragging: true,
      });

      const provider = new OpenStreetMapProvider();
      const searchControl = new GeoSearchControl({
        provider,
        showMarker: false,
        showPopup: false,
        //retainZoomLevel: true,
      });


      let redDotMarker = null;

      mapRef.current.addControl(searchControl);
    
      mapRef.current.on('geosearch/showlocation', function (data) {

        //setLatitude(data.location.y);
        //setLongitude(data.location.x);
        //console.log(data.location.raw.name)
        setFormData((prevFormData) => ({ ...prevFormData, location: data.location.raw.name }));
        setFormData((prevFormData) => ({ ...prevFormData, loc_lat: data.location.y }));
        setFormData((prevFormData) => ({ ...prevFormData, loc_lng: data.location.x }));

        mapRef.current.eachLayer(function (layer) {
          if (layer instanceof L.Marker) {
            mapRef.current.removeLayer(layer);
          }
        });

        //console.log("geo:",data.location.y,data.location.x)
        redDotMarker=L.circleMarker([formData.loc_lat, formData.loc_lng],{ color: 'red', radius: 5 }).addTo(mapRef.current);

       
      });
    


      mapRef.current.on('mousedown', function (e) {
        mapRef.current.dragging.disable();
      });
  
      // Re-enable dragging after mouseup
      mapRef.current.on('mouseup', function (e) {
        mapRef.current.dragging.enable();
      });
     
      
     
      mapRef.current.on('click', function (e) {
        const { lat, lng } = e.latlng;
        //setLatitude(lat);
        //setLongitude(lng);
        // You can do more with the clicked coordinates if needed
        setFormData((prevFormData) => ({ ...prevFormData, loc_lat: lat }));
        setFormData((prevFormData) => ({ ...prevFormData, loc_lng: lng }));

        if (redDotMarker) {
          mapRef.current.removeLayer(redDotMarker);
        }


        
        // Add a marker at the clicked location
        redDotMarker = L.circleMarker([lat, lng],{ color: 'red', radius: 5 }).addTo(mapRef.current);
        //mapRef.current.setView([lat, lng], 12);
        //console.log("click:",lat,lng)

      });
      

      

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mapRef.current);
    }
  }, []);

  return (
    <div class="system9">
      <Helmet>
    <title>Post</title>
   </Helmet>
    <div class="container9">
    <h2 className='txt9'>New Post</h2>
    <Link id="crossButton9" to="/odas">&#10006;</Link>
     <form onSubmit={handleSubmit}>
      <label for="eventName">Event Name:</label>
      <input type="text1" id="eventName" name="title" value={formData.title} onChange={handleChange} required />

      <label for="eventLocation">Location:</label>
      <input type="text1" id="eventLocation" name="location" value={formData.location}
        onChange={handleChange}
        required/>

      <div id="map" style={{ width: '100%', height: '300px', marginTop: '10px' }}></div>
      <div>
        <p>Latitude: {formData.loc_lat}</p>
        <p>Longitude: {formData.loc_lng}</p>
     </div>

      <label for="eventDate">Date:</label>
      <input type="date1" id="eventDate" name="date" value={formData.date} onChange={handleChange} required />
         
      <label for="eventTime">Time:</label>
      <input type="time1" id="eventTime" name="time" value={formData.time} onChange={handleChange}/>
{/*
      <label for="media">Upload Media:</label>
      <input type="file" id="media" name="image" accept="image/*"  onchange={handleFileChange} />
      <div id="mediaPreview"></div>
  */}

      <label htmlFor="media">Upload Media:</label>
      <input type="file1" id="media" name="image" accept="image/*" onChange={handleFileChange} />


      <label for="description">Short Description: (max 40 words)</label>
      <input type="text1" id="description" name="short_description"  maxLength='40' value={formData.short_description} onChange={handleChange}required/>
{/*
      <label for="count">Number of Volunteers required :</label>
      <input type="number" id="count" name="count" required/>
*/}
      <label for="description">Long Description: </label>
      <textarea id="description" name="long_description" placeholder="write full details on here......" value={formData.long_description} onChange={handleChange}></textarea>

      {Object.entries(formData.skills).map(([skillName, skillLevel]) => (
        <div key={skillName}>
          <input
            type="text1"
            value={skillName}
            onChange={(e) => handleSkillChange(e.target.value, skillLevel)}
            placeholder="Skill Name"
            className='col-md-6'
          />
          <input
            type="number1"
            value={skillLevel}
            onChange={(e) => handleSkillChange(skillName, parseInt(e.target.value))}
            placeholder="Skill Level"
            className='col-md-6'
          />
        </div>
      ))}

      {/* Input for new skill name */}
      <label for="skill">Add skill: </label>
      <input
        type="text1"
        value={newSkillName}
        onChange={handleNewSkillNameChange}
        placeholder=""
        className='col-md-6'
      />


      <button id='d' onClick={handleAddSkill}>Add</button>
  

      <button id="da" type="submit">Post</button>
    </form>
  </div>
  </div>
  

  )
}


export default OrgPost;
