document.querySelector(".slide").addEventListener("click", function () {
  document.getElementById("logo").style.backgroundImage =
    'URL("../pic/00001209.jpg")';
});

document.querySelector("menu1").addEventListener("click", (e) => {
  document.getElementById("menu1").textContent = "close";
});
