const express = require('express');
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

var {data} = require("./data");
var json = JSON.parse(data);
//console.log(json.ttps.ttp1.links.l2);

app.use(express.static('public'));

app.get('/public', (req, res) => {
  res.sendFile(__dirname +'/index.html')
});

server.listen(8081, () => {
  console.log('Server running at http://127.0.0.1:8081')
});

io.on("connection", socket => {
  console.log("connected");
  socket.on("init_data", () => { // when server recieves the "joined" message
    io.emit("init_data", json); // send message to client
  });
});