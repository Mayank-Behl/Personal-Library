/* function Book(title, author, number_of_pages, status){
    this.title = title;
    this.author = author;
    this.number_of_pages = number_of_pages;
    this.status = status;
    this.info = ()=> {
        console.log(`${title} , ${author}, ${number_of_pages}, ${status}`);
    };
}

let theHobbit = new Book('theHobbit', 'Ghanta farak na padta', 300, 'read');
theHobbit.info(); */

let myLibrary = [];

function Book(){

}

function addBookToLibrary(){
    
}

const new_book_button = document.querySelector('.new-book-button');
const  popup = document.querySelector('#popup');
const span = document.querySelector('.close');

new_book_button.onclick = ()=>{
    popup.style.display = 'inline';
}

span.onclick = () =>{
    popup.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == popup) {
      popup.style.display = "none";
    }
  }
