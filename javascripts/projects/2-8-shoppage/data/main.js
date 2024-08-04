document.querySelector(".slide").addEventListener("click", function () {
  document.getElementById("logo").style.backgroundImage =
    'URL("../pic/00001209.jpg")';
});
document.querySelector(".leftbar").addEventListener("click", function () {
  document.getElementById("menu1").textContent = "";
});
document.getElementById("closemenu").addEventListener("click", function () {
  document.getElementById("menu1").textContent = "menu";
});
