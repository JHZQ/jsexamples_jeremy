// Using a Promise Object that takes in callback function to create a delay
const sleep = async (delay) => new Promise((resolve) => setTimeout(() => {
<<<<<<< HEAD
    console.log("I am sleeping for two seconds");
    return resolve();
=======
  console.log("I am sleeping for two seconds.");
  return resolve();
>>>>>>> f9590f637c3e0f0120c70ac04ff5853a182e4710
}, delay));

await sleep(2000);

// When using setTimeout, we are essentially applying a callback function as well
<<<<<<< HEAD
// After 2 seconds, setTimeout should run the callback function with console.log
setTimeout(() => {
    console.log("I've been waiting for 2 seconds");
}, 2000);
=======
// After two seconds, setTimeout should run the callback function with console.log(...)
setTimeout(() => {
  console.log("I've been waiting for 2 seconds.");
}, 2000);

>>>>>>> f9590f637c3e0f0120c70ac04ff5853a182e4710
