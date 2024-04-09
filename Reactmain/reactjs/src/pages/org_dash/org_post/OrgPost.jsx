import React from 'react'
import { Link } from 'react-router-dom';
//import './OrgPost.css'

function OrgPost() {
  return (
    <div class="system">
    <div class="container">
    <h2>Create new</h2>
    <button id="crossButton">&#10006;</button> 
    <form>
      <label for="eventName">Event Name:</label>
      <input type="text" id="eventName" name="eventName" required/>
      <label for="eventLocation">Location:</label>
      <input type="text" id="eventLocation" name="eventLocation" required/>
      <label for="eventDate">Date:</label>
      <input type="date" id="eventDate" name="eventDate" required/>
      <label for="collaboration">Collaborating Page:</label>
      <input type="text" id="collaboration" name="collaboration"/>
      <label for="media">Upload Media:</label>
      <input type="file" id="media" name="media" accept="image/*, video/*, audio/*" multiple  onchange="previewMedia(event)"/>
      <div id="mediaPreview"></div>
      <label for="description">Description: (max 20 words)</label>
      <textarea id="description" name="description" placeholder="Write something about the event..."></textarea>
      <button type="submit">Post</button>
    </form>
  </div>
  </div>
  
  )
}

export default OrgPost;
