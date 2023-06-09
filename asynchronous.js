//1.Write an asynchronous function that accepts a
 //message string and a delay time in milliseconds. 
 //The function should log the message
 //to the console after the specified delay time.
async function messageDelay(message, delayTime) {
    await new Promise(resolve => setTimeout(resolve, delayTime));
    console.log(message);
  }
  messageDelay("Hello there this is Emma speaking", 1000);

 //2.You have an array of user IDs and a function 
 //getUserData(id) that returns a Promise with user data when 
 //given a user ID. Write an asynchronous function that fetches and logs 
 //the data for each user ID one by one, in sequence.

 function fetchLogUserData(ids) {
  for (let w = 0; w < ids.length; w++) {
    const userData = getUserData(ids[w]);
    console.log(userData);
  }
}
  const ids = [1, 2, 3, 4, 5];
  console.log(fetchLogUserData(ids));


//You have an asynchronous function performTask() 
//that returns a Promise. The Promise resolves if
 //the task is successful and rejects if there's an error. 
 //Write a function that calls performTask() and logs
 // a custom success message if the task is successful, 
  //and a custom error message if there's an error.
  
  async function givenTask() {
    await performTask()
      .then(() => {
        console.log("Task completed successfully!");
      })
.catch(() => {
        console.log("Task failed!");
      });
  }
  console.log(handleTask());

 

 


 