// ------BREAK AND CONTINUE----------

for (let i = 1; i <= 100; i++) {
  if (i == 50) {
    continue;
  }
}

// wap to print even numbers using continue

// WAP TO PRINT NUMBER FROM 1 TO 50
// SKIP THOSE NUMBER WHICH ARE DIVISIBLE BY 5

// WAP TO INPUT NUMBER FROM USER (DONOT USE PROMPT FOR SIMPLICITY)
// CHECK WHETHER GIVEN NUMBER IS PRIME OR NOT

// TEST CASE: 5, 9, 10, 13, 67

// 1 ITSELF -> 4
// 3
// 7
// 12

// 5
// 2 -> 4
// 5 % 2 ??
// 5 % 3 ??
// 5 % 4 ??

// 4 -> 2 -> 3
// 4 % 2 -> NOT A PRIME

// 6 2 -> 14
// 15 % 2 ??
// 15 % 3 BREAK; not a prime

// 100 2 -> 99
let userInput = 5;
let isPrime = true;

for (let divide = 2; divide <= userInput - 1; divide++) {
  if (userInput % divide == 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  console.log('The number is prime');
} else {
  console.log('The number is not prime');
}

// -----------ARRAYS----------------------

// MAKE RULE OF THUMB: ARRAY INDEX ALWAYS STARTS WITH ZERO (0)

let myStudentList = ['abc', 'cde', 'asd'];
console.log(myStudentList[1]); // access value at index 1
console.log(myStudentList.length); // print length of an array
myStudentList.push('my new value'); // push new value at last
console.log(myStudentList);
console.log(myStudentList.length);
