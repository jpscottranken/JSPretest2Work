/*
  Short 4-1 Enhance the MPG application
=====================================
In this exercise, you'll make a couple of quick 
enhancements to the Miles Per Gallon application, 
like clearing the two entries if the user 
double-clicks in the Miles Per Gallon text box.

Enhance the application so the entries are cleared 
when the user double-clicks in the Miles Per 
Gallon text box. (Incidentally, this won’t work if 
the text box is disabled.)
	
Enhance the application so the Miles Driven text box
is cleared when it receives the focus. Then, 
do the same for the Gallons of Gas Used text box.
	
Enhance the application so the calculation is done when
the focus leaves the Gallons of Gas Used 
text box. To do the calculation, you just need to run the 
processEntries() function when that event occurs.
 */

"use strict";

//  Make alias for document.getElementById
const $ = (selector) => document.querySelector(selector);

const getErrorMessage = (lbl) => `${lbl} must be a valid number > 0.`;

const setFocusAndSelect = (selector) => {
  const elem = $(selector);
  elem.focus();
  elem.select();
};

const processEntries = () => {
  const miles = parseFloat($("#miles").value);
  const gallons = parseFloat($("#gallons").value);

  //  Validate that each textbox value is numeric and > 0
  if (isNaN(miles) || miles <= 0) {
    alert(getErrorMessage("Miles Driven "));
    setFocusAndSelect("#miles");
  } else if (isNaN(gallons) || gallons <= 0) {
    alert(getErrorMessage("Gallons Used "));
    setFocusAndSelect("#gallons");
  } else {
    $("#mpg").value = (miles / gallons).toFixed(2);
  }
};

//  Clear miles textbox
let clearMiles = () => {
  $("#miles").value = "";
};

//  Clear gallons textbox
let clearGallons = () => {
  $("#gallons").value = "";
};

//  Clear both miles and gallons textboxes
let clearEntries = () => {
  $("#miles").value = "";
  $("#gallons").value = "";
  $("#mpg").value = "";
};

//  Create eventListeners
document.addEventListener("DOMContentLoaded", () => {
  $("#calculate").addEventListener("click", processEntries);
  $("#mpg").addEventListener("dblclick", clearEntries);
  $("#miles").addEventListener("focus", clearMiles);
  $("#gallons").addEventListener("focus", clearGallons);
  $("#gallons").addEventListener("blur", processEntries);
  $("#miles").focus();
});
