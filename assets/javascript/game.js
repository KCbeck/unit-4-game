$( document ).ready(function(){
    var hooah=Math.floor(Math.random()*101+19)
    // Selects a random number to be shown at the start of the game
    // Number should be should be between 19 - 120
    //
    $('#random1').text(hooah);
    // Appending random number to the randomNumber id in the html doc
    //
    var caddilac1= Math.floor(Math.random()*11+1)
    var caddilac2= Math.floor(Math.random()*11+1)
    var caddilac3= Math.floor(Math.random()*11+1)
    var caddilac4= Math.floor(Math.random()*11+1)
    // Setting up random numbers for each jewel
    // Random number has to be between 1 - 12
    // 

    // dog = total
    // hooah = random
    var dog= 0; 
    var wins= 0;
    var losses = 0;
    dog=0;
    //  Decaring variables for tallies
// gameWins links to the gameWins on the html page
  $('#gameWins').text(wins);
//   gameLosses links to the gameLosses on the html page
  $('#gameLosses').text(losses);
  
  
  //resets the game

function reset(){
// the function is named reset
    hooah=Math.floor(Math.random()*101+19);
    // this declares the random number as hooah, which will link to #random1
    console.log(hooah)
    //this consoles out the hooah
    $('#random1').text(hooah);
    //this is where hooah is applied to the random1 tag on the html
    caddilac1= Math.floor(Math.random()*11+1);
    //this applies the random 1-12 for the first gem called -caddilac1
    caddilac2= Math.floor(Math.random()*11+1);
    //this applies the random 1-12 for the second gem called-caddilac2
    caddilac3= Math.floor(Math.random()*11+1);
    //this applies the random 1-12 for the third gem called caddilac 3
    caddilac4= Math.floor(Math.random()*11+1);
    //dog is the word for total 0;
    dog= 0;
    //the dog/total is added to the total scores on the html page.
    $('#totalScoreIs').text(dog);
    //closing bracket for the reset function
    } 

// the function is named chamption
    function champion(){
// when the function champion is triggered ("you won") is declared
  alert("You won!");

    wins++; 
    // the wins to the right is inputed into the #gamewins on the html
    $('#gameWins').text(wins);
    // when the champion function is done the reset is triggered
    reset();
  }
  
  //add the losses to the loser
    function loser(){
    //   inside the loser function it alerts ("you lost")
  alert ("You lost!");
//   losses are added to the other losses
    losses++;
    // the losses below are inputted into the $gameLosses on the HTML page
    $('#gameLosses').text(losses);
    // once the function is finished the reset is triggered
    reset()
  }
  
  //sets up click for jewels
  
    $('#bloodDiamond1').on ('click', function(){
// when blooddiamond1(html) is clicked the function with caddilac1 adds the value to dog
      dog = dog + caddilac1;
      console.log("New dog= " + dog);
//the sum of dogs is inputed into the #totalscoreIs on the HTML page.     
      $('#totalScoreIs').text(dog); 

    //   if else statement if the hooah is equal to dog it triggers champion function else it triggers loser function
          if (dog == hooah){
            champion();
          }
          else if ( dog > hooah){
            loser();
          }   
    })  
    $('#bloodDiamond2').on ('click', function(){
        // when blooddiamond2(html) is clicked the function with caddilac2 adds the value to dog
      dog = dog + caddilac2;
      console.log("New dog= " + dog);
      //the sum of dogs is inputed into the #totalscoreIs on the HTML page. 
      $('#totalScoreIs').text(dog); 
       //   if else statement if the hooah is equal to dog it triggers champion function else it triggers loser function
          if (dog == hooah){
            champion();
          }
          else if ( dog > hooah){
            loser();
          } 
    })  
    $('#bloodDiamond3').on ('click', function(){
        // when blooddiamond3(html) is clicked the function with caddilac3 adds the value to dog
      dog = dog + caddilac3;
      console.log("New dog= " + dog);
      //the sum of dogs is inputed into the #totalscoreIs on the HTML page. 
      $('#totalScoreIs').text(dog);
       //   if else statement if the hooah is equal to dog it triggers champion function else it triggers loser function
          if (dog == hooah){
          champion();
          }
          else if ( dog > hooah){
          loser();
          } 
    })  
    $('#bloodDiamond4').on ('click', function(){
        // when blooddiamond4(html) is clicked the function with caddilac4 adds the value to dog
      dog = dog + caddilac4;
      console.log("New dog= " + dog);
      //the sum of dogs is inputed into the #totalscoreIs on the HTML page. 
      $('#totalScoreIs').text(dog); 
       //   if else statement if the hooah is equal to dog it triggers champion function else it triggers loser function        
            if (dog == hooah){
            champion();
          }
          else if ( dog > hooah){
            loser();
          }
    });   
  });

