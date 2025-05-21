// ITERATING OVER ARRAY

let myArrayList = ['ram', 'shyam', 'hari', 'sita', 'rupesh']; // 5
// console.log(myArrayList[0]);
// console.log(myArrayList[1]);
// console.log(myArrayList[2]);
// console.log(myArrayList[3]);
// console.log(myArrayList[4]);

// for (let i = 0; i < myArrayList.length; i++) {
//   // 5
//   console.log(myArrayList[i]);
// }

// find sum of elements .. 1 + 2 + 3 + 4 + 5 = 15
let numbers = [1, 2, 3, 4, 5]; // 5

let sum = 15;

for (let index = 0; index < numbers.length; index++) {
  sum = sum + numbers[index]; // 10 + 5
}

console.log(sum);

// TODO: calculate sum of even numbers only
let myList = [100, 101, 102, 103, 104, 105];
let mySum = 0;
for (let index = 0; index < myList.length; index++) {
  if (myList[index] % 2 == 0) {
    sum = sum + myList[index];
  }
}
console.log(sum);

// TODO: find the greatest number from the array
let myNumbers = [499, 100, 1000, 2, 10];
let greatest = 0;

for (let index = 0; index < myNumbers.length; index++) {
  if (myNumbers[i] > greatest) {
    greatest = myNumbers[i];
  }
}

console.log(greatest);

// TODO: WAP TO REVERSE AN ARRAY

let myArray = [1, 2, 3, 4, 5];
let reversed = [];

for (let index = 0; index < myArray.length; index++) {
  reversed.unshift(myArray[index]);
}

console.log(reversed);
