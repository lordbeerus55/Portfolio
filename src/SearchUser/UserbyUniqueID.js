import React, { useState, useEffect } from 'react';

const UserDetails = ({ match }) => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState('');
  const uniqueId = match;

  useEffect(() => {
    const fetchUserByUniqueId = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/v1/getProfilebyUniqueId/${match}`);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserByUniqueId(2);
  }, [match]);

  return (
    <div>
    <h1>User List</h1>
    {users.length === 0 ? (
      <p>No users found</p>
    ) : (
      <ul>
        {users.map(user => (
          <li key={user.uniqueId} className="user-item">
            <div className="user-info">
              <strong>{user.firstname} {user.lastname}</strong>
              <p>UserID:{user.uniqueId}</p>
              <p>Email: {user.email}</p>
              <p>Description: {user.description}</p>
              <p>About: {user.about}</p>
            </div>
          </li>
        ))}
      </ul>
    )}
  </div>
  );
};

export default UserDetails;
