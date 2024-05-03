import React, { useState, useEffect } from 'react';
import Adminsidebar from './components/Adminsidebar';

const AdminVol = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [verifiedVolunteers, setVerifiedVolunteers] = useState([]);
  const [deletedAccounts, setDeletedAccounts] = useState([]);
  const [blockedUsers, setBlockedUsers] = useState([]);
  const [growthData, setGrowthData] = useState([]);
  const [selectedOption, setSelectedOption] = useState('verified');
  const [filteredVolunteers, setFilteredVolunteers] = useState([]);

  useEffect(() => {
    // Fetch data from API or mock data
    const mockData = {
      volunteers: [
        { id: 1, name: 'Nivin pauly', isVerified: true, isDeleted: false, isBlocked: false },
        { id: 2, name: 'Nithin Molly', isVerified: false, isDeleted: true, isBlocked: false },
        { id: 3, name: 'Aalparambill Gopi', isVerified: true, isDeleted: false, isBlocked: true}, 
        {id: 5, name: 'Ramchandra Boss', isVerified: true, isDeleted: false, isBlocked: true },
        {id: 6, name: 'David George', isVerified: false, isDeleted: true, isBlocked: false },
        {id: 7, name: 'Prakashan', isVerified: true, isDeleted: false, isBlocked: true },
        {id: 8, name: 'Dineshan', isVerified: true, isDeleted: false, isBlocked: true },
        // Add more mock data as needed
      ],
      growthData: [
        { day: 1, count: 10 },
        { day: 2, count: 15 },
        { day: 3, count: 20 },
        // Add more growth data as needed
      ],
    };

    setVolunteers(mockData.volunteers);
    setVerifiedVolunteers(mockData.volunteers.filter((v) => v.isVerified));
    setDeletedAccounts(mockData.volunteers.filter((v) => v.isDeleted));
    setBlockedUsers(mockData.volunteers.filter((v) => v.isBlocked));
    setGrowthData(mockData.growthData);
    setFilteredVolunteers(mockData.volunteers.filter((v) => v.isVerified));
  }, []);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    switch (option) {
      case 'verified':
        setFilteredVolunteers(verifiedVolunteers);
        break;
      case 'deleted':
        setFilteredVolunteers(deletedAccounts);
        break;
      case 'blocked':
        setFilteredVolunteers(blockedUsers);
        break;
      default:
        setFilteredVolunteers([]);
    }
  };

  const handleVolunteerProfile = (volunteerId) => {
    // Implement logic to handle volunteer profile
    console.log(`Showing profile for volunteer with ID: ${volunteerId}`);
  };

  const styles = {
    container: {
      backgroundColor: '#1995AD',
      height: '100vh',
      display: 'flex',
      marginLeft: '-40px', // Adjust this value based on the width of your sidebar
    },
    content: {
      flex: 1,
      padding: '20px',
      backgroundColor: '#1995AD',
    },
    volunteerCount: {
      backgroundColor: '#FEA885',
      padding: '30px',
      borderRadius: '5px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
      animation: '$fadeIn 0.5s ease-in-out',
    },
    deletedAccountCount: {
      backgroundColor: '#ffa8B6',
      padding: '30px',
      borderRadius: '5px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
      animation: '$fadeIn 0.5s ease-in-out',
    },
    volunteerList: {
      backgroundColor: '#edf756',
      padding: '13px',
      borderRadius: '5px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
      maxHeight: '400px',
      overflowY: 'auto',
      animation: '$fadeIn 0.5s ease-in-out',
      position:'relative',
      width:'80%',
    
    },
    volunteerList1: {
        backgroundColor: '#9DF9EF',
        padding: '13px',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        maxHeight: '300px',
        overflowY: 'auto',
        animation: '$fadeIn 0.5s ease-in-out',
        position:'relative',
        width:'100%',
      },
    volunteerRow: {
      cursor: 'pointer',
      padding: '5px',
      '&:hover': {
        backgroundColor: '#e5eaf5',
      },
    },
    filterContainer: {
      backgroundColor: '#e8f9fd',
      padding: '10px',
      borderRadius: '5px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
      animation: '$fadeIn 0.5s ease-in-out',
    },
    filterHeader: {
      marginBottom: '10px',
      cursor: 'pointer',
      '&:hover': {
        fontWeight: 'bold',
      },
      borderBottom: '1px solid black',
      paddingBottom: '5px',
    },
    '@keyframes fadeIn': {
      '0%': { opacity: 0 },
      '100%': { opacity: 1 },
    },
  };

  return (
    <div style={styles.container}>
      <helmet>
        <title>
          Volunteer
        </title>
      </helmet>
      <Adminsidebar />
      <div style={styles.content}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div style={styles.volunteerCount}>
            <h3>Created Accounts<br /><div style={{ alignItems: 'center',position:'relative',left:'90px' }}>{volunteers.length}</div></h3>
          </div>
          <div style={styles.deletedAccountCount}>
            <h3>Deleted Accounts <br/> <div style={{ alignItems: 'center',position:'relative',left:'90px' }}>{deletedAccounts.length} </div></h3>
          </div>
        </div>

        <div style={{ display: 'flex', marginBottom: '20px' }}>
          <div style={{ flex: 1, marginRight: '20px' }}>
            <h3>New Volunteers</h3>
            <div style={{ ...styles.volunteerList, maxHeight: '200px' }}>
              {volunteers.map((volunteer) => (
                <div
                  key={volunteer.id}
                  style={styles.volunteerRow}
                  onClick={() => handleVolunteerProfile(volunteer.id)}
                >
                  {volunteer.name}
                </div>
              ))}
            </div>
          </div>

          <div style={{ flex: 1 }}>
            <div style={styles.filterContainer}>
              <div style={styles.filterHeader} onClick={() => handleOptionChange('verified')}>
                Verified   
              </div>
              <div style={styles.filterHeader} onClick={() => handleOptionChange('deleted')}>
                Deleted Accounts
              </div>
              <div style={styles.filterHeader} onClick={() => handleOptionChange('blocked')}>
                Blocked Users
              </div>
              <div style={{ ...styles.volunteerList1, maxHeight: '200px' }}>
                {filteredVolunteers.map((volunteer) => (
                  <div
                    key={volunteer.id}
                    style={styles.volunteerRow}
                    onClick={() => handleVolunteerProfile(volunteer.id)}
                  >
                    {volunteer.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminVol;