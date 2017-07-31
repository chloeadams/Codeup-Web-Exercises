
    "use strict";
console.log("connected");
    /**
     * TODO:
     * Create person object, store it in a variable named person
     */
var person = {};
 

    /**j
     * TODO:
     * Create firstName and lastName properties in your person object, and
     * assign your name to them
     */
person.firstName="Chloe";
person.lastName= "Adams";
   
   person.sayHello = function () {
    console.log("Hello from" + person.firstName + " " 
        + person.lastName);
   };

   console.log(person.sayHello());

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work

     *
     * Example
     * person.sayHello() // returns "Hello from Rick Sanchez!"
     */

     ///
//       TODO: Remember this problem from before?
//      *
//      * HEB has an offer for the shoppers that buy products amounting to more
//      * than $200. Write a JS program, using conditionals, that logs to the
//      * browser, how much does Ryan, Cameron and George need to pay. We know that
//      * Cameron bought $180, Ryan $250 and George $320. Your program will have to
//      * display a line with the name of the person, the amount before the
//      * discount, the discount, if any, and the amount after the discount.
//      *
//      * Uncomment the lines below to create an array of objects where each object
//      * represents one shopper. Use a foreach loop to iterate through the array,
//      * and console.log the relevant messages for each person
//      *

//     var shoppers = [
//    {name: 'Cameron', amount: 180},
// {name: 'Ryan', amount: 250},
// {name: 'George', amount: 320} ];

// console.log(shoppers[2].name);
// shoppers.forEach(function(shopper) {
//     console.log(shopper.name);
//     console.log(shopper.amount);
// });
// shopper.forEach(function (shopper, index)){
//     var finalTotal= 0;
//     var discountedAmount = 0;
// if (shopper.amount > 200) {
//     discountedAmount = shopper.amount .1;
//     finalTotal = shopper.amount -discountedAmount;
//     console.log(shopper.name + "got a discount on" + shopper.amount + "of " + discountedAmount);
// } else {
//     console.log(shopper.name + "paid" + shopper.amount + " and did not have a discount");
//     finalTotal= shopper.amount;

// }
// });

// console.log(shopper.name + "had a final total of" + finalTotal);
// console.log("=============================");




"use strict";

// todo:
// Create an array of objects that represent books.
// Each book should have a title and an author property.
// The author property should be an object with a firstName and lastName.
// Be creative and add at least 5 books to the array

var books = [
    {title: "Gone With The Wind", author: { firstName: "Margaret", lastName: "Mitchell"}},
    {title: "The Alchemist", author: {firstName: "Paulo", lastName: "Cohelo"}},
    {title: "Ender's Game", author: {firstName:"Orson Scott", lastName: "Card"}},
    {title: "Anthem", author: {firstName:"Ayn", lastName:"Rand"}},
    {title: "Redeeming Love", author: {firstName:"Francine", lastName:"Rivers"}};
]
var title = ();
var author = ();
var books = [todo];



// log out the books array
console.log(books);

// todo:
// Loop through the array of books using .forEach and print out the specified information about each one.
// start loop here

books.forEach(function (book, index, array)) {
    console.log("Book #" + (index + 1);
    console.log("Title: " + book.title);
    console.log("Author: " + "book.author.firstName + " " book.author.lastName");
    console.log("---");
}
// end loop here