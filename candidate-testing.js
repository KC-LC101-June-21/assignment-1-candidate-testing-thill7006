const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
let correctAnswer;
let candidateAnswer;
let questions;
let correctAnswers;
let candidateAnswers;
questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
candidateAnswer = "";

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
const input = require("readline-sync");
candidateName = input.question("What is your name? ");
}

candidateAnswers = [];
function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
for (let i = 0; i < questions.length; i++) {
  candidateAnswers.push(input.question(questions[i]));
  }
  console.log('\n \n')
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  let numCorrect = 0;
  for (let i = 0; i < correctAnswers.length; i++) { 
    if (candidateAnswers[i] === correctAnswers[i]) {
      numCorrect += 1;
    } else {
      numCorrect += 0;
    }
  }
  let grade = (numCorrect / questions.length) * 100;
  console.log(`Candidate Name: ${candidateName}`);
  for(let i=0; i<questions.length; i++) {
    console.log(`${i+1}) ` + questions[i]);
    console.log(`Your Answer: ${candidateAnswers[i]}`)
    console.log(`Correct Answer: ${correctAnswers[i]} \n \n`)
  }
  console.log(`>>> Overall Grade: ${grade}% (${numCorrect} out of ${correctAnswers.length} correct) <<<`);
  if (grade >= 80) {
    console.log(">>> Status: PASSED <<<") 
  } else {
    console.log(">>> Status: FAILED <<<")
  }
  return grade;
}



function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(`Hello, ${candidateName} \n`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};