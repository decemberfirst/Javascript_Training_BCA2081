// // INPUT PIN FROM USER
// // ASSUME ATTEMPT TO BE 3
// // ON EACH FAILED ATTEMPT REDUCE NUMBER OF ATTEMPT
// // IF ATTEMPT IS 0 BLOCK THE USER
// // USE FOR LOOP

// const ACTUAL_PIN = 12345;
// let NUMBER_OF_ATTEMPTS = 3;

// for (;;) {
//   const userInput = Number(prompt('Enter Your Pin ...'));
//   if (NUMBER_OF_ATTEMPTS && userInput == ACTUAL_PIN) {
//     console.log('You have been unlocked');
//   } else {
//     console.log('You have no attempt left or pin is incorrect');
//   }

//   // OPTIONAL CODE
//   if (NUMBER_OF_ATTEMPTS > 0 && userInput != ACTUAL_PIN) {
//     NUMBER_OF_ATTEMPTS--;
//   }
//   console.log(`You have ${NUMBER_OF_ATTEMPTS} LEFT`);
// }

// ---------------------------------------------------------

// use when you know how much iteration you have
// for(variable initialize; condition; increment / decrement) console.log("valid")

// use when you dont know how much iteration it takes
// while loop

// syntax : while(condition) {
// statement
// increment / decrement
//}

// let count = 0;

// while loop
// entry control loop

// while (count > 0) {
//   console.log('Hello world');
//   count--;
// }

// wap to print table of 5

let count = 1;

while (count <= 10) {
  console.log(`5 X ${count} = ${5 * count}`);
  count++;
}

// while (true) {
//   console.log('Hello world');
// }

// do while loop
// exit control loop

// do {

// } while(condition)

// do {
//   console.log('Hello World');
// } while (false);

let mycount = 4;

do {
  console.log(mycount); // 4 3 2 1
  mycount--;
} while (mycount > 0);
