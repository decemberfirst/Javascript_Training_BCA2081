// // class Person {
// //   // class is combination of property and behaviour
// //   personName;
// //   personAddress;
// //   personPhone;

// //   // property featrue -> normal variable define
// //   // behaviour / nature -> method (function)

// //   constructor(personName, personAddress, personPhone) {
// //     this.personAddress = personAddress;
// //     this.personName = personName;
// //     this.personPhone = personPhone;
// //   }

// //   dance(platform) {
// //     console.log(`${this.personName} Danced on ${platform}`);
// //   }

// //   walk() {}
// // }

// // // instance / offspring / object / child
// // const PersonFirst = new Person('rohan', 'nepal', '84354');
// // const PersonSecond = new Person('shyam', 'india', '342323');

// // console.log(PersonFirst.personName); // rohan
// // console.log(PersonSecond.personAddress); // india
// // PersonSecond.dance('stage');
// // PersonFirst.dance('ground');

// // FOUR PILLARS OF OOP

// // ENCAPSULATION -> BIND PROPERTY AND BEHAVIOUR TOGETHER IN ONE OBJECT
// // ABSTRACTION -> HIDE UNNECESSARY COMPLEXITY
// // POLYMORPHISM -> DOGLA poly -> many ,  morph -> form
// // INHERITENCE -> CHILD GETS PARENT PROPERTIES AND BEHAVIOUR

// // ENCAPSULATION

// // class Engine {
// //   #engineNumber;
// //   #engineRPM; // private property cannot be accessed outside class / only accessible within the class

// //   constructor(engineNumber, engineRPM) {
// //     this.#engineNumber = engineNumber;
// //     this.#engineRPM = engineRPM;
// //   }

// //   // getter method
// //   getEngineNumber() {
// //     return this.#engineNumber;
// //   }
// // }

// const engine = new Engine('m3d343', 343);
// console.log(engine.getEngineNumber());

// // CREATE CLASS ANIMAL
// // INCLUDE PUBLIC PROPERTY COLOR, HASFUR AND BREED
// // INCLUDE PRIVATE PROPERTY HEART AND LUNGS
// // INCLUDE METHOD getAnimalDetails() that prints public property in nicer format
// // INCLUDE BREATHE and PUMP method, use private property HEART AND LUNGS For that

// class Animal {
//   color;
//   hasFur;
//   breed;
//   #heart;
//   #lungs;

//   constructor(color, hasFur, breed, heart, lungs) {
//     this.#heart = heart;
//     this.#lungs = lungs;
//     this.color = color;
//     this.hasFur = hasFur;
//     this.breed = breed;
//   }

//   getAnimalDetails() {
//     console.log(
//       `Animal color is ${this.color}, its fur is ${this.hasFur}, finally its breed is ${this.breed} `
//     );
//   }

//   pump() {
//     console.log(`${this.#heart} is pumping`);
//   }

//   breathe() {
//     console.log(`${this.#lungs} is being used to breathe`);
//   }
// }

// // LocalStorage -- vvip -> used to store data for short time
// // indexed db -> like mysql database for browser used to store data for long time
// // cookies -> USED TO STORE PRIVATE AND SENSITIVE CREDENTIALS

// // PCI-DSS STANDARD -> TRUSTWORTHY STANARD FOR PAYMENTS
// // OWSAP security -> top institution for cyber security

// // ----------------------- LOCAL STORAGE-----------------

// // // localStorage.setItem(key, value)
// // localStorage.setItem('token', 'jfslasjdfl;ajsfd'); // set item in local storage database

// // // to get the item from local storage database
// // const data = localStorage.getItem('token');
// // console.log(data);

// // project to create todo list with permanent storage facility

let inputBox = document.getElementById('todoInput');
let resultBox = document.getElementById('result');
let addButton = document.getElementById('btn');

let Database = []; // normal js array , object vs JSON

addButton.addEventListener('click', function () {
  const TodoText = inputBox.value; // get value from input box
  Database.push(TodoText); // store the fetched value to an array

  // local storage ma permanently save garni
  let myJson = JSON.stringify(Database); // convert array / object to json
  localStorage.setItem('myitems', myJson);
});
