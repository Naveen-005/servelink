import { color } from 'framer-motion';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import config from '../../../config.json'
import PropTypes from 'prop-types';

const BadgeForm = ({evnt,vol}) => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState('badges');
  const [selectedBadge, setSelectedBadge] = useState(null);
  //const [badgeName, setBadgeName] = useState('');
  const [customBadge, setCustomBadge] = useState(null);
  const [customTitle, setCustomTitle] = useState('');
  const [badgeFile, setBadgeFile] = useState(null);

  const [badge_Form, setBadge_Form] = useState({
    title: "",
    description: "",
    vol_id:vol._id,
    event_id:evnt._id,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBadge_Form((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const badges = [ require('../../../assets1/badges/001.png'),
    require('../../../assets1/badges/002.png'),
    require('../../../assets1/badges/003.png'),
    require('../../../assets1/badges/004.png'),
    require('../../../assets1/badges/005.png'),
    require('../../../assets1/badges/006.png'),
    require('../../../assets1/badges/007.png'),
    require('../../../assets1/badges/008.png'),
    require('../../../assets1/badges/009.jpg'),
    require('../../../assets1/badges/010.jpg'),
    require('../../../assets1/badges/011.jpg'),]; 
/*
  const handleBadgeClick = (badge) => {
    setSelectedBadge(badge);
  };
*/

const handleBadgeClick = async (badge) => {
  setSelectedBadge(badge);
  const response = await fetch(badge);
  const blob = await response.blob();
  const file = new File([blob], badge.split('/').pop(), { type: blob.type });
  setBadgeFile(file);
};

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => setCustomBadge(e.target.result);
      reader.readAsDataURL(event.target.files[0]);
      setBadgeFile(event.target.files[0])
    }
  };

  const handleClose = () => {
   navigate(-1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("evnt:\n",evnt)
    console.log("vol:\n",vol)

    axios({
      method: 'post',
      url: config.server_api_url + '/achievments',
      withCredentials:true,
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      data: {
        form:badge_Form,
        file: badgeFile
      }
    })
      .then((res) => {

        alert("Achievment awarded");
        navigate("/odas")

      })
      .catch((err) => {
        console.log(err)
        alert(err.response?.data)
      });

  };


  return (
    <div style={{backgroundColor:'#97BC62',height:'100vh'}}>
   <h1 style={{ textAlign: 'center', color: '#2C5F2D', fontSize: '5em', fontFamily: 'Arial, sans-serif' }}>
  ACHIEVEMENTS
</h1>

    <div style={styles.container}>
      
        <Button style={styles.closeButton} onClick={handleClose} >X</Button>
      <div style={styles.leftPanel}>
        <button style={styles.button} onClick={() => setSelectedTab('badges')}>Badges</button>
        <button style={styles.button} onClick={() => setSelectedTab('custom')}>Custom</button>
      </div>
      <div style={styles.rightPanel}>
        {selectedTab === 'badges' && (
           <div style={styles.badgeContainer}>
            {badges.map((badge, index) => (
              <div key={index} style={styles.badgeItem} onClick={() => handleBadgeClick(badge)}>
                <img src={badge} alt={badge} style={styles.badgeImage} />
                {selectedBadge === badge && <span style={styles.tickMark}>✓</span>}
              </div>
            ))}
            {selectedBadge && (
               <div style={styles.textBoxContainer}>
                <input
                  type="text"
                  name="title"
                  value={badge_Form.title}
                  onChange={handleChange}
                  placeholder="Enter badge title"
                  style={styles.textBox}
                />
                <input
                  type="text"
                  name="description"
                  value={badge_Form.description}
                  onChange={handleChange}
                  placeholder="Explain why badge is awarded"
                  style={styles.textBox}
                />
                <button style={styles.grantButton} onClick={handleSubmit}>Grant</button>
              </div>
            )}
          </div>
        )}
        {selectedTab === 'custom' && (
          <div>
            <input type="file" onChange={handleImageChange} style={styles.fileInput} />
            {customBadge && <img src={customBadge} alt="Custom Badge" style={styles.customImage} />}
            {/*
            <input
              type="text"
              value={customTitle}
              onChange={(e) => setCustomTitle(e.target.value)}
              placeholder="Enter title"
              style={styles.textBox}
            />
            */}
            <input
                  type="text"
                  name="title"
                  value={badge_Form.title}
                  onChange={handleChange}
                  placeholder="Enter badge title"
                  style={styles.textBox}
                />
                <input
                  type="text"
                  name="description"
                  value={badge_Form.description}
                  onChange={handleChange}
                  placeholder="Explain why badge is awarded"
                  style={styles.textBox}
                />
            <button style={styles.grantButton} onClick={handleSubmit}>Grant</button>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};


const styles = {
  container: {
    display: 'flex',
    width: '60%',
    margin: '0 auto',
    border: '4px solid black',
    borderRadius: '8px',
    overflow: 'hidden',
    padding:'15px',
    marginTop:'8%',
    backgroundColor:'#FFBB00'
  },
  closeButton: {
    position: 'relative',
    right:'-700px',
    width:'5px',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '59%',
    cursor: 'pointer',
    fontSize:'9px',
    height:'13px',
    lineHeight: '16px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color:'yellow',
    
  },
  leftPanel: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    borderRight: '1px solid #ccc',
    backgroundColor: '#31473A',
  },
  rightPanel: {
    flex: 3,
    padding: '16px',
  },
  button: {
    padding: '16px',
    border: 'none',
    backgroundColor: '#B85042',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
    margin: '8px',
  },
  badgeContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  badgeItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    cursor: 'pointer',
    marginBottom: '8px',
    marginRight: '8px',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  badgeImage: {
    width: '50px',
    height: '50px',
    marginRight: '8px',
  },
  tickMark: {
    color: 'green',
    fontSize: '24px',
  },
  textBox: {
    width: '100%',
    padding: '8px',
    fontSize: '16px',
    margin: '8px 0',
  },
  grantButton: {
    padding: '8px 16px',
    backgroundColor: '#28a745',
    color: '#fff',
    borderRadius: '10px 10px 13px 10px',
    cursor: 'pointer',
  },
  fileInput: {
    marginBottom: '16px',
  },
 
  customImage: {
    width: '100px',
    height: '100px',
    marginBottom: '8px',
  },
  submitButton: {
    padding: '8px 16px',
    backgroundColor: '#17a2b8',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
  textBoxContainer: {
    width: '100%',
    marginTop: '16px',
    display: 'flex',
    flexDirection: 'column',
  },
  
};

BadgeForm.propTypes = {
  evnt: PropTypes.object.isRequired,
  vol: PropTypes.object.isRequired,
};

export default BadgeForm;
