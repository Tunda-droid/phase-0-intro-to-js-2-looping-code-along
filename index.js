// Code your solutions in this file
function writeCards(names, eventName) {
    // Step 1: Create an empty array to hold the messages
    const messages = [];
  
    // Step 2: Loop through each name in the names array
    for (let i = 0; i < names.length; i++) {
      // Step 3: Create the thank-you message
      const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
  
      // Step 4: Push the message into the array
      messages.push(message);
    }
  
    // Step 5: Return the array of messages
    return messages;
  }

  function countDown(number) {
    // Step 1: Loop while number is greater than or equal to 0
    while (number >= 0) {
      console.log(number); // Step 2: Log current number
      number--; // Step 3: Decrement the number
    }
  }

  