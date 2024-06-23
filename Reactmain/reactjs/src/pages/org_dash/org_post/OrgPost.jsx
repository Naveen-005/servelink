import React,{useState,useEffect,useRef} from 'react'
import { Link,useNavigate} from 'react-router-dom';
import axios from 'axios';
import config from '../../../config.json'
import Cookies from 'js-cookie';
import './OrgPost.css'
import L from 'leaflet';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import 'leaflet/dist/leaflet.css';
import { Helmet } from 'react-helmet';
import { color } from 'framer-motion';



function OrgPost() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    location: "",
    loc_lat:"",
    loc_lng:"",
    date: "",
    time: "",
    short_description: "",
    long_description: "",
    conditions:"",
    org_id:"",
    skills: {},
  });
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

  const handleRemoveSkill = (skillName) => {
    const updatedSkills = { ...formData.skills };
    delete updatedSkills[skillName];
  
    // Check if the updatedSkills object is empty
    if (Object.keys(updatedSkills).length === 0) {
      // If empty, clear the newSkillName state
      setNewSkillName("");
    }
  
    setFormData({ ...formData, skills: updatedSkills });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Data:\n",formData)
    //console.log("Image:\n",image)

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
        
      }
    })
      .then((res) => {

        alert("Succesfully posted")
        navigate("/odas")

      })
      .catch((err) => {
        console.log(err)
        alert(err.response.data)
      });

  };
/*
  // Define CSS styles htmlFor the marker
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
    <div className="system9">
      <Helmet>
    <title>Post</title>
   </Helmet>
    <div className="container9">
    <h2 className='txt9'>New Post</h2>
    <Link id="crossButton9" to="/odas">&#10006;</Link>
     <form onSubmit={handleSubmit}>
      <label htmlFor="eventName">Event Name:</label>
      <input type="text" id="eventName" name="title" style={{ width:'100%',padding:'10px',margin:'10px 0',border:'1px solid #ccc',borderRadius: '5px',color:'#060606',backgroundColor: '#dbf3f1'}}  value={formData.title} onChange={handleChange} required />

      <label htmlFor="eventLocation">Location:</label>
      <input type="text" id="eventLocation" name="location" style={{ width:'100%',padding:'10px',margin:'10px 0',border:'1px solid #ccc',borderRadius: '5px',color:'#060606',backgroundColor: '#dbf3f1'}} value={formData.location}
        onChange={handleChange}
        required/>

      <div id="map" style={{ width: '100%', height: '300px', marginTop: '10px',color:'white' }}></div>
      <div>
        <p>Latitude: {formData.loc_lat}</p>
        <p>Longitude: {formData.loc_lng}</p>
     </div>

      <label htmlFor="eventDate">Date:</label>
      <input type="date" id="eventDate" name="date" style={{ width:'100%',padding:'10px',margin:'10px 0',border:'1px solid #ccc',borderRadius: '5px',color:'#060606',backgroundColor: '#dbf3f1'}} value={formData.date} onChange={handleChange} required />
         
      <label htmlFor="eventTime">Time:</label>
      <input type="time" id="eventTime" name="time" style={{ width:'100%',padding:'10px',margin:'10px 0',border:'1px solid #ccc',borderRadius: '5px',color:'#060606',backgroundColor: '#dbf3f1'}} value={formData.time} onChange={handleChange}/>
     
{/*
      <label htmlFor="media">Upload Media:</label>
      <input type="file" id="media" name="image" accept="image/*"  onchange={handleFileChange} />
      <div id="mediaPreview"></div>
  */}

      <label htmlFor="media">Upload Media:(.JPG file)</label>
      <input type="file" id="media" name="image" accept="image/*" onChange={handleFileChange} />


      <label htmlFor="description">Short Description: (max 50 letters)</label>
      <input type="text" id="description" name="short_description"  maxLength='50' style={{ width:'100%',padding:'10px',margin:'10px 0',border:'1px solid #ccc',borderRadius: '5px',color:'#060606',backgroundColor: '#dbf3f1'}} value={formData.short_description} onChange={handleChange}required/>
{/*
      <label htmlFor="count">Number of Volunteers required :</label>
      <input type="number" id="count" name="count" required/>
*/}
      <label htmlFor="description">Long Description: </label>
      <textarea id="description" name="long_description" placeholder="write full details on here......" value={formData.long_description} onChange={handleChange}></textarea>
      
      <label htmlFor="conditions">Conditions: </label>
      <textarea id="conditions" name="conditions" placeholder="" value={formData.conditions} onChange={handleChange}></textarea>

      {Object.entries(formData.skills).map(([skillName, skillLevel]) => (
        <div key={skillName}>
          <input
            type="text"
            value={skillName}
            onChange={(e) => handleSkillChange(e.target.value, skillLevel)}
            placeholder="Skill Name"
            className='col-md-6'
            style={{ width:'100%',padding:'10px',margin:'10px 0',border:'1px solid #ccc',borderRadius: '5px',color:'#060606',backgroundColor: '#dbf3f1'}} 
          
          />
          <input
            type="number"
            value={skillLevel}
            onChange={(e) => handleSkillChange(skillName, parseInt(e.target.value))}
            placeholder="Skill Level"
            className='col-md-6'
            style={{ width:'100%',padding:'10px',margin:'10px 0',border:'1px solid #ccc',borderRadius: '5px',color:'#060606',backgroundColor: '#dbf3f1'}} 
          />
           <button id="d"onClick={() => handleRemoveSkill(skillName)} style={{ backgroundColor: 'red',padding:'7px',width:'18%' }}>
      Remove
    </button>
        </div>
      ))}
      
     
      {/* Input htmlFor new skill name */}
      <label htmlFor="skill">Add skill: </label>
      <input
        type="text"
        value={newSkillName}
        onChange={handleNewSkillNameChange}
        placeholder=""
        className='col-md-6'
        style={{ width:'100%',padding:'10px',margin:'10px 0',border:'1px solid #ccc',borderRadius: '5px',color:'#060606',backgroundColor: '#dbf3f1'}} 
      />


      <button id='d' onClick={handleAddSkill}>Add</button>
      
  

      <button id="da" type="submit">Post</button>
    </form>
  </div>
  </div>
  

  )
}




export default OrgPost;


