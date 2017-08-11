<?php
require_once "logins.php";
require_once "db_connect.php";

//drop table
$connection -> exec("drop table if exists parks");

//create table command
$createParksTable = 'create table if not exists parks (
id int unsigned not null auto_increment,
name varchar(255) not null,
location varchar(255) not null,
date_established date not null,
area_in_acres double not null,
primary key (id)
)';

$connection -> exec($createParksTable);
echo 'parks table successfully created' . PHP_EOL;