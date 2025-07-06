// // SET TIMEOUT AND SET INTERVAL (part of asynchronous programming)

// // SYNCHRONOUS -> ON ORDER
// // ASYNCHRONOUS -> OUT OF ORDER

// // setTimeout(() => {
// //   console.log('Settimeout Fn Called 9s');
// // }, 100); // 11s

// // console.log('hello world'); // 10s

// // for (let i = 1; i > 0; i++) {} // 10s

// // console.log('Hello world after timeout'); // 10s

// // hello world
// // settimeout fn
// // for loop
// // hello world after timeout

// // hello world
// // loop
// // timeout
// // hello world after timeout

// // SETTIMEOUT -> execute certain code after some time
// // SET INTERVAL -> execute certain code repeatedly after certain delay

// // setTimeout(function () {
// //   console.log('Hello World');
// // }, 1000);

// // setInterval(function () {
// //   console.log('Set interval fn');
// // });

// // ------------- DATE OBJECT -----------------------
// const date = Date.now(); // UNIX EPOCH, 1970 rati 12 baje
// console.log(date); // in second, 2k38 problem

let x = 'hello';
x.language = 'nepali';

const originalMethod = String.prototype.charAt;
String.prototype.charAt = function (pos) {
  console.log(this, typeof this, pos);
  return originalMethod.call(this, pos);
};

let name = 'Rohan Tiwari';
console.log(name.charAt(3));
