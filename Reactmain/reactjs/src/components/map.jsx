import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.locatecontrol';

const MapPicker = () => {
  useEffect(() => {
    // Initialize the map
    const map = L.map('map').setView([0, 0], 2);

    // Add a tile layer
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      maxZoom: 19, minZoom: 2
    }).addTo(map);

    // Create a custom icon for the red dot pointer
    const redDotIcon = L.divIcon({
      className: 'custom-marker',
      iconSize: [10, 10],
      iconAnchor: [5, 5],
      html: '<div style="width: 5px; height: 5px; background-color: red; border-radius: 50%;"></div>'
    });

    // Declare marker variable
    let marker;

    // Event listener for when the map is clicked
    map.on('click', function (event) {
      const latlng = event.latlng; // Get the coordinates where the map was clicked
      console.log("Clicked coordinates:", latlng.lat, latlng.lng);

      // Clear existing marker
      if (marker) {
        map.removeLayer(marker);
      }

      // Create a marker with custom icon at the clicked coordinates
      marker = L.marker(latlng, { icon: redDotIcon }).addTo(map);

      // You can use these coordinates as needed
    });

    var locateIcon = L.icon({
      iconUrl: 'path/to/your/icon.png', // URL of the custom icon image
      iconSize: [32, 32], // Size of the icon
      iconAnchor: [16, 16] // Anchor point of the icon (center)
    });
    
    // Add the locate control to the map
    L.control.locate({
      position: 'topright',
      strings: {
        title: "Show me where I am!"
      },
      locateOptions: {
        enableHighAccuracy: true, // Enable high accuracy for geolocation
        maxZoom: 16 // Maximum zoom level when locating user
      },
      flyTo: true // Fly to the user's location when found
    }).addTo(map);

    // Cleanup function
    return () => {
      map.remove(); // Remove the map when the component unmounts
    };
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  return (
    <div>
      <div id="map" style={{ height: '550px' }}></div>
    </div>
  );
};

export default MapPicker;
