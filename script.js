const initialPage = document.querySelector('.initial-page');
const gamePage = document.querySelector('.game-page');
// function for play button
const playBtn = document.querySelector('#play');
playBtn.addEventListener('click', handlePlayBtn);
function handlePlayBtn() {
	initialPage.classList.add('hidden');
	gamePage.classList.remove('hidden');
}

// function for scoreboard display and update

// function for game messages to display

// function for answer buttons
const answerBtns = document.querySelectorAll('#btn-div');
answerBtns.forEach((btn) => {
	btn.addEventListener('click', handleAnswerBtn);
});
function handleAnswerBtn() {
	console.log('correct');
}

// function to end game
function gameOver() {
	// if 3 wrong guesses
	initialPage.classList.remove('hidden');
	gamePage.classList.add('hidden');
	// restart game button appears
}

const questions = [
	'What are you gonna do bruh?',
	'Do you like that?',
	'How do you like them apples?',
	'Do you want to get out of here?',
	'What is the capital of Thailand?',
];

// function to make questions appear

// function to randomize questions
function displayQuestions() {
	let randomQuestion = questions[Math.floor(Math.random() * questions.length)];
	return randomQuestion;
}
