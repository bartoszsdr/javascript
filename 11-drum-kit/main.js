const playSound = e => {
	// select audio element with a corresponding key code to pressed key
	// every keyboard key has it's own key code (e.g "SPACE" has 32)
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
	// select div element with 'key' class with a corresponding key code
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
	// stop the function form running if there is no audio playing
	if (!audio) {
		return
	}
	// rewind audio to the start
	audio.currentTime = 0
	audio.play()
	key.classList.add('playing')
}

const removeTransition = e => {
	// skip if it's not a transform
	if (e.propertyName !== 'transform') {
		return
	}
	// remove 'playing' class from e.target (e.target is a div with 'key' class)
	e.target.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')

// for each key pressed - listen for transitionend event and start removeTransition function
// if you have a node list of elements - you can't listen to all those items - you must loop over every single element
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

window.addEventListener('keydown', playSound)
