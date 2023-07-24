// scripts.js
const bookList = document.getElementById('bookList');

function saveBookData(bookTitle, author) {
  const existingData = JSON.parse(localStorage.getItem('bookData')) || [];
  const newData = {
    bookTitle: bookTitle,
    author: author,
  };
  existingData.push(newData);
  localStorage.setItem('bookData', JSON.stringify(existingData));
}

function displayBookData() {
  const savedData = JSON.parse(localStorage.getItem('bookData')) || [];
  bookList.innerHTML = '';
  savedData.forEach((data) => {
    const bookItem = document.createElement('li');
    bookItem.innerHTML = `<strong>${data.bookTitle}</strong> by ${data.author}`;
    bookList.appendChild(bookItem);
  });
}

function addBook() {
  const bookTitle = document.getElementById('bookTitle').value;
  const author = document.getElementById('author').value;

  if (bookTitle.trim() !== '' && author.trim() !== '') {
    saveBookData(bookTitle, author);
    displayBookData();

    document.getElementById('bookTitle').value = '';
    document.getElementById('author').value = '';
  }
}

window.onload = displayBookData;
