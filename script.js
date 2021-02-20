const new_book_button = document.querySelector(".new-book-button");
const popup = document.querySelector("#popup");
const span = document.querySelector(".close");

new_book_button.addEventListener("click", addBookToLibrary);

new_book_button.onclick = () => {
  popup.style.display = "block";
};

span.onclick = () => {
  popup.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
};

let myLibrary = [];
let newBook;

//BOOK CLASS
class Book {
  constructor(title, author, pages, read) {
    this.title = form.title.value;
    this.author = form.author.value;
    this.title = form.pages.value + "page(s)";
    this.read = form.read.checked;
  }
}

//Creating a new book using Book class and adding the created book to library

function addBookToLibrary(event) {
  event.preventDefault();
  popup.style.display = "none";
  newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  render();
  form.reset();
}

/* [-----------------CREATING DOM ELEMENTS for library container-----------------] */
function createBook(item) {
  const library = document.querySelector("#library-container");
  const bookDiv = document.createElement("div");
  const titleDiv = document.createElement("div");
  const authorDiv = document.createElement("div");
  const pageDiv = document.createElement("div");
  const removeBtn = document.createElement("button");
  const readBtn = document.createElement("button");

  bookDiv.classList.add("book");
  bookDiv.setAttribute("id", myLibrary.indexOf(item));

  titleDiv.textContent = item.title;
  titleDiv.classList.add("title");
  bookDiv.appendChild(titleDiv);

  authorDiv.textContent = item.author;
  authorDiv.classList.add("author");
  bookDiv.appendChild(authorDiv);

  pageDiv.textContent = item.pages;
  pageDiv.classList.add("pages");
  bookDiv.appendChild(pageDiv);

  readBtn.classList.add("readBtn");
  bookDiv.appendChild(readBtn);
  if (item.read === false) {
    readBtn.textContent = "Not Read &#10005;";
    readBtn.style.background = "#e04f63";
  } else {
    readBtn.textContent = "Read &#10003;";
    readBtn.style.background = "#63da63";
  }

  removeBtn.textContent = "Remove";
  removeBtn.setAttribute("id", removeBtn);
  bookDiv.appendChild(removeBtn);

  library.appendChild(bookDiv);

  removeBtn.addEventListener("click", () => {
    myLibrary.splice(myLibrary.indexOf(item), 1);
    render();
  });

  //add toggle ability to each book 'read' button on click
  readBtn.addEventListener("click", () => {
    item.read = !item.read;
    render();
  });
}

/* [-----------------CREATING THE DATA IN BROWSER-----------------] */
function render() {
  const display = document.querySelector("#library-container");
  const books = document.querySelectorAll(".book");
  books.forEach((book) => display.removeChild(book));

  for (let i = 0; i < myLibrary.length; i++) {
    createBook(myLibrary[i]);
  }
}
