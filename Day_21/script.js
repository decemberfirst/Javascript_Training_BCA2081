// console.log('Hello World');

// // let dob = 2025;
// // raw this points to window object
// // () {} this points to current object
// let myPerson = {
//   dob: 2001,
//   age() {
//     console.log(2025 - this.dob);
//   },
// };

// // console.log(this);
// myPerson.age();

// // ----------------------------------------
// // let dob = 2025;

// // this points to window object

// let myPersons = {
//   x: '4x^2 - 2x - x + 1',
//   calculateAge() {
//     fl;
//     jasflkjaslfdjsalkfdjlasfjlk;
//     fj;
//   },
// };
// myPersons.x = 3;
// myPerson.calculateAge();

// myPersons.y = 5;
// let myObject = {
//   name: 'Rohan',
//   //   lastName: 'Tiwari',

//   // now write function / method to print name like this: my name is Rohan Tiwari
// };

// myObject.printName()

let myAnotherObject = {
  name: 'Buddhi Bahadur',
  printName() {
    console.log('My name is ' + this.name);
  },
};

myAnotherObject.name = 'Buddhi Prasad';
myAnotherObject.printName();

// wap to calculate area
// first declare length and breadth as 100 , 200
// print area
// change length and breadth to 10 and 20
// print area
// change length and breadth t0 0 and 10
// print area

let myDimensions = {
  length: 100,
  breadth: 200,
  calculateArea() {
    console.log(this.length * this.breadth);
  },
};

myDimensions.calculateArea();

myDimensions.length = 10;
myDimensions.breadth = 20;
myDimensions.calculateArea();

// -------------------------------------------------

// wap to input your all possible personal details
// create all methods to print all of them separately
// like printName prints name
// printAddres prints address
