// 1. Writing a function declaration
<<<<<<< HEAD

function ftnGreeting(salutation, user) {
    //   const msg = "Hi, " + salutation + " " + user;
    const msg = `Hi, ${salutation} ${user}`; // using interpolated strings to refactor code
    return msg;
}

// the 2 options below returns the same results
const result = ftnGreeting("Mr.", "Jones");
console.log(result);

console.log(ftnGreeting("Mr.", "Jones"));

// 2. Function returning the sum of 2 values
// Equip ftnTest to handle non-existent arguments by adding a default value to the parameters a and b
function ftnTest(a = 0, b = 0) {
=======
function ftnGreeting(salutation, user){

    const msg = `Hi, ${salutation} ${user}.`;
    
    return msg; 
}

console.log( ftnGreeting("Mr.", "Jones") );

// 2. Function returning a sum of two values
// 2.1. Equip ftnAdd to handle non-existent ARGUMENTS (passed to its parameters)
function ftnAdd(a = 0, b = 0){
>>>>>>> f9590f637c3e0f0120c70ac04ff5853a182e4710
    const result = a + b;
    return result;
}

<<<<<<< HEAD
console.log(ftnTest(10, 5));

console.log(ftnTest()); // will return 0 since the default values for the parameters are 0
=======
const sum = ftnAdd(10, 5);   // ftn will sent over 2 ARGUMENTS
console.log(sum);            // 15

const anothersum = ftnAdd(); // Passing in ZERO ARGUMENTS
console.log(anothersum);
>>>>>>> f9590f637c3e0f0120c70ac04ff5853a182e4710

// 3. Arrow Function
// Allow the function to handle non-existent arguments
const anotherftnGreeting = (salutation = "", name = "") => {
<<<<<<< HEAD
    // handle empty string values
    if (salutation.length == 0 && name.length == 0)
        return "Please enter your salutation and name";

    // otherwise return the greeting
    return `Hello, ${salutation} ${name}. Welcome to Generation Bootcamp.`;
};

console.log(anotherftnGreeting());
console.log(anotherftnGreeting("Mr", "John"));
=======

    // Handle empty string values 
    if(salutation.length == 0 && name.length == 0)
        return "Please enter your salutation and name.";

    // Otherwise, return the appropriate feedback
    return `Hello, ${salutation} ${name}. Welcome to Generation Bootcamp.`;
};

console.log(anotherftnGreeting("Ms.", "Fareeda"));
console.log(anotherftnGreeting());                  // No parameter is passed to function anotherftnGreeting
>>>>>>> f9590f637c3e0f0120c70ac04ff5853a182e4710
