let ans = 10;

let userInput = prompt("Guess the number. Press q or Q to quit.").toLowerCase();

while (userInput !== 'q') { // as long as the user doesn't enter 'q' AND 'Q', run the loop
    if (Number(userInput) === 10) { // if user enters correct answer, provide an alert
        alert("You are correct");
        break;
    }
    else if (!userInput) {  // if user enters empty string, provide a prompt
        userInput = prompt("Your answer is empty, please try again").toLowerCase();
    }
    else { // if user enters wrong answer, provide a prompt
        // provide  hits to the user (on the range on whether the answer is above or below the actual answer)
        const hint = (userInput < ans) ? "too low" : "too high";

        alert(`Your answer is ${hint}`);
        userInput = prompt("Your answer is wrong, please try again").toLowerCase();
    }
}
