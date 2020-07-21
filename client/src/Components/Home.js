import React, { useState } from 'react';

const Home = ({ setZipCode }) => {
  const [zipInput, setZipInput] = useState('');

  const zipPattern = /^\d{5}$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (zipPattern.test(zipInput)) {
      setZipCode(zipInput);
    }
  };

  return (
    <div className="splash">
      <div className="splash-content">
        <h1>WEATHERMAN</h1>
        <h2>Enter your zipcode:</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="55555"
            required
            value={zipInput}
            onChange={(e) => setZipInput(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default Home;
