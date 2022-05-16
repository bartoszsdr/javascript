const addBtn = document.querySelector('.add');
const saveBtn = document.querySelector('.save');
const cancelBtn = document.querySelector('.cancel');
// use getElementByClass name beacause of 'live collections'
// JS wouldn't see any more delete buttons (which is when new notes will be added)
// if querySelector would have been used
// Read more on https://www.freakyjolly.com/how-to-get-selected-value-in-dropdown-list-using-jquery-javascript/
const deleteBtns = document.getElementsByClassName('delete-note');
const deleteAllBtn = document.querySelector('.delete-all');
const noteArea = document.querySelector('.note-area');
const notePanel = document.querySelector('.note-panel');
const category = document.querySelector('#category');
const textarea = document.querySelector('#text');
const error = document.querySelector('.error');
let selectedValue;
let cardID = 0;

// open new note panel
const openPanel = () => {
	notePanel.style.display = 'flex';
};

// close new note panel, hide error info, clear textarea, reset category index
const closePanel = () => {
	notePanel.style.display = 'none';
	error.style.visibility = 'hidden';
	textarea.value = '';
	category.selectedIndex = 0;
};

const addNote = () => {
	if (textarea.value !== '' && category.options[category.selectedIndex].value !== '0') {
		createNote();
		error.style.visibility = 'hidden';
	} else {
		error.style.visibility = 'visible';
	}
};

const createNote = () => {
	const newNote = document.createElement('div');
	newNote.classList.add('note');
	newNote.setAttribute('id', cardID);
	newNote.innerHTML = `
    <div class="note-header">
        <h3 class="note-title">${selectedValue}</h3>
        <button class="delete-note" onclick="deleteNote(${cardID})">
            <i class="fas fa-times spin"></i>
        </button>
    </div>
    <div class="note-body">
        ${textarea.value}
    </div>`;
	noteArea.appendChild(newNote);
	cardID++;
	textarea.value = '';
	category.selectedIndex = 0;
	notePanel.style.display = 'none';
	checkColor(newNote);
};

const selectValue = () => {
	selectedValue = category.options[category.selectedIndex].text;
};

const checkColor = note => {
	switch (selectedValue) {
		case 'Home':
			note.style.backgroundColor = 'rgb(72, 255, 0)';
			break;
		case 'Work':
			note.style.backgroundColor = 'rgb(255, 243, 0)';
			break;
		case 'Other':
			note.style.backgroundColor = 'rgb(0, 170, 255)';
			break;
	}
};

const deleteNote = id => {
	const noteToDelete = document.getElementById(id);
	noteArea.removeChild(noteToDelete);
};

const deleteAllNotes = () => {
	noteArea.textContent = '';
};

addBtn.addEventListener('click', openPanel);
saveBtn.addEventListener('click', addNote);
cancelBtn.addEventListener('click', closePanel);
deleteAllBtn.addEventListener('click', deleteAllNotes);
