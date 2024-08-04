document.getElementById("sideitems").style.transform = "translateX(-400px)";

const mode = document.querySelector(".body");

document.querySelector(".slide").addEventListener("click", function () {
  document.getElementById("logo").style.backgroundImage =
    'URL("../pic/rulex.png")';
});

document.querySelector(".menu1").addEventListener("click", function () {
  document.querySelector(".menu1").textContent = " ";
});
function closenav() {
  document.getElementById("sideitems").style.transform = "translateX(-400px)";
  document.getElementById("sideitems").style.transition = "1s";
}
function openNav() {
  document.getElementById("menu1").textContent = " ";
  document.getElementById("sideitems").style.transform = "translateX(0px)";
  document.getElementById("sideitems").style.transition = "1s";
  document.getElementById("sideitems").blur = "true";
}
