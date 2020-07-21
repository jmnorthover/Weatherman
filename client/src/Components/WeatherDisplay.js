import React, { useState, useEffect } from 'react';
import Forecast from './Forecast';
import getWeather from '../Services/api/getWeather';

const WeatherDisplay = ({ zipCode, setZipCode }) => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [fetchFailed, setFetchFailed] = useState(false);

  useEffect(() => {
    getWeather(zipCode)
      .then((res) => {
        setCurrentWeather(res.currentWeather);
        setForecast(res.forecast);
      })
      .catch((error) => {
        setFetchFailed(true);
      });
  }, [zipCode]);

  if (currentWeather && forecast) {
    return (
      <div className="weather-display">
        <div className="change" onClick={() => setZipCode('')}>
          Change Location
        </div>
        <h1>{currentWeather.name}</h1>
        <h2>{currentWeather.weather[0].description}</h2>
        <div className="temp">{Math.round(currentWeather.main.temp)}&deg;</div>
        <div className="sub-info">
          <div>
            Feels like: {Math.round(currentWeather.main.feels_like)}&deg;
          </div>
          <div>Humidity: {currentWeather.main.humidity}%</div>
          <div>Wind: {Math.round(currentWeather.wind.speed)} mph</div>
        </div>
        <div className="forecast">
          {forecast.map((time) => (
            <Forecast data={time} key={time.dt} />
          ))}
        </div>
      </div>
    );
  } else if (fetchFailed) {
    return (
      <div className="weather-display">
        <h2>Failed to fetch weather data.</h2>
        <h2>Zip code may be invalid.</h2>
        <div className="failed-zip" onClick={() => setZipCode('')}>
          Change Zip
        </div>
      </div>
    );
  } else {
    return '';
  }
};

export default WeatherDisplay;
