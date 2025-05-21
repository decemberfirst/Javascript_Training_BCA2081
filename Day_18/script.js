//TODO: find length of an array without using .length
let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let length = 0; // 9
let index = 0; // 9
let element = myArray[index]; // undefined

while (element != undefined) {
  length++;
  index++;
  element = myArray[index];
}

console.log(length);
