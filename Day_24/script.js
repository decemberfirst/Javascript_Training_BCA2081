// ------------- SHALLOW COPY AND DEEP COPY ------------------

let a = 10;
let b = a;
b = 30;
console.log(a); // 10
console.log(b); // 30

let person = {
  personName: 'Ram',
};

let anotherPerson = person;
console.log(anotherPerson);

person.personName = 'CHANGED_NAME';

console.log(person); // {personName: "Ram"}
console.log(anotherPerson); // {personName: "CHANGED_NAME"}

// -------------------- PASS BY VALUE VS PASS BY REFERENCE ---------

// 1) Pass by value

let first = 10;
let second = first; // second = 10

first = 20;

console.log(a);
console.log(b);

// ------------ FOR SPECIAL TYPES -------------

let myFirstObject = {
  personName: 'Ram',
};

let myCopyOfFirstObject = myFirstObject;

myFirstObject.personName = 'Shyam';

let dogObject = {
  animalName: 'Dog',
  color: 'Shade of black',
};

let anotherDog = dogObject; // pass by reference , pass by address

dogObject.color = 'Red';

console.log(anotherDog);
console.log(dogObject);

let firstName = 'Ram';
let secondName = firstName;

secondName = 'SHYAM';

console.log(firstName);
console.log(secondName);
