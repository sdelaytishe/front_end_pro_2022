const URL = 'https://jsonplaceholder.typicode.com/photos?_limit=25';
const template = $('#photoItemTemplate').html();
const $photosContainer = $('#photos');

init();

function init() {
    fetchPhotos().then(() => {
        $photosContainer.find('a').simpleLightbox({
            fileExt: '',
        });
    });
}

function fetchPhotos() {
    return fetch(URL)
        .then((res) => res.json())
        .then(renderPhotos);
}

function renderPhotos(list) {
    const html = list.map((item) => interpolate(template, item)).join('\n');

    $photosContainer.html(html);
}