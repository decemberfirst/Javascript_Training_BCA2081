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
// LET ABC(X) =  X^2 + 4
// F(2) -> 8

// LET F(X) = CURRENT_TIME + X

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

// ---------- create a function to print name-------
// use parameters or take input from parameter
