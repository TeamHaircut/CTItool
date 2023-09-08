const express = require('express');
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

//TODO
//Generate Data from resources (i.e. data.js)

var {data} = require("./data");
var json = JSON.parse(data);

app.use(express.static('public'));

app.get('/public', (req, res) => {
  res.sendFile(__dirname +'/index.html')
});

server.listen(8081, () => {
  console.log('Server running at http://127.0.0.1:8081')
});

io.on("connection", socket => {
  console.log("connected");
  socket.on("init_data", () => { //listen for data request
    io.emit("init_data", json); //send data to client
  });
});