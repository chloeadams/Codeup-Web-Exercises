<?php
// var_dump($_GET);
//Determine if a variable is set and is not NULL
//retruns true if and only if the variable is set and not assinged to null
//same way to assign value as ternary
// if isset ($_GET['count'])); {
//     $count = $_GET['counter'];
// } else {
//   $count = 0;
// }

//Determine whether a variable is considered to be empty. A variable is considered empty if it does not exist or if its value equals FALSE. empty() does not generate a warning if the variable does not exist.
// empty ($data['counter']);

function pageController()
{
  $data= [];
  //ternary operator
  $data['count'] = isset($_GET['count']) ? $_GET['count'] : 0;
  return $data;

}

// Call the pageController function and extract all the returned array as local variables.
extract(pageController());

?>

 <!-- In this exercise we will be experimenting with sending single data values to a page. This will allow us to gain a better understanding of how data will be transmitted to our web-applications. Follow the specifications below to get started:

Create a file called counter.php using the page controller template.
In your HTML, you will need two links. One that says up and another that says down.
Add a heading that shows a number representing the current counter value. This value will start at zero. When up is clicked, the counter value should increase; when down is clicked, it should decrease.
The up and down links will send GET requests back to the counter page itself.
Create a function that will access the $_GET superglobal variable. It should determine what the new counter value is and return it.
Use the extract() function to change the return value of the pageController() into variables for your HTML. -->

 <!DOCTYPE html>
 <html>
   <head>
     <meta charset="utf-8">
     <title>Counter Excercise</title>
   </head>
   <body>

      <h1> Current Counter Value: <?= $count <? </h1>
      <a href="?count =<?= $count + 1 ?>"> Up</a>
      //? browser knows we are talking about the same file, will appemd to host or file path
      //count made up key and this is the key we are trying to keep track of
      //= take the value of key count and assign to echo
      //<?= shorthand for echo in php
      // $count + 1 - php is evaluating the value we set
      //? end php
      <a href="?count =<?= $count - 1 ?>">Down</a>

   </body>
 </html>
