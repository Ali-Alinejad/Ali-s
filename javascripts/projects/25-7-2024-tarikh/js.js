document.querySelector(".btn").addEventListener("click", function () {
  let years = document.getElementById("years").value;
  let m = document.getElementById("m").value;
  let day = document.getElementById("day").value;

  if (day == 1) {
    if (m == 1) {
      day = 29;
      m = 12;
      years -= 1;
      document.querySelector(".info").textContent = years + "/" + m + "/" + day;
    } else if (m > 1 && m < 8) {
      day = 31;
      m -= 1;
      document.querySelector(".info").textContent = years + "/" + m + "/" + day;
    } else if (m > 7 && m < 13) {
      day = 30;
      m -= 1;
      document.querySelector(".info").textContent = years + "/" + m + "/" + day;
    }
  } else {
    day -= 1;
    document.querySelector(".info").textContent = years + "/" + m + "/" + day;
  }
});
