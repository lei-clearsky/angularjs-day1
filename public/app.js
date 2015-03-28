var app = angular.module('FlashCards', []);

app.controller('FlashCardController', function($scope) {
	$scope.flashCard = {
    question: 'What is Angular?',
    answers: [
      { text: 'A front-end framework for great power!', correct: true },
      { text: 'Something lame, who cares, whatever.', correct: false },
      { text: 'Some kind of fish, right?', correct: false }
    ],
    answered: false,
    answeredCorrectly: false
	}

	$scope.answerQuestion = function(theAnswer) {
		$scope.flashCard.answered = true;
		$scope.flashCard.answeredCorrectly = theAnswer.correct
	}

})

app.controller('MainController', function($scope) {
	$scope.flashCards = [
    {
      number: 1,
      question: 'What is Angular?',
      answers: [
        { text: 'A front-end framework for great power!', correct: true },
        { text: 'Something lame, who cares, whatever.', correct: false },
        { text: 'Some kind of fish, right?', correct: false }
      ],
    	answered: false,
    	answeredCorrectly: false
    },
    {
      number: 2,
      question: 'What is a controller?',
      answers: [
        { text: 'Something that manages my front-end routes', correct: false },
        { text: 'A function that allows me to manage a scope', correct: true },
        { text: 'An Angular template', correct: false }
      ],
    	answered: false,
    	answeredCorrectly: false
    },
    {
      number: 3,
      question: 'What does {{ }} do?',
      answers: [
        { text: 'It runs some Javascript', correct: false },
        { text: 'It looks for variables in HTML', correct: false },
        { text: 'It runs an Angular expression that accesses my $scope', correct: true }
      ],
    	answered: false,
    	answeredCorrectly: false
    }
	];
	$scope.answerQuestion = function(theAnswer, flashCard) {
		console.log(theAnswer)
		// $scope.flashCards.forEach(card, index) {
		// 	if (card)
		// }
		flashCard.answered = true;
		flashCard.answeredCorrectly = theAnswer.correct
	}

})


















