//  Make alias
const $ = (selector) => document.querySelector(selector);

/*
      bmi < 18.5                    You are underweight
      bmi >= 18.5 but less than 25  You are of optimal weight
      bmi >= 25.0 but less than 30  You are overweight
      bmi >= 30                     You are obese
 */

//  Constants
const MINHEIGHT = 12;
const MAXHEIGHT = 96;
const MINWEIGHT = 1;
const MAXWEIGHT = 777;
const MINOPTIMAL = 18.5;
const MINOVER = 25.0;
const MINOBESE = 30.0;
const OORHEIGHT = "Height Out-Of-Range";
const OORWEIGHT = "Weight Out-Of-Range";

//  Variables
let isValid = true;
let theStatus = "";
let theResult = "";
let height = 0;
let weight = 0;
let bmi = 0;
let bmiStatus = "";

const calculateTheBMI = () => {
  //  Set height based on value in textbox1
  height = parseInt($("#height").value);

  //  Validate that the height:
  //  1) Is numeric
  //  2) Within range
  if (isNaN(height) || height < MINHEIGHT || height > MAXHEIGHT) {
    //  Validation failed
    $("#theStatus").value = OORHEIGHT;
    return;
  }

  //  Set weight based on value in textbox2
  weight = parseInt($("#weight").value);

  //  Height input was valid. Now:
  //  Validate that the weight:
  //  1) Is numeric
  //  2) Within range
  if (isNaN(weight) || weight < MINWEIGHT || weight > MAXWEIGHT) {
    //  Validation failed
    $("#theStatus").value = OORWEIGHT;
    return;
  }

  //  Height input was valid.
  //  Weight input was valid.
  $("#theResult").value = "";
  $("#theStatus").value = "";

  //theResult = weight / (Math.pow(height, 2)) * 703
  bmi = (weight / (height * height)) * 703;
  //alert("DEBUG!!!! The calcuated BMI: " + bmi);
  //  Put BMI in associated textbox
  $("#theResult").value = bmi.toFixed(2);

  setTheBMIStatus();
};

const setTheBMIStatus = () => {
  //  If BMI < 18.5
  if (bmi < MINOPTIMAL) {
    theStatus = "Underweight";
  } else if (bmi >= MINOPTIMAL && bmi < MINOVER) {
    theStatus = "Optimal Weight";
  } else if (bmi >= MINOVER && bmi < MINOBESE) {
    theStatus = "Overweight";
  } else {
    theStatus = "Obese";
  }

  $("#theStatus").value = theStatus;
};

const clearAll = () => {
  //  Clear out variables
  height = 0;
  weight = 0;
  bmi = 0;
  theStatus = "";

  //  Clear out the textboxes
  $("#height").value = "";
  $("#weight").value = "";
  $("#theResult").value = "";
  $("#theStatus").value = "";

  //  Set focus to height textbox
  $("#height").focus();
};

//  Add/set eventListeners
$("#calculate").addEventListener("click", (evt) => {
  calculateTheBMI();
});

$("#clearForm").addEventListener("click", (evt) => {
  clearAll();
});
