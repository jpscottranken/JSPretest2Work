/*
Extra 3-3 Create a Sum of Numbers application
=============================================
This application will give you a chance to use a for loop. 
It asks the user to enter a number 
from 1 through 100 with this prompt dialog box:

Finally, it adds all the numbers from each of the user’s 
entries and displays the sum of the 
numbers on the page.

In the script element, add a do-while loop that prompts 
the user for an entry from 1 through 100. 

If the entry is invalid, display an alert box with this 
message: "Please enter a number between 1 
and 100". Then, continue the loop until the entry is valid.
	
After the do-while loop, code a for loop that sums the
numbers, and then display the second dialog 
box above. For instance, the sum for an entry of 4 is 
1 + 2 + 3 + 4.
	
Add a do-while loop around all of the code that uses the 
second dialog box above to determine whether
the first dialog box should be displayed again so the user 
can enter another number. The application 
should end for any entry other than "y".
*/

"use strict";

let topNumber = 0;
let again = "";
let total = 0;
do {
  do {
    topNumber = parseInt(prompt("Enter a number between 1 and 100"));

    if (topNumber >= 1 && topNumber <= 100) {
      for (let lcv = 1; lcv <= topNumber; ++lcv) {
        total += lcv;
      }

      const html = `<p>The sum of the #s from 1 to ${topNumber} is ${total}</p>`;
      document.write(html);

      again = prompt("Do another sum (Y/N)", y);
    }
  } while (isNaN(topNumber) || topNumber < 1 || topNumber > 100);
} while (again === "Y" || again === "y");
