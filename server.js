const express = require('express');
const app = express();
const http = require("http");
const server = http.createServer(app);

app.get('/', (req, res) => {
  res.send('<div>text</div>')
})

server.listen(8081, () => {
  console.log('Server running at http://127.0.0.1:8081')
});