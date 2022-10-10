'use strict';

const { io } = require('socket.io-client');

const textEntry = require('./textEntry');
const socket = io('http://localhost:3002/');

socket.emit('JOIN', 'lobby');

textEntry(socket);

socket.on('MESSAGE', (message) => {
  console.log(`Username: ${message.text}`);
});
