// ---------
// 1. ARRAYS
// ---------

// Basic array
// This is just an example, the best practice is to store a single data type to an array
const myArray = [1, 2, 3, 4, "Hello", true, null];
console.log(myArray.length);

// B) ARRAY METHODS

// i - map function of an array
// Implement your code here
const mappedArray = [1, 2, 3, 4, 5, 6];
const multiplyArrBy10 = mappedArray.map(item => item * 10);
console.log(multiplyArrBy10);


// ii - filter function of an array
// Implement your code here
const vowels = ["a", "e", "i", "o"];
// const filteredVowels = vowels.filter(vowel => vowel == "a" || vowel == "u");
const filteredVowels = vowels.filter((vowel) => {
    return vowel === "a" || vowel === "u"
});
console.log(filteredVowels);

// iii - sort function of an array
// Implement your code here
const nums = [1, 2, 3, 4, 5, 6];
const names = ["James", "Chris", "Max", "Lenon"];

// Sort by descending order
// Implement your code here
const descendNums = nums.sort((a, b) => a > b ? -1 : 1);
console.log(descendNums);

const ascendNums = nums.sort((a, b) => a > b ? 1 : -1);
console.log(ascendNums);

// Sort by descending order
// Implement your code here
const descendNames = names.sort((a, b) => a > b ? -1 : 1);
console.log(descendNames);

const ascendNames = names.sort(); // array.sort() sorts in ascending by default
console.log(ascendNames);

// iv - reduce function of an array
// Implement your code here
const numbers = new Array(1, 2, 3, 4);
const productOfArr = numbers.reduce((a, b) => a * b);
console.log(productOfArr);

// another approach of applying a reduce function of an array
// Implement your code here
const arr = new Array(2, 3, 4, 5);
function product(a, b) {
    return a * b;
}
const resultOfProduct = arr.reduce(product);
console.log(resultOfProduct);

// append elements to an existing array
const teamList = ["Aaron", "Ben", "Charles", "Dennis"];
teamList.push("Evan");
console.log(teamList);
console.log(teamList.length);

// remove last element of an existing array
teamList.pop();
console.log(teamList);
console.log(teamList.length);

// shift and unshift
const mag7 = ["FB", "AMZN", "AAPL", "TSLA", "GOOG"];
console.log(mag7.shift());
console.log(mag7);

// unshift
mag7.unshift("META", "NVDA", "MSFT");
console.log(mag7);

// splice (insert or replace data in an array)
const bballTeam = ["Jordan", "Pippen", "Bill"];
const index = 2;
const newPlayer = "Steve Carr";
// 0 and 1 in the middle represents adding and replacing
bballTeam.splice(index, 0, newPlayer);
console.log(bballTeam);

// replaces last index element with another element
bballTeam.splice(bballTeam.length - 1, 1, "Rodman");
console.log(bballTeam);

// ---------
// 2. LOOPS
// ---------

// i - for loops (Simulate a countdown using a for loop)
// Implement your code here

// Count up from 1 to 10
const max = 10;
for (let index = 1; index <= 10; index++) {
    console.log(index);
}

console.log("");

// Count down from 10 to 1; ternary operation
for (let index = max; index >= 0; index--) {
    (index === 0) ? console.log("Merry X'mas!") : console.log(index);
}

// ii - for-each loop
// Implement your code here
const tickerSymbols = ["META", "AMZN", "GOOG", "MSFT"];

for (let index = 0; index < tickerSymbols.length; index++) {
    console.log(`${index + 1}. ${tickerSymbols[index]}`);
}

tickerSymbols.forEach(element => {
    console.log(element)
});

tickerSymbols.forEach((element, index) => {
    console.log(`${index + 1}. ${element}`)
});

// iii - do-while loop (execute first, check for the condition later)
// Implement your code here
let i = 0;
do {
    console.log(i);
    i++;
} while (i <= 10);

// iv - while loop (check the conditions first before running the while loop)
// Implement your code here
let j = 0;
while (j <= 10) {
    console.log(j);
    j++;
}