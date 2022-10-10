'use strict';

const uuid = require('uuid').v4;

class Message {
  constructor(author, room, text) {
    this.author = author;
    this.room = room;
    this.text = text;
    this.timeStamp = new Date().toString();
    this.id = uuid();
  }
}

module.exports = Message;
