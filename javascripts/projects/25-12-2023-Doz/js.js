let x = 1;
const radif = [0, 1, 2, 3, 4, 5, 6, 7, 8];

console.log(typeof radif);
for (let i = 1; i <= 10; i++) {
  document.querySelector(".btn" + i).addEventListener("click", function () {
    x++;
    if (x % 2 == 0) {
      document.querySelector(".btn" + i).value = "X";
      radif[i - 1] = document.querySelector(".btn" + i).value;
      document.querySelector(".btn" + i).style.backgroundColor = "#FBC638";
    } else {
      document.querySelector(".btn" + i).value = "O";
      radif[i - 1] = document.querySelector(".btn" + i).value;
      document.querySelector(".btn" + i).style.backgroundColor = "#6225E6";
    }
    console.log(radif[i - 1]);
    console.log(radif);
    if (
      (radif[0] == radif[1] && radif[0] == radif[2]) ||
      (radif[0] == radif[3] && radif[0] == radif[6]) ||
      (radif[0] == radif[4] && radif[0] == radif[8]) ||
      (radif[1] == radif[4] && radif[1] == radif[7]) ||
      (radif[3] == radif[4] && radif[3] == radif[5]) ||
      (radif[2] == radif[4] && radif[2] == radif[6]) ||
      (radif[2] == radif[5] && radif[2] == radif[8]) ||
      (radif[6] == radif[7] && radif[7] == radif[8])
    ) {
      document.querySelector(".container").style.backgroundColor = "green";
    }
  });
}
