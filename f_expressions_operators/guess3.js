let ans = 10;

let userInput = prompt("Guess the number. Press q or Q to quit.").toLowerCase();

<<<<<<< HEAD
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
=======
// as long as the user doesn't enter 'q' AND 'Q', run the loop
while (userInput !== 'q') {
    
    if(Number(userInput) === 10){                                                       // correct answer, provide an alert
        alert("You are correct");
        break;
    }
    else if(!userInput){                                                                // input empty string, provide an alert and prompt
        userInput = prompt("You answer is empty. Please enter a value").toLowerCase();
    }
    else{                                                                               // wrong answer, provide an alert and prompt
        
        const hint = (userInput < ans) ? "Higher" : "Lower";                            // provide hints to the user (on the range)

        alert(`Answer incorrect. ${hint} number please.`);
        userInput = prompt("Guess the number. Press q or Q to quit.").toLowerCase();

    }

}
>>>>>>> f9590f637c3e0f0120c70ac04ff5853a182e4710
