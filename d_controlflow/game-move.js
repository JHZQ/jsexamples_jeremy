// Allowable movements
const UP = "w";
const DOWN = "s";
const LEFT = "a";
const RIGHT = "d";

// Track the movements of a player
let move = UP;

switch (move) {
    case UP: // if (move === UP)
        console.log("Moving up!");
        break;
    case DOWN: // else if (move === DOWN)
        console.log("Moving down!");
        break;
    case LEFT: // else if (move === LEFT)
        console.log("Moving left!");
        break;
    case RIGHT: // else if (move === RIGHT)
        console.log("Moving right!");
        break;

    default: // else
        console.log("Your legs are not working as they should, you have failed.");
        break;
}