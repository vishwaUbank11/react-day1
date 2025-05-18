import React, { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';

function Day11ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <h2>Current Theme: {theme}</h2>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
}

export default Day11ThemeToggle;
