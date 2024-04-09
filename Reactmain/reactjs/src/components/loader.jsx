import React from 'react'

function Loader() {
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
