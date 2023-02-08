'use strict'

// console.log('hello world');

document.write("<h1>Arrays lab</h1>")

// const drinks = ["coffee", "water", "soda", "tea"];


// console.log(drinks);

// document.write( drinks[1]);

// drinks.push("juice");

// console.log(drinks);

const hours = ["9am", "10am", "1pm", "2pm", "3pm", "4pm"];
hours.unshift("open");
let start = 3;
let deleteItem = 0;
hours.splice(start, deleteItem, "closed", "11am-12pm for lunch", "open");
var i=0;
for(i=0; i<hours.length; i++){
  document.write("<ul>", hours[i], "</ul>");
}

// function extendedHours(){
//   hours.push("5");
//   hours.push("6");
// }
// extendedHours();

// function postExtendedHours(){
//   extendedHours();
//   document.write("weekend hours ", hours[0], " to ", hours[11]);
// }
// postExtendedHours();

// const breakfast = ["cerial", "toast", "pancakes", "waffles", "crepes"];

// breakfast.unshift("bagel");

// console.log(breakfast.length);
// var i = 0;
// for(i=0; i<breakfast.length; i++){
//   document.write("<ul>", breakfast[i], "</ul>");
// }