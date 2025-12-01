const ans = 88;                                         // answer
// const answerLookup = {
//     "one": 1,
//     "two": 2,
//     "three": 3,
//     "four": 4,
//     "five": 5,
//     "six": 6,
//     "seven": 7,
//     "eight": 8,
//     "nine": 9,
//     "ten": 10,
//     "eleven": 11,
//     "twelve": 12,
//     "thirteen": 13
// };

const feedbackGuess = "Guess the number";               // ask user to guess a number
const feedbackQuit = "Press [q] or [Q] to quit.";       // allows user to quit
const feedbackCorrect = "Your answer is correct!";      // displays when answer is correct
const feedbackWrong = "Wrong answer!";                  // displays when answer is wrong
const feedbackTooHigh = "You are too high";             // displays when number is too high
const feedbackTooLow = "You are too low";               // displays when number is too low
const feedbackEmpty = "This is empty, please try again" // displays when number is empty

let userInput = prompt(feedbackGuess.concat(" ", feedbackQuit)).toLowerCase();

// function evaluate String answer
// function evaluateStringAnswer(userInput) {
//     return answerLookup[userInput] === ans;
// }

while (userInput !== 'q') {

    let correctAns = false;     // flag (instantiated as false)
    let feedback = "";          // message placeholder (instantiated as empty string "")

    switch (true) {
        case (Number(userInput) === ans || text2num(userInput) === ans):           // answer is correct
            correctAns = true;
            feedback = feedbackCorrect;
            break;

        case (!userInput):                          // answer is empty
            correctAns = false;
            feedback = feedbackEmpty;
            break;

        case (Number(userInput) > ans || text2num(userInput) > ans):             // answer is too high
            correctAns = false;
            feedback = feedbackTooHigh;
            break;

        case (Number(userInput) > ans || text2num(userInput) < ans):             // answer is too low
            correctAns = false;
            feedback = feedbackTooLow;
            break;

        default:                                    // answer is wrong
            correctAns = false;
            feedback = feedbackWrong;
    }

    // prepare the feedback to user if answer is correct
    if (correctAns) {
        alert(feedback);
        break;
    }

    // otherwise if answer is wrong, ask for user input again
    alert(feedback);
    userInput = prompt(feedbackGuess.concat(" ", feedbackQuit)).toLowerCase();
}
