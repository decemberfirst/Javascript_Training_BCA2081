console.log('Hello welcome to javascript world');

// used to show something on the console
console.log('hello my name is ... ');
console.log(10); // unformatted output

let myname = 'Rohan';
console.log('My name is: ', myname); // formatted output

// let result = 10 + 20;
// console.log(result);

// first character must be either of these (alphabet, _, $)
// cannot use special characters other than _ and $

let mName = 'Rohan';
let $myName = 'Rohan';
let _myName = 'Rohan';

// let 1first = "Rohan"; // this throws an error, since it doesnot follow rule
// let !first = "Rohan"; // this throws an error, since it doesnot follow rule

// cannot use reserved words

// let let = 20; // this throws an error
// let for = 20;
// let do = 30; // all these words already have special meaning

// CASE SENSITIVITY
// uppercase and lowercase letters are sensitive
// uppercase -> capital letter
// lowercase -> small letter

let myAddress = 'Nepal';
let myaddress = 'India';

console.log(myaddress, myAddress);

let _ = 'Nepal';
console.log(_);

let $ = 'Nepal';
console.log($);

// let ~ = 40

// REMANING ONE ARE CONVENTIONS, YOU AREN'T COMPELLED TO FOLLOW THESE

let userfromindia; // plain case

// PASCAL CASE
let UserFromIndia; // class

// CAMEL CASE
let userFromIndia; // variable

// SNAKE CASE
let user_from_india;

// let hasMarriedAndHasChildrens // camel case

let HasMarriedAndHasChildrens; // pascal

let has_married_and_has_childrens; // snake case

// variable name can be any length long

// let firstNumber = 20;
// let secondNumber = 20;
// let sum = firstNumber + secondNumber;

let inputFromUser = Number(prompt('Enter First Number'));
let inputFromUser2 = Number(prompt('Enter Second Number'));

// console.log(inputFromUser);
