/*
In this exercise, you’ll develop an application that 
calculates the sales tax and invoice total after the user 
enters the subtotal and tax rate.

In the JavaScript file, note that the $() function has been 
coded for you. It gets the object for the HTML 
element that’s specified by the CSS selector.
	
Code an event handler function named processEntries() that
gets the user entries, calculates the sales tax 
and total, and displays those results in the text boxes.
	
Code a DOMContentLoaded event handler that attaches the
processEntries() function to the click event of the 
Calculate button. Then, test what you have so far.
	
Add data validation to the processEntries() function. The 
subtotal entry should be a valid, positive number 
that's less than 10,000. The tax rate should be a valid, 
positive number that’s less than 12. The error messages 
should be displayed in alert dialog boxes.
	
Subtotal must be > 0 and < 10000 
Tax Rate must be > 0 and < 12
	
Add JavaScript that moves the cursor to the Subtotal field 
when the application starts and when the user clicks 
on the Calculate button.
	
Add the event handler for the click event of the Clear button.
This event handler should clear all text boxes 
and move the cursor to the Subtotal field.
	
Add event handlers for the click events of the Subtotal and
Tax Rate text boxes. Each handler should clear the 
data from the text box. Update the event handler for the 
Clear button to call these functions as well (to reduce 
code duplication).
*/

const $ = (selector) => document.querySelector(selector);

const processEntries = () => {
  //  Get use inputs
  const subtotal = parseFloat($("#subtotal").value);
  const taxRate = parseFloat($("#taxRate").value);

  //  Validate subtotal
  if (isNaN(subtotal) || subtotal <= 0 || subtotal > 10000) {
    alert("Subtotal Must Be > 0 and <= 10000");
  }
  //  Validate taxRate
  else if (isNaN(taxRate) || taxRate <= 0 || taxRate > 12) {
    alert("Tax Rate Must Be > 0 and <= 12");
  } else {
    //  Calcuate salesTax and the final total
    let salesTax = subtotal * (taxRate / 100);
    salesTax = parseFloat(salesTax.toFixed(2));
    const total = subtotal + salesTax;

    //  Display the salesTax and the final total
    $("#salesTax").value = salesTax;
    $("#total").value = total;
  }

  //  Move focus back to subtotal
  $("#subtotal").focus();
  clearSubtotal();
  clearTaxRate();
};

const clearSubtotal = () => ($("#subtotal").value = "");

const clearTaxRate = () => ($("#taxRate").value = "");

const clearAllEntries = () => {
  clearSubtotal();
  clearTaxRate();
  $("#salesTax").value = "";
  $("#total").value = "";

  //  Move focus back to subtotal
  $("#subtotal").focus();
};

document.addEventListener("DOMContentLoaded", () => {
  //  Add event listeners
  $("#calculate").addEventListener("click", processEntries);
  $("#clear").addEventListener("click", clearAllEntries);
  $("#subtotal").addEventListener("click", clearSubtotal);
  $("#taxRate").addEventListener("click", clearTaxRate);

  //  Move focus back to subtotal
  $("#subtotal").focus();
});
