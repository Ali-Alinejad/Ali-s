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

/* 
const resturant = {
  nikename: "italiano",
  location: "manhattan,NY",
  Categories: ["italiano", "pizza", "pasta", "organic"],
  starting: ["Ash", "sowp", "saladshirzi"],
  mainmenu: ["pizaa", "joje", "kababkobide"],
  opening: {
    Thu: {
      open: 12,
      close: 23,
    },
    Fri: {
      open: 10,
      close: 24,
    },
    Wed: {
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
const day = ["Thu", "Fri", "Wed", "Sat", "Sun", "Mon", "Tue"];
for (const iterator of day) {
  const open = resturant.opening[iterator]?.open || "unkown";

  console.log(`we on ${iterator} open at ${open}`);
}
 */
/* resturant.ordering({
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
console.log(v, b); */
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
/* 
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
}; */
/* const [players1, players2] = thegame.players;
const [gk, ...fieldplayers] = players1;
console.log(gk, players1);
const allplayers = [...players1, ...players2, "scholse"];
console.log(allplayers);
thegame.odds.team1 > thegame.odds.team2 &&
  console.log(`team ${thegame.team2} likely to win`);
thegame.odds.team2 > thegame.odds.team1 &&
  console.log(`team ${thegame.team1} likely to win`); */
/* for (const day of thegame.players[1]) console.log(day); */
/* const a = "Air line bangladesh";

console.log(a.length);
//first
console.log(a.indexOf("i"));
//true-false
console.log(a.includes("i"));
//cut
console.log(a.slice(0));
//range
console.log(a.slice(1, 14));
//last space
console.log(a.slice(a.lastIndexOf(" ")));
 */
//----------------------------------------------
/* function dikte(name) {
  const down = passngr.toLowerCase();

  const up = down[0].toUpperCase() + down.slice(1);

  return console.log(up);
}

const passngr = "moHaamaD";

dikte(passngr);
 */
//-----------------------------------------------

/* const a = "All passangers come to boarding door 23 , door23";
console.log(a.replace("door", "gate")); // just first door will be change.
console.log(a.replace(/door/g, "gate")); //  /door/ =>string -- / /g => global
 */

//boleans on string return
/* const airplane = "Airbus A320";

console.log(airplane.includes("Airbus")); //true
console.log(airplane.startsWith("Airb")); //true
 */ //---------------------------------------------
/* const namee = "mr+Ali+Alinejad";
const [sex, first, last] = namee.split("+");
const a = [sex, first, last.toUpperCase()].join("  ");
console.log(a);

 */
/* const apiflight = "Turkey_france_10:45_gate2";
const [from, to, time, gate] = apiflight.split("_");
console.log(
  `airplane from ${from} to ${to} its time to bording time: ${time.replace(
    ":",
    "H"
  )} `
);

const a = apiflight.split();

const cities = apiflight.split("_").slice(0, 2);
console.log(cities);
 */

/* const iranair = {
  name: "iranAir",
  fly: "A747",
  list: [],
  booking(passnger, flight) {
    iranair.list.push({ flyname: ` ${flight}` }, passnger);
  },
};

const books = iranair.booking;

books("ali", 25);
books("ali", 25);
books("ali", 25);
console.log(iranair.list);
 */
/* const calctax = (rate) => (value) => {
  return value + value * rate;
};
const a = calctax(0.09);
console.log(a(25));


 */

/* answers: new Array(4).fill(0);
const answer = Number(prompt("whats your fav lang : 1.js  2.ph  3.c++"));
 */
//--------------closures----------------
/* const booking = function () {
  let mosafer = 0;
  return function () {
    mosafer++;
    console.log(`tedad mosaferin :${mosafer}`);
  };
};

const book = booking();

book();
book();
book();
book();
 */
//---------------forEach-------------------
const mov = [200, 150, -400, 250, -650, -130];

mov.forEach(function (movement) {
  if (movement > 0) console.log("deposit:" + movement);
  else {
    console.log("withdraw:" + movement);
  }
});
