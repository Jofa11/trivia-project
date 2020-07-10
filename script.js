// function for play button
const playBtn = document.querySelector('#play');
playBtn.addEventListener('click', handlePlayBtn);
function handlePlayBtn() {
	console.log('game time');
}

// function for scoreboard display and update

// function for game messages to display

// function to make questions to appear

// function for answer buttons
const answerBtns = document.querySelectorAll('#btn-div');
answerBtns.forEach((btn) => {
    btn.addEventListener('click', handleAnswerBtn);
});
function handleAnswerBtn() {
    console.log('correct');
}

    

// function function to end game
