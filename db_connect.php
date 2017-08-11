<?php

// <!-- Get new instance of PDO object -->
$connection = new PDO('mysql:host=127.0.0.1;dbname='. DB_NAME, DB_USER, DB_PASS );

// <!-- Tell PDO to throw exceptions on error -->
$connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

echo $connection->getAttribute(PDO::ATTR_CONNECTION_STATUS) . "\n";