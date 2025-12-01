
/* 
  ftnSalutation is a conventional JS function
  it returns an array of strings where each
  element (or index) of the array consists
  of the salutations to pupulate inputSelect
  found in index.html
*/
<<<<<<< HEAD
function ftnSalutation() {
=======
function ftnSalutation(){
  //  implement your statement(s) here
>>>>>>> f9590f637c3e0f0120c70ac04ff5853a182e4710
  return new Array("Mr.", "Mrs.", "Ms.", "Dr.");
}

/* 
  ftnSalutation written as an ARROW function
  it uses the passed-in parameters to form
  a greeting to be returned to the function that
  calls it
*/
const ftnGreeting = (salutation, user) => {
<<<<<<< HEAD
  return `Hi, ${salutation} ${user}.`;
=======
    //  implement your statement(s) here
    return `Hi, ${salutation} ${user}!`;
>>>>>>> f9590f637c3e0f0120c70ac04ff5853a182e4710
}

/*
Complete the challenge statement below
Create the function validateInputs below
Hint: 
- validateInputs accepts two arguments (choice, name)
- name should include a default value name=""
- validateInputs returns false if either choice or name is incorrectly filled
- validateInputs returns true if both choice and name are correctly filled
*/
<<<<<<< HEAD

// const validateInputs = (choice, name = "") => {
//   if (!choice || !name)
//     return false;
//   else
//     return true;
// }

const validateInputs = (choice, name) => {
  return !!choice && !!name;
}

// function validateInputs(choice, name = "") {
//   if (!choice || !name)
//     return false;
//   else
//     return true;
// }

// console.log(validateInputs("asd", "asd"));
=======
function validateInputs(choice = "", name = ""){

  return choice !== "" && name !== "";

}
>>>>>>> f9590f637c3e0f0120c70ac04ff5853a182e4710
