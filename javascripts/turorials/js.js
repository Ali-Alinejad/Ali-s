/* const WINFORD = {
  firstname: "Ali",
  lastname: " Alinejad",
  age: 23,
};
const Annabela = {
  firstname: "anna",
  lastname: " ebrahimian",
  age: 19,
};
const newanna = Object.assign({}, Annabela);
newanna.lastname = WINFORD.lastname;

console.log("family alan =", newanna.lastname);
console.log("va qabli is = ", Annabela.lastname);
 */

"use strict";
const resturant = {
  name: "italiano",
  location: "manhattan,NY",
  Categories: ["italiano", "pizza", "pasta", "organic"],
  starting: ["Ash", "sowp", "saladshirzi"],
  mainmenu: ["pizaa", "joje", "kababkobide"],
};
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
const [x, y, z] = arr;
console.log(x, y, z);
console.log(resturant.starting[0]);
