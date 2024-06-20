import React, { useEffect, useState } from 'react';
import './App.css'; // Ensure you have this file for custom styles
import './menu.css'; // Import the menu styles
import "./DarkMode/DarkMode.css"
import { ReactComponent as Sun } from "./DarkMode/Sun.svg";
import { ReactComponent as Moon } from "./DarkMode/Moon.svg";

function App() {
  const [theme, setTheme] = useState('dark'); // Initialize theme state
  const [showSun, setShowSun] = useState(true); // Initialize image state
  // const [autoToggleTimeout, setAutoToggleTimeout] = useState(null);

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
      // document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    } 
    else {
      // document.body.style.backgroundColor = 'white';
      document.body.style.color = 'darkgoldenrod';
    }
  },[theme]);

      //New Feature Add
      // const timeout = setTimeout(() => {
    //     setTheme('dark');
    //     setShowSun(true);
    //     document.getElementById('darkmode-toggle').checked = false;  Reset the toggle button
    //   }, 5000);  Automatically switch back to dark mode after 5 seconds
    //   setAutoToggleTimeout(timeout);
    // }
    // return () => {
    //   if (autoToggleTimeout) {
    //     clearTimeout(autoToggleTimeout);
    //   }
    // };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    setShowSun((prevShowSun) => !prevShowSun);

// Modifying New Feature Code
 // Auto-toggle back to dark mode after 5 seconds
    setTimeout(() => {
      setTheme('dark');
      setShowSun(true);
      document.getElementById('darkmode-toggle').checked = false; // Reset the toggle button
    }, 5000);
  };
    // New Feature Add
    // if (autoToggleTimeout) {
    //   clearTimeout(autoToggleTimeout);
    //   setAutoToggleTimeout(null);
    // }
    const handleMenuIconClick = (iconIndex) => {
      if (iconIndex === 3) {
        // Replace with your bot script URL or desired action
        const botScriptURL = 'https://t.me/Solarfrens_bot';
        window.open(botScriptURL, '_blank');
      }
    };

  return (
    <div className={`App ${theme}-theme`}>
    <div className="overlay">
      <header className="App-header">
        <h1>Welcome to <br/>SolarFrens</h1>
        <div className={`image-container ${showSun ? 'dark-border' : 'light-border'}`}>
        <div className={`outer-circle ${showSun ? 'dark-border' : 'light-border'}`}>
          <div className="center-circle">
            {showSun ? (
              <img src={require('./Images/dreamy-moon.png')} alt="Dreamy Moon" className="dreamy-moon" />
            ) : (
              <img src={require('./Images/smiling-sun.png')} alt="Smiling Sun" className="smiling-sun" />
            )}
          </div>
        </div>
      </div>
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onClick={toggleTheme}
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
      </header>
    </div>
    <div className="menu">
        <div className="menu-icon"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB9UlEQVR4nO3Wz6tMcRjH8RduCCldSkLpLu5SoqQkbCg7Gws73fwJ7uIu78a/YGEjxYaVDaGukV8LbKyUkPxKSpS48tWp52oac82ZMWfmTL7veuo05/t9ns/nfJ/zzCFTiq24ietxPZLsx1ukiA84ZIRYghn8CANXIlL8NhNras1aXArRP3EaS0P4dIu5dWrKdjxtaqPDbdYcwLtY8wK71Izj+BICH2LbX9Zuwb1Y+xUnmu6lRaJyxqJ9Fgqew6oS+1bgTNO+4nr5sIxsxp2mJzvVQ46p2FvkuNtGeOVG9uFNFHmJ3f+QaweeLXICqSojxfQ5hfkocBXjfcg7HrlSxHTUqsRI62idxbI+5i9yzUbuosblKoxM4kkk/YSjquMIPlbxsh/D50j4GBOqZyJqLRgpNPRttJ7HaoNjJc62GdFdsQE3IsF8vHzD4iS+hZYGNpXduBevY+Mr7DF8duJ5aHqPg2Xcf48Nc9ioPqzHtZYu+eMreg0utkyK4h2pG2MtGi+E9t88aBqtA/tQ65HUovV+883beBT/F6NiZDI0NzotrCuprL5sZECkfCL/24mkHqPXOh3JRnT3hGt/ImXJRuQTKUdurS5JubVKklurS1JurZLk1uqSlFurJLm1uiTl1hr11ko1j440aiAydYhbnW1kMvrBL/A6qXQvVsG5AAAAAElFTkSuQmCC" alt="home icon" /></div>
        <div className="menu-icon"><img src="data:image/png;base64,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" alt="mine icon" /></div>
        <div className="menu-icon" onClick={() => handleMenuIconClick(3)}><img src="data:image/png;base64,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" alt="Bot icon" /></div>
        <div className="menu-icon"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEP0lEQVR4nO2bT0gUURzHv5p/glWrY3QIiiCzNKhcTSqoDtUpK+jiMYLoEEWQRZe6hIGZq0YgHfKS0amjWYmJx7xI+A8PZSSEKWmt/7KNB9+lxzC7OzNvXMfd3wce7Lrv9+/rzJs3M+8BgiAIgiAIghAcCgFcBjAMYISf1d+EFGwAcBPAJICYpU3yN9VHSMAtTbABABfZBrS/qz6CDVsATFOkOpvf6/jbNPtmPTkAKgGcZGunQN1JlHnDPu2aXSV9ZR3XbMa5vwAOJrE5wD5WO+Urq9gEYIrF9/KoU63egW291r+XPqboM6MJcexSrYGF9/jgt4e+GjT/KlZGcQnAis3pGvbBd9jmtF5hzIygGMB3FjbDq6hqzT7GaNb8zjCWilmCDOAeC+pLY8z4aa1irzvqAIwBGGdbYDE1acyhhjEXtTxGE8wvA8VuAL9tphmda5BLp00eKrdSBJQCAB+ZaAeAHWzb12iim8PY8Tw6tFtElWvgeMgExwM6eIf4ZCc+5QkURwH8AbAMoBrBRd3lLHGacyKdgfMA3AAwyIE5lqFtkTVeZ82+oMaLrgAUF0tz6/JrrLxDh98AnAVQhMylCECt9kD3th9Ox+jsFLKHM6xZXXSMiY956pYsWyhhzeomwJhROjuN7DsCh/1wdlUbA2uzYAw8p42BV/xwmqvN4mOWBwP9locE6/l7v6XG56zdNy4AeK0FAIN/wH/W8/d4XarG81hFdAEzibTVJQIaIgIaIgIaIgIaIgIaIgIaIgIaIgIaIgIaIgIaIgIaIgIaIgIaIgIaIgIaIgIaIgIaIgIaIgIaIgKmwPrqry/B4ptMw67GZK9EE2L36s+rgNu4OKmb60xGuF1LLdrZCv+oANDGlQRRtiEArQDKHfqwqzHZK1HPOBEwF8BdAPNJlo9FKa7Jy+uNFM66B0VvKxSycL281swD8EpL/iWXxZWy1fL3+OaYFx73ACvx3tOH+kc95sbDEFuY+0fiuwTephAxMAI+0PavHUvS7ziAH+x730MebbT9AmBfitN7gn1bgi7gLq6TXnK4VvoI11ar/jtd5LCXR/d8CvF0ERdoUxYUAWNJ2lMX/p4ZLMNtchEn4tDnqpPoqhzT2mGXK/y9CnjIRZywA3++XGVNiDIRN2sIN9NmzoXNvIc4RdoFJ7D8YpIhD8tpf7qwmfUgYDFtlG1gGWKSamu+21NL7c9wyifaqGmLU6o8xEk7ESbZ6MKmmTaPXNg00cbNnuMWD7mlnXJOFaJJpgvW/gucyjjpH6eMNgucoqRiP3cbKJs9CDhP+J/+zPlaIio4CXZ7JFmP9okUIirxvrKvulsJPAUA3llusao44Bfxc0S7xVIPGvI9xMmnbYy+IpY41TxtFw3jrJmIrTxlEs25liluvmGcSBrirBllvDgMcp43y8+NPu8ct8aZ0+IEfswTBEEQBEEQBGQb/wANaZnh+5ZylgAAAABJRU5ErkJggg==" alt="earn icon" /></div>
        <div className="menu-icon"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC1klEQVR4nO2aPWgUURSFvyUrBhHFwtVSjSj4A1oGVAS1NYUKxo2xUSSKdcQiRZJCRdAqqBgFtbGzEDGIjdkgLhELwUIQG//wF9xEUXRXHpyBYZhZZ3ffm1nDHHjszH3n3Xvu7p07kzeBDHMLOaAfmAJmNErAQc0FuYdCuP0h3MRxFahFjPEA91odrvGTGvokogIcBpYBy4Ejspm5Aw1wi2klMiUBAyFzA5orNcFNHLMSsDRkrqC5mQC3EIObOBoR19aJlOqUyzHNTcYorSA3cRQDF/AiDf8F3NsA12sMqWC8Tku90kKrThw5tdaH+mYrOi5G3BD7VEJh3LXAJeAT8BW4AMznP8IW4DbwJ+SXOk+bYx6wF3jkE/0DuAisAbbJ9sGliN3ANPCzTs03Mj4Cw4HWvF1z710l0QNULYj/BZTVehf4/G8GbgG/xTvtKpGnCnAGWGjR7w5gIpDsOyCPA2xUgM+WuklB945pn/hvwDl1rppiWsdZOR9rcJ13V683zLVwCliiNWOym5hW0QG8lvPuBtdGiZ9VkkeBzsCabnHeKLY17JTjF74b3WO1z7iJ/At+fznFMut2YRHX5XSoCYHN8oZ0bmJbwxc57bIgMC6vS+fmwreeyCoLAlNN5KacDlsQGJc3ovMbWIT37PNWz0mtCIzDy6tjmfOtWMYzOd7TgsC4vH06fu5iz+uEnN9vQWBc3gMdH8cBFmuDoKpHbVeJrFaMimI6wWUFu+cwkQl9mljOsFJ/htaaEBiXV1O7X4FjbADuRggshewYRvEmI3h3gHUkiDCBtm2JIEuE7Bdxg6y0yErLDbLSIistN8hKizYrraoCextonT4x3pZqh8+WD7EFedUU8uCVgg9qQ3vUJ3BEtpM+22CILch7mUYi3gtO//D+x6QWY3wPsfWSEsxbpyfaxzXvOzbpHUfZZ+vRy6GyxJtNjP3Aem2TzsqHt6mRgbmAv4TW+V6Y44kmAAAAAElFTkSuQmCC" alt="Frens icon" /></div>
      </div>
    </div>
  );
}

export default App;
