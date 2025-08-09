// // USE ANY ONE FREE API FROM WEB
// // USE FETCH TO FETCH JSON DATA
// // ITERATE OVER ALL ITEMS
// // PRINT ELEMENTS IN CONSOLE

// // -------------------------------------------------------------------

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((res) => {
//     return res.json(); // fetching from web
//   })
//   .then((data) => {
//     data.map((eachElement) => {
//         // access each element property here
//         // eachElement.title, eachElement.price and so on
//     })
//   });

// MAP, FETCH, OBJECT, JSON

// OBJECT ORIENTED PROGRAMMING

// class -> template / form / blueprint / desgin / map / specification
// instance / object / offspring / child

class Person {
  name;
  address;
  phoneNumber;

  // constructor -> to take parameter for class / template
  constructor(name, address, phoneNumber) {
    this.name = name;
    this.address = address;
    this.phoneNumber = phoneNumber;
  }
}

let Person1 = new Person('rohan', 'nepal', '475847');
let Person2 = new Person('shyam', 'india', '983843984');

console.log(Person1);
console.log(Person2);

// TODO: NOW CREATE SIMILAR OBJECT FOR ANIMAL
// CREATE INSTANCE FOR DOG, TIGER AND SO ON
