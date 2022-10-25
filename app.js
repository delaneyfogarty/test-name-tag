// lets grab our dom elements
const nameDisplay = document.getElementById('name');
console.log('nameDisplay', nameDisplay);

nameDisplay.textContent = 'Beau';
nameDisplay.classList.add('green');

const updateButton = document.getElementById('update-btn');
updateButton.addEventListener('click', () => {
    console.log('text');
    const nameInput = document.getElementById('name-input');
    nameDisplay.textContent = nameInput.value;
});
