const express = require('express');
const axios = require('axios');
const { apiUrl, apiKey } = require('../Config/keys');
const { Router } = require('express');

const router = express.Router();

router.get('/weather/:zip', (req, res) => {
  const { zip } = req.params;
  const weatherPromise = axios.get(
    `${apiUrl}/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=imperial`,
  );
  const forecastPromise = axios.get(
    `${apiUrl}/data/2.5/forecast?zip=${zip}&appid=${apiKey}&units=imperial`,
  );

  Promise.all([weatherPromise, forecastPromise])
    .then((response) => {
      res.status(200).json({
        currentWeather: response[0].data,
        forecast: response[1].data.list.slice(0, 5),
      });
    })
    .catch((error) => res.status(404).end());
});

module.exports = router;
