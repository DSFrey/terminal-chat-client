const inquirer = require('inquirer');
const Message = require('./message');

let currentRoom = 'lobby';

let writePrompt = [{
  type: 'input',
  name: 'messageText',
  message: `${currentRoom} >`,
}];

function textEntry(socket) {
  inquirer.prompt(writePrompt).then((answer) => {
    if (answer.messageText[0] === '#') {
      let prevRoom = currentRoom;
      currentRoom = answer.messageText.slice(1);
      writePrompt[0].message = `${currentRoom} >`;
      socket.emit('NEW_ROOM', { prevRoom, currentRoom });
    } else {
      socket.emit('MESSAGE', new Message(currentRoom, answer.messageText));
    }
    textEntry(socket);
  });
}

module.exports = textEntry;
