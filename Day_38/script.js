const input = document.getElementById('input');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  const text = input.value;
  navigator.clipboard.writeText(text);
  console.log('Clipboard copied');
});

// JSON  -> JAVASCRIPT OBJECT NOTATION
/**
 * [
 *      {
 *          NAME: SOMETHING,
 *          FROM: SOMEWHERE
 *      } ,
 *      {
 *          NAME: SOMETHING,
 *          FROM: SOMEWHERE
 *      }
 * ]
 */

// const mappedValue = data.map(function(eachElement) {
const { NAME, FROM } = eachElement;
return `<div>${NAME}</div>`[
  //})

  (1, 2, 3, 4, 5)
];

// ------------ FETCH API ----------------
// link / api https://jsonplaceholder.typicode.com/posts

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((res) => {
    return res.json(); // formatting
  })
  .then((data) => {
    // data array
    // document.write(data[0].title);
    // inputselect
    // .text content
  });
