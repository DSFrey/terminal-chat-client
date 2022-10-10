const inquirer = require('inquirer');
const Message = require('./message');

let currentRoom = 'lobby';
let username;

function usernameEntry(socket) {
  const askUserName = [
    {
      type: 'input',
      name: 'username',
      message: 'What is your username?',
    },
  ];

  inquirer.prompt(askUserName).then((answer) => {
    username = answer.username;
    socket.emit('GET_ALL', 'lobby');
    textEntry(socket);
  });
}

function textEntry(socket) {
  let writePrompt = [
    {
      type: 'input',
      name: 'messageText',
      message: `${username} @ ${currentRoom} >`,
    },
  ];

  inquirer.prompt(writePrompt).then((answer) => {
    if (answer.messageText[0] === '#') {
      let prevRoom = currentRoom;
      currentRoom = answer.messageText.slice(1);
      writePrompt[0].message = `${username} @ ${currentRoom} >`;
      socket.emit('NEW_ROOM', { prevRoom, currentRoom });
    } else {
      socket.emit('MESSAGE', new Message(username, currentRoom, answer.messageText));
    }
    textEntry(socket);
  });
}

module.exports = usernameEntry;
