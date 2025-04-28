// SYMBOL
let MySymbol = Symbol('abc');
console.log(MySymbol); // used to generate unique key (in object), will cover later
console.log(typeof MySymbol);

// NULL (no value)

// WHY TYPEOF NULL IS OBJECT IN JAVASCRIPT
let MyNullVariable = null;
console.log(typeof MyNullVariable); // (BIGGEST BUG IN JS WORLD)

// TYPE CONVERSIONS
let myNumber = '10';
console.log(myNumber + 10); // + is an operator polymorphism (poly -> many) (morph -> form)
let MyConvertedNumber = Number(myNumber);
console.log(MyConvertedNumber + 10);

// SOME TWEAKS (EDGE CASES) WHILE CONVERTING TO NUMBER TYPE
// let myTweak = Number('10');
// let myTweak = Number(10);
// let myTweak = Number('10b)
// let myTweak = Number(true) 1 -> true , 0 -> false
// let myTweak = Number(false)

// console.log(myTweak);

// Number('10')
// Number(true)
// Number(falses) NAN

// Number(100n)
// Number("true") NAN

// console.log(true + false);
// console.log(-true / false);

// BOOLEAN (MORE TRICKIER) (vvvv... IMP)

// STRING CASE
// let myBoolean = Boolean(''); //non empty string -> true, empty string -> false
// console.log(myBoolean);

// NUMBER CASE
let myNumberBoolean = Boolean(0);
console.log(myNumberBoolean); // non zero value -> true, zero -> false

// CONVERSION TO STRING TYPE FROM DIFFERENT OTHER TYPES

let myStringValue = String(); // ALL OF THEM ARE POSSIBLE (IGNORE BigInt)
console.log(myStringValue);
