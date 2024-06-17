import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    const handleTelegramInit = () => {
      if (window.Telegram.WebApp) {
        const webApp = window.Telegram.WebApp;

        // Initialize the Web App
        webApp.ready();

        // Set the background color based on the Telegram theme
        document.body.style.backgroundColor = webApp.themeParams.bg_color;

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

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to SolarFrens</h1>
        <p>
          This is a mini app that runs inside Telegram.
        </p>
      </header>
    </div>
  );
}

export default App;
