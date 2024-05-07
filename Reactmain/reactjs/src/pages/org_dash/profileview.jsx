import React,{useState,useEffect} from 'react';
import Sidebarprofile from './components/sidebarprofile';
import { Helmet } from 'react-helmet';
import SideBar from './components/sidebar'
import UserDropdown from './components/userdropdown';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import config from '../../config.json'

const ProfileView = () => {

  const { id } = useParams();
  const [org_id, setOrgId] = useState('');
  const [org, setOrg] = useState(null);
 
  const handleBackClick = () => {
    window.location.href = '/ongoing_event';   
  };

  const handleBack1Click = () => {
    window.location.href = '/complete_event';  
  };

  useEffect(() => {

    if(id){
      setOrgId(id)
    }
    else{
      setOrgId(Cookies.get('org_id'))
    }

    axios({
      method: 'get',
      url: config.server_api_url + '/profile/organization',
      params:{
          id: org_id
      }
    })
      .then((res) => {

          setOrg(res.data)
          console.log(org)
      })
      .catch((err) => {

          alert(err.response?.data)


  });

 
   
  },[org_id]);

  return (
    
    <div className="container141" style={container141Style}>
      <UserDropdown />
      <Helmet>
      <title>Profile</title>
    </Helmet>
    <SideBar />
    
    <div className="container142" style={container142Style}>
      <div style={rectangle141Style}>
        {/*<h1>cover photo</h1>*/}
        <img src={`${config.bucket_url}profile/organization/banner/${org?._id}.jpg`} alt="Cover Photo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={square141Style}>
         {/* <h1>Profile photo</h1>*/}
         <img src={`${config.bucket_url}profile/organization/${org?._id}.jpg`} alt="Profile Photo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>
      <div style={boxStyle}>
        <div>Organization Name: {org?.name}</div>
        <div>Joined Year</div>
        
      </div>
      
      <div style={sidebarStyle}>
         <Sidebarprofile org={org}/>
      </div>
      <div style={buttonRowStyle}>
        <button style={buttonStyle} onClick={handleBackClick}>Ongoing Event</button>
        <button style={buttonStyle} onClick={handleBack1Click}>Completed Event</button>
      </div>

    </div>
    </div>
  );
};

const container141Style = {
  backgroundColor: 'aliceblue', 
  padding: '60px',
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
 
  
};
const container142Style = {
  backgroundColor: '#90AEAD',
  border:'3px solid black',
  position:'Relative',
  left:'15px'

};

const rectangle141Style = {
  backgroundColor: '#ccc',
  height: '200px',
  border:'2px solid black',
  position: 'relative',
  objectFit: 'cover',

};

const square141Style = {
  width: '150px',
  height: '150px',
  backgroundColor: '#999',
  position: 'absolute',
  top: '62%',
  left: '50%',
  border:'2px solid black',
  transform: 'translate(-50%, -50%)',
};

const boxStyle = {
  marginTop: '',
  padding: '10px',
  backgroundColor: '#90AEAD',
  BiFontFamily:'Helvetica',
  fontweight: 'bold',
  border:'1px solid black',
  
};

const sidebarStyle = {
  marginTop: '10px',
  padding:'20px'

  
};

const buttonRowStyle = {
  marginTop: '100px',
  display: 'flex',
  justifyContent: 'space-between',
};



const buttonStyle = {
  padding: '10px 21px',
  backgroundColor: '#FF6A3D',
  margin:'3px',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  ':hover': {
    backgroundColor: 'black'},
};



export default ProfileView;