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
}

//scroll
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 50 ||
    document.documentElement.scrollTop > 100
  ) {
    document.getElementById("bar").style.fontSize = "30px";
    document.getElementById("bar").style.height = "130px";
    document.querySelector(".logopic").style.height = "100px";
    document.querySelector(".logopic").style.width = "100";
    document.querySelector(".midbar").style.opacity = "0";
  } else {
    document.getElementById("bar").style.fontSize = "90px";
    document.getElementById("bar").style.height = "280px";
    document.querySelector(".logopic").style.height = "180px";
    document.querySelector(".logopic").style.width = "180";
    document.querySelector(".midbar").style.opacity = "1";
  }
}
