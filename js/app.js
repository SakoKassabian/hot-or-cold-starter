
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
  	//variables
  	//why do i have to put 1 instead of 0?
  	var guessCount = 1;
  	
  	$('#guessButton').click(function(e){
  		e.preventDefault();
  		var guesses = $('#userGuess').val();

  		if(guesses >= 1 && guesses <= 100){
  			$('#count').text(guessCount++);
  			$('#guessList').append(guesses + ", ");
  			
  		}else{
  			//enter text that they need to put an accepted
  			alert("Please enter a valid number (1-100)");
  			
  		}
  	});

  	/*$('form').submit(function(e){
  		e.preventDefault();
  		//ensure numeric input is between 1-100

  		
  		
  	});*/
		
  	//user needs feedback on guess
  	//feedback appears in #feedback
  	
  	
  	
  	

});

function newGame(){
	//start a new game
  	//secret 1-100 number generated
  	var secretNum = Math.floor((Math.random() * 100) + 1);
  	//connect new game link to function
}