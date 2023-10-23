/*
Short 2-1 Modify the Test Scores application
============================================
In this exercise, you'll modify the Test Scores application 
so it provides for four test scores and 
displays the results. 
*/

"use strict";

//  Create 4 test scores
const score1 = parseInt(prompt("Please enter score (0 - 100)", 77));
const score2 = parseInt(prompt("Please enter score (0 - 100)", 77));
const score3 = parseInt(prompt("Please enter score (0 - 100)", 77));
const score4 = parseInt(prompt("Please enter score (0 - 100)", 77));
const total = score1 + score2 + score3 + score4;

//  Calculate the average
const average = total / 4.0;

alert(
  "Score1 = " +
    score1 +
    "\n" +
    "Score2 = " +
    score2 +
    "\n" +
    "Score3 = " +
    score3 +
    "\n" +
    "Score4 = " +
    score4 +
    "\n" +
    "Average = " +
    average.toFixed(2)
);

//  Display on browser page
const html = `<p>Score1 = ${score1}</p>
<p>Score2 = ${score2}</p>
<p>Score3 = ${score3}</p>
<p>Score4 = ${score4}</p>
<p>Average = ${average.toFixed(2)}</p>
`;
document.write(html);
