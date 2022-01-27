const Command = require('./command.js');
class Message {
   //Message constructor as specified by the assignment requirements. 
   constructor(name,commands){
    this.name = name;
    if (!name){throw Error("Name required.")};
   this.commands = commands;
  
   }
}

module.exports = Message;