"use strict";
//click btn 1
const btn1 = document.querySelector(".btn1");
const page2 = document.querySelector(".page2");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
btn1.addEventListener("click", function () {
  page2.classList.remove("hidden");
});
btn2.addEventListener("click", function () {
  page2.classList.add("hidden");
});
document.addEventListener("keydown", function (keys) {
  if (keys.key === "e") {
    page2.classList.remove("hidden");
  } else if (keys.key === "r") {
    page2.classList.add("hidden");
  }
});
btn3.addEventListener("click", function () {
  document.querySelector("body").style.backgroundImage =
    "linear-gradient(to right bottom, #ffa4d9, #ea9dde, #d198e1, #b594e3, #9490e3, #8193e6, #6a96e8, #4f98e9, #42a2f0, #33acf6, #21b5fb, #06bfff)";
  document.querySelector(".page2").style.backgroundImage =
    "linear-gradient(to right top, #ffa4d9, #ea9dde, #d198e1, #b594e3, #9490e3, #8193e6, #6a96e8, #4f98e9, #42a2f0, #33acf6, #21b5fb, #06bfff)";
  er;
  console.log("y");
});
