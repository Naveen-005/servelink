import React from 'react'

function ProfileView() {

  const organizationData = {
    name: 'Your Organization Name',
    domain: 'www.yourorganization.com',
    email: 'info@yourorganization.com',
    phoneNumber: '+1 234 567 890',
    address: '123 Main Street',
    district: 'Your District',
    pincode: '12345',
    country: 'Your Country',
    profilePicUrl: 'url_to_your_profile_pic',
    coverPicUrl: 'url_to_your_cover_pic',
  };

  return (
    <div className="organization-profile">
      <div className="cover-pic">
        <img src={organizationData.coverPicUrl} alt="Cover Pic" />
      </div>
      <div className="profile-info">
        <div className="profile-pic">
          <img src={organizationData.profilePicUrl} alt="Profile Pic" />
        </div>
        <div className="details">
          <h1>{organizationData.name}</h1>
          <p>Domain: {organizationData.domain}</p>
          <p>Email: {organizationData.email}</p>
          <p>Phone Number: {organizationData.phoneNumber}</p>
          <p>Address: {organizationData.address}</p>
          <p>District: {organizationData.district}</p>
          <div className="pincode-country">
            <input type="text" placeholder="Pincode" value={organizationData.pincode} readOnly />
            <input type="text" placeholder="Country" value={organizationData.country} readOnly />
          </div>
        </div>
      </div>
    </div>
  );
};


export default ProfileView
