/*
Short 4-2 Use arrow functions with the Test Scores application
==============================================================
In this exercise, you’ll modify a version of the Test Scores 
application so it uses arrow functions instead of function 
expressions. This version displays the average score after each 
score is entered.
 */

"use strict";

let scores = [];

const $ = (selector) => document.querySelector(selector);

const addScore = (selector) => {
  //  Get the last inputted score
  let score = parseInt($("#score").value);

  //  Validate that the score is >= 0 and <= 100
  if (score >= 0 && score <= 100) {
    //  Add to scores array
    scores[scores.length] = score;

    //  Clear the current score textbox
    $("#score").value = "";

    //  Call the calculateAverage() function
    $("#average").value = calculateAverage();
  } else {
    alert("Invalid score. Score must be between 0 and 100");
    $("#score").value = "";
    $("#score").focus();
  }

  //  Set the focus to the score textbox
  $("#score").focus();
};

const calculateAverage = () => {
  let total = 0;

  //  Loop through the scores array.
  //  Add each current score to total
  for (let val of scores) {
    total += val;
  }

  //  Return average to 2 decimal places
  return parseInt(total / scores.length);
};

document.addEventListener("DOMContentLoaded", () => {
  $("#add").addEventListener("click", addScore);
  $("#score").focus();
});
