/*
Extra 2-1 Convert Fahrenheit to Celsius
=======================================
In this exercise, you'll create an application that 
converts Fahrenheit temperatures to Celsius temperatures
by using the prompt() method of the window object and the 
write() method of the document object.

To convert Fahrenheit to Celsius, first subtract 32 
from the Fahrenheit temperature. Then, multiply that
result by 5/9.
*/

//  Get Fahrenheit temp from user and convert it to a float
let fahrenheit = parseFloat(prompt("Enter fahr temp"));

//  Calculate the Celsius temperature
const celsius = ((fahrenheit - 32) * 5) / 9;

//  Display both values
const html = `<p>${fahrenheit} degrees F = ${celsius.toFixed(2)} degrees C</p>`;
document.write(html);
