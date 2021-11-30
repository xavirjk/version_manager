const express = require('express');
const path = require('path');

const { preConfig, postConfig } = require('./appMiddlewares');
const { routes } = require('./config');

const loader = require('./loader');

const app = express();

app.use(express.static(path.join()));
app.use('/zip', express.static(path.join(__dirname, 'zip')));
app.use(express.static(path.join(__dirname, 'build')));
loader(app, preConfig);
routes(app);
loader(app, postConfig);

module.exports = app;
