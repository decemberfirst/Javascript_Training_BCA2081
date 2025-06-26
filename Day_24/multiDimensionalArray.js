let TwoDArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

/**
 * 0 1 2
 *
 * 1 2 3  0 MYArray[row][column] CONSOLE.LOG(MyArray[2][1])
 * 4 5 6  1
 * 7 8 9  2
 */

console.log(TwoDArray[0][0]); // 1
console.log(TwoDArray[0][1]); // 2
console.log(TwoDArray[0][2]);
console.log(TwoDArray[1][0]); // 4
console.log(TwoDArray[1][1]);
console.log(TwoDArray[1][2]);
console.log(TwoDArray[2][0]);
console.log(TwoDArray[2][1]);
console.log(TwoDArray[2][2]);

// i -> row
// j -> column

// i = 3
// j = 3

for (let i = 0; i <= 2; i++) {
  for (let j = 0; j <= 2; j++) {
    console.log(TwoDArray[i][j]);
  }
}

// 0 0
// 0 1
// 0 2
// 1 0
// 1 1
// 1 2
// 2 0
// 2 1
// 2 2

// PRINT ALL ELEMENTS OF MULTI DIMENSIONAL ARRAY WITH INDEX ONLY

//TODO: STORE RESULTS IN NEW ARRAY

let a = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

let first = a[0][0];
let second = a[0][1];
let third = a[0][2];
let fourth = a[0][3];
let fifth = a[1][0];
let sixth = a[1][1];
let seventh = a[1][2];
let eighth = a[1][3];

// row = 1
// column = 0

// 0 0
// 0 1
// 0 2
// 0 3
// 1 0
// 1 1
// 1 2
// 1 3

for (let row = 0; row < 3; row++) {
  for (let column = 0; column < 4; column++) {
    console.log(a[row][column]);
  }
}

// 1d
// 2d
// 3d
// 4d
