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
function randomArrayElement($array) {
    return $array[rand0, count($array) - 1)];
    }
}
// Create a function that returns the string value of our new server name made by combining a random adjective with a random noun.
funtion randomServerName ($arr1, $arr2) {
  return randomArrayElement($arr1) . " "randomArrayElement($arr2);
}
// Each time you refresh the page a different result should be displayed.
// Make sure you have fun with it. Add CSS to make it fancy.
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <style>
    body {
      background-color: green;
      color: white;
    }
    </style>
  </head>
    <body>
      <h1>Adjectives and nouns....</h1>
      <h1>Random element: <?php echo randomArrayElement</h1> ?>
      <h1> Random elements: <?php echo randomServerName($Adjectives, $nouns) ?>
   </table>
    </body>
</html>
