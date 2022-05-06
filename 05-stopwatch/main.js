const startBtn = document.querySelector('.start')
const pauseBtn = document.querySelector('.pause')
const stopBtn = document.querySelector('.stop')
const resetBtn = document.querySelector('.reset')
const historyBtn = document.querySelector('.history')
const stopwatch = document.querySelector('.stopwatch')
const time = document.querySelector('.time')
const timeList = document.querySelector('.time-list')
const modalBtn = document.querySelector('.info-btn')
const modalShadow = document.querySelector('.modal-shadow')
const closeModalBtn = document.querySelector('.close')
const colorsBtn = document.querySelector('.colors-btn')
const colors = document.querySelector('.colors')

// ***
// a 'modal' is a dialog that appears on top of the main content
// and moves the system into a special mode requiring user interaction
// ***

// global variables used for time counting and creating times array
let countTime
let seconds = 0
let minutes = 0
let timesArr = []

// global variables used for swiching colors
const colorOne = document.querySelector('.one')
const colorTwo = document.querySelector('.two')
const colorThree = document.querySelector('.three')
let root = document.documentElement

// start the stopwatch (seconds and minutes adding logic)
// setInterval refreshes every 1000ms (1s)
const start = () => {
	clearInterval(countTime) // clearInterval prevents from speeding the stopwatch when smashing play button
	countTime = setInterval(() => {
		if (seconds < 9) {
			seconds++
			stopwatch.textContent = `${minutes}:0${seconds}`
		} else if (seconds >= 9 && seconds < 59) {
			seconds++
			stopwatch.textContent = `${minutes}:${seconds}`
		} else if (minutes == 60) {
			stopwatch.textContent = '60:00'
		} else if (seconds >= 59) {
			seconds = 0
			minutes++
			stopwatch.textContent = `${minutes}:00`
		}
	}, 1000)
}

// pause using clearInterval
const pause = () => {
	clearInterval(countTime)
}

// stop the stopwatch and add last measured time into times array
const stop = () => {
	time.textContent = `Last time was: ${stopwatch.textContent}`
	if (stopwatch.textContent !== '0:00') {
		time.style.visibility = 'visible'
		timesArr.push(stopwatch.textContent)
	}
	clear()
}

// reset times array, clear whole stopwatch and hide 'Last time was:'
const reset = () => {
	time.style.visibility = 'hidden'
	timesArr = []
	clear()
}

// clear whole stopwatch (without clearing times array)
const clear = () => {
	clearInterval(countTime)
	stopwatch.textContent = '0:00'
	timeList.textContent = ''
	seconds = 0
	minutes = 0
}

// show times history, add every measeured time to li with an appropriate time count number (e.g. Time 1 was: 0:01)
const history = () => {
	timeList.textContent = ''
	let timeCount = 1
	timesArr.forEach(time => {
		const newTime = document.createElement('li')
		newTime.innerHTML = `Time ${timeCount}: <span>${time}</span>`
		timeList.appendChild(newTime)
		timeCount++
	})
}

// show modal window - button closing modal window is also using this function
const modal = () => {
	if (!(modalShadow.style.display === 'block')) {
		modalShadow.style.display = 'block'
	} else {
		modalShadow.style.display = 'none'
	}
	modalShadow.classList.toggle('modal-animation')
}

// close modal window by clicking anywhere on the screen but inside modal window
const closeModal = e => (e.target === modalShadow ? modal() : false)

// show and hide colors menu
const showColors = () => {
	colors.classList.toggle('show-colors')
}

startBtn.addEventListener('click', start)
pauseBtn.addEventListener('click', pause)
stopBtn.addEventListener('click', stop)
resetBtn.addEventListener('click', reset)
historyBtn.addEventListener('click', history)
modalBtn.addEventListener('click', modal)
closeModalBtn.addEventListener('click', modal)
window.addEventListener('click', closeModal)
colorsBtn.addEventListener('click', showColors)

// change stopwatch colors on click
colorOne.addEventListener('click', () => {
	root.style.setProperty('--first-color', 'rgb(250, 20, 6)')
	colors.classList.remove('show-colors')
})
colorTwo.addEventListener('click', () => {
	root.style.setProperty('--first-color', 'rgb(75, 206, 0)')
	colors.classList.remove('show-colors')
})
colorThree.addEventListener('click', () => {
	root.style.setProperty('--first-color', 'rgb(0, 45, 248)')
	colors.classList.remove('show-colors')
})
