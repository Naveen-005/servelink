// LocationContext.js

import React, { createContext, useState, useContext } from 'react';

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState({ lat: null, lng: null });

  const setLocationData = (lat, lng) => {
    setLocation({ lat, lng });
  };

  return (
    <LocationContext.Provider value={{ location, setLocationData }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocationData = () => useContext(LocationContext);
