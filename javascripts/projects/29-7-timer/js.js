const clickstart = document.querySelector(".startbtn");
const clickstop = document.querySelector(".stpbtn");
const label1 = document.querySelector(".label");
let s = 0;
let m = 0;
let h = 0;

clickstart.addEventListener("click", function () {
  timerr = setInterval(function () {
    document.querySelector(".show").style.backgroundColor = "white";
    s += 1;

    if (s == 60) {
      m += 1;
      s = 0;
    } else if (m == 60) {
      h += 1;
      m = 0;
      s = 0;
    }
    label1.textContent = h + ":" + m + ":" + s;
  }, 1000);
});

clickstop.addEventListener("click", function () {
  clearInterval(timerr);
  document.querySelector(".show").style.backgroundColor = "red";
});
