/*
    Extra 3-2 Convert number grades to letter grades
    This exercise will give you some practice using 
    if statements. To start, this application should 
    display a prompt dialog box that gets a number 
    grade from 0 through 100.

    Then, it should display in the page letter grades 
    for the numbers the user entered. To derive the 
    letter grade, you should use this table:

      A 88-100
      B 80-87 
      C 68-79 
      D 60-67 
      F < 60
*/

"use strict";

let numberGrade = 0;
let letterGrade = "";

do {
  //  Input number grade
  numberGrade = parseInt(prompt("Input number grade (0 - 100) or 999 to end"));

  if (numberGrade >= 88) {
    letterGrade = "A";
  } else if (numberGrade >= 80) {
    letterGrade = "B";
  } else if (numberGrade >= 68) {
    letterGrade = "C";
  } else if (numberGrade >= 60) {
    letterGrade = "D";
  } else if (numberGrade >= 0) {
    letterGrade = "F";
  }

  //  If number grade was between 0 and 100,
  //  print out the corresponding letter grade.
  //  Otherwise, don't print out anything.
  if (numberGrade >= 0 && numberGrade <= 100) {
    const html = `<p>Number Grade: ${numberGrade} Letter Grade: ${letterGrade}`;
    document.write(html);
  }
} while (numberGrade != 999);
