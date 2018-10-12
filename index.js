// Dependencies
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

// Config
const port = process.env.PORT || 8080;

// Root
app.get('/', (req, res) => {
    res.send('Hello world');
});

io.on('connection', (socket) => {
    console.log('Socket connected: ' + socket.id);
});

http.listen(port, () => {
    console.log('Listening on port ' + port);
});