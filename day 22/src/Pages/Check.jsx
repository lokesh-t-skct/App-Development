// WeatherApp.js
import React from 'react';
import Categories from './Categories';
import "./Categories.css"
import { useDarkMode } from './context/DarkModeContext';

const WeatherApp = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <div>
      <h1 className={`title ${isDarkMode ? 'dark' : ''}`}>Designs</h1>
      {/* Your weather app content */}
      <Categories />
    </div>
  );
}

export default WeatherApp;
