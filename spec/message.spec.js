const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Message class", function() {
  it ("throws error if a name is NOT passed into the constructor as     the first parameter.", function(){
    let newCommand = [new Command('STATUS_CHECK'), new Command('MODE_CHANGE', 'LOW_POWER')];
    expect(function(){new Message('',newCommand)}).toThrow(new Error('Name required.')); 
  });

  it ("constructor sets name.", function(){
    let newCommand = [new Command('STATUS_CHECK'), new Command('MODE_CHANGE')];
    let name = "My name test";
    let test = new Message (name, newCommand);
    expect(test.name).toEqual("My name test"); 
  });

  it ("contains a commands array passed into the constructor as 2nd argument.", function(){
    let newCommand = [new Command('STATUS_CHECK'), new Command('MODE_CHANGE', 'LOW_POWER')];
   let name = "My name test";
   let test = new Message (name, newCommand);
   expect(test.commands).toEqual([new Command('STATUS_CHECK'), new Command('MODE_CHANGE', 'LOW_POWER')]); 
  });


});


