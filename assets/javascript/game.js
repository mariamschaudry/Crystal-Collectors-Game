// Psuedo Code - Crystal Collectors //
// Game will have 4 crystals
// Each crystal will have a random number between 1 and 12
// There will be an random number at the top of the page (value between 19-120)
// The crystal number values will add up in order to reach the random number goal at the top of the page 
// (When any crystal is clicked, it's value will add up with the previous crystal value)
// If the crystal values clicked are equal to the random number goal, add 1 point 
// If the crystal values clicked are below or avoe the random number goal, subtract 1 point
// Every time a game is won or lost, a new random number will be displayed (after page refresh)

// ===================================================================================================== //

//$( document ).ready(function() {

// Variables //

var targetNumber;

var losses; 

var wins; 

// Making the random Number display area //

targetNumber = Math.floor(Math.random() * 120) + 19; 
console.log(targetNumber);

$("#targetNumber").html('Target Number: ');

// Dynamically creating the crystals. //

for (var i = 0; i < 4; i++) { 

    var crystalNumber = Math.floor(Math.random() * 12) + 1; 
    
    //console.log(crystalNumber);

    var crystal = $("<div>");
        crystal.attr("class", 'crystalImage');

    $(".crystals").append(crystal);

}