<!-- In this exercise, you will be creating a simple login form. Perform the following steps:

Create a file named login.php in your codeup.dev site. Add a form that accepts a username and password and have the form submit to the same page (login.php).
Create a file named authorized.php in your codeup.dev site. Add some HTML that simply says "Authorized" when it is viewed in the browser.
Add some PHP code to the top of the login page that checks the POST'ed username and password. If the username is equal to "guest" and the password is equal to "password" then redirect to the authorized.php. If the username and password do not match those values, show a login failed message on the login page.
As you may have noticed, you can access the authorized.php page directly without being logged in. We will be fixing this in the upcoming lesson on Sessions. -->

<?php

// Page controller function
 function pageController(){
   $data = [];
   $data['name'] = isset($_POST['name']) ? $_POST['name'] : '';
   $data['password'] = isset($_POST['password']) ? $_POST['password'] : '';

   if (!empty($_POST)) {
    if ($username == "guest" && $password == "password") {
      header("Location:")
    }
   }return $data;
 }

 extract(pageController());
 ?>

 <!DOCTYPE html>
<html>
<head>
    <title>POST Example</title>
</head>
<body>
    <form method="POST">
        <label>Name</label>
        <input type="text" name="name"><br>
        <label>Number</label>
        <input type="text" name="password"><br>
        <input type="submit">
    </form>
</body>
</html>
