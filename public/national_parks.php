<?php

// Use PDO for all queries, nothing should be done directly in MySQL or Sequel Pro. Between each step commit your changes to Git. At the end the exercise, push all your commits to GitHub.

// Inside ~/vagrant-lamp/sites/codeup.dev/public create a page called national_parks.php that lists the national parks from your database. On each page load, it should retrieve all records from the database and display them.

// On this page you should require your db_connect.php file, which should be located outside the public directory.

require_once __DIR__ . "/../db_connect.php";

//  require_once __DIR__ . '/../db_connect.php';
// Modify your query to load only four parks at a time. Use a parameter in $_GET to determine which page the user is on and load only the appropriate parks for that page.

// Modify your page to add links to go to the next or previous page(s).

// Add some logic to determine whether or not to show the next and/or previous page links.

// Some hints:

// You will need to determine the total number of parks in the database.
// It may be useful to write out a table like the following on a piece of paper:
// Page	5
// Limit 10
// Offset	...	...	...	...
// Based on these values you will come up with a formula for your query parameters and your logic for displaying the links.

SELECT id, name, location, date_established, area_in_acres
FROM parks
LIMIT 10 Offset 10;



<html>
<head>
	<title>National Parks</title>
	<link href="https://fonts.googleapis.com/css?family=Patrick+Hand+SC" rel="stylesheet">
	<style> 
	.button {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    float: left;
	font-family: 'Patrick Hand SC', cursive;}
h1 {
	font-family: 'Patrick Hand SC', cursive;;

}
	</style>
</head>
<body>
<h1>NATIONAL PARKS</h1>
<input type="button" class="button" value="Previous">
<input type="button" class="button" value="Next">

</body>
</html>