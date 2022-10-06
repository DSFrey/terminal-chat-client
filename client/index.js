'use strict';

const { io } = require('socket.io-client');
const Message = require('./message');
const socket = io('http://localhost:3002/');

socket.emit('JOIN', 'lobby');
socket.emit('MESSAGE', new Message('Hello World from the client!'));
