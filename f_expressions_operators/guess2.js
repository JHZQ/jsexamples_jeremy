let ans = 10;
let ansString = "ten";

let userInput = prompt("Guess the number. Press q or Q to quit.").toLowerCase();

while (userInput !== 'q') { // as long as the user doesn't enter 'q' AND 'Q', run the loop
    if (Number(userInput) === 10 || userInput === "ten") { // if user enters correct answer, provide an alert
        alert("You are correct");
        break;
    }
    else if (!userInput) {  // if user enters empty string, provide a prompt
        userInput = prompt("Your answer is empty, please try again").toLowerCase();
    }
    else { // if user enters wrong answer, provide a prompt
        userInput = prompt("Your answer is wrong, please try again").toLowerCase();
    }
}
