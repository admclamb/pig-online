const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { PORT = 5000 } = process.env;

app.get('/', (req, res) => {
  res.status(200).json({ data: 'Hello from the backend' });
});

io.on('connection', (socket) => {
  console.log('user is connected');
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
