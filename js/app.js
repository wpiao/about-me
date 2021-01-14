'use strict';

// get user's name and send a greeing
let userName = prompt('Hello there, may I ask what is your name?');
alert(`Welcome to my page, ${userName}. Please participate in a fun guessing game.`);

let correctStatement = 'You are correct!';
let wrongStatement = 'You are wrong!';
let invalidStatement = 'You typed a invalid answer!';
// 5 questions; only accepts yes/no or y/n; case insensitive
// quesiont #1
let questionOne = 'Am I from Seattle? Type yes/no or y/n.';
let answerOne = prompt(questionOne).toLowerCase();
if (answerOne === 'yes' || answerOne === 'y') {
  // console.log(correctStatement);
  alert(correctStatement);
} else if (answerOne === 'no' || answerOne === 'n') {
  // console.log(wrongStatement);
  alert(wrongStatement);
} else {
  // console.log(invalidStatement);
  alert(invalidStatement);
}

// quesiont #2
let questionTwo = 'Do I like dogs? Type yes/no or y/n.';
let answerTwo = prompt(questionTwo).toLowerCase();
if (answerTwo === 'yes' || answerTwo === 'y') {
  // console.log(correctStatement);
  alert(correctStatement);
} else if (answerTwo === 'no' || answerTwo === 'n') {
  // console.log(wrongStatement);
  alert(wrongStatement);
} else {
  // console.log(invalidStatement);
  alert(invalidStatement);
}

// question #3
let questionThree = 'Is my favorite sport is basketball? Type yes/no or y/n.';
let answerThree = prompt(questionThree).toLowerCase();
if (answerThree === 'no' || answerThree === 'n') {
  // console.log(correctStatement);
  alert(correctStatement);
} else if (answerThree === 'yes' || answerThree === 'y') {
  // console.log(wrongStatement);
  alert(wrongStatement);
} else {
  // console.log(invalidStatement);
  alert(invalidStatement);
}

// question #4
let questionFour = 'Is my favorite color is yellow? Type yes/no or y/n.';
let answerFour = prompt(questionFour).toLowerCase();
if (answerFour === 'yes' || answerFour === 'y') {
  // console.log(correctStatement);
  alert(correctStatement);
} else if (answerFour === 'no' || answerFour === 'n') {
  // console.log(wrongStatement);
  alert(wrongStatement);
} else {
  // console.log(invalidStatement);
  alert(invalidStatement);
}

// question #5
let questionFive = 'Am I female? Type yes/no or y/n.';
let answerFive = prompt(questionFive).toLowerCase();
if (answerFive === 'no' || answerFive === 'n') {
  // console.log(correctStatement);
  alert(correctStatement);
} else if (answerFive === 'yes' || answerFive === 'y') {
  // console.log(wrongStatement);
  alert(wrongStatement);
} else {
  // console.log(invalidStatement);
  alert(invalidStatement);
}
