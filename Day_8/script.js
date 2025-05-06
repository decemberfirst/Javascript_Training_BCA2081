console.log((' ' && false) || (true && null) || -1);

// ------------------BITWISE OPERATOR--------------

// BITWISE AND

console.log(2 | 3);

// 1 0
// 1 1
// ----
// 1 1

// BITWISE SHIFT

console.log(3 << 1); // left shift

// 0 0 0 0 0 0 1 1
// 0 0 0 0 0 1 1 0

// console.log(2 & 4);

// 0 1 0
// 1 0 0
// ---------
//  0  0  0

// right shift

console.log(4 >> 1);

//  1 0 0
// 0 1 0 => 2

// 1 1 1

// 4
// 3
// 1 0 0
// 0 1 1

// TERNARY OPERATOR

// SYNTAX: condition ? what if true : if false

console.log(null ? 'Greater than 2' : 'Less than 2');

const USERNAME = 'admin';
const PASSWORD = 'admin';

// ENTER YOUR USERNAME (use prompt to take input from user)
// ENTER YOUR PASSWORD (use prompt to take input from user)

// YOU ARE LOGGED IN
// USERNAME OR PASSWORD INCORRECT

// const usernameFromUser = prompt('Enter your username');
// const passwordFromUser = prompt('Enter your password');

// console.log(
//   usernameFromUser == USERNAME && passwordFromUser == PASSWORD
//     ? 'Logged in'
//     : 'incorrect username or password'
// );

// INPUT USER AGE FROM PROMPT
// IF USER AGE IS GREATER THAN OR EQUAL TO 18 AND  LESS THAN 40 (HINT: >=18) (<40)
// THEN CONSOLE YOU ARE VALID USER FOR VOTING
// IF NOT THEN CONSOLE YOU ARE TOO EARLY OR TOO OLD FOR VOTING

// ------------------------------------------------------------------------------------------------

// INPUT TWO NUMBER FROM USER
// DIVIDE THOSE TWO NUMBERS AND STORE IN VARIABLE RESULT

// RESULT IS GREATER THAN 10 OR LESS THAN -1 PRINT "RESULT IS GREATER THAN 10 OR RESULT IS NEGATIVE"
// IF NONE OF THE CONDITION MATCHED PRINT RESULT IS OUT OF THE SCOPE

// let firstNumber = Number(prompt('ENter first number'));
// let secondNumber = Number(prompt('Enter second number'));

// let result = firstNumber / secondNumber;

// console.log(
//   result > 10 || result <= -1
//     ? 'RESULT IS GREATER THAN 10 OR RESULT IS NEGATIVE'
//     : 'RESULT IS OUT OF THE SCOPE'
// );

const NUMBER = 29;

// --------FIRST METHOD---------------
console.log(NUMBER % 2 == 0 ? 'NUMBER IS EVEN' : 'NUMBER IS ODD');
