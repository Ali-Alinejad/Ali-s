document
  .querySelector(".changebtn")
  .addEventListener("click", function separate(Number) {
    Number += "";
    Number = Number.replace(",", "");
    x = Number.split(".");
    y = x[0];
    z = x.length > 1 ? "." + x[1] : "";
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(y)) y = y.replace(rgx, "$1" + "," + "$2");
    document.querySelector("show").textContent = y + z;
  });
