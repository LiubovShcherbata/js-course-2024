let html = document.querySelector("#book-list");
// bookList.render(allBooks.books, html);

//inputs
/*const titleInput = document.querySelector("#titleInput");
const authorInput = document.querySelector("#authorInput");
const yearInput = document.querySelector("#yearInput");
const genreInput = document.querySelector("#genreInput");

const contactForm = document.querySelector("#contactForm");*/

const contactForm = document.getElementById("contactForm");
const titleInput = document.getElementById("titleInput");
const authorInput = document.getElementById("authorInput");
const yearInput = document.getElementById("yearInput");
const genreInput = document.getElementById("genreInput");
const bookContainer = document.getElementById("book-list");


function render() {
    // html.innerHTML = ""; // Очистити контейнер
    bookList.render(allBooks.books, html);
}

function defaultSubmitHandler(e) {
    e.preventDefault();
    let book = {
        title: titleInput.value,
        author: authorInput.value,
        year: yearInput.value,
        genre: genreInput.value,
    };
    allBooks.add(book);
    render();
    contactForm.reset();
};


contactForm.addEventListener("submit", defaultSubmitHandler);



// contactForm.addEventListener("submit", function (e) {
//     e.preventDefault(); // Щоб форма не перезавантажувала сторінку
//     let book = {
//         title: titleInput.value,
//         author: authorInput.value,
//         year: yearInput.value,
//         genre: genreInput.value,
//     }
//     allBooks.add(book);
//     html.innerHTML = ""; // Щоб не дублювалися книги
//     render();
// });

render();


