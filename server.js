const express = require('express');
const server = express();

const setup = require('./config/setup.js');
setup(server);

const auth = require('./routes/authRoutes');

server.use('/users', auth);

server.get('/', (req, res) => {
    res.send({message: "Api up!"})
})

module.exports = server;