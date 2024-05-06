import React,{useState,useEffect} from 'react'

function Loader() {

  const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
	  // Simulate data loading with setTimeout
	  const timer = setTimeout(() => {
		setIsLoading(false);
	  }, 2000);
  
	  return () => clearTimeout(timer);
	}, []);

  return (
    <div>
         <div id="overlayer"></div>
            <div className="loader">
               <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
           </div>
    </div>
    </div>
  )
}

export default Loader
