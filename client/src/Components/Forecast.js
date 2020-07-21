import React from 'react';
import { format } from 'date-fns';

const Forecast = ({ data }) => {
  const icon = data.weather[0].icon;

  return (
    <div className="forecast-card">
      <div>{format(new Date(data.dt * 1000), 'p')}</div>
      <div>
        <img
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={data.weather[0].description}
        />
      </div>
      <div className="forecast-temp">{Math.round(data.main.temp)}&deg;</div>
    </div>
  );
};

export default Forecast;
