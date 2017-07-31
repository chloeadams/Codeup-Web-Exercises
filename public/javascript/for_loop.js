console.log("hi")
/*Create a file named for_loops.js inside the js directory and link it to your loops.html file.

Write the JS code to prompt the user for a number between 1 and 10, then log to the console the multiplication table for that number. For instance, if the user enters is 7, the console output should look like:

 7x1=7
 7x2=14
 7x3=21
 7x4=28
 7x5=35
 7x6=42
 7x7=49
 7x8=56
 7x9=63
 7x10=70*/
 var userInput = prompt("Give me a number between 1-10");
 function getValue (){var userInput = prompt("Give me a number between 1-10" );}

 var text = "";
 var i; 

 for (i = 1; i <= 10 ; i = i + 1 ) {
	console.log(userInput + ("x") + i + ("=") + (userInput * i))
	userInput + ("x") + i + ("=") + (userInput * i)
} 
/*
Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:

 123 is odd
 80 is even
 24 is even
 199 is odd
 ...
 */
 var min = 20
 var max = 200

 var  randomOutput = Math.floor(Math.random() * 200) + 20;



for (i = 1; i < 10; i = i + 1) {
	if (randomOutput % 2 === 0) {
        console.log(randomOutput + ' is even');
    } else {
        console.log(randomOutput + ' is odd');
    }
    randomOutput = Math.floor(Math.random() * 200) + 20;
}	
 

 

 /*
Use inline JavaScript to create a for loop that uses console.log to create the output shown below.

 1
 22
 333
 4444
 55555
 666666
 7777777
 88888888
 999999999
 0000000000
 */

 
 /*
Create a for loop that uses console.log to create the output shown below.

 100
 95
 90
 85
 80
 75
 70
 65
 60
 55
 50
 45
 40
 35
 30
 25
 20
 15
 10
 5
*/
var text = "";
var output; 

for (var output = 100; output >= 5; output = output - 5) {
    console.log(output);
}