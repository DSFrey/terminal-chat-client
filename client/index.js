'use strict';

const { io } = require('socket.io-client');
const Message = require('./message');
const socket = io('http://localhost:3002/');

socket.emit('JOIN', 'lobby');
const message = new Message('Hello World from the client!');
console.log(message);
socket.emit('MESSAGE', message);
socket.on('MESSAGE', (message) => {
  console.log(`Message from the server to the client: ${message}`);
});
