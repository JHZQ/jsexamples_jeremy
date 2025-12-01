// 1. Trim a string
let wordWithTrim = "        FSD     ";
console.log(`"${wordWithTrim.trim()}"`);
console.log(`"${wordWithTrim.trimStart()}"`);
console.log(`"${wordWithTrim.trimEnd()}"`);

// 2. toString (convert a number into string);
let statusCode = 404;
console.log(typeof statusCode.toString());
console.log(String(statusCode).toString());

// 3. toString (TypeCast a boolean into string)
let boolVal = true;
console.log(String(boolVal).toString());

// 4. Splitting a string
let fullName = "John Doe";
let splitName = fullName.split(" ");
console.log(splitName.length);
console.log(`Welcome ${splitName[0]} and ${splitName[1]} to our site!`);

// 5. Split a string and obtain the string by X elements
let sentence = "Hello World JS Coders";
let splitInstances = sentence.split(" ", 3);
console.log(splitInstances);

console.log(splitInstances[0].split(""));

// 6. Split the string based on today's date and render a custom
const currDate = Date.now();
const today = new Date(currDate);
let splitToday = today.toDateString();
splitToday = splitToday.split(" ");
console.log(splitToday[0]);

let msg = "";

switch (splitToday[0]) {
    case "Mon":
        msg = "Monday Blues";
        break;
    case "Tue":
    case "Wed":
    case "Thu":
        msg = "Work, work!";
        break;
    case "Fri":
        msg = "It's friday!";
        break;
    default:
        msg = "Weekend is here";
}

console.log(msg);

// 7. Slicing a String (when working with String Object methods, each character is treated as an array element)
let sentence2 = "Hello World";                          // ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"];
let slicedResult = sentence2.slice(0, 5);               // slicing based on start index (0) and end index (5-1)
console.log(slicedResult); 