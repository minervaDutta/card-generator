/* eslint-disable */
// import "bootstrap";
// import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

var suite = ["hearts", "spades", "clubs","diamonds"];
var cards = ["A",2,3,4,5,6,7,8,9,10,"J","Q","K"];

let cardIndex = Math.floor(Math.random()* cards.length);
let suiteIndex = Math.floor(Math.random()* suite.length);

console.log(cards[cardIndex]);
if (suite[suiteIndex]==="spades"){
  document.querySelector(".card").className = "card spade";
};

document.querySelector(".content").innerHTML = cards[cardIndex] + " "+suite[suiteIndex] ;