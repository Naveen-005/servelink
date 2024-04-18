import React from 'react'
import { Helmet } from 'react-helmet'
import SideBar from './components/sidebar'
import UserDropdown from './components/userdropdown'

function Orgprofile() {
  return (
    <div style={{ display: 'flex' }}>
        <UserDropdown/>
        <Helmet>
            <title>
                Account Settings
            </title>
        </Helmet>
        <SideBar/>
        <div style={{ flexGrow: 1, paddingLeft: '150px' }}>

      <div className="container-xxl flex-grow-1 container-p-y">
              <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light"></span> Account settings</h4>

              <div className="row">
                <div className="col-md-12">
                  
                  <div className="card mb-4">
                    <h5 className="card-header">Profile Details</h5>
             
                    <div className="card-body">
                      <div className="d-flex align-items-start align-items-sm-center gap-4">
                        <img
                          src=""
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
                      <form id="formAccountSettings" method="POST" onsubmit="return false">
                        <div className="row">
                          <div className="mb-3 col-md-6">
                            <label for="OrganizationName" className="form-label">Organization Name</label>
                            <input
                              className="form-control"
                              type="text"
                              id="OrganizationName"
                              name="OrganizationName"
                              value=""
                              autofocus
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label for="domain" className="form-label">Domain</label>
                            <input className="form-control" type="text" name="domain" id="domain" value="" />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label for="email" className="form-label">E-mail</label>
                            <input
                              className="form-control"
                              type="text"
                              id="email"
                              name="email"
                              value=""
                              placeholder=""
                            />
                          </div>
                         
                          <div className="mb-3 col-md-6">
                            <label className="form-label" for="phoneNumber">Phone Number</label>
                            <div className="input-group input-group-merge">
                              <input
                                type="text"
                                id="phoneNumber"
                                name="phoneNumber"
                                className="form-control"
                                placeholder=""
                                maxlength="10"
                              />
                            </div>
                          </div>
                          <div className="mb-3 col-md-6">
                            <label for="address" className="form-label">Address</label>
                            <input type="text" className="form-control" id="address" name="address" placeholder="" />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label for="state" className="form-label">District</label>
                            <select id="state" className="select2 form-select">
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
                            <label for="zipCode" className="form-label">Pin Code</label>
                            <input
                              type="text"
                              className="form-control"
                              id="zipCode"
                              name="zipCode"
                              placeholder="292012"
                              maxlength="6"
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
                             
                            />
                          </div>

                          <div className="mb-3 col-md-6">
                            <label for="currentpassword" className="form-label">Current password</label>
                            <div className="input-group input-group-merge">
                              <input
                                type="password"
                                id="password"
                                name="currentpassword"
                                className="form-control"
                                placeholder=""
                                
                              />
                            </div>
                          </div>

                          <div className="mb-3 col-md-6">
                            <label for="newpassword" className="form-label">New password</label>
                            <div className="input-group input-group-merge">
                              <input
                                type="password"
                                id="password"
                                name="newpassword"
                                className="form-control"
                                placeholder=""
                                
                              />
                            </div>
                          </div>


                        </div>
                     
                        <div className="mt-2">
                          <button type="submit" className="btn btn-primary me-2">Save changes</button>
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