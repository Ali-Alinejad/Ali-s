/* const WINFORD = {
  firstname: "Ali",
  lastname: " Alinejad",
  age: 23,
};
const Annabela = {
  firstname: "anna",
  lastname: " ebrahimian",
  age: 19,
};
const newanna = Object.assign({}, Annabela);
newanna.lastname = WINFORD.lastname;

console.log("family alan =", newanna.lastname);
console.log("va qabli is = ", Annabela.lastname);
 */
/* const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
const [x, y, z] = arr;
console.log(x, y, z);
console.log(resturant.starting);
[resturant.starting[0], resturant.starting[1]] = [
  resturant.starting[1],
  resturant.starting[0],
]; */
"use strict";
/* const resturant = {
  nikename: "italiano",
  location: "manhattan,NY",
  Categories: ["italiano", "pizza", "pasta", "organic"],
  starting: ["Ash", "sowp", "saladshirzi"],
  mainmenu: ["pizaa", "joje", "kababkobide"],
  opening: {
    thu: {
      open: 12,
      close: 23,
    },
    Fri: {
      open: 10,
      close: 24,
    },
    wed: {
      open: 8,
      close: 20,
    },
  },
  order: function (startingindex, mainindex) {
    return [this.starting[startingindex], this.mainmenu[mainindex]];
  },
  ordering: function ({ mainindex, startingindex, time, addresss }) {
    return console.log(
      `your order times is ${time} and ur address is ${addresss}  your main is ${this.mainindex} and starting with ${this.starting}`
    );
  },
};

resturant.ordering({
  time: "22:01",
  addresss: "theran,eslamshahr",
  startingindex: 2,
  mainindex: 3,
}); */

/* const { name: nikename, opening: hours, Categories: tags } = resturant;
console.log(resturant.hours);
const {
  wed: { open: v, close: b },
} = resturant.opening;
console.log(v, b);
 */

/* console.log("" || "ali");
console.log(typeof (0 && "ali"));
console.log(typeof (2 && "ali"));
 */
/* const resturant1 = {
  owner: "ali",
};
const resturant2 = {
  owner: "",
};

resturant1.owner = resturant1.owner ?? "unknown";
resturant2.owner = resturant2.owner || "unknown";

console.log(resturant1);
console.log(resturant2);
 */
///////////////////chalenge with football

const thegame = {
  team1: "bayern",
  team2: "dortmond",
  players: [
    ["neuer", "lewandowski", "kimich", "gnabry", "alaba", "sane"],
    ["hummels", "hakimi", "hazard", "brandt", "witsel"],
  ],
  score: "4:0",
  scored: ["lewandowski", "gnabry", "lewandowski", "hummels"],
  date: "nov 9th,2023",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
const [players1, players2] = thegame.players;
const [gk, ...fieldplayers] = players1;
console.log(gk, players1);
const allplayers = [...players1, ...players2, "scholse"];
console.log(allplayers);
thegame.odds.team1 > thegame.odds.team2 &&
  console.log(`team ${thegame.team2} likely to win`);
thegame.odds.team2 > thegame.odds.team1 &&
  console.log(`team ${thegame.team1} likely to win`);
