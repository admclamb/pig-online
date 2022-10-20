const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const errorHandler = require('./errors/errorHandler');
const notFound = require('./errors/notFound');
const { PORT = 5000 } = process.env;
const { Server } = require('socket.io');
const io = new Server(server);

app.get('/', (req, res) => {
  res.status(200).json({ data: 'Hello from the backend' });
});

io.on('connection', (socket) => {
  console.log('user is connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

app.use(notFound);
app.use(errorHandler);

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
