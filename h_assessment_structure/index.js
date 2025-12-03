const prompt = require("prompt-sync")({ sigint: true });

// Game elements/assets constants
const GRASS = "░";
const HOLE = "O";
const HAT = "^";
const PLAYER = "*";

// UP / DOWN / LEFT / RIGHT / QUIT keyboard constants
const UP = "w";
const DOWN = "s";
const LEFT = "a";
const RIGHT = "d";
const QUIT = "q";

// MSG_UP / MSG_DOWN / MSG_LEFT / MSG_RIGHT / MSG_ QUIT / MSG_INVALID message constants
const MSG_UP = "You moved up";
const MSG_DOWN = "You moved down";
const MSG_LEFT = "You moved left";
const MSG_RIGHT = "You moved right";
const MSG_QUIT = "YOU DARE RUN AWAY???????????";
const MSG_INVALID = "Try moving your legs";
const MSG_WELCOME = "\n*************************\nWelcome to Find Your Hat!\n*************************\n";

// WIN / LOSE / OUT / QUIT messages constants
const WIN = "Congratulations, you found the hat! You are now the King!";
const LOSE = "You fell into the hole, the neverending abyss awaits you";
const OUT = "You went outside of the safe grass, IT IS COMING FOR YOU";

// MAP ROWS, COLUMNS AND PERCENTAGE
const ROWS = 10;
const COLS = 10;
const PERCENT = 0.2; // sets the % of randomisation of holes in game field

class Field {

  /**
   * constructor, a built-in method of a class (invoked when an object of a class is instantiated)
   * @param {Array} field - field is pass in as an Array to populate the property field of this class
   */
  constructor(field = null) {
    this.field = field;
    this.gamePlay = false;                // game is by default = false
    this.playerPosition = { y: 0, x: 0 }; // player position is by default y=0, x=0
  }

  /**
   * generateField is a static method, returning a 2D array of the fields
   * @param {Number} rows - rows for the field
   * @param {Number} cols - cols for the field
   * @param {Number} percent - percentage of random holes
   * @returns {Array} - 2D array to be used by the instance of the game
   */
  static generateField(rows, cols, percent) {

    const map = new Array();

    // generate fields by rows and cols passed in
    for (let row = 0; row < rows; row++) {    // for each row
      map[row] = new Array();                 // create a new array

      for (let col = 0; col < cols; col++) {  // for each col
        map[row][col] = Math.random() > percent ? GRASS : HOLE;  // use Math.random() to randomize the holes in the map
      }
    }
    return map;
  }

  /**
   * welcomeMessage is a static method, displays a string
   * @param {String} msg - is a string value to print out to the user at the start of the game
   */
  static welcomeMessage(msg) {
    console.log(msg);
  }

  // setHat positions the hat along a random x and y position within field array
  setHat() {
    const xHat = Math.floor(Math.random() * (ROWS - 1)) + 1;
    const yHat = Math.floor(Math.random() * (COLS - 1)) + 1;
    this.field[yHat][xHat] = HAT;
  }

  // printField displays the updated status of the field position
  printField() {
    this.field.forEach((row) => {
      console.log(row.join(" "));
    })
  }

  // updateMove displays the move (key) entered by the user
  /**
   * 
   * @param {String} m - passes in the value representing the player's move
   * @returns 
   */
  updateMove(m = "") {
    if (m === UP) return console.log(MSG_UP);       // Tell user he move up
    if (m === DOWN) return console.log(MSG_DOWN);   // Tell user he move down
    if (m === LEFT) return console.log(MSG_LEFT);   // Tell user he move left
    if (m === RIGHT) return console.log(MSG_RIGHT); // Tell user he move right
    if (m === QUIT) return console.log(MSG_QUIT);   // Tell user he quit the game
    return console.log(MSG_INVALID);                // Tell user he entered an invalid value
  }

  /**
   *
   * @param {*} input - accept the value of the player's move (UP, DOWN, LEFT, RIGHT,) 
   */
  updateGame(input) {
    // capture player's current position where y = rows, x = cols
    let currentY = this.playerPosition.y;
    let currentX = this.playerPosition.x;

    // calculate new position based on input by increasing or decreasing the y or x value
    switch (input.toLowerCase()) {
      case UP:
        this.updateMove(UP);
        currentY--;
        break;
      case DOWN:
        this.updateMove(DOWN);
        currentY++;
        break;
      case LEFT:
        this.updateMove(LEFT);
        currentX--;
        break;
      case RIGHT:
        this.updateMove(RIGHT);
        currentX++
        break;
      case QUIT:
        this.updateMove(QUIT);
        break;
      default:
        this.updateMove();
        break;
    }

    // check if player is out of bounds
    if (currentY < 0 || currentY >= this.field.length ||
      currentX < 0 || currentX >= this.field.length) {
      console.log(OUT);
      this.gamePlay = false;
      return;
    }

    // check what's at the new position
    const newPosition = this.field[currentY][currentX];

    // check if player found the hat
    if (newPosition === HAT) {
      console.log(WIN);
      this.gamePlay = false;
      return;
    }

    // check if player fell into a hole
    if (newPosition === HOLE) {
      console.log(LOSE);
      this.gamePlay = false;
      return;
    }

    // sets the previous position to grass
    this.field[this.playerPosition.y][this.playerPosition.x] = GRASS;

    // update player position
    this.playerPosition.y = currentY;
    this.playerPosition.x = currentX;

    // place player at new position
    this.field[currentY][currentX] = PLAYER;
  }

  // start() a method of the class to start the game
  start() {
    this.gamePlay = true;       // start the game
    this.field[0][0] = PLAYER;  // positioning the player on the field, based on players default position
    this.setHat();              // the position of the hat

    // while gamePlay === true, track player moves and updates
    do {
      console.log();         // Adds spacing above the game
      this.printField();     // print the formatted field
      console.log();         // Adds spacing below the game
      const input = prompt("(w)up, (s)down, (a)left, (d)right, (q)exit: ");

      // updates the state of game
      this.updateGame(input);

      if (input == QUIT)
        this.gamePlay = false;  // another way to end program: process.exit();

    } while (this.gamePlay);
  }
}

// Generate a new field - using Field's static method: generateField
const gameField = Field.generateField(ROWS, COLS, PERCENT);

// Generate a welcome message
Field.welcomeMessage(MSG_WELCOME);

// Create a new instance of the game
const game = new Field(gameField);

// Invoke method start(...) from the instance of game object
game.start();