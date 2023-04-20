let body = document.querySelector("body");
let bookContainer = document.querySelector(".container");

let myLibrary = [];

function fluff() {
    for (i = 0; i<30; i++) {
        myLibrary.push(i);
    }
}

fluff();

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