'use strict';

class Message {
  constructor(room, text) {
    this.room = room;
    this.text = text;
    this.timeStamp = new Date().toString();
  }
}

module.exports = Message;
