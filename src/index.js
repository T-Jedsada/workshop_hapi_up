const Hapi = require('hapi');
const mockMovie = require('./mock_movie');

const server = new Hapi.Server();
server.connection({
    port: process.env.PORT || 3000
});

server.route({
    method: 'GET',
    path: '/movie',
    handler: function (request, reply) {
        reply(mockMovie);
    }
});

server.start((err) => {
    if (err) throw err;
    console.log(`Server running at: ${server.info.uri}`);
});