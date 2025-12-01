// import the prompt-sync library
<<<<<<< HEAD
const prompt = require("prompt-sync")({ sigint: true }); // allows CTRL+C to terminate the app

function greetUser() {
  let userName = prompt("please enter your name");
  if (userName.trim()) {
    console.log(`Welcome to FSD ${userName}!!!!!`);
  } else {
    console.log("We did not receive your name");
  }
}
greetUser();
=======
const prompt = require('prompt-sync')({sigint: true});  // allows CTRL+C to terminate the app

// let's try abit of a trivia using a prompt the terminal console
function greetUser(){
    let userName = prompt("Please enter your name: ");
    
    if(userName.trim()){    // "  " will be trimmed, guard rail to prevent spaces being used
        console.log(`Welcome to FSD ${userName}!!!`);
    }else{
        console.log("We did not receive your name.");
    }
}

greetUser();
>>>>>>> f9590f637c3e0f0120c70ac04ff5853a182e4710
