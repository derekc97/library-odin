let body = document.querySelector("body");
let bookContainer = document.querySelector(".container");
const addBookButton = document.querySelector(".add-book");
let formOpen = false;

let myLibrary = [];

// openBookForm();
// let bookTest = new Book("Test Title", "Test Author", "69", true);
// myLibrary.push(bookTest);
// addBookToLibrary(bookTest);

addBookButton.addEventListener("click", ()=> {
    openBookForm();
    addBookButton.style = "display:none"
})



//populate array 
// function fluff() {
//     for (i = 0; i<30; i++) {
//         myLibrary.push(i);
//     }
// }

// fluff();



// addBookToLibrary();

//constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(newBook) {
    //add book to library
    let newBookCard = document.createElement("div");
    newBookCard.classList.add("bookCard");
    let newBookTitleDiv = document.createElement("div");
    newBookTitleDiv.textContent = newBook.title;
    newBookTitleDiv.classList.add("book-title-div");
    let newBookAuthorDiv = document.createElement("div");
    newBookAuthorDiv.textContent = newBook.author;
    newBookAuthorDiv.classList.add("book-author-div");
    let newBookPagesDiv = document.createElement("div");
    newBookPagesDiv.textContent = newBook.pages;
    newBookPagesDiv.classList.add("book-pages-div");
    let newBookReadDiv = document.createElement("div");
    // newBookReadDiv.textContent = newBook.read;
    let readChangeDiv = document.createElement("div");
    let readChangeButton = document.createElement("button");
    readChangeButton.classList.add("change-button");
    
    if (newBook.read == true) {
        newBookReadDiv.textContent = "Read"
        readChangeButton.textContent = "Not Completed";
    } else if (newBook.read == false) {
        newBookReadDiv.textContent = "Not Read"
        readChangeButton.textContent = "Completed";
    }

    readChangeButton.addEventListener("click", ()=> {
        if (readChangeButton.textContent == "Not Completed") {
            readChangeButton.textContent = "Completed";
        } else if (readChangeButton.textContent == "Completed") {
            readChangeButton.textContent = "Not Completed";
        };
    });

    let removeBookButtonDiv = document.createElement("div");
    let removeBookButton = document.createElement("button");
    removeBookButtonDiv.appendChild(removeBookButton);
    removeBookButton.textContent = "x";
    removeBookButton.classList.add("remove-button");
    removeBookButton.addEventListener("click", ()=> {
        newBookCard.remove();
    })

    readChangeDiv.appendChild(readChangeButton);
    newBookCard.appendChild(newBookTitleDiv);
    newBookCard.appendChild(newBookAuthorDiv);
    newBookCard.appendChild(newBookPagesDiv);
    newBookCard.appendChild(newBookReadDiv);
    newBookCard.appendChild(readChangeDiv);
    newBookCard.appendChild(removeBookButtonDiv);
    bookContainer.appendChild(newBookCard);
}

//open form on button click
function openBookForm() {
    if (formOpen == true) {
        return;
    } else if (formOpen == false) {
        formOpen = true;
        let formContainer = document.createElement("div");
        formContainer.classList.add("form-container");
        let addBookForm = document.createElement("form");

        //book title form
        let bookNameFormDiv = document.createElement("div");
        let bookNameForm = document.createElement("input");
        let bookNameFormLabel = document.createElement("label");
        bookNameFormLabel.for ="book-title-form";
        bookNameFormLabel.textContent = "Book Title: ";
        bookNameForm.type = "text";
        bookNameForm.id = "book-title-form";
        bookNameForm.required = true;
        bookNameFormDiv.appendChild(bookNameFormLabel);
        bookNameFormDiv.appendChild(bookNameForm);

        //book author form
        let bookAuthorFormDiv = document.createElement("div");
        let bookAuthorForm = document.createElement("input");
        let bookAuthorFormLabel = document.createElement("label");
        bookAuthorFormLabel.for = "book-author-form";
        bookAuthorFormLabel.textContent = "Author: ";
        bookAuthorForm.type = "text";
        bookAuthorForm.id = "book-author-form";
        bookAuthorForm.required = true;
        bookAuthorFormDiv.appendChild(bookAuthorFormLabel);
        bookAuthorFormDiv.appendChild(bookAuthorForm);

        //book pages form
        let bookPagesFormDiv = document.createElement("div");
        let bookPagesForm = document.createElement("input");
        let bookPagesFormLabel = document.createElement("label");
        bookPagesFormLabel.for = "book-pages-form";
        bookPagesFormLabel.textContent = "# of Pages: ";
        bookPagesForm.type = "number";
        bookPagesForm.id = "book-pages-form";
        bookPagesFormDiv.appendChild(bookPagesFormLabel);
        bookPagesFormDiv.appendChild(bookPagesForm);

        //read check
        let bookReadFormDiv = document.createElement("div");
        let bookReadFieldset = document.createElement("fieldset");
        let bookReadLegend = document.createElement("legend");
        bookReadLegend.textContent = "Have you read the book?: ";
        bookReadFieldset.appendChild(bookReadLegend);

        let bookYesDiv = document.createElement("div");
        let bookYesInput = document.createElement("input");
        bookYesInput.type = "radio";
        bookYesInput.id = "yes";
        bookYesInput.name = "readCheck";
        bookYesInput.value = "yes";
        let bookYesLabel = document.createElement("label");
        bookYesLabel.for = "yes";
        bookYesLabel.textContent = "Read";
        bookYesDiv.appendChild(bookYesInput);
        bookYesDiv.appendChild(bookYesLabel);

        let bookNoDiv = document.createElement("div");
        let bookNoInput = document.createElement("input");
        bookNoInput.type="radio";
        bookNoInput.id = "no";
        bookNoInput.name = "readCheck";
        bookNoInput.value = "no";
        let bookNoLabel = document.createElement("label");
        bookNoLabel.for = "no";
        bookNoLabel.textContent = "Not Read";
        bookNoDiv.appendChild(bookNoInput);
        bookNoDiv.appendChild(bookNoLabel);

        bookReadFieldset.appendChild(bookYesDiv);
        bookReadFieldset.appendChild(bookNoDiv);
        bookReadFormDiv.appendChild(bookReadFieldset);

        //submit button
        let formSubmitButtonDiv = document.createElement("div");
        let formSubmitButton = document.createElement("button");
        formSubmitButtonDiv.appendChild(formSubmitButton);
        formSubmitButton.type = "submit";
        formSubmitButton.textContent = "Add to Library";

        //book form add
        formContainer.appendChild(addBookForm);
        addBookForm.classList.add("book-form");
        addBookForm.appendChild(bookNameFormDiv);
        addBookForm.appendChild(bookAuthorFormDiv);
        addBookForm.appendChild(bookPagesFormDiv);
        addBookForm.appendChild(bookReadFormDiv);
        addBookForm.appendChild(formSubmitButtonDiv);
        body.appendChild(formContainer);

        formSubmitButton.addEventListener("click", function(event) {
            event.preventDefault();
            formOpen = false;
            // console.log(bookNameForm.value);
            // console.log(bookAuthorForm.value);
            // console.log(bookPagesForm.value);
            // if (bookYesInput.checked) {
            //     console.log("true");
            // } else if (bookNoInput.checked) {
            //     console.log("false");
            // }
            let bookTitle = bookNameForm.value;
            let bookAuthor = bookAuthorForm.value;
            let bookPages = bookPagesForm.value;
            let read;
            if (bookYesInput.checked) {
                read = true;
            } else if (bookNoInput.checked) {
                read = false;
            }

            let newBook = new Book(bookTitle, bookAuthor, bookPages, read);
            // console.log(newBook);
            addBookToLibrary(newBook);
            addBookForm.reset();
            // bookNameForm.value = "";
            // bookAuthorForm.value = "";
            // bookPagesForm.value = "";
            formContainer.style = "display: none";
            addBookButton.style = "display: block";
        })
    }
}

// function addToLibrary