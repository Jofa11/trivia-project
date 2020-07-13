const initialPage = document.querySelector('.initial-page');
const gamePage = document.querySelector('.game-page');
// function for play button
const playBtn = document.querySelector('#play');
playBtn.addEventListener('click', handlePlayBtn);
function handlePlayBtn() {
	initialPage.classList.add('hidden');
	gamePage.classList.remove('hidden');
	displayQuestions();
}

// function for scoreboard display and update

// function for game messages to display



// function handleAnswerBtn() {
//     answerBtns.forEach((button) => {
//         if (button.answer.innerText === button.rightAnswer) {
//             console.log('Right on man!');
//         }
//     })
// }

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
    // for (let i = 0; i < questions.length; i++) {
    //     return 
    // }
    questionIndex ++;
    displayQuestions();
}

// function to make questions appear

// function to randomize questions
// function displayQuestions() {
// 	let randomQuestion = questions[Math.floor(Math.random() * questions.length)];
// 	return randomQuestion;
//}
//function for answer buttons
const answerBtns = document.querySelectorAll('.answer-btn');
//console.log(answerBtns);
answerBtns.forEach((btn) => {
	btn.addEventListener('click', handleAnswerBtn);
});



function handleAnswerBtn(event) {
    let answerData = event.target.dataset.answer;
    console.log(answerData);
    if (answerData === questions[questionIndex].rightAnswer) {
			console.log('Right on!');
		} else {
            console.log('Wrong dummy!');
        }
    iterateQuestionsAndAnswers();
}