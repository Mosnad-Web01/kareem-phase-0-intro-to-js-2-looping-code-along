// Code your solutions in this file
const names = ['Guadalupe', 'Ollie', 'Aki'];
const event = 'gift!';
function writeCards(names, event) {
    const messages = [];
  
    for (let i = 0; i < names.length; i++) {
      const name = names[i];
      const message = `Thank you, ${name}, for the wonderful surprise gift!`;
      messages.push(message);
    }
  
    return messages;
  }
  
  function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }  
  const thankYouMessages = writeCards(names, event);
  console.log(thankYouMessages);
  
  const countdownNumber = 10;
  countDown(countdownNumber); 