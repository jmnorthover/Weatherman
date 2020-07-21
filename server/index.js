const express = require('express');
const path = require('path');
const weatherRouter = require('./Routers/weatherRouter');
const { port } = require('./Config/keys');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.use('/api', weatherRouter);

app.listen(port, () => {
  console.log('Application started');
});
