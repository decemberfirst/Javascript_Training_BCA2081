// // ------------- SHALLOW COPY AND DEEP COPY ------------------

// let a = 10;
// let b = a;
// b = 30;
// console.log(a); // 10
// console.log(b); // 30

// let person = {
//   personName: 'Ram',
// };

// let anotherPerson = person;
// console.log(anotherPerson);

// person.personName = 'CHANGED_NAME';

// console.log(person); // {personName: "Ram"}
// console.log(anotherPerson); // {personName: "CHANGED_NAME"}

// // -------------------- PASS BY VALUE VS PASS BY REFERENCE ---------

// PRIMITIVE TYPE -> number, boolean, NaN, Symbol and many more
// NON-PRIMITIVE -> object, array

// // 1) Pass by value

// let first = 10;
// let second = first; // second = 10

// first = 20;

// console.log(a);
// console.log(b);

// // ------------ FOR SPECIAL TYPES -------------

let myFirstObject = {
  personName: 'Ram',
};

let myCopyOfFirstObject = myFirstObject;

myFirstObject.personName = 'Shyam';

// let dogObject = {
//   animalName: 'Dog',
//   color: 'Shade of black',
// };

// let anotherDog = dogObject; // pass by reference , pass by address

// dogObject.color = 'Red';

// console.log(anotherDog);
// console.log(dogObject);

// let firstName = 'Ram';
// let secondName = firstName; // Pass by value

// secondName = 'SHYAM';

// console.log(firstName); // Ram
// console.log(secondName); // SHYAM

let myNestedObject = {
  address: {
    permanent: 'Butwal',
    temporary: 'Pokhara',
  },
};

let myNestedObjectCopy = structuredClone(myNestedObject); // now it works as pass by value
myNestedObjectCopy.address.permanent = 'Kathmandu';

// let myNestedObjectCopy = myNestedObject;

// myNestedObject.address.permanent = 'KATHMANDU';

console.log(myNestedObjectCopy);
console.log(myNestedObject);

// TODO:
// WAP ON YOUR OWN TO DEMONSTRATE -> PASS BY VALUE AND PASS BY REFERENCE
// FINALLY USE structuredClone to one of your program

// ------------------------------------------------------------------------------------------------------------

// TODO:
// CREATE ONE PERSON OBJECT WITH NAME -> FIRST NAME, LAST NAME, ADDRESS -> TEMPORARY AND PERMANENT ADDRESS,
// COPY PERSON OBJECT TO THREE DIFFERENT VARIABLES
// CHANGE NAME OF ALL VARIABLES
// MAKE SURE THAT CHANGE IN ONE OBJECT PROPERTY DOESNOT REFLECT TO ANOTHER ONE

// ------------------------------- FUNCTION -------------------------------------
// F = 2 + 2
// F(X) =  2X + 2
//
// LET ABC(X) =  X^2 + 4 // PARAMETER
// ABC(2) -> 8

// DETERMINISTIC
// NON-DETERMINISTIC

// LET F(X) = CURRENT_TIME + X

// F(2) = 12 + 2 = 14
// F(2) = 1 + 2 = 3

// F(x) = random() + x; // non deterministic

// LET F(2) = 2 + 2 = 4

// F(2) =  6 + 2 = 8
// DETERMINISTIC ,

// -----------------------------------------------------------
// shadowing
// function F(x) {
//   console.log(2 * PI + 2); // RESULT
//   PI = 1; // FUNCTION SIDE EFFECT
// }

// F(10);

function myEquation(x) {
  console.log(x + 2);
}

myEquation(2); // myEquation(2) / f(2)
myEquation(3);
myEquation(0);
myEquation(-10);

// f(x,y) = x + y
// f(2,2) = 2 + 2 = 4
// f(-10,2) = -8
// f(0,0) = 0 + 0 = 0

function add(x, y) {
  console.log(x + y);
}

add(2, 2);
add(4, 4);
add(10, 30);

// create function for subraction

let personObject = {
  personName: 'hari',
};

let anotherPersonName = structuredClone(personObject);

anotherPersonName.personName = 'shyam';

console.log(personObject);
console.log(anotherPersonName);

function Addition(X, Y) {
  // function definition
  console.log(Y);
  console.log(2 + 2 + X + Y);
}

Addition(10); // function call, invoke

// TODO:
// ---------- create a function to print name-------
// use parameters or take input from parameter

// TODO:
// create a function to calculate area of rectangle
// use parameters

// TODO:
// create a function to print welcome message
// output should be Hello __name__, welcome to our platform.
// its good to know you are from __address__
// see you next __dayname__

function welcomePerson(name, address, dayname) {
  console.log(
    `Hello ${name}, welcome to our platform \n its good to know you are from ${address} \n see you next ${dayname}`
  );
}

welcomePerson('rohan', 'devdaha', 'sunday');

// --------------------------------------

// f(x) = 2x + 2
// f(2)
// f(3)

function f(x) {
  let result = 2 * x + 2;
  console.log(result);
}

f(2);

// CREATE A FUNCTION TO FIND SUM OF TWO NUMBERS
// F(A,B) = A + B
// EG. F(2,2) = 2 + 2 = 4

function f(a, b) {
  // function definition
  let result = a + b;
  console.log(result);
}

f(10, 20); // function call / invoke

function DynamicFunction(countryName) {
  console.log('I live in ' + countryName);
}

DynamicFunction('Nepal');
DynamicFunction('India');

// TODO:
// CREATE FUNCTION NAMED: findSmallest(a,b)
// TAKE TWO INPUT FROM USER
// FIND SMALLEST AMONG THOSE

// TODO:
// CREATE FUNCTION calculateSumOfArray(array)
// calculate the sum of elements of array
// console them

function calculateSumOfArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  console.log(sum);
}

calculateSumOfArray([1, 2, 3, 4, 5]);
calculateSumOfArray([1, 2, 3, 4, 5]);

// TODO: SEARCH AND LEARN FUNCTION SIDE EFFECT ON GOOGLE: vvvimp
// PURE FUNCTION VS SIDE EFFECT FUNCTION

// FUNCTION RETURNING VALUE

function CalculateSum(a, b) {
  let sum = a + b;
  return sum;
}

let result = CalculateSum(1, 2);
console.log(result);

// TODO:
// CREATE A FUNCTION TO WELCOME USER
// TAKE USER NAME AS PARAMETER
// RETURN VALUE OUTSIDE FUNCTION
// CONSOLE THE WELCOME TEXT OUTSIDE OF FUNCTION
