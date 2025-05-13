// -------------------LOOPS------------------------------

// WAP TO PRINT YOUR NAME 50 TIMES (DON'T BOTHER TO USE LOOPS)

// FOR LOOP
// WHILE LOOP
// DO WHILE LOOP
//  OTHER DIFFERS FROM TASTE OF LANGUAGES

// SYNTAX: for(initialize_count; condition; increment/decrement) { }

for (let count = 1; count <= 100; count++) {
  if (count % 3 == 0 && count % 5 == 0) {
    console.log(count);
  }
}

// WAP TO PRINT NUMBER FROM 1 TO 100
// WAP TO PRINT NUMBER FROM 100 TO 1
// WAP TO PRINT EVEN NUMBER FROM 1 TO 100

// for (let counter = 2; counter <= 100; counter = counter + 2) {
//   console.log(counter);
// }

// WAP TO PRINT ODD NUMBER FROM A TO B
// TAKE A AND B FROM USER
// IF USER GIVES A=2 YOU HAVE TO START PRINTING FROM 3
// let A = Number(prompt('Enter first number'));
// let B = Number(prompt("Enter second number"))

// for()

let A = Number(prompt('Enter first number')); // 1
let B = Number(prompt('Enter second number')); //10

for (let count = A; count <= B; count++) {
  if (count % 2 == 1) {
    console.log(count);
  }
}

// BOYS: PRINT TABLE OF 5
// GIRLS: PRINT TABLE OF 2

// output should be in this format
// 5 X 1 = 5
// 5 X 2 = 10
// 5 X 3 = 15
// 5 X 4= 20
// 5 X 5 = 25

for (let count = 1; count <= 10; count++) {
  console.log(`5 X ${count} = ${5 * count}`);
}
