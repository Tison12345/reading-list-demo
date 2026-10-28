var books = JSON.parse(localStorage.getItem("books") || "[]");

function saveBooks() {
  localStorage.setItem("books", JSON.stringify(books));
}

function showStats() {
  var readCount = 0;
  for (var i = 0; i < books.length; i++) {
    if (books[i].read) readCount++;
  }
  document.getElementById("stats").textContent = "Total books: " + books.length + ", read: " + readCount;
}

function showBooks() {
  var list = document.getElementById("book-list");
  list.innerHTML = "";
  var search = document.getElementById("search").value.toLowerCase();
  var filter = document.getElementById("filter").value;

  for (var i = 0; i < books.length; i++) {
    if (books[i].title.toLowerCase().indexOf(search) === -1) continue;
    if (filter === "read" && !books[i].read) continue;
    if (filter === "unread" && books[i].read) continue;

    var li = document.createElement("li");
    li.textContent = books[i].title + " - " + books[i].author + " (rating: " + books[i].rating + ")";
    if (books[i].read) {
      li.style.color = "gray";
    }

    var button = document.createElement("button");
    button.textContent = books[i].read ? "Mark unread" : "Mark read";
    button.setAttribute("data-index", i);
    button.addEventListener("click", function () {
      var index = this.getAttribute("data-index");
      books[index].read = !books[index].read;
      showBooks();
    });

    li.appendChild(button);
    list.appendChild(li);
  }
  showStats();
}

document.getElementById("book-form").addEventListener("submit", function (e) {
  e.preventDefault();
  var title = document.getElementById("title").value;
  var author = document.getElementById("author").value;
  var rating = document.getElementById("rating").value;
  books.push({ title: title, author: author, rating: rating, read: false });
  saveBooks();
  showBooks();
});

document.getElementById("clear").addEventListener("click", function () {
  books = [];
  saveBooks();
  showBooks();
});

document.getElementById("search").addEventListener("input", showBooks);
document.getElementById("filter").addEventListener("change", showBooks);

showBooks();
