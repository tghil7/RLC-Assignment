const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

  // 7 tests here!
  
  //Creating a position and a rover object for testing purposes
  

  //1
  it("constructor sets position and default values for mode and generatorWatts", function(){
    let thisPosition = 5;
    let rover = new Rover(thisPosition);
    expect(rover.position).toEqual(thisPosition);
  });

//2
  it("response returned by receiveMessage contains name of message", function(){
     let thisPosition = 5;
     let rover = new Rover(thisPosition);
     let testCommand = [new Command('STATUS_CHECK'), new Command('MODE_CHANGE', 'LOW_POWER')];
     let message = new Message("Me name Pedro", testCommand); 
    expect(rover.receiveMessage(message).name).toEqual(message.name);
  });


   it("response returned by receiveMessage includes two results if two commands are sent in the message", function(){
     let thisPosition = 5;
     let rover = new Rover(thisPosition);
     let testCommand = [new Command('STATUS_CHECK'), new Command('MODE_CHANGE', 'LOW_POWER')];
     let message = new Message("Me name Pedro", testCommand); 
    expect(rover.receiveMessage(message).results.length).toEqual(2);
  });

//3
it("responds correctly to status check command", function(){
     let thisPosition = 5;
     let rover = new Rover(thisPosition);
     let testCommand = [new Command('STATUS_CHECK')];
     let message = new Message("Me name Pedro", testCommand);
     let cosmo = {completed : true, roverStatus: { mode: rover.mode, generatorWatts: rover.generatorWatts, position: rover.position }};
    
    expect(rover.receiveMessage(message).results).toContain(cosmo);
    
  }); 


 
  //5
  
  it("responds correctly to mode change command", function(){
    let thisPosition = 5;
     let rover = new Rover(thisPosition);
    let command = [new Command('MODE_CHANGE', 'LOW_POWER')];
    let name = "My name test";
    let message = new Message (name, command); 
    rover.receiveMessage(message);
    expect(rover.mode).toEqual('LOW_POWER');
  });


  //6
  it("responds with false completed value when attempting to move in LOW_POWER mode", function(){
    let thisPosition = 5;
     let rover = new Rover(thisPosition);
    let command1 = [new Command ('MODE_CHANGE', 'LOW_POWER')];
    let name = "My name test";
    let message1 = new Message (name, command1);
    rover.receiveMessage(message1);
    let command2 = [new Command('MOVE', 30)];
    let messageFinal = new Message(name, command2);
    let modeLowPowerResult = {completed : false};

    expect(rover.receiveMessage(messageFinal).results).toContain(modeLowPowerResult);
  });

//7
 it("responds with position for move command", function(){
   let thisPosition = 5;
     let rover = new Rover(thisPosition);
 let myCommand = [new Command ('MOVE', 30)];
 let name = "Rover, move";
 let moveMessage = new Message (name, myCommand);
 rover.receiveMessage(moveMessage);
  expect(rover.position).toEqual(30);
 }); 
 
 
  
 
  
 


 

});
