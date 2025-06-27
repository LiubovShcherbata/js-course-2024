const bookList = {
    render(books, element) {
        element.innerHTML="";

        books.forEach(book => {
            const section = document.createElement("section");
            section.classList.add("book");
            section.insertAdjacentHTML("beforeend", `<button class="update">Edit</button>`);
            section.insertAdjacentHTML("beforeend", `<button class="remove">Delete</button>`);
            section.insertAdjacentHTML("beforeend", `<h2>Title: ${book.title}</h2>`);
            section.insertAdjacentHTML("beforeend", `<p>Author: ${book.author}</p>`);
            section.insertAdjacentHTML("beforeend", `<p>Year: ${book.year}</p>`);
            section.insertAdjacentHTML("beforeend", `<p>Genre: ${book.genre}</p>`);
            

            const updateBtn = section.querySelector(".update");
            const removeBtn = section.querySelector(".remove");

            // object.addEventListener("click", myScript);
            // document.getElementById("demo").addEventListener("click", myFunction);


            updateBtn.addEventListener("click", () => {
                 const foundBook = allBooks.find(book.id);

                titleInput.value = foundBook.title;
                authorInput.value = foundBook.author;
                yearInput.value = foundBook.year;
                genreInput.value = foundBook.genre;

                // Потім замінити дію submit на оновлення
                contactForm.onsubmit = function (e) {
                    e.preventDefault();
                    const updatedBook = {
                        id: book.id,
                        title: titleInput.value,
                        author: authorInput.value,
                        year: yearInput.value,
                        genre: genreInput.value,
                    };
                    allBooks.update(book.id, updatedBook);
                    render();

                    // Після оновлення повертаємо submit у режим "додавання"
                    contactForm.reset();
                    contactForm.onsubmit = defaultSubmitHandler;
                    
                };
            });
            removeBtn.addEventListener("click", () => {
                allBooks.remove(book.id);
                render();
            });

            element.appendChild(section);
            
        });
    }
};

