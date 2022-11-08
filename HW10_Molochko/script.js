const DELETE_BTN_CLASS = 'delete-btn';
const EDIT_BTN_CLASS = 'edit-btn';
const INVALID_INPUT_CLASS = 'invalid-input';
const CONTACT_ITEM_SELECTOR = '.contact-item';

const contactsListEl = document.querySelector('#contactsList');
const contactForm = document.querySelector('#contactForm');
const idInput = document.querySelector('#id');
const nameInput = document.querySelector('#name');
const surnameInput = document.querySelector('#surname');
const phoneInput = document.querySelector('#phone');
const contactTemplate = document.querySelector('#contactTemplate').innerHTML;

let contactsList = [
    { id: 1, name: 'Alex', surname: 'Smith', phone: '21314315' },
    { id: 2, name: 'Bob', surname: 'Johns', phone: '2524523452345' },
    { id: 3, name: 'John', surname: 'Snow', phone: '58568686' },
];

contactForm.addEventListener('submit', onFormSubmit);
contactsListEl.addEventListener('click', onContactsListElClick);
nameInput.addEventListener('input', onFormElementInput);
surnameInput.addEventListener('input', onFormElementInput);
phoneInput.addEventListener('input', onFormElementInput);

init();

function init() {
    renderList(contactsList);
}

function onFormSubmit(e) {
    e.preventDefault();

    const contactData = getFormValues();

    saveContact(contactData);
    resetFormData();
}

function onContactsListElClick(e) {
    const contactId = getContactId(e.target);

    if (e.target.classList.contains(DELETE_BTN_CLASS)) {
        deleteContact(contactId);
    }
    if (e.target.classList.contains(EDIT_BTN_CLASS)) {
        editContact(contactId);
    }
}

function onFormElementInput(e) {
    validateInput(e.target);
}

function renderList(list) {
    contactsListEl.innerHTML = list.map(generateContactHtml).join('');
}

function generateContactHtml({ id, name, surname, phone }) {
    return contactTemplate
        .replaceAll('{{id}}', id)
        .replaceAll('{{name}}', name)
        .replaceAll('{{surname}}', surname)
        .replaceAll('{{phone}}', phone);
}

function getFormValues() {
    return {
        id: +idInput.value,
        name: nameInput.value,
        surname: surnameInput.value,
        phone: phoneInput.value,
    };
}

function fillFormValues({ id, name, surname, phone }) {
    idInput.value = id;
    nameInput.value = name;
    surnameInput.value = surname;
    phoneInput.value = phone;
}

function resetFormData() {
    idInput.value = '';
    nameInput.value = '';
    surnameInput.value = '';
    phoneInput.value = '';
}

function getContactId(el) {
    return +el.closest(CONTACT_ITEM_SELECTOR).dataset.contactId;
}

function saveContact(contact) {
    if (contact.id === 0) {
        addContact(contact);
    } else {
        updateContact(contact);
    }
}

function addContact(contact) {
    contact.id = Date.now();

    contactsList.push(contact);
    renderList(contactsList);
}

function updateContact(contact) {
    // const index = contactsList.findIndex((item) => item.id === contact.id);
    // contactsList.splice(index, 1, contact);

    contactsList = contactsList.map((item) =>
        item.id === contact.id ? contact : item
    );

    renderList(contactsList);
}

function deleteContact(id) {
    // const index = contactsList.findIndex((item) => item.id === id);
    // contactsList.splice(index, 1);

    contactsList = contactsList.filter((item) => item.id !== id);
    renderList(contactsList);
}

function editContact(id) {
    const contact = contactsList.find((item) => item.id === id);
    currentContactId = id;
    fillFormValues(contact);
}

function validateInput(input) {
    resetValidation(input);
    if (input.value === '') {
        input.classList.add(INVALID_INPUT_CLASS);
    }
}

function resetValidation(input) {
    input.classList.remove(INVALID_INPUT_CLASS);
}