/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  const pintas = ["♦", "♥", "♠", "♣"];
  const valores = [
    "A",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const pintaTop = document.getElementById("pintaTop");
  const numeroCarta = document.getElementById("numeroCarta");
  const pintaBot = document.getElementById("pintaBot");
  const but = document.getElementById("but");

  function randomValue(array) {
    let randomArray = array[Math.floor(Math.random() * array.length)];
    return randomArray;
  }

  const pintaValue = randomValue(pintas);
  pintaTop.innerHTML = pintaValue;
  numeroCarta.innerHTML = randomValue(valores);
  pintaBot.innerHTML = pintaValue;

  if (pintaValue == "♦" || pintaValue == "♥") {
    pintaTop.classList.add("red");
    pintaBot.classList.add("red");
  }
  // but.setInterval("location.reload()", 3000);
  but.addEventListener("click", but => {
    // el _ es para indicar la ausencia de parametros
    location.reload();
  });
};
