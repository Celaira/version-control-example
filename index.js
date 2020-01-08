const { port } = require('./config/config.js');

const server = require('server.js');

server.listen(port, () => {
    console.log(`\n *** server listening on ${port} *** \n`)
});