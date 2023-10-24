/*
    Short 3-1 Enhance the Future Value application
==============================================
In this exercise, you’ll make a quick enhancement that 
shows not only the future value when interest 
is compounded yearly, but also when it’s compounded monthly.
 */

"use strict";

//  Get investment amount validate user enters a positive number
let investment = 0;
do {
  investment = parseFloat(prompt("Enter investment"));
} while (isNaN(investment) || investment <= 0);

//  Get rate amount validate user enters a positive number
let rate = 0;
do {
  rate = parseFloat(prompt("Enter investment rate"));
} while (isNaN(rate) || rate <= 0);

//  Get year amount validate user enters a positive number
let years = 0;
do {
  years = parseInt(prompt("Enter years"));
} while (isNaN(years) || years <= 0);

// Calculate the future value
let futureValueYearly = investment;

// Compound yearly
for (let lcv = 1; lcv <= years; lcv++) {
  futureValueYearly += (futureValueYearly * rate) / 100;
}

// Compound monthly
const months = years * 12;
let futureValueMonthly = investment;
for (let lcv = 1; lcv <= months; lcv++) {
  futureValueMonthly =
    futureValueMonthly + (futureValueMonthly * rate) / 12 / 100;
}

// Display yearly results
document.write(`<h3>Future Value with Yearly Interest<h3>`);
document.write(`<p><label>Investment Amount:</label> ${investment}`);
document.write(`<p><label>Investment Rate:</label> ${rate}`);
document.write(`<p><label>Investment Years:</label> ${years}`);
document.write(
  `<p><label>Future Value:</label> ${futureValueYearly.toFixed(2)}`
);

// Display monthly results
document.write(`<h3>Future Value with Yearly Interest<h3>`);
document.write(`<p><label>Investment Amount:</label> ${investment}`);
document.write(`<p><label>Investment Rate:</label> ${rate}`);
document.write(`<p><label>Investment Years:</label> ${years}`);
document.write(
  `<p><label>Future Value:</label> ${futureValueMonthly.toFixed(2)}`
);
