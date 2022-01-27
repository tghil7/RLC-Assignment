class Rover {
   // Constructor for Rover class as specified by the assignment requirements. 
   constructor(position){
     this.position = position;
     this.mode = 'NORMAL';
     this.generatorWatts = 110;
   }


receiveMessage(message){
  let commandArray = message.commands;
  let objectName = message.name;//Variable holding the name included in the message
 
   let obj1 = {};//Host the object result of MODE_CHANGE command
   let myObj = {};//Host the object results from STATUS_CHECK command
    let obj3 = {}; //Host the object result from MOVE command 
   let objectToReturn = {}; //Bbject result from running the receiveMessage function.


  let arrayOfResults = [];
  //Assuming the comands part of the message passed is an array, loop through the different commands in the array and pass the result to the specific object created to hold the result object.
   for (let i in message.commands){
      //Loop through each command from the Commands array in the message object

      switch(message.commands[i].commandType){
        //Use switch to match each possible comamand, and return the appropriate response object 
        case 'MODE_CHANGE':
          this.mode = message.commands[i].value; 
               
          obj1.completed = true;
          
          //Add the response object to the results array to be included in the object returned by the function receiveMesage()
          arrayOfResults.push(obj1);
          break;

      case "MOVE":
          if (this.mode ==='LOW_POWER')
          {
            obj3 = {completed : false};
          }
          else{ this.position = message.commands[i].value; 
          obj3= {completed : true};
          }
           //Add the response object to the results array to be included in the object returned by the function receiveMesage()
          arrayOfResults.push(obj3);
         
          break;

      case 'STATUS_CHECK':
         myObj.completed = true;
          let roverStatusObj = {};
          roverStatusObj.mode = this.mode;
          roverStatusObj.generatorWatts = this.generatorWatts;
          roverStatusObj.position = this.position;
         myObj.roverStatus = roverStatusObj;
          //Add the response object to the results array to be included in the object returned by the function receiveMesage()
          arrayOfResults.push(myObj);          

     
    }
  }

 
//Add the message name and array of the results as attributes to the object returned by the receiveMessage() funcation 
  objectToReturn = {
    name: objectName,
    results: arrayOfResults 
  };
  
 return objectToReturn;
}

   
}

module.exports = Rover;