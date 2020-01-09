const express = require('express');
const server = express();

const setup = require('./config/setup.js');
setup(server);

const auth = require('./routes/authRoutes');
const recipes = require('./routes/recipeRoutes');


server.use('/users', auth);
server.use('/recipes', recipes)

server.get('/', (req, res) => {
    res.send({message: "Api up!"})
})

module.exports = server;