// create object of all game questions and answers

var triviaQuestions = [

	{
		question: "What am I even doing?",
		answers: ["This is an answer-1.", "This is an answer-2.", "This is an answer-3", "This is answer-4."],
		correct: 0 
	},

	{
		question: "Why are you bad at coding?",
		answers: ["This is an answer-1.", "This is an answer-2.", "This is an answer-3", "This is answer-4."],
		correct: 1
	},

	{
		question: "Why are you good at coding?",
		answers: ["This is an answer-1.", "This is an answer-2.", "This is an answer-3", "This is answer-4."],
		correct: 2
	},

	{
		question: "Why do you even code?",
		answers: ["This is an answer-1.", "This is an answer-2.", "This is an answer-3", "This is answer-4."],
		correct: 0
	}]


// var game = {

// 	correct: 0,
// 	incorrect: 0,
// 	timer: 0,
// 	counter: 2,

// }

var timer;
var counter = 10;

// on-click event to start game 

function start (){
	$("#game-button").one('click', function () {
	$(this).hide();
	$("#timer").html(counter);
	 timer = setInterval(function () { 
	 	// ISSUE: counter is actually taking 2 seconds on the first increment down
	 	$("#timer").html(counter);
		counter--;

	
	 	if (counter <+ 0) {
				$("#timer").html("Time's up!");
			} 

		if (counter < 0) {
			clearInterval(timer);
		}},   1000)	
	});
};

function displayGame () { 

    $("#game-button").on('click', function () {
	$("#game-center").append(triviaQuestions[0].question);
	var answersArray = triviaQuestions[0].answers;
	var buttonsArray = [];

	for (var i = 0; i < triviaQuestions[0].answers.length; i++) {
		var button = $("<button>");
		button.text(answersArray[i]);
		button.attr("data-id", i);
		$("#game-message").append(button);
		}
	
		 $('#game-message').on('click', 'button', function(e){
		 userPick = $(this).data("id");
		 triviaQuestions[0].correct;

			if(userPick != triviaQuestions[0].correct) {
			$('#game-message').text("Wrong Answer!");
			clearInterval(counter);
			$("#timer").hide();
			var roundButton = $("<button>");
			roundButton.text('Play next round?')
			$("#game-message").append(roundButton);
			
			}

			else if (userPick === triviaQuestions[0].correct) {
			$('#game-message').text("Correct!");
			clearInterval(counter);
			$("#timer").hide();
			var roundButton = $("<button>");
			roundButton.text('Play next round?')
			$("#game-message").append(roundButton);
			
			}	
		});
    });	 
};



//run functions
start();
displayGame();

