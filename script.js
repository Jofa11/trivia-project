const initialPage = document.querySelector('.initial-page');
const gamePage = document.querySelector('.game-page');
const endGameMessage = document.querySelector('.game-over');

const currentScoreBox = document.querySelector('#current');
let currentScoreValue = 0;
let wrongAnswers = 0;
let countdown = 45;

let setTimer;

const playAgainBtn = document.querySelector('.restart');
playAgainBtn.addEventListener('click', handlePlayAgainButton);

// function for play button
const playBtn = document.querySelector('#play');
playBtn.addEventListener('click', handlePlayBtn);
function handlePlayBtn() {
	initialPage.classList.add('hidden');
	gamePage.classList.remove('hidden');
	displayQuestions();
	setTimer = setInterval(timer, 1000);
}

const questions = [
	{
		question: 'What is the name of Han Solo’s ship?',
		answer: {
			a: 'Flagship',
			b: 'Patrol Cruiser',
			c: 'Empire Ship',
			d: 'Millennium Falcon',
		},
		rightAnswer: 'd',
	},
	{
		question:
			'Who are the masters of the Dark Side that want to rule the galaxy?',
		answer: {
			a: 'Scoundrels',
			b: 'Sith',
			c: 'Rebels',
			d: 'Jawas',
		},
		rightAnswer: 'b',
	},
	{
		question: 'Who was the original commander of the Death Star?',
		answer: {
			a: 'Darth Vader',
			b: 'Matt Damon',
			c: 'Grand Moff Tarkin',
			d: 'General Veers',
		},
		rightAnswer: 'c',
	},
	{
		question: 'Count Dooku is also known as who?',
		answer: {
			a: 'Supreme Leader',
			b: 'Dookie Man',
			c: 'Darth Tyrannosaurus',
			d: 'Darth Tyranus',
		},
		rightAnswer: 'd',
	},
	{
		question: 'What was the name of the planet that the clones were made on?',
		answer: {
			a: 'Kamino',
			b: 'Murica',
			c: 'Neptune',
			d: 'Coruscant',
		},
		rightAnswer: 'a',
	},
	{
		question:
			'When Leia, first tells Han Solo that she loves him, what is his reply?',
		answer: {
			a: 'Love ya too',
			b: 'Come again?',
			c: 'I know.',
			d: 'Ditto',
		},
		rightAnswer: 'c',
	},
	{
		question:
			'What race of aquatic sentient beings does Jar-Jar Binks belong to?',
		answer: {
			a: 'Wookies',
			b: 'Upnaughts',
			c: 'Geonosians',
			d: 'Gungans',
		},
		rightAnswer: 'd',
	},
	{
		question: 'Who built C-3P0?',
		answer: {
			a: 'Jabba the Hutt',
			b: 'Anakin Skywalker',
			c: 'Ewoks',
			d: 'Lando Calrissian',
		},
		rightAnswer: 'b',
	},
	{
		question: 'What planet does Rey live on in The Force Awakens?',
		answer: {
			a: 'Lothal',
			b: 'Murica',
			c: 'Kamino',
			d: 'Jakku',
		},
		rightAnswer: 'd',
	},
	{
		question: "What was Finn's Stormtrooper code name?",
		answer: {
			a: 'FN-2187',
			b: 'Phineas Flynn',
			c: 'BB-8',
			d: 'CT-5555',
		},
		rightAnswer: 'a',
	},
];
const questionParaTag = document.querySelector('.questions');
const answerIdBtnA = document.querySelector('#displayA');
const answerIdBtnB = document.querySelector('#displayB');
const answerIdBtnC = document.querySelector('#displayC');
const answerIdBtnD = document.querySelector('#displayD');

let questionIndex = 0;

function displayQuestions() {
	questionParaTag.innerText = questions[questionIndex].question;
	answerIdBtnA.innerText = questions[questionIndex].answer.a;
	answerIdBtnB.innerText = questions[questionIndex].answer.b;
	answerIdBtnC.innerText = questions[questionIndex].answer.c;
	answerIdBtnD.innerText = questions[questionIndex].answer.d;
}

function iterateQuestionsAndAnswers() {
	questionIndex++;
	displayQuestions();
}
const messages = document.querySelector('.message');

const nextBtn = document.querySelector('.next');
nextBtn.addEventListener('click', handleNextBtn);
function handleNextBtn() {
	messages.innerText = '';
	iterateQuestionsAndAnswers();
	answerBtns.forEach((btn) => {
		btn.disabled = false;
	});
}

//function for answer buttons
const answerBtns = document.querySelectorAll('.answer-btn');

answerBtns.forEach((btn) => {
	btn.addEventListener('click', handleAnswerBtn);
});

function handleAnswerBtn(event) {
	let answerData = event.target.dataset.answer;

	if (answerData === questions[questionIndex].rightAnswer) {
		messages.innerText = 'Correct!';
		currentScoreValue++;
		currentScoreBox.innerText = currentScoreValue;
	} else {
		messages.innerText = 'Sorry Incorrect';
		wrongAnswers++;
		gameOver();
	}
	answerBtns.forEach((btn) => {
		btn.disabled = true;
	});
}

// function to end game
function gameOver() {
	if (wrongAnswers >= 3) {
		gamePage.classList.add('hidden');
		endGameMessage.classList.remove('hidden');
		playAgainBtn.classList.remove('hidden');
		countdown = 0;
		clearInterval(setTimer)
	}
}

function handlePlayAgainButton() {
	endGameMessage.classList.add('hidden');
	initialPage.classList.remove('hidden');
	playAgainBtn.classList.add('hidden');
	currentScoreValue = 0;
	wrongAnswers = 0;
	questionIndex = 0;
	currentScoreBox.innerText = currentScoreValue;
	countdown = 45;
	timerDisplay.innerHTML = countdown;

}
const timerDisplay = document.querySelector('#timer');



function timer() {
	timerDisplay.innerHTML = countdown;
	if (countdown > 0) {
		countdown--;
	} else {
		gamePage.classList.add('hidden');
		endGameMessage.classList.remove('hidden');
		playAgainBtn.classList.remove('hidden');
		clearInterval(setTimer);
	}
}
