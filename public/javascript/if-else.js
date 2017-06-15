"use strict";

// Don't change the next two lines!
// These creates two variables for you:
//     one with the colors of the rainbow
//     another with a single random color value
function getValue (){var userInput = prompt("What's your favorite color?" );}
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];

var favorite = 'yellow'; // TODO: change this to your favorite color from the list

// TODO: Create a block of if/else statements to check for every color except indigo and violet.
if (color ==='red') 
	{console.log("APPLES ARE RED.");} 
	else if (color ==='orange') 
		{console.log("ORANGES ARE ORANGE.");}
	else if (color ==='yellow') {console.log("LEMONS ARE YELLOW.");}
	else if (color ==='green') {console.log("LIMES ARE GREEN.");}
	else if (color ==='blue') {console.log("BLUEBERRIES ARE BLUE.");}
	else {console.log("I DONT KNOW ANYTHING  BY THAT COLOR.");}

	


if (color === favorite) { message = "That's my favorite color too!"; }
else { message = "That's a nice color, but it's not my favorite."; }


	
// TODO: When a color is encountered log a message that tells the color, and an object of that color.
//       Example: Blue is the color of the sky.

// TODO: Have a final else that will catch indigo and violet.
// TODO: In the else, log: I do not know anything by that color.

// TODO: Using the ternary operator, conditionally log a statement that
//       says whether the random color matches your favorite color.