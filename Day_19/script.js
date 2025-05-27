// SORTING
let array = [5, 3, 2, 4, 4, 2, 2, 1];
let sorted = array.sort(); // IMMUTABLE

let toFind = 5;
let a = [5, 1, 5, 6, 3, 1];

let person1 = ['abc', 'nepal', 9848585757, 100, 'red'];

console.log(a.includes(500)); // TRUE / FALSE OUTPUT
// PUT THIS IN IF ELSE AND SHOW MEANINGFUL MSG NOW::

if (a.includes(toFind)) {
  // put your statement here
  console.log(`${toFind} exist in the array`);
} else {
  // put your statement here
  console.log(`${toFind} doesnot exist in the array`);
}

// -----------------OBJECTS-------------------------------

/**
 * syntax:
 * let variableName = {
 *      key: value,
 *      key: value
 * }
 */

let person = {
  name: 'abc',
  age: 30,
  number: 903838484,
  country: 'nepal',
};

// ACCESSING OBJECT
// TWO SYNTAX

// BRACKET NOTATION
// console.log(person['name']);
// console.log(person['age']);
// console.log(person['country']);
// console.log(person['numberss']);

// DOT NOTATION
// console.log(person.name);
// console.log(person.age);
// console.log(person.country);
// console.log(person.number);

let myAnotherObject = {
  'first name': 'rohan',
  'last name': 'tiwari',
  'middle name': 'bahadur',
};

console.log(myAnotherObject['middle name']);

// console.log(myAnotherObject.last name)
// console.log(myAnotherObject.first name) // if there is space between keys this syntax doesnot work

console.log(myAnotherObject['first name']); // use this method whenever there is space between keys
console.log(myAnotherObject['last name']);
