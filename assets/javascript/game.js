
var random_result;
var lost;
var win;

for(var i = 0; i < 4; i++){

    var crystal = $("<div>");
        crystal.attr("class", "crystal" );
    $(".crystals").append(crystal);
}

// Pseudo Coding
//This game will consist of 4 crystals
// Every Crystal will give off a randomized number
// A new Number should generate every time we win or lose
//to those 4 crystals
//when clicking any crystal it should be adding the previous result
//until it hits the total score.
// If it is not equal, then we start over
// If it is equal, then we 

