const PI = 3.141;
// FORMULAE -> FAHRENHEIT = (C * 9/5) + 32
// KELVIN -> C + 273.15

// TAKE ALL REQUIRED INPUT USING PROMPT

// ONE GOOD PRACTICE YOU NEED TO FOLLOW

// let area = 3.141 * r * r

// let area = PI * r * r;

// const DAYS_IN_A_YEAR = 365;

// OPERATORS

// ARITHMETIC OPERATOR
// LOGICAL OPERATOR
// TYPEOF OPERATOR
// RELATIONAL OPERATOR / COMPARASION OPERATOR
// BITWISE OPERATOR
// TERNARY OPERATOR

// ---------------------ARITHMETIC OPERATOR---------------------

// 3 + 2  3 AND 2 OPERANDS
// MATHEMATICAL OPERATORS
// +, -, /, *, %

console.log(20 + 20); // ADDITION
console.log(20 - 20); // SUBTRACTION
console.log(20 / 2); // DIVISION
console.log(10 * 2); // MULTIPLICATION
console.log(3 % 2); // % or MODULUS is remainder

// console.log(2 % 2);
// console.log(99999 % 2);
// console.log(80 % 2);

// -----------LOGICAL OPERATOR------------

// AND, OR, NOT

console.log(true && true);
console.log(true && false);
console.log(false && false);

console.log('abc' && 'BCD'); // TRUE (DUITAI TRUE XA VANE LAST KO)
console.log('abc' && ''); // FALSE
// SHOT CIRCUITING
console.log(0 && 1); // FALSE (JAHA FALSE VETINXA TEHI OUTPUT HUNXA)

// OR OPERATOR

console.log(1 || 1);
console.log(1 || 0);
console.log('abc' || false);
console.log(false || 'abc');
console.log(false || 'abc' || true);

// PRACICE PROBLEMS

// 0 + 1 && false => 1 && false  => false
// 0 - 1 && true => -1 && true => true && true
// "abc" || " " || true // => abc (SHOT CIRCUIT)
// true && " " && "" => true && true && false
//"" || "" => false || false
// true || false && true && "abc" || false => true || false && true && true  || false
// null || undefined => false || false
// undefined || false =>  false || false
// null && true => false && true
// null || true || false => false || true || false (SHOT CIRCUIT)

// --------TYPEOF OPERATOR---------------

// -------RELATIONAL / COMPARISION OPERATOR-------------

// <, >, <=, >= !=, ==, === output always (true / false)

console.log(10 < 20);
console.log(10 <= 10);
console.log(10 > 20);
console.log(20 != 10);
console.log(10 >= 20);

console.log('10' == 10); //true // performs type coertion
console.log('10' === 10); //false // doesnot peform type coertion
