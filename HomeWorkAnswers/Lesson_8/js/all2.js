const allBooks = {
      books: [
        { id: 1, title: "1984", author: "Джордж Орвелл", year: 1949, genre: "Антиутопія" },
        { id: 2, title: "Гаррі Поттер і філософський камінь", author: "Дж. К. Роулінг", year: 1997, genre: "Фентезі" },
        { id: 3, title: "Гра престолів", author: "Джордж Р. Р. Мартін", year: 1996, genre: "Фентезі" },
        { id: 4, title: "Старий і море", author: "Ернест Хемінгуей", year: 1952, genre: "Пригодницький роман" },
        { id: 5, title: "Майстер і Маргарита", author: "Михайло Булгаков", year: 1967, genre: "Фантастика" }
      ],
      lastId: 5,

      add(book) {
        this.lastId++;
        book.id = this.lastId;
        this.books.push(book);
      },

      remove(id) {
        const index = this.books.findIndex(b => b.id === id);
        if (index !== -1) this.books.splice(index, 1);
      },

      update(id, book) {
        const index = this.books.findIndex(b => b.id === id);
        if (index !== -1) {
          this.books[index] = book;
        }
      }
    };

    const bookList = {
      render(books, element) {
        element.innerHTML = "";
        books.forEach(book => {
          const section = document.createElement("section");
          section.className = "book";

          section.innerHTML = `
            <button class="update">Edit</button>
            <button class="remove">Delete</button>
            <h3>Title: ${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Year: ${book.year}</p>
            <p>Genre: ${book.genre}</p>
          `;

          const updateBtn = section.querySelector(".update");
          const removeBtn = section.querySelector(".remove");

          updateBtn.addEventListener("click", () => {
            titleInput.value = book.title;
            authorInput.value = book.author;
            yearInput.value = book.year;
            genreInput.value = book.genre;
            editModeBookId = book.id;
          });

          removeBtn.addEventListener("click", () => {
            allBooks.remove(book.id);
            render();
          });

          element.appendChild(section);
        });
      }
    };

    const contactForm = document.getElementById("contactForm");
    const titleInput = document.getElementById("titleInput");
    const authorInput = document.getElementById("authorInput");
    const yearInput = document.getElementById("yearInput");
    const genreInput = document.getElementById("genreInput");
    const bookContainer = document.getElementById("book-list");

    let editModeBookId = null;

    function render() {
      bookList.render(allBooks.books, bookContainer);
    }

    function handleFormSubmit(e) {
      e.preventDefault();

      const book = {
        title: titleInput.value.trim(),
        author: authorInput.value.trim(),
        year: Number(yearInput.value),
        genre: genreInput.value.trim()
      };

      if (!book.title || !book.author || isNaN(book.year) || !book.genre) {
        alert('Будь ласка, заповни всі поля. У полі "Year" мають бути тільки цифри.');
        return;
      }

      if (editModeBookId !== null) {
        book.id = editModeBookId;
        allBooks.update(editModeBookId, book);
        editModeBookId = null;
      } else {
        allBooks.add(book);
      }

      

      render();
      contactForm.reset();
    }

    contactForm.addEventListener("submit", handleFormSubmit);

    render();

    const form = document.forms[0];
        
        form.title.addEventListener("change", function () {
          const enteredTitle = form.titleInput.value.trim().toLowerCase();
          const found = allBooks.books.find(book =>
            book.title.trim().toLowerCase() === enteredTitle
           ); 
          
          if (found){
            alert("Така книга вже є в базі");
           }
        });

        form.year.addEventListener("change", function () {
          const enteredYear = form.yearInput.value;
          
          if (enteredYear<1450){
            alert("Введіть рік більший за 1450");
           }
        });
    