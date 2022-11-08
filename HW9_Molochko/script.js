const TODO_ITEM_CLASS = 'todo-item';
const DONE_ITEM_CLASS = 'done';
const DELETE_BTN_CLASS = 'delete-btn';
const INVALID_CLASS = 'invalid-input';
const todoTemplate = document.querySelector('#todoTemplate').innerHTML;
const listEl = document.querySelector('#list');
const newTodoTitleInput = document.querySelector('#newTodoTitle');
const saveTodoBtn = document.querySelector('#saveTodoBtn');
const newTodoForm = document.querySelector('#newTodoForm');

// saveTodoBtn.addEventListener('click', onSaveTodoBtnClick);
newTodoForm.addEventListener('submit', onFormSubmit);
newTodoTitleInput.addEventListener('input', onNewTodoTitleChange);
listEl.addEventListener('click', onListClick);

addTodo({ title: 'Todo 1' });
addTodo({ title: 'Todo 2' });
addTodo({ title: 'Todo 3' });
addTodo({ title: 'Todo 4' });

function onListClick(event) {
    if (event.target.classList.contains(TODO_ITEM_CLASS)) {
        toggleTodo(event.target);
    }
    if (event.target.classList.contains(DELETE_BTN_CLASS)) {
        removeTodo(event.target.parentElement);
    }
}

function onFormSubmit(event) {
    event.preventDefault();
    console.log(event);

    if (!validateForm()) {
        return;
    }
    const newTodo = getFormData();
    addTodo(newTodo);
    resetFormData();
}

function onNewTodoTitleChange(event) {
    validateForm();
}

function validateForm() {
    resetFormValidation();
    if (newTodoTitleInput.value === '') {
        newTodoTitleInput.classList.add(INVALID_CLASS);
        saveTodoBtn.disabled = true;
        return false;
    }

    return true;
}

function resetFormValidation() {
    newTodoTitleInput.classList.remove(INVALID_CLASS);
    saveTodoBtn.disabled = false;
}

function getFormData() {
    return {
        title: newTodoTitleInput.value,
    };
}

function addTodo(todo) {
    // const todoEl = generateTodoElement(todo);

    // listEl.append(todoEl);

    const todoHtml = generateTodoHtml(todo);
    listEl.insertAdjacentHTML('beforeend', todoHtml);

    // console.log(todoHtml);
}

function generateTodoHtml({ title }) {
    return todoTemplate.replaceAll('{{title}}', title);
}

// function generateTodoElement(todo) {
//     const div = document.createElement('div');
//     const deleteBtn = document.createElement('span');

//     div.textContent = todo.title;
//     div.classList.add('u-full-width', 'todo-item');

//     deleteBtn.textContent = 'X';
//     deleteBtn.classList.add('delete-btn');

//     div.append(deleteBtn);

//     div.addEventListener('click', () => {
//         div.classList.toggle('done');
//     });

//     return div;
// }

function resetFormData() {
    newTodoTitleInput.value = '';
}

function clearList() {
    listEl.innerHTML = '';
}

function toggleTodo(todoEl) {
    todoEl.classList.toggle(DONE_ITEM_CLASS);
}

function removeTodo(todoEl) {
    todoEl.remove();
}