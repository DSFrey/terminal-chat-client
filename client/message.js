'use strict';

class Message {
  constructor(text) {
    this.text = text;
    this.timeStamp = new Date().toString();
  }
}

module.exports = Message;
