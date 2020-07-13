const initialPage = document.querySelector('.initial-page');
const gamePage = document.querySelector('.game-page');

const currentScoreBox = document.querySelector('#current');
let currentScoreValue = 0;

// function for play button
const playBtn = document.querySelector('#play');
playBtn.addEventListener('click', handlePlayBtn);
function handlePlayBtn() {
	initialPage.classList.add('hidden');
	gamePage.classList.remove('hidden');
    displayQuestions();
    
}

// function for scoreboard display and update


// function to end game
function gameOver() {
	// if 3 wrong guesses
	initialPage.classList.remove('hidden');
	gamePage.classList.add('hidden');
	// restart game button appears
}

const questions = [
	{
		question: 'What are you gonna do bruh?',
		answer: {
			a: 'nothing',
			b: 'something',
			c: 'huh',
			d: 'win',
		},
		rightAnswer: 'd',
	},
	{
		question: 'Do you like that?',
		answer: {
			a: 'no',
			b: 'some',
			c: 'huh',
			d: 'why',
		},
		rightAnswer: 'a',
	},
	{
		question: 'How do you like them apples?',
		answer: {
			a: 'love em',
			b: 'what Matt Damon',
			c: 'I got her phone #',
			d: 'crying',
		},
		rightAnswer: 'c',
	},
	{
		question: 'Do you want to get out of here?',
		answer: {
			a: 'nope',
			b: 'why',
			c: 'huh',
			d: "let's go",
		},
		rightAnswer: 'd',
	},
	{
		question: 'What is the capital of Thailand?',
		answer: {
			a: 'Bangkok',
			b: 'Murica',
			c: 'Is that in Texas',
			d: 'Boston',
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
}

//function for answer buttons
const answerBtns = document.querySelectorAll('.answer-btn');

answerBtns.forEach((btn) => {
	btn.addEventListener('click', handleAnswerBtn);
});

function handleAnswerBtn(event) {
	let answerData = event.target.dataset.answer;
	console.log(answerData);
	if (answerData === questions[questionIndex].rightAnswer) {
        messages.innerText = 'Correct!';
        currentScoreValue++;
        currentScoreBox.innerText = currentScoreValue;
	} else {
		messages.innerText = 'Sorry Incorrect';
	}
}
