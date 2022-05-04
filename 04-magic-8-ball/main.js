const ball = document.querySelector('img')
const question = document.querySelector('input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')

const answers = [
	'Without a doubt.',
	'Yes definitely.',
	'Most likely.',
	'Yes.',
	'Signs point to yes.',
	'Better not tell you now.',
	'My reply is no.',
	'Concentrate and ask again.',
	'My sources say no.',
	'Very doubtful.',
]

const shakeBall = () => {
	ball.classList.add('shake-animation')
	setTimeout(checkQuestion, 1000)
}

const checkQuestion = () => {
	if (question.value !== '' && question.value.slice(-1) === '?') {
		generateAnswer()
		error.textContent = ''
	} else if (question.value !== '' && question.value.slice(-1) !== '?') {
		error.textContent = 'Question must end with a question mark...'
		answer.textContent = ''
	} else {
		error.textContent = 'You need to ask a question!'
		answer.textContent = ''
	}
	ball.classList.remove('shake-animation')
}

const generateAnswer = () => {
	const random = Math.floor(Math.random() * answers.length)
	answer.innerHTML = `<span>Answer is:</span> ${answers[random]}`
}

ball.addEventListener('click', shakeBall)
