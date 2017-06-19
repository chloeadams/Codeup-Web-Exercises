
    "use strict";

    // TODO: Create an array holding the names of the eight planets in our solar system in order, starting closest to the sun.
    var planets = [
    "The Sun", 
    "Mercury", 
    "Venus", 
    "The Earth", 
    "Mars", 
    "Jupiter",
    "Saturn",
    "Uranus", 
    "Neptune"
    ];

    // function for logging the planets array

function logPlanets() {
        console.log("Here is the list of planets:");
        console.log(planets);
        console.log("---- ---- ---- ----");

    logPlanets();
    
    //Adding "The Sun" to the beginning of the planets array- UNSHIFT
    console.log('Adding "The Sun" to the beginning of the planets array.');
            planets.UNSHIFT('Sun');
                logPlanets();

    // Adding "Pluto" to the end of the planets array -PUSH
    console.log('Adding "Pluto" to the end of the planets array.');
        planets.PUSH('Pluto');
            logPlanets();
            
    // TODO: Removing "The Sun" from the beginning of the planets array. -SHIFT
    console.log('Removing "The Sun" from the beginning of the planets array.');
        planets.UNSHIFT('Sun');
            logPlanets();
            
    // Removing "Pluto" from the end of the planets array.'); -POP
    console.log('Removing "Pluto" from the end of the planets array.');
        planets.POP(Pluto)
            logPlanets();
                
    //Finding and logging the index of "Earth" in the planets array.
    console.log('Finding and logging the index of "Earth" in the planets array.');
    var indexOfEarth = planets.indexOf('Earth');
        
    // Using splice to remove the planet after "Earth".
    console.log('Using splice to remove the planet after "Earth".');
        var planetAfterEarth = planets.splice(indexOfEarth = 1, 1)
    logPlanets();

    //Using splice to add back the planet after "Earth"
    console.log('Using splice to add back the planet after "Earth".');
        planets.splice(indexOfEarth + 1, 0, planetAfterEarth) 
    logPlanets();

    //Reversing the order of the planets array.
    console.log("Reversing the order of the planets array.");
        planets.reverse();
    logPlanets();

    //Sorting the planets array.
    console.log("Sorting the planets array.");
        planets.sort();
    logPlanets();

}

