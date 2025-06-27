let html=document.querySelector("#book-list");
bookList.render(allBooks.books, html);

//inputs
const titleInput=document.querySelector("#titleInput");
const authorInput=document.querySelector("#authorInput");
const yearInput=document.querySelector("#yearInput");
const genreInput=document.querySelector("#genreInput");

function render(){
    bookList.render(allBooks.books, html);
}

contactForm.addEventListener("submit", function(e){
    e.preventDefault(); // Щоб форма не перезавантажувала сторінку
    let book={
        title: titleInput.value,
        author: authorInput.value,
        year: yearInput.value,
        genre: genreInput.value,
    }
    allBooks.add(book);
    html.innerHTML = ""; // Щоб не дублювалися книги
    render();
});

render();