import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Listen for theme updates from Telegram Web App
    window.Telegram.WebApp.onEvent('themeChanged', (themeInfo) => {
      setTheme(themeInfo.theme);
    });
  }, []);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    // Update the Telegram Web App theme
    window.Telegram.WebApp.themeParams.bg_color = newTheme === 'light' ? '#ffffff' : '#000000';
    window.Telegram.WebApp.sendData(JSON.stringify({ theme: newTheme }));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to SolarFrens</h1>
        <button onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'dark' : 'light'} theme
        </button>
      </header>
    </div>
  );
}

export default App;
