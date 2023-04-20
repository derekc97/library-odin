let body = document.querySelector("body");
let bookContainer = document.querySelector(".container");
const addBookButton = document.querySelector(".add-book");
let formOpen = false;

let myLibrary = [];

openBookForm();

addBookButton.addEventListener("click", ()=> {
    openBookForm();

})

//populate array 
// function fluff() {
//     for (i = 0; i<30; i++) {
//         myLibrary.push(i);
//     }
// }

// fluff();



addBookToLibrary();

//constructor
function Book() {

}

function addBookToLibrary() {
    //add book to library
    myLibrary.forEach(book => {
        let card = document.createElement("div");
        card.textContent = book;
        card.classList.add("bookCard");
        bookContainer.appendChild(card);
        // bookContainer.appendChild(card);
    });
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
    }
}