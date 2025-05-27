let myThirdObject = {
  name: 'Shyam',
  address: 'Nepal',
  roll: 10,
};

console.log(myThirdObject);
myThirdObject.name = 'Ram'; // update property name -> ram
console.log(myThirdObject);

// to delete property
// syntax: delete variable.propertyName

delete myThirdObject.name; // delete name property
console.log(myThirdObject);

// CREATE AN ANIMAL OBJECT
// TODO: INPUT ANIMAL NAME, TYPE, COLOR, isMammal, WEIGHT, HAS FUR
// READ ALL THE VALUES
// UPDATE WEIGHT TO 100
// DELETE KEY COLOR

// CREATE PERSON OBJECT
// INPUT NAME, DOBperson
// USE DOB TO CALCULATE AGE
// ADD CALCULATED AGE TO THE OBJECT

// -------------- FOR THOSE WHO WERE PRESENT YESTERDAY---------

// ------SOLUTION-------
let myPerson = {
  name: 'Rohan',
  DOB: 2001,
};

let age = 2025 - myPerson.DOB;
myPerson.age = age; // same syntax for update and insert

// --------OBJECT DESTRUCTURING-------------

let [ad, second, third] = [10, 20, 30, 40, 50];

let {
  address: myAddress, // alias
  name,
  doesnotExist,
} = {
  // order doesnot matter
  name: 'Rohan',
  address: 'Devdaha',
};

console.log(myAddress);

// UPDATE
let [seconds, first, thirds, fourth] = [1, 2, 3, 4, 5]; // order matters

let roll = 20;

let {
  roll: anotherNameForRoll, // alias / nick name for roll
  names,
  ...rest
} = {
  names: 'something', // storing value in variable names
  roll: 100,
  first: 'abc',
  second: 'abc', // doesnot gurantee order
};

// console.log(anotherNameForRoll); // 100
// console.log(names); // something
// console.log(rest);

let myPersons = {
  name: 'asdf',
  from: 'name',
  email: 'something@gmail.com',
  added: 'New one',
};

// console.log(Object.values(myPersons)); // values
// console.log(Object.keys(myPersons)); // keys

let myEntries = Object.entries(myPersons);

for (let i = 0; i < myEntries.length; i++) {
  let [key, value] = myEntries[i]; // [name: something]
  console.log(`${key} : ${value}`);
}

// NESTED OBJECTS  / NESTED ARRAYS ----------> MOSTLY USED IN REAL WORLD
// JSON -> JAVASCRIPT OBJECT NOTATION

let object = {
  name: 'rohan',
  from: 'nepal',
  address: 'devdaha',
};

let object2 = {
  name: {
    firstname: 'Rohan',
    lastname: 'Tiwari',
  },
  address: {
    permanent: 'Devdaha',
    temporary: 'butwal',
  },
  phone: [9845322493, 9833636],
};

console.log(object2.address.permanent);
console.log(object2.name.lastname);
console.log(object2.phone[1]);

// create nested objects
// create object name person
// break name property into firstname, middlename, lastname
// add location, break down into permanent and temporary
// add colors, store 3 favourite color of user in list
// add parential_info property, break down into father and mother name

// at last print all of them
