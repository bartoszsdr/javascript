const price = document.querySelector('#price')
const people = document.querySelector('#people')
const tip = document.querySelector('#tip')
const button = document.querySelector('.count')
const error = document.querySelector('.error')
const costInfo = document.querySelector('.cost-info')
const cost = document.querySelector('.cost')

const validateBill = () => {
	if (price.value == null || price.value == '' || people.value == null || people.value == '') {
		error.textContent = 'Uzupełnij wszystkie pola!'
		costInfo.style.display = 'none'
	} else {
		error.textContent = ''
		calculateBill()
	}
}

const calculateBill = () => {
	const newPrice = Number(price.value)
	const newPeople = Number(people.value)
	const newTip = Number(tip.value)
	costInfo.style.display = 'block'
	if (tip.value == 0) {
		cost.textContent = (newPrice / newPeople).toFixed(2)
	} else {
		cost.textContent = ((newPrice + newPrice * newTip) / newPeople).toFixed(2)
	}
}

button.addEventListener('click', validateBill)
