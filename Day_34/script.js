// STEPS TO FOLLOW WHILE WORKING WITH DOM

// SELECT THE HTML ELEMENT THROUGH DOCUMENT OBJECT
// YOU CAN SELECT WITH THESE METHODS:
// CLASSNAME, ID, TAG NAME, PARENT CHILD RELATIONSHIP

// RECOMMENDED WAY: ALWAYS SELECT WITH EITHER ID, CLASSNAME OR TAGNAME

// h1, h2, h3

// console.log(document); // console.log, document alert, prompt

// id, class
// id -> unique element
// class
// tag name

// getElementBy___

// const myParagraphTag = document.getElementsByTagName('p')[1];
//console.log(myParagraphTag); // array like data structure

// const myParagraphs = document.getElementsByClassName('paragraph')[1];
// console.log(myParagraphs); // array like structure -> node list

// NODELIST / HTML COLLECTION VS ARRAY

// const UnExistedElement = document.getElementById('abcd');
// console.log(UnExistedElement);

/** @type {HTMLHeadingElement} */ // THIS IS JSDOC, gives suggestion
const heading = document.getElementById('heading');

heading.style.color = 'red';
heading.style.backgroundColor = 'black';
heading.style.fontSize = '36px';
heading.style.padding = '30px';

// to change the content of node
heading.textContent = 'This is updated heading'; // to change text only

const myDiv = document.getElementById('mydiv');
myDiv.innerHTML = `<h2>This is second heading</h2>`; // to insert html element inside div

// TODO: create simple blog page with heading and paragraph
// use combination of innertext and innerhtml
// change styles too from js

myDiv.classList.add('mydiv');

// TODO: create new div element and add  class name first
// also create css with same clasname
/**
 * .first {
 *  background-color : 'red' like this
 * }
 */
