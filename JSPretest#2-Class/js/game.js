const $ = (selector) => document.querySelector(selector);

//  Constants
const MINGUESS = 1;
const MAXGUESS = 100;
const NGM = "No Guess Was Made";
const WTH = " Was Too High";
const WTL = " Was Too Low";
const WC = " Was Correct!";
const GOOR = " Out Of Range (< 1 or > 100)";

//  Variables
let randNum = 0;
let guess = 0;
let totGuesses = 0;
//let isValid = true;
let theStatus = "";

//  Add makeYourGuess eventListener
$("#makeGuess").addEventListener("click", (evt) => {
  makeYourGuess();
});

const makeYourGuess = () => {
  //  If current value of randNum is 0,
  //  generate a new random number.
  if (randNum === 0) {
    randNum = generateRandomNumber();
  }

  //  Your guess is the value in the guess textbox.
  guess = $("#guess").value;

  //  Validate that a guess was made
  if (guess === "") {
    $("#theStatus").value = NGM;
    return;
  }

  //  A numeric guess was made
  figureGuessStatus();
};

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 100) + 1;
};

const figureGuessStatus = () => {
  //  Validate the guess was within range
  //  >= 1 and <= 100
  if (guess < MINGUESS || guess > MAXGUESS) {
    $("#theStatus").value = GOOR;
    return;
  }

  //  A valid guess was made so:
  //  1) Clear guess status textbox.
  //  2) Increment the total # guesses.
  $("#theStatus").value = "";
  ++totGuesses;

  //  Check to see if:
  //  1) Guess too high.
  //  2) Guess too low.
  //  3) Guess was correct.
  if (guess > randNum) {
    $("#theStatus").value = guess + WTH;
  } else if (guess < randNum) {
    $("#theStatus").value = guess + WTL;
  } else {
    $("#theStatus").value = guess + WC;
  }

  //  Display the current total number of guesses
  $("#totalGuesses").value = totGuesses;
};

const clearTheForm = () => {
  $("#guess").value = "";
  $("#theStatus").value = "";
  $("#guess").focus();
};

$("#clearForm").addEventListener("click", (evt) => {
  clearTheForm();
});

$("#newGame").addEventListener("click", (evt) => {
  //  Generate a new random number between 1 - 100
  randNum = generateRandomNumber();

  clearTheForm();
  totGuesses = 0;
  $("#totalGuesses").value = "";
});
