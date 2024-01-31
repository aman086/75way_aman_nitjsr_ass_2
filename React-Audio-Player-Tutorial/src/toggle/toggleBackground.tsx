// src/components/ToggleButton.tsx
import React, { useState, ReactNode } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

interface ToggleButtonProps {
  children?: ReactNode;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleBackgroundColor = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <button onClick={toggleBackgroundColor}>
        {isDarkMode ? <FaMoon /> : <FaSun />}
        Click here to change the background
      </button>
      <div
        style={{
          width: '100vw',
          height: '100vh',
          backgroundColor: isDarkMode ? '#333' : '#fff',
          color: isDarkMode ? '#fff' : '#333',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* <h2>Page Content</h2> */}
        {children}
      </div>
    </div>
  );
};

export default ToggleButton;
