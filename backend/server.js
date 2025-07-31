const express = require('express');
const app = express();
const miningRoute = require('./routes/mining');

app.use(express.json());
app.use('/mine', miningRoute);

module.exports = app; // 👈 Phải export app, không phải server
