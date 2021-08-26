"use strict";

let userChoice;
let computerChoice;
let gameWord;

const choices = ["rock", "paper", "scissors"];

start();

function start() {
  console.log("start");
  document.querySelectorAll("#buttons button").forEach((button) => {
    button.addEventListener("click", getPlayerChoice);
    button.style.pointerEvents = "auto";
  });
  document.querySelectorAll("#texts > *").forEach((son) => {
    son.classList.add("hidden");
  });
  document.querySelector("#player1").classList = "";
  document.querySelector("#player2").classList = "";
  document.querySelector("#player1").classList.add("player");
  document.querySelector("#player2").classList.add("player");
}

function getPlayerChoice() {
  console.log("getPlayerChoice");
  userChoice = this.classList.value;
  console.log(userChoice);
  makeRandomComputerChoice();
}

function makeRandomComputerChoice() {
  console.log("makeRandomComputerChoice");

  let randomNumber = Math.floor(Math.random() * 3);
  computerChoice = choices[randomNumber];
  gameWord = userChoice + computerChoice;
  console.log("computerChoice " + computerChoice);
  showAnimations();
}

function showAnimations() {
  console.log("showAnimations");
  document.querySelector("#player1").classList.add("shake");
  document.querySelector("#player2").classList.add("shake");
  document.querySelector("#player1").addEventListener("animationend", removeShake);
  document.querySelector("#player2").addEventListener("animationend", removeShake);
}

function removeShake() {
  document.querySelector("#player1").classList.remove("shake");
  document.querySelector("#player1").classList.add(userChoice);
  document.querySelector("#player2").classList.remove("shake");
  document.querySelector("#player2").classList.add(computerChoice);
  console.log("userChoice");
  determineWinner();
}

function determineWinner() {
  console.log("determineWinner");

  if (computerChoice === userChoice) {
    showDraw();
    document.querySelector("#texts h2").classList.remove("hidden");
    document.querySelector("#texts h2").addEventListener("click", start);
    return;
  }

  if (gameWord === "rockscissors") {
    showWin();
  } else if (gameWord === "paperrock") {
    showWin();
  } else if (gameWord === "scissorspaper") {
    showWin();
  } else {
    showLose();
  }
  document.querySelector("#texts h2").classList.remove("hidden");
  document.querySelector("#texts h2").addEventListener("click", start);
}

function showWin() {
  console.log("showWin");
  document.querySelector("#win").classList.remove("hidden");
  removeButtonsEvents();
}

function showLose() {
  console.log("showLose");
  document.querySelector("#lose").classList.remove("hidden");
  removeButtonsEvents();
}

function showDraw() {
  console.log("showDraw");
  document.querySelector("#draw").classList.remove("hidden");
  removeButtonsEvents();
}

function removeButtonsEvents() {
  document.querySelectorAll("#buttons button").forEach((button) => {
    button.removeEventListener("click", getPlayerChoice);
    button.style.pointerEvents = "none";
  });
  document.querySelector("#texts").style.pointerEvents = "auto";
}
