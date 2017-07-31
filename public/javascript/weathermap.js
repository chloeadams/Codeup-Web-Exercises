$(document).ready (function (){
	"use strict";
	// var long;
	// var lat;
	// var fTemp;
	// var cTemp;
	// var kTemp;
	// 	if (navigator.geolocation) {
	// 		navigator.geolocation.getCurrentPosition(function(position){
	// 			long = position.coords.longitude
	// 			lat = position.coords.latitude
	// 			$("#data").html("latitude: " + lat + "<br>longitude: " + lat);

	// 		});
	// 	}
	var api= "http://api.openweathermap.org/data/2.5/forecast/daily?lat=29.4241&lon=-98.4936&cnt=3&appid=b0d2e75b33a6b19db880abcafd9e52a4";
	$.get(api, function(data){
	//var weatherType = data.weather[0].description
	// 	var kTemp = data.main.temp;
	// 	var windSpeed = data.wind.speed;
	// 	var city = data.name;
	// 	//temp in kelvin
	// 	fTemp = (kelvin)*(9/5)-459.67;
	// 	// temp in celsius
	// 	kTemp = kTemp - 273;
	// console.log(data)
	// console.log(data.city.name)
	// console.log(city);
	// $("#city").html(city);
	// $("#weatherType").html(weatherType);
	// $("#fTemp").html(fTemp);
	
	});	
	

});