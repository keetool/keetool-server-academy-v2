const SOCKET_PORT = 9000;
const REDIS = {
    "host": "redis.d3zfqq.ng.0001.apse1.cache.amazonaws.com",
    "port": "6379",
};

function handler(request, response) {
    response.writeHead(200);
    response.end('');
}

var app = require('http').createServer(handler);
var io = require('socket.io')(app);

var ioRedis = require('ioredis');
var redis = new ioRedis(REDIS);

app.listen(SOCKET_PORT, function () {
    console.log(new Date + ' - Server is running on port ' + SOCKET_PORT + ' and listening Redis on port ' + REDIS.port + '!');
});

io.on('connection', function (socket) {
    console.log('A client connected');
});

redis.psubscribe('*', function (err, count) {
    console.log('Subscribed');
});

redis.on('pmessage', function (subscribed, channel, data) {
    data = JSON.parse(data);
    console.log(new Date);
    console.log(channel);
    console.log(data);
    io.emit(channel + ':' + data.event, data.data);
});