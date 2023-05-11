//1.Write an asynchronous function that accepts a
 //message string and a delay time in milliseconds. 
 //The function should log the message
 //to the console after the specified delay time.
async function messageWithDelay(message, delayTime) {
    await new Promise(resolve => setTimeout(resolve, delayTime));
    console.log(message);
  }
  messageWithDelay("Hello there this is Emma speaking", 1000);

 //2.You have an array of user IDs and a function 
 //getUserData(id) that returns a Promise with user data when 
 //given a user ID. Write an asynchronous function that fetches and logs 
 //the data for each user ID one by one, in sequence.

//  async function fetchAndLogUserData(userIds) {
//   for (let i = 0; i < userIds.length; i++) {
//     const userData = await getUserData(userIds[i]);
//     console.log(userData);
//   }
// }

 