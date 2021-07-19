const express = require('express');

const app = express();

const server = app.listen(4000, () => console.log('Listening to port 4000'));

const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  },
});

io.on('connection', socket => {
  socket.on('chat', data => {
    io.sockets.emit('chat', data);
  });

  socket.on('typing', data => {
    socket.broadcast.emit('typing', data);
  });

  socket.on('punish', data => {
    io.sockets.emit('punish', data);
  });
});
