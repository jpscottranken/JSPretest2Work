/*
Extra 3-1 Enhance the Fahrenheit to Celsius application
=======================================================
In this exercise, you’ll add data validation to the 
application you created in extra exercise
2-1. You'll also let the user do multiple conversions 
before ending the application. This is the 
dialog box for an invalid entry:

Add data validation to the application so it won't do
the conversion until the user enters a Fahrenheit 
temperature between -100 and 212. If the entry is invalid, 
a dialog box should be displayed.
	
Add a loop to the code so the user can do a series of 
calculations without restarting the application. To end 
the application, the user must enter 999 as the temperature.
*/

let fahrenheit = 0;
do {
  //  Get fahrenheit temperature from the user. Convert to decimal
  fahrenheit = parseFloat(prompt("Enter a temp or 999 to end", 999));

  //  Validate that the inputted temperatur is between -100 and +212
  if (fahrenheit >= -100 && fahrenheit <= 212) {
    //  Calculate celsius temperature
    const celsius = ((fahrenheit - 32) * 5) / 9;

    //  Display both the fahrenheit and celsius temps
    const html = `<p>${fahrenheit} degrees F = ${celsius.toFixed(
      2
    )} degrees C</p>`;
    document.write(html);
  } else if (fahrenheit != 999) {
    //  Handle out-of-range input (< -100 or > 212)
    alert(
      "You entered a farhenheit temp of " +
        fahrenheit +
        "\nEntry must be between -100 and +212 degrees."
    );
  }
} while (fahrenheit != 999);
