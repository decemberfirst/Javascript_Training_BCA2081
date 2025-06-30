// -----------------REDUCE------------- (VVV...IMP)
// reduce result to single number
let array = [1, 2, 3, 4, 5, 6];

let result = array.reduce(function (accumulator, current) {
  return accumulator + current;
}, 0);

// TODO: wap to add even numbers only using reduce
array.reduce(function (previousResult, currentElement) {
  if (currentElement % 2 == 0) {
    return previousResult + currentElement;
  } else {
    return previousResult; // no update, keep as it is
  }
}, 0);

// console.log(evenResult);

// TODO: For odd

// YOU ALWAYS NEED TO RETURN INSIDE CALLBACK
// IF YOU FORGET TO RETURN / RETURN ANOTHER VALUE, RESULT MAY BE WRONG
// HENCE: ALWAYS RETURN VALUE FROM CALLBACK FN

// wap to subtract only those number which is divisible by 3, use reduce

let subResult = array.reduce(function (previousResult, currentValue) {
  if (currentValue % 3 == 0) {
    return previousResult - currentValue;
  } else {
    return previousResult;
  }
}, 0);

// --------------- FILTER -----------------------
// TO FILTER OUT ELEMENTS, AND RETURN RESULT IN ARRAY

// callback -> return value
// predicate -> return boolean

// predicate is a function that always returns boolean value
// callback is a function that can return any arbitary value

const arrays = [10, 20, 30, 40, 50, 60];
let filteredOutResult = arrays.filter(function (value) {
  if (value >= 50) {
    return true;
  } else {
    return false;
  }
});

console.log(filteredOutResult); // result comes in an array

let Persons = [
  // TODO: WAP TO FILTER OUT PERSONS WHOSE AGE IS GREATER THAN OR EQUAL TO 30
  {
    name: 'Ram',
    age: 20,
  },
  {
    name: 'Shyam',
    age: 30,
  },
  {
    name: 'Shiva',
    age: 30,
  },
];

const results = Persons.filter(function (element) {
  if (element.age >= 30) {
    return true;
  } else {
    return false;
  }
});

// ---------MATH OBJECT-------------------

let random = Math.random(); // produces random number between 0 and 1, but never 0 and 1 (less chance)

let TruncatedValue = Math.trunc(20.2); // returns integral part only
console.log(TruncatedValue);

let FloorValue = Math.floor(20.7); // smallest than given
let CeilValue = Math.ceil(20.7); // greatest than given

let AbsoluteValue = Math.abs(-20); // returns positive number
console.log(AbsoluteValue);

let CosValue = Math.cos(0); // 0 45 90 .....
let SinValue = Math.sin(0);
let TanValue = Math.tan(45);

const VALUE_OF_PI = Math.PI;
const squareRoot = Math.sqrt(16);
const LogValue = Math.log();
const ExponentialValue = Math.exp(20);
const Power = Math.pow(2, 3);
const RoundOffValue = Math.round(20); // Round Off
const MinimumValue = Math.min(1, 2, 3); // return minimum number from the input
const MaximumValue = Math.max(3, 4, 5, 5); // return maximum number from the input

console.log(MinimumValue);
console.log(MaximumValue);

Math.trunc(Math.random() * 200);
