const readline = require('readline');      // command to read the whole line

const rl = readline.createInterface({      // links the input and output for our file
  input: process.stdin,
  output: process.stdout
});

const questionsObject = {                                    // package my questions into an object we can access
  0: 'What\'s your name? Nicknames are also acceptable :)',
  1: 'What\'s an activity you like doing?',
  2: 'What do you listen to while doing that?',
  3: 'Which meal is your favourite (eg: dinner, brunch, etc.)',
  4: 'What\'s your favourite thing to eat for that meal?',
  5: 'Which sport is your absolute favourite?',
  6: 'What is your superpower? In a few words, tell us what you are amazing at!'

};

const answersObject = {                                   //// package my answers into an object we can access
  0: '',
  1: '',
  2: '',
  3: '',
  4: '',
  5: '',
  6: ''

};


let key = 0;

const survey = function() {

  if (key < 7) {                                              // loop thru all the 6 questions
    
    rl.question(`${questionsObject[key]}\n`, (answer) => {                    // rl.question('QUESTION HERE', (answer) => {
      answersObject[key] = answer;  // Logs our answer in the obect database  // TODO: Log the answer in a database
      key++;                       // increment the key to get to the next   // console.log(`Thank you for your valuable feedback: ${answer}`);
      survey();
    });
  } else {
    
    rl.close();           // closes the reading/sending files     The InterfaceConstructor instance is finished once the 'close' event is emitted.
    console.log('Your Profile Is Here:');      // log a message showing the profile
    setTimeout(() => console.log(`${answersObject[0]} really likes ${answersObject[1]} while listening to ${answersObject[2]}. Their favorite meal is ${answersObject[4]} for ${answersObject[3]}. The sport they like the most is ${answersObject[5]}. You should join the avengers with your superpower ${answersObject[6]}`), 2000);
  }

};

survey();


// r2.question(`What\'s an activity you like doing?`, (answer) => {
//   console.log(`Great choice : ${answer}`);

//   r2.close();

// });
// rl.question(`What do you listen to while doing that?`, (answer) => {
//   console.log(`Great choice : ${answer}`);

//   rl.close();

// });
// rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.)`, (answer) => {
//   console.log(`Hmmm tasty : ${answer}`);

//   rl.close();

// });
// rl.question(`What's your favourite thing to eat for that meal?`, (answer) => {
//   console.log(`Amazing pick : ${answer}`);

//   rl.close();

// });
// rl.question(`Which sport is your absolute favourite?`, (answer) => {
//   console.log(`${answer} is really fun!`);

//   rl.close();

// });
// rl.question(`What is your superpower? In a few words, tell us what you are amazing at!`, (answer) => {
//   console.log(`You should join the avengers with : ${answer}`);

//   rl.close();

// });