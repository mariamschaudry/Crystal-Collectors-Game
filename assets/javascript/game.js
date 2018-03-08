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

var losses = 0; 

var wins = 0; 

var images = ["assets/images/pinkdiamond.jpg", "assets/images/turquoisecrystal.png", "assets/images/goldcrystal2.jpg","purplecrystal.png"];

previousNumber = 0; 

// Making the random Number display area.  //

targetNumber = Math.floor(Math.random() * 120) + 19; 

$("#targetNumber").html('Target Number: ' + targetNumber);

// Dynamically creating the crystals. //


    for (var i = 0; i < images.length; i++) { 
        console.log(images);

    var crystalNumber = Math.floor(Math.random() * 12) + 1; 
    

    var crystal = $("<img>");
        crystal.attr({
            "class":'crystalImage', // <-- Setting 
            "data-crystalValue": crystalNumber
            "src"
        });

    $(".crystals").append(crystal);

}
    // When we click the crystal, it will generate a hidden value. //
    
    $(".crystalImage").on('click', function () { 

    var num = parseInt($(this).attr('data-crystalValue')); // <--- 'this' refers to any of the crystals I click on.
    //console.log(num)

    previousNumber += num; 

    console.log(previousNumber);

    if(previousNumber > targetNumber) {
        alert("You lose!");
        losses--;
    } 
    else if (previousNumber === targetNumber) {
        alert("Congratulations! You win!");
        wins++;
    }

}); 
