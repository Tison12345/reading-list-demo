var books = [];

function showBooks() {
  var list = document.getElementById("book-list");
  list.innerHTML = "";
  for (var i = 0; i < books.length; i++) {
    var li = document.createElement("li");
    li.textContent = books[i].title + " - " + books[i].author;
    list.appendChild(li);
  }
}

document.getElementById("book-form").addEventListener("submit", function (e) {
  e.preventDefault();
  var title = document.getElementById("title").value;
  var author = document.getElementById("author").value;
  books.push({ title: title, author: author, read: false });
  showBooks();
});
