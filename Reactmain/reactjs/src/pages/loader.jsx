import React, { useState, useEffect } from 'react';

function YourComponent() {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // Simulate some asynchronous task (e.g., fetching data)
      // Once the task is complete, set loading to false to stop the loader
      setTimeout(() => {
        setLoading(false); // Simulating a 3-second loading time
      }, 3000);
    }, []);
}
  export default YourComponent