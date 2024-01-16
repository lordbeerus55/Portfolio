import React, { useState } from 'react';

const AddUserForm = () => {
  const [user, setUser] = useState({
    email: '',
    firstname: '',
    lastname: '',
    description: '',
    about: ''
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8081/api/v1/addProfile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any additional headers if needed
        },
        body: JSON.stringify(user)
      });

      if (response.ok) {
        console.log('User added successfully');
        // Handle success, e.g., show a success message or redirect
      } else {
        console.error('Failed to add user');
        // Handle failure, e.g., show an error message
      }
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh',marginTop:'-150px' }}>
  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
    <label>Email :    
      <input type="text" name="email" value={user.email} onChange={handleChange} />
    </label>
    <br/>
    <label>First Name :
      <input type="text" name="firstname" value={user.firstname} onChange={handleChange} />
    </label>
    <br/>
    <label>Last Name :
      <input type="text" name="lastname" value={user.lastname} onChange={handleChange} />
    </label>
    <br/>
    <label>Description :
      <input type="text" name="description" value={user.description} onChange={handleChange} />
    </label>
    <br/>
    <label>About :
      <input type="text" name="about" value={user.about} onChange={handleChange} />
    </label>
    <br/>
    <button type="submit">Add User</button>
  </form>
</div>

  );
};

export default AddUserForm;
