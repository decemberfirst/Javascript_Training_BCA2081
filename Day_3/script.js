// DATA TYPES IN JAVASCRIPT

// STRING
// NUMBER, INTEGER, FLOAT
// BIGINT
// BOOLEAN
// UNDEFINED (NO VALUE)
// NULL (NO VALUE)
// SYMBOL

// COLLECTION OF VALUEABLE INFORMATION (PARTIALLY TRUE)
// RAW FACT AND FIGURES
// DATA IS ANYTHING THAT CAN BE RECORDED AND CAPTURED
// DATA + SOME PROCESSING = INFORMATION

// DATA TYPE -> DESCRIBES WHAT TYPE OF DATA WE ARE RECORDING

// 1) STRING

// STRING IS COMBINATION OF CHARACTERS, WRAPPED BY SINGLE OR DOUBLE QUOTES (' ' OR " ")

let myName = '10';
let myLastname = '10';

// typeof (gives what type of value variable holds)
// console.log(myName + myLastname);

// NUMBER (FLOAT -> 1.2, 1.3)
// INTEGER -> 100, 200

let number = 10.1; // (more generic data type -> number)
// console.log(typeof number);

// console.log(0.1 + 0.2); // (0.3)

// 0 0 0

// 1 1 1

//  0 0 0  // 0 (IEEE-754 floating point representation)

let myNumber = 9007199254740991; // max
let myMinimumNumber = -9007199254740991; // min

let myBinary = 0b1010;
console.log(myBinary);

let myOctal = 0o100; // (0 - 7)
console.log(myOctal);

let myHex = 0xf; // ( 0 - 9, A, B, C D E F)
console.log(myHex);

// 3 ) BIG INT

let myBigInt = 1000n;
let myAnotherBigInt = 10000n;
console.log(typeof myAnotherBigInt); // string , BigInt, Number

// console.log(10n / 10) error ( both type must be same)

// BOOLEAN

// either yes or no, true or false, 0 or 1

let isMarried = true;
let canVote = false; // more when we get into if else ...

let myVariable;
console.log(myVariable); // returns undefined value is not defined
