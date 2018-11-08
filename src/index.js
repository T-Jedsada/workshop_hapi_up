const Hapi = require('hapi');
const mockMovie = require('./mock_movie');
const mockPlace = require('./mock_place');

const server = new Hapi.Server();
server.connection({
    port: process.env.PORT || 3000,
    routes: {
        cors: {
            origin: ['*']
        }
    }
});

server.route({
    method: 'GET',
    path: '/movie',
    handler: function (request, reply) {
        reply(mockMovie);
    }
});

server.route({
    method: 'GET',
    path: '/place',
    handler: function (request, reply) {
        reply(mockPlace);
    }
});

server.start((err) => {
    if (err) throw err;
    console.log(`Server running at: ${server.info.uri}`);
});