import React, { useState } from 'react';

const Search = () => {
  const [location, setLocation] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const geocodingApiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=YOUR_API_KEY`;

          fetch(geocodingApiUrl)
            .then((response) => response.json())
            .then((data) => {
              if (data.results.length > 0) {
                const locationName = data.results[0].formatted_address;
                setLocation(locationName);
              } else {
                setLocation('Unable to determine location');
              }
            })
            .catch((error) => {
              console.error('Error fetching location:', error);
              setLocation('Unable to determine location');
            });
        },
        (error) => {
          console.error('Error getting location:', error);
          setLocation('Unable to determine location');
        }
      );
    } else {
      setLocation('Geolocation is not supported by this browser');
    }
  };

  const handleSearch = () => {
    // Perform search logic with searchTerm
    console.log('Search term:', searchTerm);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search location"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={getLocation}>Locate Me</button>
      <button onClick={handleSearch}>Search</button>
      <p>Current Location: {location}</p>
    </div>
  );
};

export default Search;