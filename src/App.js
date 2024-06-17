import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    if (window.Telegram.WebApp) {
      const webApp = window.Telegram.WebApp;

      // Initialize the Web App
      webApp.ready();

      // Set the background color based on the Telegram theme
      document.body.style.backgroundColor = webApp.themeParams.bg_color;
    }
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
