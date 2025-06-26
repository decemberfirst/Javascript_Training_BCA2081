// CORE FEATURE OF JS
// ABOUT 50% OF YOUR JS CODE IS WRITTEN USING THIS FEATURE

// ------------ FUNCTION EXPRESSION, CALLBACK FUNCTION, FUNCTION AS FIRST CLASS CITIZENS------

// FIRST CLASS CITIZEN
// FUNCTION CAN BE ASSIGNED TO A VARIABLE
// FUNCTION CAN BE PASSED AS AN ARGUMENT -> CALLBACK FUNCTINO
// A FUNCTION CAN RETURN ANOTHER FUNCTION

let number = 10;

// let myFn = function (name) {
//   console.log(`Hello ${name}`);
// };

// myFn('ram');

// function ABC(abc) {
//   abc();
// }

// function TOPassAsArgument() {
//   console.log('This function is passed as an argument');
// }

// ABC(TOPassAsArgument);

function FunctionThatReturnsAnotherFunction() {
  return function () {
    console.log('Hello World');
  };
}

let result = FunctionThatReturnsAnotherFunction();
result();

let myFN = function (countryName) {
  console.log('Hello ' + countryName);
};

// myFN('INDIA');

function Pizza(fn) {
  // THIS IS CALLED CALLBACK FUNCTION
  fn();
}

function Toppings() {
  console.log('Pizza has got toppings');
}

function Hello() {
  console.log('This is Hello FN');
}

// Pizza(Hello);

function MyAnotherOne() {
  function InnerFn() {
    console.log('This is the function to return');
  }
  return InnerFn;
}

let results = MyAnotherOne();
results();

function OnClickBUtton() {
  console.log('button clicked');
}

// TODO: wap to create callback fn
// create first fn with name Factory
// it takes another fn as an argument
// call that passed fn inside Factory fn

// TODO:
// CREATE A FUNCTION FACTORY THAT TAKES NUMBER AS INPUT AND  IS KNOWN FOR RETURNING ANOTHER FN
// IF USER PASES 1 AS ARGUMENT THEN RETURN FUNCTION THAT PRINT NAME
// IF USER PASSES 0 AS ARGUMENT THEN RETURN FUNCTION THAT PRINT ADDRESS
// CALL THE RETURNED FN

function Factory(num) {
  if (num == 0) {
    return function () {
      console.log('My address is butwal');
    };
  } else if (num == 1) {
    return function () {
      console.log('My name is abc');
    };
  }
}

let resultss = Factory(1);
resultss();
