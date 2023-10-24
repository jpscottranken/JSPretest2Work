"use strict";

const $ = (selector) => document.querySelector(selector);

const calculateTax = (income) => {
  let tax = 0;

  if (income <= 9875) {
    tax = income * 0.1;
  } else if (income > 9875 && income <= 40125) {
    tax = 987.5 + (income - 9875) * 0.12;
  } else if (income > 40125 && income < 85525) {
    tax = 4617.5 + (income - 40125) * 0.22;
  } else if (income > 85525 && income < 163300) {
    tax = 14605.5 + (income - 85525) * 0.24;
  } else if (income > 163300 && income <= 207350) {
    tax = 33271.5 + (income - 163300) * 0.32;
  } else if (income > 207350 && income < 518400) {
    tax = 47367.5 + (income - 207350) * 0.35;
  } else if (income > 518400) {
    tax = 156235 + (income - 518400) * 0.37;
  }

  return tax.toFixed(2);
};

const processEntry = () => {
  //  Get income from associated textbox
  let income = parseFloat($("#income").value);

  //  Validate the income that was inputted
  if (isNaN(income) || income <= 0) {
    alert("Income must be > 0");
  } else {
    income = parseInt(income);
    $("#tax").value = calculateTax(income);
  }

  $("#income").focus();
};

document.addEventListener("DOMContentLoaded", () => {
  //  Add the event handler
  $("#calculate").addEventListener("click", processEntry);

  //  Move focus to income textbox
  $("#income").focus();
});
