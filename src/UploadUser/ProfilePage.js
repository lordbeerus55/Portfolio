// ProfilePage.js

import React from 'react';
import ImageUploadForm from './ImageUploadForm';

const ProfilePage = () => {
  // Function to handle image upload
  const handleImageUpload = (image, ownerId) => {
    // Perform the actual upload to the backend
    const formData = new FormData();
    formData.append('file', image);
    formData.append('ownerId', ownerId);

    fetch('http://localhost:8081/api/v1/image/upload', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        console.log('Image uploaded successfully:', data);
        // Handle any additional logic after successful upload
      })
      .catch(error => console.error('Error uploading image:', error));
  };

  return (
    <div style={{alignItems:'center'}}>
      
      {/* Display other profile information here */}
      <ImageUploadForm onUpload={handleImageUpload} />
    </div>
  );
};

export default ProfilePage;
