let myStudentList = ['abc', 'cde', 'asd'];
// let poppedValue = myStudentList.pop(); // remove from last
// console.log(myStudentList); // ['abc', 'cde']
// console.log(poppedValue); // print removed value  CRUD

// let removedValue = myStudentList.shift(); remove from first
// console.log(removedValue);

myStudentList.unshift('added on first'); // add on first place
console.log(myStudentList);

let myArray = [1, 2, 3, 4, 5, 7, 5, 8, 9, 10, 6];
console.log(myArray[myArray.length - 1]);
console.log(myArray.indexOf(5));
console.log(myArray.lastIndexOf(5));

myArray[myArray.indexOf(6)] = 16;
console.log(myArray);

let myArrayChunk = myArray.slice(2, 5); // (start, end - 1), IMMUTABLE
console.log(myArrayChunk);

console.log(myArray.indexOf(100)); // -1

myArray.splice(0, 3); // MUTABLE
console.log(myArray);

// --------------ARRAY DESTRUCTURING--------------------------
let [first, second, ...rest] = ['ram', 'shyam', 'hari', 'sita']; // rest operator

// let first = myArrays[0];
// let second = myArrays[1];
// let third = myArrays[2];

console.log(first);
console.log(rest);

// ------------------ARRAY SPREAD---------------------

let firstArray = [1, 2, 3, 4, 5];
let secondArray = [6, 7, 8, 9, 10];

let joinedArray = [...firstArray, ...secondArray];
console.log(joinedArray);
