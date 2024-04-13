import React from 'react'
import { Link } from 'react-router-dom';
//import './OrgPost.css'
import { useState } from 'react';
import axios from 'axios';
import config from '../../../config.json'
import Cookies from 'js-cookie';

function OrgPost() {

  const [formData, setFormData] = useState({
    title: "",
    location: "",
    date: "",
    short_description: "",
    long_description: "",
    required: "",
    //org_id:"",
  });

  const [image, setImage] = useState(null)

  function handleFileChange(event) {
    setImage(event.target.files[0])
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

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
        formData: formData,
        file: image
      }
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

  return (
    <div class="system">
      <div class="container">
        <h2>Create new</h2>
        <button id="crossButton">&#10006;</button>
        <form onSubmit={handleSubmit}>
          <label for="eventName">Event Title:</label>
          <input type="text" id="eventName" name="title" value={formData.title} onChange={handleChange} required />
          <label for="eventLocation">Location:</label>
          <input type="text" id="eventLocation" name="location" value={formData.location} onChange={handleChange} required />
          <label for="eventDate">Date:</label>
          <input type="date" id="eventDate" name="date" value={formData.date} onChange={handleChange} required />
          <label for="collaboration">Collaborating Page:</label>
          <input type="text" id="collaboration" name="collaboration" />
          <label for="media">Upload Thumbnail Image:</label>
          <input type="file" id="media" name="media" accept="image/*, video/*, audio/*"  onChange={handleFileChange} />
          <div id="mediaPreview"></div>
          <label for="description">Description: (max 20 words)</label>
          <textarea id="description" name="short_description" placeholder="Write something about the event..." value={formData.short_description} onChange={handleChange}></textarea>
          <button type="submit">Post</button>
        </form>
      </div>
    </div>

  )
}

export default OrgPost;
