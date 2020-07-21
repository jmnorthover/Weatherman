import React, { useState } from 'react';
import Home from './Components/Home';
import WeatherDisplay from './Components/WeatherDisplay';

const App = () => {
  const [zipCode, setZipCode] = useState('');
  return (
    <div className="container">
      {!zipCode ? (
        <Home setZipCode={setZipCode} />
      ) : (
        <WeatherDisplay zipCode={zipCode} setZipCode={setZipCode} />
      )}
    </div>
  );
};

export default App;
