"use strict";

// declaration
const arr1 = new Array();
const arr2 = [1, 2];

const fruits = [
  "apple",
  "orange",
  "grape",
  "banana",
  "watermelon",
  "strawberry",
];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

console.log();

for (let fruit of fruits) {
  console.log(fruit);
}

console.log();

fruits.forEach((f) => console.log(f));
