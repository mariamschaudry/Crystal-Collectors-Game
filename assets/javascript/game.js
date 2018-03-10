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

// Variables //

var targetNumber;

var losses = 0; 

var wins = 0; 

var images = ["assets/images/pink.jpg", "assets/images/teal.png", "assets/images/gold.jpg","assets/images/purple.png"];

previousNumber = 0; 

// Making the random Number display area.  //

var resetAndStartGame = function () {

    $(".crystals").empty(); 

    targetNumber = Math.floor(Math.random() * 100) + 19; 

    $("#targetNumber").html('Target Number: ' + targetNumber);

    // Dynamically creating the crystals. //

        //for (var i = 0; i < images.length; i++) { 

        for (var i = 0; i < 4; i++) {
            var crystalNumber = Math.floor(Math.random() * 12) + 1; 
            
            var crystal = $("<img>");
                crystal.attr({
                    "class":'crystalImage',
                    "data-crystalValue": crystalNumber,
                    "src": images[i]
                });

            $(".crystals").append(crystal);

        }

        $("previousNumber").html(previousNumber);
    }

    resetAndStartGame();
    // When we click the crystal, it will generate a hidden value. //
    
    $(document).on('click', ".crystalImage", function () {

    var num = parseInt($(this).attr('data-crystalValue')); // <--- 'this' refers to any of the crystals I click on.
    
    previousNumber += num; 

    console.log(previousNumber);
    

    $("#previousNumber").html(previousNumber);


    if(previousNumber > targetNumber) {
        
        losses++;
        
        alert("You lose!");
         
        $("#losses").html(losses);

        previousNumber = 0;

        resetAndStartGame();
        
    } 
    else if (previousNumber === targetNumber) {
        
        alert("Congratulations! You win!");
        
        wins++;

        $("#wins").html(wins);

        previousNumber = 0;

        resetAndStartGame();  

    }

}); 
