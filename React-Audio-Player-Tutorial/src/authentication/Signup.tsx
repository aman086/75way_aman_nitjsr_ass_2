// src/components/Signup.tsx
import React, { useState } from 'react';
import axios from 'axios';

const Signup: React.FC = () => {
  const [signupData, setSignupData] = useState({
    username: '',
    password: '',
  });

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:3000/signup', signupData);
      console.log(response.data);
    } catch (error : any) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Server responded with an error:', error.response.data);
        console.error('Status code:', error.response.status);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error setting up the request:', error.message);
      }
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2 style={{ marginBottom: '20px' }}>Signup</h2>
      <input
        style={{ padding: '10px', margin: '5px', width: '200px' }}
        type="text"
        placeholder="Username"
        value={signupData.username}
        onChange={(e) => setSignupData({ ...signupData, username: e.target.value })}
      />
      <br />
      <input
        style={{ padding: '10px', margin: '5px', width: '200px' }}
        type="password"
        placeholder="Password"
        value={signupData.password}
        onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
      />
      <br />
      <button
        style={{
          backgroundColor: '#4caf50',
          color: 'white',
          padding: '10px 15px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
        onClick={handleSignup}
      >
        Signup
      </button>
    </div>
  );
};

export default Signup;
