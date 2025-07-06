// TODO: generate random number which ranges from : 0,1,2,3
// if generated number is 1: console("The genrated number is 1")
// if 2: and so on for 2 and 3

let GeneratedNumber = Math.trunc(Math.random() * 4);
if (GeneratedNumber == 0) {
  console.log('Generated number is 0');
} else if (GeneratedNumber == 1) {
  console.log('Generated number is 1');
} else if (GeneratedNumber == 2) {
  console.log('Generated number is 2');
} else {
  console.log('Generated number is 3');
}

let players = ['Diwash', 'Amar', 'Sangeet', 'Sujan', 'Sabal'];
// TODO: // PICK THE RANDOM WINNER FROM THE ARRAY
let randomPlayerIndex = Math.trunc(Math.random() * players.length); // generates from 0-4
console.log(`The random winner is: ${players[randomPlayerIndex]}`); // accessing array index

// --------------- LETS HEAD TOWARDS DOM (DOCUMENT OBJECT MODEL) ------------------------------------
// FORGET CONSOLE.LOG FROM NOW

// DOCUMENT OBJECT MODEL

// HTML SELECT
// ID
// CLASS
// TAGNAME P, H2 H2,
// PARENT, CHILD RELATIONSHIP

const h1 = document.getElementById('myheading');
const button = document.getElementById('btn');

button.addEventListener('click', (e) => {
  h1.textContent = 'Content Changed';
});
