// // ---------------ASSIGNMENT OPERATORS-------------------
// let first = 10;
// const SECOND = 10;

// // shorthand operator
// let a = (b = c = d = e = 5);
// /**
//  * e = 5
//  * d = e
//  * c = d
//  * b = c
//  * a = b
//  */

// // = , == (performs type coertion) , === (doesn't perform type coertion)

// // -------------------COMPOUND OPERATORS--------------------------

// let myvar = 10;
// myvar += 10; // equivalent to myvar = myvar + 10
// console.log(myvar);

// /**
//  * INPUT TWO NUMBERS FROM USER
//  * ADD, MULTIPLY, SUBTRACT, DIVIDE USING COMPOUND OPERATOR
//  */

// let FIRST = 10;
// let SECONDs = 20;

// console.log((FIRST += SECONDs));
// console.log((FIRST /= SECOND));

// let a = (b = c = d = Number(prompt('Enter First Number')));
// let A = (B = C = D = Number(prompt('Enter second number')));

// console.log((a += A));
// console.log((b -= B));
// console.log((c *= C));

// -------------------INCREMENT/DECREMENT OPERATOR-----------
// TWO VARIATIONS -> PRE OR POST

let myVariable = 13;
let mySecondVariable = myVariable++;
console.log(myVariable);
console.log(mySecondVariable);

// ---------CHALLANGING QUESTIONS-------------

let myNumber = 20;
let mySecondNumber = 99;
let myResult = ++myNumber + myNumber-- + mySecondNumber-- - --mySecondNumber;
