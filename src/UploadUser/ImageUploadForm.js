// ImageUploadForm.js

import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
`;

const ConfirmationMessage = styled.p`
  color: green;
  margin-top: 10px;
`;

const ImageUploadForm = ({ onUpload }) => {
  const [image, setImage] = useState(null);
  const [ownerId, setOwnerId] = useState('');
  const [uploadConfirmation, setUploadConfirmation] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleOwnerIdChange = (e) => {
    setOwnerId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Pass the selected image file and owner ID to the parent component for upload
      await onUpload(image, ownerId);
      setUploadConfirmation('Image uploaded successfully!');
    } catch (error) {
      console.error('Error uploading image:', error);
      setUploadConfirmation('Error uploading image. Please try again.');
    }
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Input type="file" accept="image/*" onChange={handleImageChange} />
        <Input
          type="text"
          placeholder="Owner ID"
          value={ownerId}
          onChange={handleOwnerIdChange}
        />
        <Button type="submit">Upload Image</Button>
      </Form>
      {uploadConfirmation && <ConfirmationMessage>{uploadConfirmation}</ConfirmationMessage>}
    </FormContainer>
  );
};

export default ImageUploadForm;
