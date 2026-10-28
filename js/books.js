// Book data and storage. No DOM code here.
var STORAGE_KEY = "readingList.books";

function loadBooks() {
  var raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

function saveBooks(books) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
}

function createBook(title, author) {
  return { id: Date.now(), title: title, author: author };
}

if (typeof module !== "undefined") {
  module.exports = { createBook: createBook };
}
