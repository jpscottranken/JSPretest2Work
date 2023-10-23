/*
Extra 4-2 Develop the Change Calculator
=======================================
In this exercise, you’ll develop an application that tells 
how many quarters, dimes, nickels, and pennies are 
needed to make change for any amount of change from 0 through 
99 cents. One way to get the results is to use the 
divide and modulus operators along with the parseInt() method 
for truncating the results so they are whole numbers.

Code an event handler named processEntry() that gets the 
user's entry and checks to make sure that it is a 
number between 0 and 99. If so, call a function named 
makeChange() and pass it the user's entry. Otherwise, 
display an alert dialog box for the error.
	
Code the makeChange() function, which should have one 
parameter that accepts the user's entry. This function 
shouldn't return anything, but it should display the 
results in the text boxes for Quarters, Dimes, Nickels, 
and Pennies.
	
Code a DOMContentLoaded event handler that attaches the 
processEntry() event handler to the click event of 
the Make Change button. Then, test this application.
*/

"use strict";

const $ = (selector) => document.querySelector(selector);

const makeChange = (cents) => {
  alert("In makeChange() function!");
  const quarters = parseInt(cents / 25);
  cents %= 25;

  const dimes = parseInt(cents / 10);
  cents %= 10;

  const nickels = parseInt(cents / 5);
  pennies = cents % 5;

  //  Display the number of quarters, the number of
  //  dimes, the number of nickels, and the number
  //  of pennies
  $("#quarters").value = quarters;
  $("#dimes").value = dimes;
  $("#nickels").value = nickels;
  $("#pennies").value = pennies;
};

const processEntry = () => {
  let cents = parseInt($("#cents").value);

  //  Validate cents input
  if (isNaN(cents) || cents < 0 || cents >= 100) {
    alert("Entry for cents must be between 0 and 99");
  } else {
    makeChange(cents);
  }

  $("#cents").focus();
};

//  Set up the eventListener
document.addEventListener("DOMContentLoaded", () => {
  //  Add eventListener
  $("#calculate").onclick = processEntry();

  $("#cents").focus();
});
