const $ = (selector) => document.querySelector(selector);

//document.addEventListener("DOMContentLoaded", () => {
  const MINHEIGHT = 12;
  const MAXHEIGHT = 96;
  const MINWEIGHT = 1;
  const MAXWEIGHT = 777;
  const MINOPTIMAL = 18.5;
  const MINOVER = 25.0;
  const MINOBESE = 30.0;
  const OORHEIGHT = "Height Out Of Range!";
  const OORWEIGHT = "Weight Out Of Range!";
  let isValid = true;
  let theStatus = "";
  let theResult = "";

  const calculateTheBMI = () => {
    let height = parseInt($("#height").value);
    let weight = parseInt($("#weight").value);

    if (isNaN(height) || height < MINHEIGHT || height > MAXHEIGHT) {
      $("#theStatus").value = OORHEIGHT;
      return;
    } else {
      $("#theStatus").value = "";
    }

    if (isNaN(weight) || weight < MINWEIGHT || weight > MAXWEIGHT) {
      $("#theStatus").value = OORWEIGHT;
      return;
    } else {
      $("#theStatus").value = "";
    }

    result = (weight / Math.pow(height, 2)) * 703;
    result = parseFloat(result.toFixed(2));
    $("#result").value = result;
    theStatus = result;
    setTheBMIStatus();
  };

  const setTheBMIStatus = () => {
    if (theStatus < MINOPTIMAL) {
      theStatus = "Underweight";
    } else if (theStatus >= MINOPTIMAL && theStatus < MINOVER) {
      theStatus = "Optimal Weight";
    } else if (theStatus >= MINOVER && theStatus < MINOBESE) {
      theStatus = "Overweight";
    } else {
      theStatus = "Obese";
    }

    $("#theStatus").value = theStatus;
  };

  const clearAll = () => {
    weight = 0;
    height = 0;
    bmi = 0.0;
    theStatus = "";
    $("#height").value = "";
    $("#weight").value = "";
    $("#result").value = "";
    $("#theStatus").value = "";
    $("#height").focus();
  };

  $("#calculate").addEventListener("click", (evt) => {
    //	Call function to calculate the BMI
    calculateTheBMI();
  }); //calculate on click

  $("#clearForm").addEventListener("click", (evt) => {
    clearAll();
  });
//});
