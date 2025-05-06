// ------------OPERATOR PRECEDENCE AND ASSOSIATIVITY-----------------
console.log(10 + 40 / 12); // BDMAS (X) -  (OPERATOR PRECEDENCE AND ASSOSIATIVITY TABLE)

console.log(4 * [5 / 100]);

myvar = 10;
myvar = myvar + 1 + myvar++;

// 1 0 0
// 0 1 0
// ---------
// 1 1 0 => 6 (5TH SEM NETWORKING) (10MARKS GONE)

// Unary operator (only one)
// myvar++
// // Binary operator (two)
// myvar + 2

console.log(2 << 3 || 5 + 2 - (true - false));

// console.log(true || false && true);

// --------------------CONDITIONAL STATEMENTS---------------------

// TERNARY : CONDITION ? WHAT IF TRUE : WHAT IF FALSE

// if else
// for loop
// while loop
// do while loop (3+  more after we complete array session ...)

// if(condition) {
// true case
// } else {
// false case
// }

const userAge = Number(prompt('Ente your age'));

// USE IF CASE IF YOUR NUMBER OF LINES IN TRUE / FALSE CASE IS MORE THAN ONE LINE
if (userAge >= 18) {
  console.log('You are eligible for voting');
} else {
  console.log('You are too early to vote');
}

// INPUT TWO NUMBER FROM USER AND FIND SMALLEST AMONG THEM

// INPUT PRICE OF 5 PRODUCT IF AGGREGATE THE TOTAL SUM IS > 1000 THEN GIVE 5% DISCOUNT ON TOTAL PRICE ELSE PRINT WHOLE AGGREGATE PRICE WITHOUT DISCOUNT

// INPUT A CHARACTER FROM USER AND CHECK WHETHER CHARACTER IS VOWEL OR CONSONANT

const inputFromUser = prompt('Enter any character to check vowel or consonant');

if (
  inputFromUser == 'a' ||
  inputFromUser == 'e' ||
  inputFromUser == 'i' ||
  inputFromUser == 'o' ||
  inputFromUser == 'u'
) {
  console.log('The input is vowel');
} else {
  console.log(console.log('The input is consonant'));
}

// $#@!_~
// input days from user like :"sunday", "monday" and so on and find if the day is weekend or not
