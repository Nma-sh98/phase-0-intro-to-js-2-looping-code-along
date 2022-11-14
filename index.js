// Code your solutions in this file
function writeCards(names, eventName) {
    // create a new, empty array to hold the messages;
    let newArr = [];
  
    // iterate through the input array
    for (let i = 0; i < names.length; i++) {
      // inside the loop, build out the 'thank you' message for each name
      newArr.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
  
    return newArr;
  }
  
  function countDown(n) {
    while (n > 0) {
      console.log(n);
      n -= 1;
    }
    console.log(n);
  }
  console.log(countDown(10));