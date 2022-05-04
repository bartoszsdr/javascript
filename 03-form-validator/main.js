const username = document.querySelector('#username')
const password = document.querySelector('#password1')
const passwordRepeated = document.querySelector('#password2')
const email = document.querySelector('#email')
const sendBtn = document.querySelector('.send')
const clearBtn = document.querySelector('.clear')
const popup = document.querySelector('.popup')

const showError = (input, msg) => {
	// argument 'input' stores inputs
	// argument 'msg' stores placeholder
	const formBox = input.parentElement
	const errorMsg = formBox.querySelector('.error-text')
	formBox.classList.add('error')
	errorMsg.textContent = msg
}

const clearError = input => {
	const formBox = input.parentElement
	formBox.classList.remove('error')
}

const checkForm = input => {
	input.forEach(el => {
		if (el.value === '') {
			showError(el, el.placeholder)
		} else {
			clearError(el)
		}
	})
}
// argument 'input' from 'checkForm' function stores an array with inputs
// argument 'el' refers to every variable that is in the array

const checkLength = (input, min) => {
	if (input.value.length < min) {
		showError(input, `${input.previousElementSibling.innerText.slice(0, -1)} must contain at least ${min} characters.`)
	}
}

const checkPassword = (pass1, pass2) => {
	if (pass1.value !== pass2.value) {
		showError(pass2, 'Passwords do not match.')
	}
}

const checkEmail = email => {
	const regEx =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	if (regEx.test(email.value)) {
		clearError(email)
	} else {
		showError(email, 'It is not a valid email address.')
	}
	// inside 'if' there is a variable that stores regular expression
	// inside 'test' there is what needs to be compared to the regular expression formula
}

const checkErrors = () => {
	const allInputs = document.querySelectorAll('.form-box')
	let errorCount = 0
	allInputs.forEach(el => {
		if (el.classList.contains('error')) {
			errorCount++
		}
	})
	if (errorCount == 0) {
		popup.classList.add('show-popup')
	}
}

sendBtn.addEventListener('click', e => {
	e.preventDefault()
	checkForm([username, password, passwordRepeated, email])
	checkLength(username, 3)
	checkLength(password, 8)
	checkPassword(password, passwordRepeated)
	checkEmail(email)
	checkErrors()
})

clearBtn.addEventListener('click', e => {
	e.preventDefault()
	;[username, password, passwordRepeated, email].forEach(el => {
		el.value = ''
		clearError(el)
	})
})
