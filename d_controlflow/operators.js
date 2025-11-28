// Using && operator
console.log("&& operator checks for condition 1 AND 2");
let x = 5;
let y = 10;
console.log(x > 0 && y > 0); // true and true = true
console.log(x > 0 && y < 0); // true and false = false
console.log(x < 0 && y > 0); // false and true = false
console.log(x < 0 && y < 0); // false and false = false
console.log("");

// Using || operator
console.log("|| operator checks for condition 1 OR 2");
let a = 5;
let b = 10;
console.log(a > 0 || b > 0); // true or true = true
console.log(a > 0 || b < 0); // true or false = true
console.log(a < 0 || b > 0); // false or true = true
console.log(a < 0 || b < 0); // false or false = false
console.log("");

// Using ! operator
console.log("! 'Not Equal' operator checks if 2 values are not equal,");
let Yes = true;
let No = false;
console.log(!Yes); // yes is set to true, so ! will set to false
console.log(!No); // no is set to false, so ! will set to true
console.log("");

// Using comparison operators
console.log("Comparison operator compares multiple values");
const c = 10;
const d = 20;
console.log(c < d); // true
console.log(c > d); // false
console.log(c <= d); // true
console.log(c >= d); // false
console.log(c == d); // false
console.log(c != d); // true
console.log(c === d); // false
console.log(c !== d); // true
console.log("");

// Using === operators, != checks value, !== checks type and value
console.log("=== operator checks if both type and value are the same");
const e = "10";
const f = 10;
console.log(e == f); // true
console.log(e === f); // false
console.log("");

let z = 10;
let v = "10";
console.log(z !== v);