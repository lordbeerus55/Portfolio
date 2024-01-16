/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */

import React, { useState, useEffect } from 'react';
import './UserDetails.css';
import data from '../Resources/defaultimagedata.json';
const UserDetails = ({ uniqueId }) => {
  const [file, setFile] = useState(null);
  const [ownerId, setOwnerId] = useState(uniqueId);
  const [message, setMessage] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleOwnerIdChange = (event) => {
    setOwnerId(event.target.value);
  };

  const handleUpload = async () => {
    try {
      if (!file || !ownerId) {
        setMessage('Please select a file and enter ownerId.');
        return;
      }

      const formData = new FormData();
      formData.append('file', file);
      formData.append('ownerId', ownerId);

      const response = await fetch('http://localhost:8081/api/v1/image/profilePicture', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setMessage('Profile picture uploaded successfully.');
      } else {
        setMessage('Failed to upload profile picture. Please try again.');
      }
    } catch (error) {
      console.error('Error uploading profile picture:', error);
      setMessage('An error occurred while uploading. Please try again.');
    }
  };
  const [user, setUser] = useState(null);
 
  useEffect(() => {
    const fetchUserByUniqueId = async () => {
      try {
        const response = await fetch(`http://localhost:8081/api/v1/getProfilebyUniqueId/${uniqueId}`);
        const data = await response.json();
        setUser(data);
        
        
        
        
        

      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserByUniqueId();
  }, [uniqueId]);

  return (
    <div className='user-details-container'>
      {user ? (
        <div>
          {user.profilePicture!=null? (
              <img src={`data:image/png;base64,${user.profilePicture.profilepicture}`}className="profile-photo" />
           
      
    ) : (
      <div style={{display:'flex',flexDirection:'column',alignItems:'center'}} >

        <input type="text" value={ownerId} onChange={handleOwnerIdChange} disabled style={{display:'none'}} />
        <label style={{display:'flex',flexDirection:'column',alignItems:'center'}}> Upload a profile pic
        <input type="file" onChange={handleFileChange} />
        </label>
        <button onClick={handleUpload}>Upload Profile Picture</button>
        <p>{message}</p> 
    </div>
    )}
          
          <div className="user-info">
            <strong>{user.profile.firstname} {user.profile.lastname}</strong>
            <p>Email: {user.profile.email}</p>
            <p>Description: {user.profile.description}</p>
            <p>About: {user.profile.about}</p>
          </div>

          {/* Display all user images or a default image */}
          <div className="image-grid">
            {user.images && user.images.length > 0 ? (
              user.images.map((image, index) => (
                <img
                  key={index}
                  src={`data:image/png;base64,${image.data}`}
                  alt={`User Image ${index + 1}`}
                  className="image"
                />
              ))
            ) : (
              
              <img
                src={`data:image/png;base64,${data.defaultimage}`}
                alt="Default User Image"
                className="image"
              />
              
            )}
          </div>
         
        </div>
      ) : (
        <p className="loading-message">No User by that ID sir</p>
      )}
    </div>
  );
};

export default UserDetails;
