const inputs = document.querySelectorAll('.controls input');

// arrow function won't work, it would refer to 'window'
function handleUpdate() {
	// create a variable that extracts suffix 'px' from inputs
	// OR '' is for changing color, where there is no suffix
	const suffix = this.dataset.sizing || '';
	// select CSS variables, change them and add a proper suffix
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// trigger function when you move input and let go of the mouse
// inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('change', handleUpdate));
// triger function whenever you move input without the need to let go of the mouse
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
