const URL = 'ws://localhost:3000/';
const chatForm = document.querySelector('#chatFrom');
const logEl = document.querySelector('#log');
let socket = null;
chatForm.addEventListener('submit', onChatFromSubmit);

init();

function init() {
    socket = new WebSocket(URL);

    socket.onmessage = onMessage;
    // socket.onopen = () => socket.send('hello');
}

function onChatFromSubmit(e) {
    e.preventDefault();

    send(chatForm.elements.author.value, chatForm.elements.message.value);
}

function onMessage({ data }) {
    const { type, payload } = JSON.parse(data);

    switch (type) {
        case 'message':
            return addMessage(payload);
    }
}

function send(author, message) {
    socket.send(
        JSON.stringify({
            type: 'message',
            payload: {
                author,
                message,
            },
        })
    );
}

function addMessage({ author, message }) {
    logEl.insertAdjacentHTML(
        'beforeend',
        `<li><strong>${author}:</strong> ${message}</li>`
    );
}