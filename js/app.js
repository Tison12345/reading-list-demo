var books = loadBooks();

function render() {
  var list = document.getElementById("book-list");
  list.innerHTML = "";
  books.forEach(function (book) {
    var li = document.createElement("li");
    li.textContent = book.title + " by " + book.author;
    list.appendChild(li);
  });
}

document.getElementById("add-form").addEventListener("submit", function (event) {
  event.preventDefault();
  var title = document.getElementById("title").value;
  var author = document.getElementById("author").value;
  books.push(createBook(title, author));
  saveBooks(books);
  event.target.reset();
  render();
});

render();
