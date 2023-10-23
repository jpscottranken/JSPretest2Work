/*
Short 5-1 Debug the MPG application
===================================
This exercise gives you a chance to use your debugging 
skills to find the cause of an error. 


Start the application, enter valid values and click the
Calculate MPG button. Nothing happens.
	
Use Chrome's developer tools to find the cause or causes
of the problem. Use your IDE or text editor to fix the code.
	
Start the application again, enter valid values and click
the Calculate MPG button. It should work now.
 */

"use strict";

const $ = (selector) => document.querySelector(selector);

const getErrorMsg = (lbl) => `${lbl} must be a valid number > 0.`;

const focusAndSelect = (selector) => {
  const elem = $(selector);
  elem.focus();
  elem.select();
};

const calculateMPG = (miles, gallons) => (miles / gallons).toFixed(2);

const processEntries = () => {
  const miles = parseFloat($("#miles").value);
  const gallons = parseFloat($("#gallons").value);

  if (isNaN(miles) || miles <= 0) {
    alert(getErrorMsg("Miles driven"));
    focusAndSelect("#miles");
  } else if (isNaN(gallons) || gallons <= 0) {
    alert(getErrorMsg("Gallons of gas used"));
    focusAndSelect("#gallons");
  } else {
    //$("#mpg").value = calculateMpg(miles / gallons);
    $("#mpg").value = calculateMPG(miles, gallons);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  $("#calculate").addEventListener("click", processEntries);
  $("#miles").focus();
});
