<?php
// <!-- Server Name Generator
//
// We are going to build a server name generator. To do this, we will need to follow the specs below.
//
// Create a new file in your public directory named server-name-generator.php.
// Create two arrays.
// One containing at least 10 adjectives.
$adjectives = array(
'active',
'actual',
'adept',
'admirable',
'admired',
'adolescent',
'adorable',
'adored',
'advanced',
'afraid');

// Another containing at least 10 nouns.
$nouns = array(
'area',
'book',
'business',
'case',
'child',
'company',
'country',
'day',
'eye',
'fact',
)
// Create a function that will return a random element from an array.
function random($adjectives) {
    if(is_string($adjectives)) {
        $randomIndex = mt_rand(0, strlen($adjectives) -1);
        return $adjectives[$randomIndex];
    }
    if(is_array($adjectives)) {
        $key = array_rand($adjectives);
        return $adjectives[$key];
    }
}
// Create a function that returns the string value of our new server name made by combining a random adjective with a random noun.
// Each time you refresh the page a different result should be displayed.
// Make sure you have fun with it. Add CSS to make it fancy.


// My Favorite Things
//
// We are going to build a simple list of your favorite things and display these in the form of a table in HTML.
//
// Create a new file named my-favorite-things.php and put it in your public directory.
// Create an array of your favorite things. This array should contain at least five things.
// We will need to loop through this array and display each element inside your HTML.
// Use an HTML table for this display.
// Use CSS to add a light gray background on every other row for a nice effect.
// Have fun and make it beautiful! -->
