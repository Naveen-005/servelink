import React, { useState } from 'react';
import './OrgForm.css'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

function OrgForm() {
 const [currentStep, setCurrentStep] = useState(1);
 const [formData, setFormData] = useState({
   domain: '',
   phoneNumber: '',
   pincode: '',
   validDocuments: '',
   email: '',
   otp: '',
 });

 const handleChange = (e) => {
   setFormData({ ...formData, [e.target.name]: e.target.value });
 };

 const handleSubmit = (e) => {
   e.preventDefault();
   if (
     formData.domain &&
     formData.phoneNumber &&
     formData.pincode &&
     formData.validDocuments
   ) {
     setCurrentStep(currentStep + 1);
   }
 };

 const handlePhotoUpload = (e, photoType) => {
    const file = e.target.files[0];
    setFormData({ ...formData, [photoType]: file });
  };

 const renderStep = () => {
   switch (currentStep) {
     case 1:
       return (
         <div className='box008'>
            <Helmet>
        <title>
            Upload details
        </title>
    </Helmet>
           <h2>More Details</h2>
           <form onSubmit={handleSubmit}>
                            <div className="mb-3 col-md-63">
                            <label for="domain" className="form-label">About</label>
                            <input
                              className="form-control"
                              type="text"
                              id="domain"
                              name="domain"
                              value={formData.domain}
                              onChange={handleChange}
                            />
                           </div>
                         <div className='row1'>
                          <div className="mb-3 col-md-6">
                            <label className="form-label" for="phoneNumber">Phone Number</label>
                            <div className="input-group input-group-merge">
                              <input
                                type="text"
                                id="phoneNumber"
                                name="phoneNumber"
                                className="form-control"
                                maxlength="10"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="mb-3 col-md-6">
                            <label className="form-label" for="pincode">Pincode</label>
                            <div className="input-group input-group-merge">
                              <input
                                type="text"
                                id="pinocode"
                                name="pincode"
                                className="form-control"
                                value={formData.pincode}
                                onChange={handleChange}
                              />
                            </div>
                          </div>

                          </div>
              <div>
              <label htmlFor="doc">Upload Doccuments:</label>
               <input type="file" id="doc" name="doccuments" accept="doccuments/*" onChange={handleChange} />
              </div>
             
             <button id='da' type="submit">Submit</button>
           </form>
         </div>
       );
     case 2:
       return (
        <div className='box008'> 
        <Helmet>
        <title>
            Upload photo
        </title>
    </Helmet>
          <h2>Upload Photos</h2>
          <div>
            <label htmlFor="profilePhoto">Profile Photo:</label>
            <input
              type="file"
              id="profilePhoto"
              name="profilePhoto"
              accept="image/*"
              onChange={(e) => handlePhotoUpload(e, 'profilePhoto')}
            />
            {formData.profilePhoto && (
              <img
                src={URL.createObjectURL(formData.profilePhoto)}
                alt="Profile Preview"
                style={{ maxWidth: '200px' }}
              />
            )}
          </div>
          <div>
            <label htmlFor="coverPhoto">Cover Photo:</label>
            <input
              type="file"
              id="coverPhoto"
              name="coverPhoto"
              accept="image/*"
              onChange={(e) => handlePhotoUpload(e, 'coverPhoto')}
            />
            {formData.coverPhoto && (
              <img
                src={URL.createObjectURL(formData.coverPhoto)}
                alt="Cover Preview"
                style={{ maxWidth: '200px' }}
              />
            )}
          </div>
          <button className='b08' onClick={() => setCurrentStep(currentStep - 1)}>
            Previous
          </button>
          <button  className='b09'onClick={() => setCurrentStep(currentStep + 1)}>Next</button>
        </div>
      );
     case 3:
       return (
         <div className='box008'>
            <Helmet>
        <title>
            Email verification
        </title>
    </Helmet>
           <h2>Email Verification</h2>
           <br/>
           <div style={{ display: 'flex', alignItems: 'center' }}>
  <label htmlFor="email">Email:</label>
  <input
    type="email"
    id="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    style={{
      height: '40px',
      width: '350px',
      fontSize: '16px',
      padding: '5px 10px',
      marginLeft: '38px',
    }}
  />
  {formData.email && (
    <span style={{ color: 'green', marginLeft: '10px' }}>&#10003;</span>
  )}
</div>
<br/>
<button className='bt32'>submit</button>
<br/>
   <div style={{ display: 'flex', alignItems: 'center' }}>
  <label htmlFor="otp">Otp:  </label>
  <input
    type="otp"
    id="otp"
    name="otp"
    value={formData.otp}
    onChange={handleChange}
    style={{
      height: '40px',
      width: '348px',
      fontSize: '16px',
      padding: '3px 10px',
      marginLeft: '54px',
    }}
  />
           </div>
           <button className='b08'  onClick={() => setCurrentStep(currentStep - 1)}>
             Previous
           </button>
           <button className='b09'  onClick={() => setCurrentStep(currentStep + 1)}>Next</button>
         </div>
       );



       case 4:
       return (
         <div className='box008'>
            <Helmet>
        <title>
            Authentication
        </title>
    </Helmet>
           <h2>Authentication</h2>
           <br/>
           <div style={{ display: 'flex', alignItems: 'center' }}>
  <label htmlFor="email">Email:</label>
  <input
    type="email"
    id="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    style={{
      height: '40px',
      width: '350px',
      fontSize: '16px',
      padding: '5px 10px',
      marginLeft: '38px',
    }}
  />
  {formData.email && (
    <span style={{ color: 'green', marginLeft: '10px' }}>&#10003;</span>
  )}
</div>
<br/>
   <div style={{ display: 'flex', alignItems: 'center' }}>
   
    <button className='bt32'>submit</button>
    

           </div>
           <button className='b08'  onClick={() => setCurrentStep(currentStep - 1)}>
             Previous
           </button>
           <button className='b09'  onClick={() => setCurrentStep(currentStep + 1)}>Next</button>
         </div>
       );




     case 5:

       return (
         <div className='welcome'>
            <Helmet>
        <title>
          Welcome :)  
        </title>
    </Helmet>
           <h2 className="animate__animated animate__fadeInDown">Welcome to our page.</h2>
           <p className="animate__animated animate__fadeInUp animate__delay-1s">Unleash the power of volunteerism, join today!</p>
           <div className="bomb-burst">
        <div className="burst burst--1"></div>
        <div className="burst burst--2"></div>
        <div className="burst burst--3"></div>
        <div className="burst burst--4"></div>
        <div className="burst burst--5"></div>
        <div className="burst burst--6"></div>
        <div className="burst burst--7"></div>
        <div className="burst burst--8"></div>
        <div className="burst burst--9"></div>
        <div className="burst burst--10"></div>
       
      </div>
      < Link  className='b19 animate__animated animate__fadeInUp animate__delay-1s' to="/odas">Continue</Link>
      
         </div>
       );
     default:
       return null;
   }
 };

 return (
   <div className="App">
    
     <div className="box007" style={{ height: '750px', width: '550px', margin: '0 auto' }}>
       <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
         <div
           className={`circle1 ${currentStep === 1 ? 'active1' : ''}`}
           onClick={() => setCurrentStep(1)}
           style={{
             width: '30px',
             height: '30px',
             borderRadius: '50%',
             backgroundColor: currentStep === 1 ? 'green' : 'gray',
             color: 'white',
             display: 'flex',
             justifyContent: 'center',
             alignItems: 'center',
             marginRight: '10px',
           }}
         >
           1
         </div>
         <span>-----</span>
         <div
           className={`circle1 ${currentStep === 2 ? 'active1' : ''}`}
           onClick={() => setCurrentStep(2)}
           style={{
             width: '30px',
             height: '30px',
             borderRadius: '50%',
             backgroundColor: currentStep === 2 ? 'green' : 'gray',
             color: 'white',
             display: 'flex',
             justifyContent: 'center',
             alignItems: 'center',
             marginRight: '10px',
             marginLeft: '10px',
           }}
         >
           2
         </div>
         <span>-----</span>
         <div
           className={`circle1 ${currentStep === 3 ? 'active1' : ''}`}
           onClick={() => setCurrentStep(3)}
           style={{
             width: '30px',
             height: '30px',
             borderRadius: '50%',
             backgroundColor: currentStep === 3 ? 'green' : 'gray',
             color: 'white',
             display: 'flex',
             justifyContent: 'center',
             alignItems: 'center',
             marginRight: '10px',
             marginLeft: '10px',
           }}
         >
           3
         </div>
         <span>-----</span>
         <div
           className={`circle1 ${currentStep === 4 ? 'active1' : ''}`}
           onClick={() => setCurrentStep(4)}
           style={{
             width: '30px',
             height: '30px',
             borderRadius: '50%',
             backgroundColor: currentStep === 4 ? 'green' : 'gray',
             color: 'white',
             display: 'flex',
             justifyContent: 'center',
             alignItems: 'center',
             marginLeft: '10px',
           }}
         >
           4
         </div>
         <span>-----</span>
         <div
           className={`circle1 ${currentStep === 5 ? 'active1' : ''}`}
           onClick={() => setCurrentStep(5)}
           style={{
             width: '30px',
             height: '30px',
             borderRadius: '50%',
             backgroundColor: currentStep === 5 ? 'green' : 'gray',
             color: 'white',
             display: 'flex',
             justifyContent: 'center',
             alignItems: 'center',
             marginLeft: '10px',
           }}
         >
           5
         </div>
       </div>
       {renderStep()}
     </div>
   </div>
 );
}

export default OrgForm;