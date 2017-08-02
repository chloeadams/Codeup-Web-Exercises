<!-- In this next exercise, we will be looking at GET requests from another perspective. To solidify your understanding of GET requests in PHP, we have designed an exercise that will help you see how to use GET to send data between multiple pages. To accomplish this goal, follow the specifications below:

Create two files, ping.php and pong.php, using the page controller template.
Each page should have 2 links, called HIT and MISS.
If you click HIT, a counter increases and the game continues. If you click MISS, that player missed and the game is over.
The links on the ping.php page should go to pong.php and vice versa.
Each link's query string should include whether it was a "hit" or a "miss" and the current count of hits.
Each page should have a pageController() function that will contain all of our PHP logic.
This function will need to access the $_GET superglobal variable and check the values stored to it.
It will also need to increment the counter when the "hit" link was clicked, and reset the counter in the event of a "miss".
Use extract() function to change the return value of the pageController() into variables for your HTML.
Feel free to add images or make it more interesting by using rand() to decide if a play is a hit or miss. You could also use CSS and JavaScript to randomly move the HIT and MISS links, or change them to make the game more challenging. Be creative and have fun! -->

<?php
function pageController() {
 	$data = [];

 	$data['loseMessage'] = (isset($_GET['lose'])) ? " loses" : "";

 	//if a value exists, get that value and assign to variable, else assign default value
 	$data['count'] = (isset($_GET['count'])) ? $_GET['count'] : 0;

 	return $data;
 }

 extract(pageController());

 ?>
 <!DOCTYPE html>
 <html lang="en-us">
 <head>
 	<meta charset="utf-8">
     <meta http-equiv="x-ua-compatible" content="ie=edge">

     <meta name="viewport" content="width=device-width, initial-scale=1">

 	<meta name="description" content="">
 	<meta name="Keywords" content="">
     <meta name="author" content="">
 	<title>Ping</title>
  <!-- Latest compiled and minified CSS -->
 <link
 rel="stylesheet"
 href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
 integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4VaPmSTsz/K68vbdEjh4u"
 crossorigin="anonymous">
 
 <!-- Custom CSS -->
 <style></style>
 </head>
 <body>
 	<main class="container">
 		<h1>Ping <?= $loseMessage ?>!</h1>
 		<h1>Counter: <?= $count ?></h1>
 		<a class="btn btn-primary" href="pong.php?count=<?= $count 1 ?>">Hit</a>
 		<a class="btn btn-primary" href="ping.php?count=0&lose=true">Miss</a>


 	</main>
 	<!-- minified jQuery -->
 	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>

 	<!-- Latest compiled and minified JavaScript -->
 	<script
 	src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
 	integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
 	crossorigin="anonymous"></script>

 	<!-- Your custom JS goes here -->
 	<script type="text/javascript"></script>
 </body>
 </html>
