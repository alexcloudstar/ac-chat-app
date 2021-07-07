const express = require('express');
const http = require('http');

const socket = require('socket.io');

const app = express();

const server = app.listen(4000, () => console.log('Listening to port 4000'));

const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  },
});

io.on('connection', socket => {
  console.log('message socket ', socket.id);

  socket.on('chat', data => {
    io.sockets.emit('chat', data);
  });
});
