// wap to PRINT  SUM OF TWO matrices A AND B

let A = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

let B = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

let results = [];

for (let i = 0; i < 3; i++) {
  let row = [];
  for (let j = 0; j < 4; j++) {
    let result = A[i][j] + B[i][j];
    row.push(result);
  }
  results.push(row);
}

// -------------------------------FUNCTION REVISE-------------------------------------------

// function add(x, y) {
//   let result = x + y;
//   return result; // 30
// }

// console.log(add(10, 20));

// function returning value and taking no arguments
// function not returning value and taking arguments
// function returning value and taking arguments

function MyFUnc() {
  return 'hello';
}

console.log(MyFUnc());

// WAP TO TAKE NUMBER AS ARGUMENT
// CHECK IF IT IS ODD OR EVEN
// RETURN STRING "THE GIVEN NUMBER IS EVEN" if given number is even
// RETURN STRING "THE GIVEN NUMBER IS ODD" if given number is odd
// if the number is zero return 0
