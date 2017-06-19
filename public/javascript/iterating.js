
    "use strict";

    // TODO: Create an array of 4 people's names using literal array notation, 
    //in a variable called 'names'.

    var names = ["Chloe", "Erynn", "Mason", "Adia"];

    // TODO: Create a log statement that will log the number of elements in the names array.
    console.log(names.length);

    // TODO: Create log statements that will print each of the names array elements individually.
   /*console.log(names[0]= "Chloe");
   console.log(names[1]= "Erynn");
   console.log(names[2]= "Mason");
   console.log(names[3]= "Adia");*/

   for (var i = 0; i < names.length; ++i) {console.log(names[i])};

   	names.forEach(function(name, index, array) {
   		console.log(name)
   	});


