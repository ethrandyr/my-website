const bookList = document.getElementById('bookList');

function addBook() {
    const bookTitle = document.getElementById('bookTitle').value;
    const author = document.getElementById('author').value;

    if (bookTitle.trim() !== '' && author.trim() !== '') {
        const bookItem = document.createElement('li');
        bookItem.innerHTML = `<strong>${bookTitle}</strong> by ${author}`;
        bookList.appendChild(bookItem);

        document.getElementById('bookTitle').value = '';
        document.getElementById('author').value = '';
    }
}
