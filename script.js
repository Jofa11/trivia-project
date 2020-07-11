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

// function to make questions appear

// function for answer buttons
const answerBtns = document.querySelectorAll('#btn-div');
answerBtns.forEach((btn) => {
	btn.addEventListener('click', handleAnswerBtn);
});
function handleAnswerBtn() {
	console.log('correct');
}

// function to end game
