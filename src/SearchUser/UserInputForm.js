import React, { useState } from 'react';
import UserDetails from './UserDetails';

const UserInputForm = () => {
  const [inputUniqueId, setInputUniqueId] = useState('');
  const [displayUser, setDisplayUser] = useState(false);
  const [isButtonActive] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputUniqueId.trim() !== '') {
      setDisplayUser(true);
    }
  };

  const handleKeyDown = (e) => {
    // Prevent the default behavior for arrow keys
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      e.preventDefault();
    }
  };

  return (
    <div style={{ left: 0, right: 0, height: "20vh", flexDirection: "column", alignItems: "center", justifyContent: "center", position: 'absolute' }}>
      <form onSubmit={handleSubmit} style={{ textAlign: "center", padding: "20px", borderRadius: "99px" }}>
        <label>
          Enter Unique ID:
          <input
            type="text"
            value={inputUniqueId}
            onChange={(e) => setInputUniqueId(e.target.value)}
            onKeyDown={handleKeyDown}
            style={{
              padding: "10px",
              borderRadius: "99px",
              border: "1px solid #ccc",
              marginRight: "10px",
              width: "1000px",
            }}
          />
        </label>
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            background: "#4CAF50",
            color: "white",
            border: "none",
            cursor: isButtonActive ? "pointer" : "not-allowed", // Disable the button if not active
            borderRadius: 99
          }}
          disabled={!isButtonActive} // Disable the button if not active
        >
          Search
        </button>
      </form>
      {displayUser ? (
        <div style={{ alignItems: "center", justifyContent: "center", }}>
          {inputUniqueId.trim() !== '' ? (
            <UserDetails uniqueId={parseInt(inputUniqueId, 10)} />
          ) : (
            <p>Please enter a valid Unique ID</p>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default UserInputForm;
