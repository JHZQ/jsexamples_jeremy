// 2D array
const array2D = [
    [3, 2, 7],
    [2, 9, 5],
    [5, 1, 5],
];

console.log(array2D);

// assessing the elements of a 2D array
// array[row][col]
const element = array2D[1][1];
console.log(element);

// print all columns in first row
const e1 = array2D[0][0]; // row 0, col 0
const e2 = array2D[0][1]; // row 0, col 1
const e3 = array2D[0][2]; // row 0, col 2
console.log(e1, e2, e3);

// print all columns in second row
const e4 = array2D[1][0]; // row 1, col 0
const e5 = array2D[1][1]; // row 1, col 0
const e6 = array2D[1][2]; // row 0, col 2
console.log(e4, e5, e6);

const myField = [
    ['░', '░', 'O', '░'],
    ['*', 'O', '░', 'O'],
    ['░', '^', '░', '░'],
];
console.log();

// i referred to as row
// j referred to as column

// Dynamic 2D array
const rows = 3;
const cols = 3;
const arr2D = [];

// Nested for loop (loop inside a loop)
// 1. Manages per row
for (let i = 0; i < rows; i++) {
    arr2D[i] = []; // create a new instance on an Array (as the row)
    
    // 2. Manages the columns per row
    for (let j = 0; j < cols; j++) {
        arr2D[i][j] = '░'; // Sets the value inside the array such as numbers or strings
    }
}

console.log(arr2D);