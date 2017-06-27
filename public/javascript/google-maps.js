(function( ){ 
	"use strict";
	// Set our map options
        var mapOptions = {
            // Set the zoom level
            zoom: 15,

            // This sets the center of the map at our location
            center: {
                lat:  31.8457,
                lng: -102.3676
            }
        };

        // Render the map
        var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
 		var geocoder = new google.maps.Geocoder();
 		// Set our address to geocode
		var address = "7900 TX-191 Frontage, Odessa, TX 79765";

		// Init geocoder object
		var geocoder = new google.maps.Geocoder();

		// Geocode our address
		geocoder.geocode({ "address": address }, function(results, status) {

		   // Check for a successful result
		   if (status == google.maps.GeocoderStatus.OK) {

		       // Recenter the map over the address
		       map.setCenter(results[0].geometry.location);
		   } else {

		       // Show an error message with the status if our request fails
		       alert("Geocoding was not successful - STATUS: " + status);
		   }
		});
		// Create lat and long for our marker position
		var rosas = { lat: 31.8457, lng: -102.3676 };

		// Add the marker to our existing map
		var marker = new google.maps.Marker({
		    position: rosas,
		    map: map
		});
		// Create a new infoWindow object with content
		var infowindow = new google.maps.InfoWindow({
		    content: "The world's best sweet tea."
		});

		// Open the window using our map and marker
		infowindow.open(map, marker);


})();