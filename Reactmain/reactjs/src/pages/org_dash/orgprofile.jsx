import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import SideBar from './components/sidebar'
import UserDropdown from './components/userdropdown'
import axios from 'axios';
import config from '../../config.json'


function Orgprofile() {

  const [formData,setFormData]= useState(null)

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const [image, setImage] = useState(null);

  const handleFileChange = (event) => {
    //console.log("event")
    setImage(event.target.files[0]);
    //console.log(image)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log("Data:\n",formData)
    //console.log("Image:\n",image)

    axios({
      method: 'put',
      url: config.server_api_url + '/register/organization',
      withCredentials: true,
      headers: {
        'Content-Type': 'multipart/form-data' // Set content type to multipart/form-data
      },
      data:{
        file: image,
        formData: formData
      },
        

    })
      .then((res) => {

        alert("Succesfully updated")
        //navigate("/")
        setFormData(res.data);

      })
      .catch((err) => {
        console.log(err)
        alert(err.response?.data)
      });

  };

  useEffect(() => {
        
    axios({
        method: 'get',
        url: config.server_api_url + '/register/organization',
        withCredentials: true,

      })
        .then((res) => {

            setFormData(res.data);
            if(FormData){
              console.log(formData)
            }

        })
        .catch((err) => {
            alert(err.response?.data)

    });
    

},[]);


  return (
    <div style={{ display: 'flex' }}>
        <UserDropdown/>
        <Helmet>
            <title>
                Account Settings
            </title>
        </Helmet>
        <SideBar/>
        <div style={{ flexGrow: 1, paddingLeft: '10px' }}>

      <div className="container-xxl flex-grow-1 container-p-y">
              <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light"></span> Account settings</h4>

              <div className="row">
                <div className="col-md-12">
                  
                  <div className="card mb-4">
                    <h5 className="card-header">Profile Details</h5>
             
                    <div className="card-body">
                      <div className="d-flex align-items-start align-items-sm-center gap-4">
                        <img
                          src={`${config.bucket_url}profile/organization/${formData?._id}.jpg?${Date.now()}`}
                          alt="user-avatar"
                          className="d-block rounded"
                          height="100"
                          width="100"
                          id="uploadedAvatar"
                        />
                        <div className="button-wrapper">
                          <label for="upload" className="btn btn-primary me-2 mb-4" tabindex="0">
                            <span className="d-none d-sm-block">Upload new photo</span>
                            <i className="bx bx-upload d-block d-sm-none"></i>
                            <input
                              type="file"
                              id="upload"
                              className="account-file-input"
                              hidden
                              accept="image/png, image/jpeg"
                              name="image"
                              onChange={handleFileChange}
                            />
                          </label>
                          <button type="button" className="btn btn-outline-secondary account-image-reset mb-4">
                            <i className="bx bx-reset d-block d-sm-none"></i>
                            <span className="d-none d-sm-block">Reset</span>
                          </button>

                          <p className="text-muted mb-0">Allowed JPG, GIF or PNG. Max size of 800K</p>
                        </div>
                      </div>
                    </div>
                    <hr className="my-0" />
                    <div className="card-body">
                      <form id="formAccountSettings">
                        <div className="row">
                          <div className="mb-3 col-md-6">
                            <label for="OrganizationName" className="form-label">Organization Name</label>
                            <input
                              className="form-control"
                              type="text"
                              id="OrganizationName"
                              name="name"
                              value={formData?.name || ''}
                              onChange={handleChange}
                              autofocus
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label for="domain" className="form-label">Domain</label>
                            <input className="form-control" type="text" name="domain" id="domain" value="" />
                          </div>
                          
                          <div className="mb-3 col-md-6">
                            <label className="form-label" for="phoneNumber">Phone Number</label>
                            <div className="input-group input-group-merge">
                              <input
                                type="text"
                                id="phoneNumber"
                                name="phone_no"
                                className="form-control"
                                placeholder=""
                                maxlength="10"
                                value={formData?.phone_no || ''}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="mb-3 col-md-6">
                            <label for="address" className="form-label">Address</label>
                            <input type="text" className="form-control" id="address" name="address" placeholder="" value={formData?.address || ''} onChange={handleChange}/>
                          </div>
                          <div className="mb-3 col-md-6">
                            <label for="state" className="form-label">District</label>
                            <select id="state" className="select2 form-select" name="district" value={formData?.district || ''} onChange={handleChange}>
                              <option value="">Select</option>
                              <option value="Thiruvanathapuram">Thiruvanathapuram</option>
                              <option value="Kollam">Kollam</option>
                              <option value="Pathanamthitta">Pathanamthitta</option>
                              <option value="Alapuzha">Alapuzha</option>
                              <option value="Kottayam">Kottayam</option>
                              <option value="Idukki">Idukki</option>
                              <option value="Ernakulam">Ernakulam</option>
                              <option value="Thrissur">Thrissur</option>
                              <option value="Malappuram">Malappuram</option>
                              <option value="Kozhikkode">Kozhikkode</option>
                              <option value="Wayanad">Wayanad</option>
                              <option value="Kannur">Kannur</option>
                              <option value="Kazargod">Kazargod</option>
                            </select>
                          </div>
                          <div className="mb-3 col-md-6">
                            <label for="zipCode" className="form-label" >Pin Code</label>
                            <input
                              type="text"
                              className="form-control"
                              id="zipCode"
                              name="zip_code"
                              placeholder="292012"
                              maxlength="6"
                              value={formData?.zip_code || ''}
                              onChange={handleChange}
                            />
                          </div>
                          
                       
                          <div className="mb-3 col-md-6">
                            <label for="country" className="form-label">Country</label>
                            <input
                              type="text"
                              className="form-control"
                              id="country"
                              name="country"
                              placeholder=""
                              value={formData?.country || ''}
                              onChange={handleChange}
                             
                            />
                          </div>

                        </div>
                     
                        <div className="mt-2">
                          <button onClick={handleSubmit} className="btn btn-primary me-2">Save changes</button>
                          <button type="reset" className="btn btn-outline-secondary">Cancel</button>
                        </div>
                      </form>
                    </div>
                 
                  </div>
                  <div className="card">
                    <h5 className="card-header">Delete Account</h5>
                    <div className="card-body">
                      <div className="mb-3 col-12 mb-0">
                        <div className="alert alert-warning">
                          <h6 className="alert-heading fw-bold mb-1">Are you sure you want to delete your account?</h6>
                          <p className="mb-0">Once you delete your account, there is no going back. Please be certain.</p>
                        </div>
                      </div>
                      <form id="formAccountDeactivation" onsubmit="return false">
                        <div className="form-check mb-3">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="accountActivation"
                            id="accountActivation"
                          />
                          <label className="form-check-label" for="accountActivation"
                            >I confirm my account deactivation</label
                          >
                        </div>
                        <button type="submit" className="btn btn-danger deactivate-account">Deactivate Account</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

    </div>
   </div>
  )
}

export default Orgprofile
