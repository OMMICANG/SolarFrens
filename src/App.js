import React, { useEffect, useState } from 'react';
import './App.css'; // Ensure you have this file for custom styles

function App() {
  const [theme, setTheme] = useState('dark'); // Initialize theme state

  useEffect(() => {
    const handleTelegramInit = () => {
      if (window.Telegram.WebApp) {
        const webApp = window.Telegram.WebApp;

        // Initialize the Web App
        webApp.ready();

        // Set the background color based on the Telegram theme
        // document.body.style.backgroundColor = webApp.themeParams.bg_color;

        // Expand the Web App to full height
        webApp.expand();
        
        // Log to confirm expand was called
        console.log('Web App expanded');
      } else {
        console.warn('Telegram WebApp not found');
      }
    };

    // Ensure the Telegram Web App SDK is loaded before trying to initialize
    if (window.Telegram.WebApp) {
      handleTelegramInit();
    } else {
      document.addEventListener('TelegramWebAppReady', handleTelegramInit);
    }

    return () => {
      document.removeEventListener('TelegramWebAppReady', handleTelegramInit);
    };
  }, []);

  useEffect(() => {
    // Apply theme styles based on the current theme
    if (theme === 'dark') {
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    } else {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="App">
    <header className="App-header">
        <h1>Welcome to SolarFrens</h1>
        <p>
          This is a mini app that runs inside Telegram.
        </p>
        <div className="image-container">
        {theme === 'dark' ? (
            <img src={require('./Images/dreamy-moon.png')} alt="Dreamy Moon" className="dreamy-moon" />
          ) : (
            <img src={require('./Images/smiling-sun.png')} alt="Smiling Sun" className="smiling-sun" />
          )}
        </div>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </header>
    </div>
  );
}

export default App;
