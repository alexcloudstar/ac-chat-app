const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const server = app.listen(process.env.PORT || port, () =>
  console.log(`Listening to port ${port}`)
);

app.use(express.static(path.join(__dirname, "./client/dist")));

app.get("/", (req, res, next) => res.sendFile(__dirname + "./index.html"));

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  socket.on("chat", (data) => {
    io.sockets.emit("chat", data);
  });

  socket.on("typing", (data) => {
    socket.broadcast.emit("typing", data);
  });

  socket.on("punish", (data) => {
    io.sockets.emit("punish", data);
  });
});
