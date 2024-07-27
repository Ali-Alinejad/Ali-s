document.querySelector(".changebtn").addEventListener("click", function () {
  a = Math.floor(Math.random() * 255 + 1);
  b = Math.floor(Math.random() * 255 + 1);
  c = Math.floor(Math.random() * 255 + 1);

  document.querySelector("body").style.backgroundColor = `rgb(${a},${b},${c})`;
});
