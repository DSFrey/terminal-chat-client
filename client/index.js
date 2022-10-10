'use strict';

const { io } = require('socket.io-client');

const usernameEntry = require('./prompts');
const socket = io('http://localhost:3002/');

socket.emit('JOIN', 'lobby');

usernameEntry(socket);

socket.on('MESSAGE', (message) => {
  console.log(`From ${message.author}: ${message.text}`);
  socket.emit('RECEIVED', { author: message.author, id: message.id });
});
