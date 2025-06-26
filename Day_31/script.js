// --------------- WAYS OF DEFINING FUNCTIONS ----------------------------

// NORMAL WAY WITH NAME

function PrintName(name) {
  console.log(name);
}

// PrintName('Diwash Gyani');

let PrintName1 = function (name) {
  // function expression
  console.log(name);
};

// -- ARROW FUNCTION, LAMBDA FUNCTION, ANONMYOUS FUNCTION -> lambda -> short / easy

let PrintName2 = (name) => {
  console.log(name);
};

PrintName2('Diwash');

let addFN = (a, b) => {
  console.log(a + b);
};

addFN(10, 20);

// IN NORMAL FN YOU WOULD NEED TO EXPLICITLY USE RETURN KEYWORD, IN ARROW FUNCTION YOU DONT HAVE TO DO ALL THOSE HEAVY LIFTING

let subFN = (a, b) => a - b;

let subResult = subFN(10, 5);
console.log(subResult);

//  ---------------- CALLBACK FN AGAIN

function Pizza(fn) {
  fn();
  console.log('argument fn called');
}

Pizza(() => console.log('Hello world'));

// BACK TO ARRAY AGAIN
// CALLBACK FN AND HIGHER ORDER FUNCTIONS ARE SAME WITH DIFFERENT NAME ONLY

let MyArray = [3, 4, 5, 3, 3, 5, 5, 3, 2];

MyArray.forEach(function (value, index) {
  console.log(`Index = ${index} with Value = ${value}`);
});

// TODO: Now pass arrow fn inside foreach to print elements again
MyArray.forEach((value, index) =>
  console.log(`Value = ${value} and Index = ${index}`)
);

let Arrays = [1, 2, 3, 4, 5, 6, 7]; // use foreach to print sum of all
//  elements
let results = Arrays.map(function (value, index) {
  return Number(`${value}04`);
});
console.log(results);

let sum = 0;
Arrays.forEach((value, index) => {
  sum += value;
});
console.log(sum);

//TODO: print all elements which are divisible by 3 only, Use foreach

// -----------------------MAP (VV.....IMP)----------------

let result = studentNames.map(function (value, index) {
  return `Hello ${value}`; // return is mandatory, what you return is added
});

// result - ["Hello Diwas", "Hello Amar" ......]

let studentNames = ['Diwas', 'Amar', 'Aashish', 'Roshan', 'Bishal'];

// TODO: USE MAP TO MAKE ALL NAME PLURAL
// EG: Diwas -> Diwas's , 
// Amar -> Amar's
// print all accordingly
