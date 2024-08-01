let rand = Math.trunc(Math.random(1, 20) * 20) + 1;
document.querySelector(".random").textContent = "?";
let highscore = 0;
let score = 20;

//click

document.querySelector(".checks").addEventListener("click", function () {
  score--;
  document.querySelector(".text2").textContent = score;
  if (score < 1) {
    document.querySelector(".notif").textContent = "YOU LOSE";

    document.querySelector(".profile").style.backgroundColor = "RED";
  } else {
    gs = document.querySelector(".gs").value;
    if (gs > rand) {
      document.querySelector(".notif").textContent = "DOWN";
    } else if (gs < rand) {
      document.querySelector(".notif").textContent = "UP";
    } else if (!gs) {
      document.querySelector(".notif").textContent = "enter number";
      //true
    } else {
      document.querySelector(".notif").textContent = "YEEEEES";
      document.querySelector(".random").textContent = rand;
      document.querySelector(".random").style.backgroundColor = "lightGreen";
      document.querySelector(".profile").style.backgroundColor = "lightGreen";
      if (score > highscore) {
        document.querySelector(".text3").textContent = score;
        highscore = score;
      }
    }
  }
});
//reset
document.querySelector(".reset").addEventListener("click", function () {
  let rand = Math.trunc(Math.random(1, 20) * 20) + 1;
  console.log(rand);
  document.querySelector(".profile").style.backgroundColor = "rgb(92, 89, 89)";
  document.querySelector(".random").style.backgroundColor = "rgb(92, 89, 89)";
  document.querySelector(".profile").style.backgroundColor = "rgb(92, 89, 89)";
  document.querySelector(".notif").textContent = "STARTING";
  document.querySelector(".random").textContent = "?";
  document.querySelector(".gs").textContent = " ";
  score = 20;
});
