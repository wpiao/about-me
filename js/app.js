'use strict';

// get user's name and send a greeing
let userName = prompt('Hello there, may I ask what is your name?');
alert(`Welcome to my page, ${userName}. Please participate in a fun guessing game.`);

let numberOfCorrectAnswer = 0;
function questionOneToFive() {

  // use For Loop to ask first five questions and use corresponding respons based on users answers.
  // question #1 - #5
  let answerStatements = ['You are correct!', 'You are wrong!', 'You typed a invalid answer!'];
  let questions = [
    'Question 1: Am I from Seattle? Type yes/no or y/n.',
    'Question 2: Do I like dogs? Type yes/no or y/n.',
    'Question 3: Is my favorite sport is basketball? Type yes/no or y/n.',
    'Question 4: Is my favorite color is yellow? Type yes/no or y/n.',
    'Question 5: Am I female? Type yes/no or y/n.'
  ];
  let myAnswers = [
    ['yes', 'y', 'no', 'n'],
    ['yes', 'y', 'no', 'n'],
    ['no', 'n', 'yes', 'y'],
    ['yes', 'y', 'no', 'n'],
    ['no', 'n', 'yes', 'y']
  ];

  for (let i = 0; i < questions.length; i++) {
    // console.log(questions[i]);
    let userInput = prompt(questions[i]).toLowerCase();
    if (userInput === myAnswers[i][0] || userInput === myAnswers[i][1]) {
      // console.log(answerStatements[0]);
      numberOfCorrectAnswer++;
      alert(answerStatements[0]);
    } else if (userInput === myAnswers[i][2] || userInput === myAnswers[i][3]) {
      // console.log(answerStatements[1]);
      alert(answerStatements[1]);
    } else {
      // console.log(answerStatements[2]);
      alert(answerStatements[2]);
    }
  }
}

questionOneToFive();

// question #6
function questionSix() {
  let numberInMind = Math.floor(Math.random() * 16) + 1;
  console.log(numberInMind);
  for (let chances = 4; chances > 0; chances--) {
    let answerSix = prompt(`Question 6: Guess a number (1-16) that in my mind. You have ${chances} chances left!`);
    if (parseInt(answerSix) === numberInMind) {
      numberOfCorrectAnswer++;
      alert(`You are correct. The number in my mind was ${numberInMind}!`);
      break;
    } else if (parseInt(answerSix) < numberInMind) {
      alert('It is too low, try a larger number!');
    } else if (parseInt(answerSix) > numberInMind) {
      alert('It is too high, try a smaller number!');
    } else {
      alert('Your input is invalid. Please Try an integer number from 1 to 16.');
    }

    if (chances === 1) {
      alert(`You already used all 4 chances. The number in my mind was ${numberInMind}!`);
    }
  }
}

questionSix();

// question #7
function questionSeven() {
  let correctAnswers = ['yellow', 'blue', 'green'];
  let attemps = 6;
  let findMatch = false;
  // Loop will end once the user guesses a correct answer or they run out of attemps.
  while (attemps && !findMatch) {
    let answerSeven = prompt(`Question 7: Please guess one of my three favorite colors. You have ${attemps} attemps left!`).toLowerCase();
    for (let i = 0; i < correctAnswers.length; i++) {
      if (answerSeven === correctAnswers[i]) {
        findMatch = true;
        break;
      }
    }

    attemps--;
    if (findMatch) {
      numberOfCorrectAnswer++;
      alert(`You are correct! My three favorite colors are ${correctAnswers[0]}, ${correctAnswers[1]}, and ${correctAnswers[2]}.`);
      break;
    } else if (attemps > 0) {
      alert(`You are wrong. Please try again, you have ${attemps} attemps left!`);
    } else {
      alert(`You already used all your 6 attemps. My three favorite colors are ${correctAnswers[0]}, ${correctAnswers[1]}, and ${correctAnswers[2]}.`);
    }
  }
}

questionSeven();

// tell the users scores
alert(`This is the end of the game, ${userName}. You got ${numberOfCorrectAnswer} out of 7 correct!`);
