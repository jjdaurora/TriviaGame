//create object of all game answers

var triviaQuestions = [

	{
		question: "What am I doing?",
		answers: ["This is a question.", "This is a question-2.", "This is a question-3.", "This is a question-4."],
		correct: "This is a question-2." 
	},

	{
		question: "Why are you bad at coding?",
		answers: ["This is a question.", "This is a question-2.", "This is a question-3.", "This is a question-4."],
		correct: "This is a question-2."
	}]


// var questionThree {

// // 	question:
// // 	a:
// // 	b:
// // 	c:
// // 	d:
// // 	correct:
// // }

// // var questionFour {
	
// // 	question:
// // 	a:
// // 	b:
// // 	c:
// // 	d:
// // 	correct:
// // } 

// // var questionFive {

// // 	question:
// // 	a:
// // 	b:
// // 	c:
// // 	d:
// // 	correct:
// // }
var timer;
var counter = 2;
// on-click event to start game 


function start (){
	$("#start-button").on('click', function () {
	 timer = setInterval(function () { 
		$("#timer").html(counter);
		counter--;
		if (counter < 0) {
			clearInterval(timer);
		}},   1000) 
	$("#game-center").append(triviaQuestions[0].question);
	for (var i = 0; i < triviaQuestions[0].answers.length; i++) {
		$("#game-center").append("<input type='radio' name=question-" + i + " value='" + triviaQuestions[0].answers[i] + "'>" + triviaQuestions[0].answers[i] );	

			if (counter === 0) {
				$("#game-message").text("Loser.");
			}  

		}	
	})
}


$.each($("input[name='question-2']:checked"), function() {
	console.log(test);
	if ($(this).val() === triviaQuestions[0].correct){
		$("#game-message").text("Correct");
	}
		
});

 
start();


// post questions

 // var int = setInterval(function () {
 //        document.getElementById("displayDiv").innerHTML = "Number: " + i;
 //        i-- || clearInterval(int);  //if i is 0, then stop the interval
 //    }, 1000);

// answer questions


// function that posts a question and loops through questions as they are answered

//answer logic
