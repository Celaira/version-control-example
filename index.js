const { port } = require('./config/config.js');

const server = require('./api/server');

server.listen(port, () => {
    console.log(`\n *** server listening on ${port} *** \n`)
});