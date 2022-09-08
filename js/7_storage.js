document.getElementById('btn-add-name').onclick = () => {
    const nameField = document.getElementById('name-field');
    const nameValue = nameField.value;

    localStorage.setItem('name', nameValue);
};

document.getElementById('btn-add-age').onclick = () => {
    const ageField = document.getElementById('age-field');
    const ageValue = ageField.value;

    localStorage.setItem('age', ageValue);
};

document.getElementById('btn-remove-name').onclick = () => {
    localStorage.removeItem('name');
};

document.getElementById('btn-remove-age').onclick = () => {
    localStorage.removeItem('age');
};

document.getElementById('btn-clear-LS').onclick = () => {
    localStorage.clear();
};